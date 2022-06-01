import { alert } from "../../components/alert/alert.js"
// import { getUserLocalstorage } from '../singup/singup.js'


const $password = document.querySelector('.password')
const $username = document.querySelector('.username')
const $singin = document.querySelector('.singin').addEventListener('click', login)

const $componentAlert = document.querySelector('.componentAlert')

const $imgShowPassword = document.querySelector('.imgShowPassword')
const $imgHidePassword = document.querySelector('.imgHidePassword')
// const $alert = document.querySelector('.alert')

const getUserLocalstorage = JSON.parse(localStorage.getItem('db-Users')) ?? []

function login() {
    
    const userIsValid = getUserLocalstorage.some((username) => username.name == `${$username.value}`)
    const passwordIsValid = getUserLocalstorage.some((username) => username.password == `${$password.value}`)

    if ($password.value == '' || $username.value == '') {

        $componentAlert.innerHTML = alert('preencha todos os campos', '#dc4c4c', '#cc3333')
        setTimeout(() => {
            $componentAlert.style.display = 'none'
        }, 4000)
        $componentAlert.style.display = 'flex'

    } else {
        if (userIsValid == false || passwordIsValid == false) {

            $componentAlert.innerHTML = alert('usuário ou senha ivalido', '#dc4c4c', '#cc3333')
            setTimeout(() => {
                $componentAlert.style.display = 'none'
            }, 4000)
            $componentAlert.style.display = 'flex'

        }else {
            window.location.href = "http://127.0.0.1:5501/src/pages/layout/index.html";
        }
    }
}

function showAndHIdePassword  () {
    if ($password.type == "password") {
        $password.type = "text"
        $imgHidePassword.style.display = 'flex'
        $imgShowPassword.style.display = 'none'
    } else {
        $imgHidePassword.style.display = 'none'
        $imgShowPassword.style.display = 'flex'
        $password.type = "password"
    }
}

$imgShowPassword.addEventListener('click', showAndHIdePassword)
$imgHidePassword.addEventListener('click', showAndHIdePassword)

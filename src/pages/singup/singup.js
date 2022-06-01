import { alert } from '../../components/alert/alert.js'
import User from '../../models/User.js'

const $imgShowPassword = document.querySelector('.imgShowPassword')
const $imgHidePassword = document.querySelector('.imgHidePassword')

const $componentAlert = document.querySelector('.componentAlert')
const $email = document.querySelector('.email')
const $username = document.querySelector('.username')
const $password = document.querySelector('.password')
const $singup = document.querySelector('.singup')

const getUserLocalstorage = JSON.parse(localStorage.getItem('db-Users')) ?? []
const arrayUsers = getUserLocalstorage


function showAndHIdePassword() {
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

function  userExist(username)  {
    
    const nameExist = getUserLocalstorage.some((user) => user.name == `${username}`)

    const emailExist = getUserLocalstorage.some((user) => user.email == `${$email.value}`)

    if (nameExist || emailExist) {

        $componentAlert.innerHTML = alert('email ou nome de usuário existente', '#dc4c4c', '#cc3333')
        setTimeout(() => {
            $componentAlert.style.display = 'none'
        }, 4000)
        $componentAlert.style.display = 'flex'

    } else {
        if ($email.value == '' || $username.value == '' || $password.value == '') {

            $componentAlert.innerHTML = alert('preencha todos os campos', '#dc4c4c', '#cc3333')
            setTimeout(() => {
                $componentAlert.style.display = 'none'
            }, 4000)
            $componentAlert.style.display = 'flex'

        } else {
            addDataUserInLocalstorage(getUserData())
            goToDashboard()

            $email.value = ''
            $username.value = ''
            $password.value = ''
        }
    }
}

function addDataUserInLocalstorage(newUser){
    arrayUsers.push(newUser)
    localStorage.setItem('db-Users', JSON.stringify(arrayUsers))
}

function getUserData() {
    const id = Object.keys(arrayUsers).length + 1
    const email = String($email.value)
    const username = String($username.value)
    const password = String($password.value)

    const creatUser = new User(id, email, username, password, 'ativo')
    return creatUser
}

$singup.addEventListener('click', () => {userExist($username.value)} )
$singup.addEventListener('click', showAndHIdePassword)

window.addEventListener('keyup', () => {
    const keyPressedEnter = event.key == 'Enter'
    if (keyPressedEnter) {
        console.log('entrou')
        userExist()
    }
})

function goToDashboard() {
    window.location.href = "http://127.0.0.1:5501/src/pages/layout/index.html";

}


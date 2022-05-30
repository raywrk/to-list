import { alert } from "../../components/alert/alert.js"


const $password = document.querySelector('.password')
const $username = document.querySelector('.username')
const $login = document.querySelector('.login').addEventListener('click', login)

const $componentAlert = document.querySelector('.componentAlert')

const $imgShowPassword = document.querySelector('.imgShowPassword')
const $imgHidePassword = document.querySelector('.imgHidePassword')


 

function login() {
    
    if($password.value == '' || $username.value == '') {
        $componentAlert.innerHTML = alert
        setTimeout(() => {
            $componentAlert.style.display='none'
        }, 4000)
        $componentAlert.style.display='flex'

    }



}

$imgShowPassword.addEventListener('click', showAndHIdePassword)
$imgHidePassword.addEventListener('click', showAndHIdePassword)



function showAndHIdePassword() {
    if ($password.type == "password"){
        $password.type="text"
        $imgHidePassword.style.display= 'flex'
        $imgShowPassword.style.display= 'none'
        // console.log(type)
    }else {
        $imgHidePassword.style.display= 'none'
        $imgShowPassword.style.display= 'flex'
        $password.type="password"

    }
}


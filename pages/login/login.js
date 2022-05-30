const $password = document.querySelector('.password')
const $imgShowPassword = document.querySelector('.imgShowPassword')
const $imgHidePassword = document.querySelector('.imgHidePassword')

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


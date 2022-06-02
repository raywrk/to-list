import { icons } from "../../data/icons.js"
import { alert } from "../../components/alert/alert.js"
import { painelComponent } from "../painel/painel.js"
import { singinComponent } from "../singin/singin.js"
import { singupComponent } from "../singup/singup.js"
import { Categoria } from "../../models/category.js"
import { User } from "../../models/user.js"
import { padTo2Digits, formatDate } from "../../data/date.js"

const $container = document.querySelector('.container')
$container.innerHTML = singinComponent()

const $signUpButton = document.querySelector('.li-1')
const $signUpButton2 = document.querySelector('.singupBtn')
const $signInButton = document.querySelector('.li-2')
const $dashboardButton = document.querySelector('.li-3')
const $painelButton = document.querySelector('.li-4')
const $perfilButton = document.querySelector('.li-5')

$signUpButton.addEventListener('click', nav1)
$signInButton.addEventListener('click', nav2)
$dashboardButton.addEventListener('click', nav3)
$painelButton.addEventListener('click', nav4)

// Raiz do login

const $password = document.querySelector('.password')
const $username = document.querySelector('.username')
const $singin = document.querySelector('.singin').addEventListener('click', login)
const $componentAlert = document.querySelector('.componentAlert')
const $imgShowPassword = document.querySelector('.imgShowPassword')
const $imgHidePassword = document.querySelector('.imgHidePassword')
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
            $container.innerHTML = painelComponent()
            nav4()
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

// Fim raiz do login

function nav1(){
  $signUpButton.style.display = 'none'
  $signInButton.style.display = 'flex'
  $container.innerHTML = singupComponent()

  const $imgShowPassword = document.querySelector('.imgShowPassword')
  const $imgHidePassword = document.querySelector('.imgHidePassword')

  const $componentAlert = document.querySelector('.componentAlert')
  const $email = document.querySelector('.email')
  const $username = document.querySelector('.username')
  const $password = document.querySelector('.password')
  const $singup = document.querySelector('.singup')

  $singup.addEventListener('click', teste)

  function teste (){
    console.log('teste')
  }

  $singup.addEventListener('click', () => {userExist($username.value)} )

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

          $componentAlert.innerHTML = alert('email ou nome de usuÃ¡rio existente', '#dc4c4c', '#cc3333')
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


  window.addEventListener('keyup', () => {
      const keyPressedEnter = event.key == 'Enter'
      if (keyPressedEnter) {
          console.log('entrou')
          userExist()
      }
  })

}
function nav2(){
  $signUpButton.style.display = 'flex'
  $signInButton.style.display = 'none'
  $container.innerHTML = singinComponent()

}
function nav3(){
  alert('em breve')
}
function nav4(){
  const $btnCategoriasAdd = document.querySelector('.categorias-add img')
  const $modal = document.getElementById('myModal');
  const $span = document.getElementsByClassName('close')[0];
  const $renderIcon = document.querySelector('.modal-body-img')
  const $selectIcon = document.querySelector('.iconSelect')
  const $selectColorIcon = document.querySelector('.iconColorSelect')
  const $valueBox = document.querySelector('.categorias-cards-span')

  // Inputs do Modal
  const $categoriaTitle = document.querySelector('.categoriaTitle')
  const $categoriaDescricao = document.querySelector('.categoriaDescricao')
  const $addCategory = document.querySelector('.salvar')
  const $renderCategoryItens = document.querySelector('.categorias-cards-container')
  const CategoryArray = JSON.parse(localStorage.getItem('ListCategorys')) ?? []

  
  RenderCategory()
  
  if($selectIcon || $selectColorIcon || $addCategory || $valueBox ){
    $selectIcon.addEventListener('change', iconChange)
    $selectColorIcon.addEventListener('change', iconChange)
    $addCategory.addEventListener('click', addCategory)
    $valueBox.addEventListener('click', openList)
  }



  function iconChange(){
    let iconName = ''
    let iconSelected
    iconName = $selectIcon.value + '-' + $selectColorIcon.value
    iconSelected = icons.find((icon) => icon.name == iconName)
    $renderIcon.innerHTML = `<img class="iconSrc" src="${iconSelected.src}">`
  }

  $btnCategoriasAdd.onclick = function(){
    $modal.style.display = 'block'
  }

  $span.onclick = function(){
    $modal.style.display = 'none'
  }
  
  window.onclick = function(event) {
    if (event.target == $modal) {
      $modal.style.display = "none";
    }
  }
  function addCategory(){
    const id = Object.keys(CategoryArray).length + 1
    const title = $categoriaTitle.value
    let iconName = ''
    let iconSelected
    iconName = $selectIcon.value + '-' + $selectColorIcon.value
    iconSelected = icons.find((icon) => icon.name == iconName)
    const icon = iconSelected.src
    const description = $categoriaDescricao.value
    const created_at = formatDate(new Date())
    const status = true
    const task = []
    let novaCategoria = new Categoria(id, title, icon, description, created_at, status, task)
    CategoryArray.push(novaCategoria)
    localStorage.setItem('ListCategorys', JSON.stringify(CategoryArray));
    RenderCategory()
    clear()
  }
  function clear(){
    $categoriaTitle.value = ''
    $categoriaDescricao.value = ''
  }
  
  function RenderCategory(){
    let categoryItens = ''
    
    CategoryArray.forEach((element) => { 
      categoryItens += `
      <div class="categorias-cards">
        <img src="${element.icon}" alt="">
        <p>${element.title}</p>
        <span class="categorias-cards-span">${element.id}</span>
      </div>
      `
      $renderCategoryItens.innerHTML = categoryItens
    })
  }

  function openList(){
    console.log($valueBox.value)
  }
}




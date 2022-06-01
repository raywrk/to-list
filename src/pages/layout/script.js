import { painelComponent } from "../painel/painel.js"
import { icons } from "../../data/icons.js"
import { padTo2Digits, formatDate } from "../../data/date.js"
import { Categoria } from "../../models/category.js"

const $container = document.querySelector('.container')
$container.innerHTML = painelComponent()

const $btnCategoriasAdd = document.querySelector('.categorias-add img')
const $modal = document.getElementById('myModal');
const $span = document.getElementsByClassName('close')[0];
const $renderIcon = document.querySelector('.modal-body-img')
const $selectIcon = document.querySelector('.iconSelect')
const $selectColorIcon = document.querySelector('.iconColorSelect')

// Inputs do Modal

const $categoriaTitle = document.querySelector('.categoriaTitle')
const $categoriaDescricao = document.querySelector('.categoriaDescricao')
const $addCategory = document.querySelector('.salvar')
const $renderCategoryItens = document.querySelector('.categorias-cards-container')

const CategoryArray = JSON.parse(localStorage.getItem('ListCategorys')) ?? []

RenderCategory()

if($selectIcon || $selectColorIcon || $addCategory){
  $selectIcon.addEventListener('change', iconChange)
  $selectColorIcon.addEventListener('change', iconChange)
  $addCategory.addEventListener('click', addCategory)
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
    <div onClick="openList(${element.id})" class="categorias-cards">
      <img src="${element.icon}" alt="">
      <p>${element.title}</p>
    </div>
    `
    $renderCategoryItens.innerHTML = categoryItens
  })
}
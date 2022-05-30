import { painelComponent } from "../painel/painel.js"

const $container = document.querySelector('.container')
$container.innerHTML = painelComponent
const $categoriasAdd = document.querySelector('.categorias-add img')

$categoriasAdd.addEventListener('click', nome)

function nome(){
  console.log('ALOO')
}
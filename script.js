const $categoria = document.querySelector('.categoria')
const $tarefa = document.querySelector('.tarefa')
const $button = document.querySelector('.btn')
const $button2 = document.querySelector('.btn2')

$button.addEventListener('click', addCategoria)
$button2.addEventListener('click', addTarefa)
class Categoria {
  constructor(id, titulo, tarefa){
    this.id = id,
    this.titulo = titulo,
    this.tarefa = tarefa
  }
} 

class Tarefa {
  constructor(id, titulo, categoriaId){
    this.id = id,
    this.titulo = titulo,
    this.categoriaId = categoriaId
  }
} 

let ListaCategorias = []
let ListaTarefas = []

function addCategoria(){
  let id = Object.keys(ListaCategorias).length + 1
  let titulo = $categoria.value
  let novaCategoria = new Categoria(id, titulo, ListaTarefas)
  ListaCategorias.push(novaCategoria)
}

function addTarefa(){
  let id = Object.keys(ListaTarefas).length + 1
  let titulo = $tarefa.value
  let novaTarefa = new Tarefa(id, titulo, 1)
  ListaTarefas.push(novaTarefa)
}


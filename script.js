const $categoria = document.querySelector('.categoria')
const $tarefa = document.querySelector('.tarefa')
const $button = document.querySelector('.btn')
const $button2 = document.querySelector('.btn2')

$button.addEventListener('click', addCategoria)
$button2.addEventListener('click', addTarefa)
class Categoria {
  constructor(id, titulo, []){
    this.id = id,
    this.titulo = titulo
    this.tarefa = []
  }
} 
class Tarefa {
  constructor(id, titulo){
    this.id = id,
    this.titulo = titulo
  }
} 

let ListaCategorias = [
]

function addCategoria(){
  let id = Object.keys(ListaCategorias).length + 1
  let titulo = $categoria.value
  let novaCategoria = new Categoria(id, titulo, [])
  ListaCategorias.push(novaCategoria)
}

function addTarefa(){
  let id = 1
  let titulo = $tarefa.value
<<<<<<< HEAD
  let novaTarefa = new Tarefa(id, titulo, 1)
  ListaTarefas.push(novaTarefa)
}
=======
  let novaTarefa = new Tarefa(id, titulo)
  item = ListaCategorias.filter((titulo) => titulo.titulo == 'Academia')
  item[0].tarefa.push(novaTarefa)
  console.log(item[0].tarefa)
}
>>>>>>> 3b9116d813a437cfa7d0308ac88c244442f8922a


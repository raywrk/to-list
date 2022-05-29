const $categoria = document.getElementById('#categoria')
const $tarefa = document.getElementById('#tarefa')



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

let ListaCategoria = []
let ListaTarefas = []

ListaTarefas.push({id: 1, titulo: 'tarefa1', categoriaId: 1})

let academia = new Categoria(1, 'Academia', [])

ListaCategoria.push(academia)

let teste = ''
let teste2 = ''
let teste3
teste = ListaCategoria.filter((titulo) => titulo.titulo == 'Academia')
teste2 = ListaCategoria.find((titulo) => titulo.titulo == 'Academia')


console.log(teste)
console.log(teste2)

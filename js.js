import { colors } from './src/data/icons.js'

const Categorias = [
  {
  id: 1,
  title: 'Categoria1',
  color: 'rosa',
  task: [
    {tarefa: 'task1'},
    {tarefa: 'task2'},
    {tarefa: 'task3'},
    {tarefa: 'task4'},
  ]},
  {
    id: 2,
    title: 'Categoria2',
    color: 'roxo',
    task: [
      {tarefa: 'task1'},
      {tarefa: 'task2'},
      {tarefa: 'task3'},
      {tarefa: 'task4'},
      {tarefa: 'task5'},
      {tarefa: 'task6'},
      {tarefa: 'task6'},
      {tarefa: 'task6'}
  ]},
  {
    id: 3,
    title: 'Categoria3',
    color: 'azul',
    task: [
      {tarefa: 'task1'},
      {tarefa: 'task2'},
      {tarefa: 'task3'},
      {tarefa: 'task4'},
      {tarefa: 'task5'},
      {tarefa: 'task6'},
      {tarefa: 'task5'},
      {tarefa: 'task6'},
      {tarefa: 'task6'},
      {tarefa: 'task5'},
      {tarefa: 'task6'},
  ]}
]

const labelsArray = Categorias.map(item => item.title)

const colorsHexaArray =  Categorias.map(category => {
  const color = colors.find(item => item.color == category.color)
  return color.hexa
})

const qtdeCategorias = labelsArray.length

const arrayData = []
const arrayDataPercents = []

function Datas(){
  for (let pos = 0; pos < qtdeCategorias; pos++) {
    const qtdeTarefas = Categorias.find((task) => task.title == labelsArray[pos])
    const d1 = qtdeTarefas.task.length
    arrayData.push(d1)    
  }
}

Datas()

function DatasPer(){
  const total = arrayData.reduce((a, b) => a + b)
  for (let pos = 0; pos < qtdeCategorias; pos++) {
    const qtdeTarefas = Categorias.find((categoria) => categoria.title == labelsArray[pos])
    const qtde = qtdeTarefas.task.length
    const percent = parseFloat(qtde / total).toFixed(3) * 100
    arrayDataPercents.push(percent)
  }
}

DatasPer()
console.log(arrayDataPercents)

const data = {
  labels: labelsArray,
  datasets: [{
    label: 'Categorias',
    backgroundColor: colorsHexaArray,
    borderColor: colorsHexaArray,
    data: arrayData,
  }],
};

const data2 = {
  labels: labelsArray,
  datasets: [{
    label: 'Categorias',
    backgroundColor: colorsHexaArray,
    borderColor: colorsHexaArray,
    data: arrayDataPercents,
  }],
};
const config = {
  type: 'pie',
  data: data,
  options: {}
};
const config2 = {
  type: 'bar',
  data: data2,
  options: {}
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

const myChart2 = new Chart(
  document.getElementById('myChart2'),
  config2
);

Chart.defaults.global.defaultFontColor = '#ffffff'
Chart.defaults.global.defaultFontSize = 14
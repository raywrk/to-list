import { Tarefa } from '../../models/task.js'
import { alert }  from '../../components/alert/alert.js'

const $divLixeira = document.querySelector('.divLixeira')
const $dataEhora = document.querySelector('.dataEhora')
const $modal = document.getElementById('myModal')
const $salvar = document.querySelector('.salvar')
const $span = document.getElementsByClassName('close')[0];
const $imgAddActivity = document.querySelector('.imgAddActivity')
const $taskFinishTime = document.querySelector('.taskFinishTime')
const $activitysContainer = document.querySelector('.activitysContainer')
const $categoriaTitle = document.querySelector('.categoriaTitle')
const $componentAlert = document.querySelector('.componentAlert')
const $checkBox = document.querySelector('.checkboxDate')
const $activity = $activitysContainer.querySelector('#activity')
const $lixeira = document.querySelector('.lixeira')

$checkBox.addEventListener('click', desabilitar)
$imgAddActivity.addEventListener('click', () => $modal.style.display = 'flex')
$span.addEventListener('click', () => $modal.style.display = 'none')

const categoryLS = JSON.parse(localStorage.getItem('ListCategorys')) ?? []
const filtro = categoryLS.find(category => category.id == 1)
const categoryTask = filtro.task ?? []

function taskDeadline() {
    
}

taskDeadline()


renderTask()

 function desabilitar(event){

    if(event.target.checked == true){
      $dataEhora.style.visibility = 'visible'
   }else{
      $dataEhora.style.visibility = 'hidden'
   }

}

function addTask()  {
    const dateClient = String($dataEhora.value)
    const id = Object.keys(filtro.task).length + 1
    const taskTitle = `${$categoriaTitle.value}`
    const tarefaArray = new Tarefa(id, taskTitle, dateClient, true)
    filtro.task.push(tarefaArray)
    localStorage.setItem('ListCategorys', JSON.stringify(categoryLS));
}

    function renderTask(){
    let task = ''
    categoryTask.forEach((element, index) => {
        task += `
        <div class="activity" id="activity">
            <div class="inputTitle">
                <input type="checkbox" name="" class="checkbox">
                <p>${element.title}</p>
            </div>
            <div class="taskFinishTime">${element.deadlineDate}</div>
            <div class="divLixeira" id="${index}">
                <img class="lixeira" src="../../assets/lixeira.svg" id="${index}" alt="lixeiro">
            </div>
        </div>
        `
        $activitysContainer.innerHTML = task
    });
}

function successAlert() {
    if ( $categoriaTitle.value == ''){
        $componentAlert.innerHTML = alert('Dê um titulo para sua atividade', '#dc4c4c', '#cc3333')
    setTimeout(() => {
        $componentAlert.style.display = 'none'
    }, 4000)
    $componentAlert.style.display = 'flex'
    
    } else {
        addTask()
        renderTask()
        
        $componentAlert.innerHTML = alert('Tarefa criada com sucesso', '#61bd4f', '#116900')
        
        setTimeout(() => {
            $componentAlert.style.display = 'none'
        }, 4000)
        $componentAlert.style.display = 'flex'
    }
}
    
    
window.addEventListener('keyup', () => {
    const keyPressedEnter = event.key == 'Enter'
    if (keyPressedEnter) {
        $modal.style.display = 'none'
        renderTask()
        successAlert()
    }
})

$salvar.addEventListener('click', () => {
$modal.style.display = 'none'
renderTask()
successAlert()
})


$activitysContainer.addEventListener('click', deleteTask)

function deleteTask(event) {
    // var index = categoryTask.find(taskId => taskId.id == Number(event.target.id) + 1)
    const taskIndex = Number(event.target.id)

    if (event.target.className == 'lixeira' || event.target.className == 'divLixeira') {
        console.log(taskIndex)
        categoryTask.splice(taskIndex, 1);
        localStorage.setItem('ListCategorys', JSON.stringify(categoryLS));
        renderTask()
    }
}



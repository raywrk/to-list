import { Tarefa } from '../../models/task.js'
import { alert }  from '../../components/alert/alert.js'

const $activity  = document.querySelector('.activity')
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

$imgAddActivity.addEventListener('click', () => $modal.style.display = 'flex')
$span.addEventListener('click', () => $modal.style.display = 'none')

const categoryLS = JSON.parse(localStorage.getItem('ListCategorys')) ?? []
const filtro = categoryLS.find(category => category.id == 1)
const categoryTask = filtro.task ?? []

$checkBox.addEventListener('click', desabilitar)

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
        categoryTask.forEach(element => {
            task += `
            <div class="activity">
                <div class="inputTitle">
                    <input type="checkbox" name="" class="checkbox">
                    <p>${element.title}</p>
                </div>
                <div class="taskFinishTime">${element.deadlineDate}</div>
                <div class="divLixeira">
                    <img class="lixeira" src="../../assets/lixeira.svg" alt="lixeiro">
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
    
    $salvar.addEventListener('click', () => {
    $modal.style.display = 'none'
    renderTask()
    successAlert()
    })


      
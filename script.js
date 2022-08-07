const newTaskInput = document.querySelector('#texto-tarefa');
const newTaskButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const cleanTaskList = document.querySelector('#apaga-tudo');
const cleanTasksDone = document.querySelector('#remover-finalizados');

// Funcao que adiciona a classe 'select' aos elementos
const clickSelect = (e) => {
  const selectListItems = document.querySelectorAll('li');
  for (let item of selectListItems) {
    item.classList.remove('select');
    e.target.classList.add('select');
  }
};

// Funcao que marca como 'feito' o item da lista
const markAsDone = (e) => {
  let targetCheck = e.target.classList;

  for (let i = 0; i < targetCheck.length; i += 1) {
    if (targetCheck[i] === 'completed') {
      targetCheck.remove('completed');
      break;
    } else {
      targetCheck.add('completed');
      break;
    }
  }
};

// Funcao que adiciona um novo item na lista de tarefas
const addTask = () => {
  const createTaskItem = document.createElement('LI');
  createTaskItem.innerText = newTaskInput.value;
  createTaskItem.addEventListener('dblclick', markAsDone);
  createTaskItem.addEventListener('click', clickSelect);
  taskList.append(createTaskItem);
  newTaskInput.value = '';
};

const cleanList = () => {
  const selectListItems = document.querySelectorAll('li');
  for (let item of selectListItems) {
    item.remove();
  }
};

const cleanDone = () => {
  const selectDoneItems = document.querySelectorAll('.completed')
  for (let item of selectDoneItems) {
    item.remove();
  }
};

newTaskButton.addEventListener('click', addTask);
cleanTaskList.addEventListener('click', cleanList);
cleanTasksDone.addEventListener('click', cleanDone)
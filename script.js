const newTaskInput = document.querySelector('#texto-tarefa');
const newTaskButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const cleanTaskListButton = document.querySelector('#apaga-tudo');
const cleanTasksDoneButton = document.querySelector('#remover-finalizados');
const saveTasksButton = document.querySelector('#salvar-tarefas');
const moveUpButton = document.querySelector('#mover-cima');
const moveDownButton = document.querySelector('#mover-baixo');
const removeDoneButton = document.querySelector('#remover-selecionado');

let storagedListItems = [];

// Funcao que adiciona a classe 'select' aos elementos
const clickSelect = (e) => {
  const selectListItems = document.querySelectorAll('LI');
  for (let item of selectListItems) {
    item.classList.remove('select');
    e.target.classList.add('select');
  }
};

// Funcao que retorna a classe 'completed' para salvar o status no localStorage
const getClass = (itemList) => {
  for (let i = 0; i < itemList.length; i += 1) {
    if (itemList[i] === 'completed') {
      return 'completed';
    }
  }
  return 'active';
};


// Funcao que marca como 'feito' o item da lista
const markAsDone = (e) => {
  let targetCheck = e.target.classList;
  targetCheck.toggle('completed');
  targetCheck.toggle('active');
};


// Funcao que adiciona um novo item na lista de tarefas
const addTask = () => {
  const createTaskItem = document.createElement('LI');
  createTaskItem.innerText = newTaskInput.value;
  createTaskItem.classList.add('active');
  createTaskItem.addEventListener('dblclick', markAsDone);
  createTaskItem.addEventListener('click', clickSelect);
  taskList.append(createTaskItem);
  newTaskInput.value = '';
};

// Funcao que apaga todos os itens da lista de tarefas
const cleanList = () => {
  const selectListItems = document.querySelectorAll('LI');
  for (let item of selectListItems) {
    item.remove();
  }
};

// Funcao que apaga somente os itens completados da lista de tarefas
const cleanDone = () => {
  const selectDoneItems = document.querySelectorAll('.completed');
  for (let item of selectDoneItems) {
    item.remove();
  }
};

// Funcao que salva os itens da lista de tarefas no localStorage
const saveTaskList = () => {
  storagedListItems = [];
  let itemList;
  let itemStatus;
  const selectListItems = document.querySelectorAll('LI');
  for (let item of selectListItems) {
    itemList = item.innerText;
    itemStatus = getClass(item.classList);
    // colocando o item e seu status na variavel que sera enviada para o localstorage
    storagedListItems.push({
      task: itemList,
      status: itemStatus
    });
  }

  localStorage.setItem('listOfTasks', JSON.stringify(storagedListItems));
};

// Funcao que recupera tarefas salvas no localStorage
const restoreSavedTasks = () => {
  let loadSavedList = JSON.parse(localStorage.getItem('listOfTasks'));
  if (loadSavedList !== null) {
    for (let item of loadSavedList) {
      const createTaskItem = document.createElement('LI');

      createTaskItem.innerText = item.task;
      createTaskItem.classList.add(item.status);
      createTaskItem.addEventListener('dblclick', markAsDone);
      createTaskItem.addEventListener('click', clickSelect);
      taskList.append(createTaskItem);
    }
  }

};

// Funcao para checkar se o botao de mover item da lista esta ativo
const checkButton = () => {
  const selectedItem = document.querySelector('.select')
  if (selectedItem !== null) {
    return true
  }
}

// Funcao para mover para cima
const moveItemUp = () => {
  const selectedItem = document.querySelector('.select')
  const selectListItems = document.querySelectorAll('LI');


  if (selectedItem !== selectListItems[0] && checkButton() === true) {
    taskList.insertBefore(selectedItem, selectedItem.previousElementSibling);
  }

};

// Funcao mover para baixo
const moveItemDown = () => {
  const selectedItem = document.querySelector('.select')
  const selectListItems = document.querySelectorAll('LI');
  let listLength = selectListItems.length - 1;


  if (selectedItem !== selectListItems[listLength] && checkButton() === true) {
    taskList.insertBefore(selectedItem.nextElementSibling, selectedItem)
  }
};

// Funcao que remove item selecionado
const removeSelected = () => {
  const selectedItem = document.querySelector('.select')
  checkButton();
  if (checkButton()) {
    selectedItem.remove();
  }
};

// Botoes de acao
newTaskButton.addEventListener('click', addTask);
cleanTaskListButton.addEventListener('click', cleanList);
cleanTasksDoneButton.addEventListener('click', cleanDone);
saveTasksButton.addEventListener('click', saveTaskList);
moveUpButton.addEventListener('click', moveItemUp);
moveDownButton.addEventListener('click', moveItemDown);
removeDoneButton.addEventListener('click', removeSelected)


window.onload = () => {
  restoreSavedTasks();
}
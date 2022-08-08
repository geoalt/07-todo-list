const newTaskInput = document.querySelector('#texto-tarefa');
const newTaskButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const cleanTaskListButton = document.querySelector('#apaga-tudo');
const cleanTasksDoneButton = document.querySelector('#remover-finalizados');
const saveTasksButton = document.querySelector('#salvar-tarefas')
let storagedListItems = [];

// Funcao que adiciona a classe 'select' aos elementos
const clickSelect = (e) => {
  const selectListItems = document.querySelectorAll('li');
  for (let item of selectListItems) {
    item.classList.remove('select');
    e.target.classList.add('select');
  }
};

// Funcao que retorna a classe 'completed' para salvar o status no localStorage
const getClass = (itemList) => {
  for (let i = 0; i < itemList.length; i += 1) {
    if (itemList[i] === 'completed');
    console.log(itemList[i]);
    return 'completed';
  }
  return 'active';
}


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

// Funcao que apaga todos os itens da lista de tarefas
const cleanList = () => {
  const selectListItems = document.querySelectorAll('li');
  for (let item of selectListItems) {
    item.remove();
  }
};

// Funcao que apaga somente os itens completados da lista de tarefas
const cleanDone = () => {
  const selectDoneItems = document.querySelectorAll('.completed')
  for (let item of selectDoneItems) {
    item.remove();
  }
};

// Funcao que salva os itens da lista de tarefas no localStorage
const saveTaskList = () => {
  let itemList;
  let itemStatus;
  const selectListItems = document.querySelectorAll('li');
  for (let item of selectListItems) {
    itemList = item.innerText;
    itemStatus = getClass(item.classList);
    // colocando o item e seu status na variavel que sera enviado para o localstorage
    storagedListItems.push({
      task: itemList,
      status: itemStatus
    })
  }
  console.log(storagedListItems)
}


newTaskButton.addEventListener('click', addTask);
cleanTaskListButton.addEventListener('click', cleanList);
cleanTasksDoneButton.addEventListener('click', cleanDone);
saveTasksButton.addEventListener('click', saveTaskList);


window.onload = () => {
}
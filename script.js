const newTaskInput = document.querySelector('#texto-tarefa');
const newTaskButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

const clickSelect = (e) => {
  const selectListItems = document.querySelectorAll('li');
  for (let item of selectListItems) {
    item.classList.remove('select');
    e.target.classList.add('select');
  }
};

const addTask = () => {
  const createTaskItem = document.createElement('LI');
  createTaskItem.innerText = newTaskInput.value;
  createTaskItem.addEventListener('click', clickSelect)
  taskList.append(createTaskItem);
  newTaskInput.value = '';
};

newTaskButton.addEventListener('click', addTask);
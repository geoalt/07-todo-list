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

const markAsDone = (e) => {
  let targetCheck = e.target.classList;

  for (let i = 0; i < targetCheck.length; i += 1) {
    console.log(targetCheck[i])
    if (targetCheck[i] === 'completed') {
      targetCheck.remove('completed');
      break;
    } else {
      targetCheck.add('completed');
      break;
    }
  }
};

const addTask = () => {
  const createTaskItem = document.createElement('LI');
  createTaskItem.innerText = newTaskInput.value;
  createTaskItem.addEventListener('dblclick', markAsDone)
  createTaskItem.addEventListener('click', clickSelect)
  taskList.append(createTaskItem);
  newTaskInput.value = '';
};

newTaskButton.addEventListener('click', addTask);
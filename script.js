const newTaskInput = document.querySelector('#texto-tarefa');
const newTaskButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');


const addTask = () => {
  const createTaskItem = document.createElement('LI');
  createTaskItem.innerText = newTaskInput.value;
  taskList.append(createTaskItem);
}

newTaskButton.addEventListener('click', addTask);
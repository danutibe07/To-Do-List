// import './style.css';
// import Todo from './modules/Todo.js';
// import Task from './modules/Task.js';

// const refreshIcon = document.querySelector('#refresh');
// const submitFormButton = document.querySelector('.enter');
// const taskInput = document.querySelector('.task-input');

// const tasks = [
//   {
//     description: 'Read on Algorithms',
//     completed: false,
//     index: 0,
//   },
//   {
//     description: 'Complete Rails bootcamp',
//     completed: true,
//     index: 1,
//   },
// ];

// const todoList = document.querySelector('.content');

// const pendingTasks = () => {
//   tasks.forEach((task) => {
//     // Creating a list element and assigning it a className
//     const list = document.createElement('li');
//     list.className = 'todo-list'
//     // list.innerText = task.description;
//     // Creating an i element for edit, assigning it a className and giving it an id
//     const edit = document.createElement('i');
//     edit.className = ' fas fa-solid fas fas fa-ellipsis-v edit-icon';
//     edit.setAttribute('ide', task.index);
//     // Creating an i element for deleting a task and assigning it a className
//     const destroy = document.createElement('i');
//     destroy.className = 'remove-icon icon-hidden fas fa-solid fa-trash';
//     destroy.setAttribute('ide', task.index);

//     list.setAttribute('ide', task.index);
//     list.innerHTML = `<div class="todo-item-content" draggable>
//        <input class="checkbox" ide=${task.index} type="checkbox" />
//        <textarea class="todo-description" ide=${task.index} rows="1" maxlength="100">${task.description}</textarea> 
//       </div>`;
//     list.appendChild(edit);
//     // list.appendChild(destroy);
//     todoList.appendChild(list);
//   });
// };
// pendingTasks(tasks);

// const todoListData = tasks


// function submitTask(){
//   if (taskInput.value !== '') {
//     todoListData.list = todoListData.addTask(new Task(taskInput.value));
//     todoListData.renderList();
//     taskInput.value = '';
//   }
// };

// const loadEnterIcon = () => {
//   submitFormButton.alt = 'Enter';
//   submitFormButton.addEventListener('click', submitTask);
//   taskInput.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//       submitTask();
//       console.log(taskInput.value)
//     }
//   });
// };

// window.onload = () => {
//   loadEnterIcon();
// };


import './style.css';
import Todo from './modules/Todo.js';
import Task from './modules/Task.js';
import { checkLocalStorage, loadLocalStorage } from './modules/store.js';
// import refreshSrc from './assets/refresh-svgrepo-com.svg';
// import enterSrc from './assets/arrow-enter-svgrepo-com.svg';

const RefreshTask = document.querySelector('.refresh');
const EnterInput = document.querySelector('.enter');
const taskInput = document.querySelector('.task-input');

const createTodoList = () => {
  let todoListData;
  if (checkLocalStorage()) {
    todoListData = new Todo(loadLocalStorage());
    todoListData.renderList();
    return todoListData;
  }
  todoListData = new Todo();
  return todoListData;
};

const todoListData = createTodoList();

//  Refresh = new Image();
// Refresh.src = refreshSrc;
// Refresh.className = 'reload-icon';

const submitTask = () => {
  if (taskInput.value !== '') {
    todoListData.list = todoListData.addTask(new Task(taskInput.value));
    todoListData.renderList();
    taskInput.value = '';
  }
};

const loadEnterIcon = () => {
  EnterInput.addEventListener('click', submitTask);
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      submitTask();
    }
  });
};

window.onload = () => {
  loadEnterIcon();
};

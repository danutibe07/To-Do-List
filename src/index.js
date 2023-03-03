import './style.css';
import CheckBoxEvent from './modules/checkbox.js';

const toDoList = document.querySelector('.content-container');
const headtag = document.querySelector(".headtag")
headtag.innerText= "Today's To Do"
function caller(e, id) {
  CheckBoxEvent(e.target.checked, id);
}


window.caller = caller;
// load saved tasks
const loadTask = (tasks) => {
  tasks.sort((a, b) => a.index - b.index);
  toDoList.innerHTML = '';

  tasks.forEach((task) => {
    const template = ` <li>
                          <input type="checkbox"  onchange=" caller(event,'check-${task.index}') " class="checkbox" data-index="${task.index}" ${task.completed ? 'checked' : ''} class="me-2 mt-2" />
                          <input type="text" id='check-${task.index}' class="task-description todo-description ${
  task.completed ? 'completed' : ''}" data-index="${task.index}" value ="${task.description}" />
                          <div class="buttons">
                            <div class="ellipsis">
                              <button class="btn-ellipsis" data-index="${task.index}">
                                <i class="fas fa-solid fas fas fa-ellipsis-v"></i>
                              </button>
                            </div>
                            <div class="hidden">
                              <button class="btn-trash" data-index="${task.index}">
                                <i class="fas fa-solid fa-trash"></i>
                              </button>
                            </div>
                          </div>
                        </li>`;
    toDoList.innerHTML += template;
  });
};
// add new task
const addTask = () => {
  const add = document.querySelector('.task-input').value;
  const tasks = JSON.parse(localStorage.getItem('tasks') || JSON.stringify([]));
  const newTask = {
    description: add,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  loadTask(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// remove a task
const removeTask = (value) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const filtered = tasks.filter((task) => task.index !== parseInt(value, 10));
  filtered.forEach((task, i) => {
    task.index = i + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(filtered));
  loadTask(filtered);
};

// calling addTask() when user press Enter
const input = document.querySelector('.task-input');
input.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (event.key === 'Enter') {
    addTask();
    input.value = '';
  }
});

// loading Tasks when page loads
const tasks = JSON.parse(localStorage.getItem('tasks'));
if (tasks) loadTask(tasks);

// removing tasks
toDoList.addEventListener('click', (e) => {
  if (e.target.closest('.btn-ellipsis')) {
    const ellipsisBtn = e.target.closest('.btn-ellipsis');
    const trashBtn = ellipsisBtn.closest('.ellipsis').nextElementSibling;
    ellipsisBtn.classList.add('hidden');
    trashBtn.classList.remove('hidden');
  } else if (e.target.closest('.btn-trash')) {
    const trashBtn = e.target.closest('.btn-trash');
    removeTask(trashBtn.dataset.index);
  }
});

// editing the todos
toDoList.addEventListener('keyup', (event) => {
  if (event.target.classList.contains('task-description')) {
    const index = parseInt(event.target.closest('input').dataset.index, 10);
    const task = tasks.find((task) => task.index === index);
    task.description = event.target.value;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});

// clear all completed tasks
const clearBtn = document.getElementById('clearall');
clearBtn.innerText = "Clear All Completed"
clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const filtered = tasks.filter((task) => !task.completed);
  filtered.forEach((task, i) => { task.index = i + 1; });
  localStorage.setItem('tasks', JSON.stringify(filtered));
  loadTask(filtered);
});
import loadTask from '../index.js';
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
export default addTask;
// module.exports = addTask

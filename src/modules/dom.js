const todoList = document.getElementById('content');

export const appendlist = (task, todo) => {
    // Creating a list element and assigning it a className
    const list = document.createElement('li');
    list.className = 'todo-list'
    list.draggable = true;
    // Creating an i element for edit, assigning it a className and giving it an id
    const edit = document.createElement('i');
    edit.className = ' fas fa-solid fas fas fa-ellipsis-v edit-icon';
    edit.setAttribute('ide', task.index);
    // Creating an i element for deleting a task and assigning it a className
  const destroy = document.createElement('i');
  destroy.className = 'remove-icon icon-hidden fas fa-solid fa-trash';
  destroy.setAttribute('data-index', task.index);
  destroy.setAttribute('draggable', 'false');
  destroy.addEventListener('click', (e) => {
    e.preventDefault();
    todo.list = todo.removeTask(task.index - 1);
    todo.renderList();
  });

  list.setAttribute('data-index', task.index);
  list.innerHTML = `
  <div class="todo-item-content"> 
  <input class="checkbox" ide=${task.index} type="checkbox" ${task.completed ? 'checked' : '' } /> 
  <span draggable = false> 
  <textarea draggable=false class="todo-description ${task.completed ? 'completed' : ''}" ide=${task.index} rows="1" maxlength="100">${task.description}</textarea> 
  </span> 
  </div>`;
  list.appendChild(remove);
  list.appendChild(edit);
  todoList.appendChild(list);
};

const deleteClearButton = () => {
  if (document.getElementById('clearall') === null) return;
  const Completed = document.getElementById('clearall');
  Completed.parentNode.removeChild(Completed);
};

export const clearTodoList = () => {
  todoList.innerHTML = '';
  deleteClearButton();
};

const toggleHiddenIcon = (event, task) => {
  task.classList.toggle('editing');
  const { index } = event.target.dataset;
  const listTag = document.querySelector(`li[data-index="${index}"]`);
  listTag.classList.toggle('editing');
  const removeIcon = document.querySelector(`.remove-icon[data-index="${index}"]`);
  const editIcon = document.querySelector(`.edit-icon[data-index="${index}"]`);
  setTimeout(() => {
    removeIcon.classList.toggle('icon-hidden');
    editIcon.classList.toggle('icon-hidden');
  }, 1000);
};

export const implementEdit = (todo) => {
  const todoEditData = document.querySelectorAll('.todo-description');
  todoEditData.forEach((task) => {
    task.addEventListener('input', (e) => {
      const index = e.target.dataset.index - 1;
      todo.list = todo.editTask(index, e.target.value);
      todo.saveList();
    });
    task.addEventListener('focusin', (e) => {
      toggleHiddenIcon(e, task);
    });
    task.addEventListener('focusout', (e) => {
      toggleHiddenIcon(e, task);
    });
  });
};

export const clearAll = (todo) => {
  const Completed = document.querySelector('#clearall ');
  Completed.textContent = 'Clear all completed';
  Completed.addEventListener('click', () => {
    todo.list = todo.filterCompleted();
    todo.renderList();
  });
};

export default {
  appendlist,
  clearTodoList,
  implementEdit,
  clearAll,
};

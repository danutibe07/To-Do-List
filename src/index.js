
import "./style.css";
const tasks = [
    {
      description: 'Read on Algorithms',
      completed: false,
      index: 0,
    },
    {
      description: 'Complete Rails bootcamp',
      completed: true,
      index: 1,
    },
  ];
  
  const todoList = document.querySelector('.content');

    const pendingTasks = () => {
      tasks.forEach((task) => {
        //Creating a list element and assigning it a className
        const list = document.createElement('li');
        //list.innerText = task.description;
        //Creating an i element for edit, assigning it a className and giving it an id
        const edit = document.createElement('i');
        edit.className = ' fas fa-solid fas fas fa-ellipsis-v edit-icon';
        edit.setAttribute('ide', task.index);
        //Creating an i element for deleting a task and assigning it a className
        const destroy = document.createElement('i');
        destroy.className = 'remove-icon icon-hidden fas fa-solid fa-trash';
        destroy.setAttribute('ide', task.index);

        list.setAttribute('ide', task.index);
        list.innerHTML = `<div class="todo-item-content">
       <input class="checkbox" ide=${task.index} type="checkbox" />
       <textarea class="todo-description" ide=${task.index} rows="1" maxlength="100">${task.description}</textarea> 
      </div>`;
      list.appendChild(edit);
      list.appendChild(destroy);
      todoList.appendChild(list);
      });
    };
  pendingTasks(tasks);    
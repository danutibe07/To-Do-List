
import "./style.css";
const tasks = [
    {
      description: 'Read on Algorithms',
      completed: false,
      index: 0,
    },
    {
      description: 'Complete section 2 of Rails bootcamp',
      completed: false,
      index: 1,
    },
  ];
  
  const pendingTasks = (tasks) => {
    tasks.sort((a, b) => a.index - b.index);
    const todoContent = document.getElementById('content');
    todoContent.innerHTML = '';
    tasks.forEach((todo) => {
      const template = `  <li class="task">
           <input type="checkbox" class="checkme">
           <input type="text" value="${todo.description}" class="tasks" id="item${todo.index}" readonly>
           <i class="fa-solid uil-ellipsis-v edit" id="edit${todo.index}"></i>
           <i class="fa-solid fa-trash delete" id="delete${todo.index}"></i>
           </li>`;
      todoContent.innerHTML += template;
    });
  };

  pendingTasks(tasks);
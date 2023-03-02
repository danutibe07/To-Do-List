// const taskInput = document.querySelector('.task-input');
// const TaskBox = document.querySelector('.content-container');
// const Clear = document.querySelector('.clearall');

// const completed = false;
// let index = 0;
// let list = [];

// function DisplayTodo() {
//   let listItem = '';
//   list.forEach((element) => {
//     if (element.completed === true) {
//       listItem += `<li class="task">
//                 <input type="checkbox" class="checkme" checked onchange ="CheckMe(${element.index});" id="check${element.index}">
//                 <textarea value="${element.description}" class="tasks" id="item${element.index}" cols="30" rows="10"></textarea>
//                 <i class="fa-solid fa-trash delete" id="delete${element.index}" onclick="removeItem(${element.index});"></i>
//                 </li>`;
//     } else {
//       listItem += `<li class="task">
//                    <input type="checkbox" class="checkme" onchange ="CheckMe(${element.index});" id="check${element.index}">
//                    <textarea value="${element.description}" class="tasks" id="item${element.index}" cols="30" rows="10"></textarea>
//                    <i class="fa-solid uil-ellipsis-v edit " id="edit${element.index}" onclick="editItem(${element.index});"></i>
//                   <i class="fa-solid fa-trash delete" id="delete${element.index}" onclick="removeItem(${element.index});"></i     
//                   </li>`;
//     }
//   });
//   TaskBox.innerHTML = listItem || '<li class="no-item">You don\'t have any task here</li>';
//   taskInput.value = '';
// }

// taskInput.addEventListener('keypress', (event) => {
//   if (event.key === 'Enter' && taskInput.value.length !== 0) {
//     const storedList = localStorage.getItem('todo-list');
//     if (storedList) {
//       list = JSON.parse(storedList);
//       index = list.length === 0 ? 0 : list.length;
//     } else {
//       list = [];
//     }
//     const Localstore1 = {
//       index,
//       description: taskInput.value,
//       completed,
//     };
//     list.push(Localstore1);
//     localStorage.setItem('todo-list', JSON.stringify(list));
//     DisplayTodo();
//   }
// });

// window.editItem = (index) => {
//   const editBtn = document.getElementById(`edit${index}`);
//   const deletebtn = document.getElementById(`delete${index}`);
//   deletebtn.style.display = 'block';
//   editBtn.style.display = 'none';
//   const mainItem = document.getElementById(`item${index}`);
//   mainItem.removeAttribute('readonly');
//   const { length } = mainItem.value;
//   mainItem.setSelectionRange(length, length);
// };

// window.removeItem = (index) => {
//   const editBtn = document.getElementById(`edit${index}`);
//   const deletebtn = document.getElementById(`delete${index}`);

//   deletebtn.style.display = 'none';
//   editBtn.style.display = 'block';
//   const storedData = localStorage.getItem('todo-list');
//   list = JSON.parse(storedData);
//   list.splice(index, 1);
//   for (let i = 0; i < list.length; i += 1) {
//     list[i].index = i;
//   }
//   localStorage.setItem('todo-list', JSON.stringify(list));
//   DisplayTodo();
// };

// const saveTaskOnBlur = (event) => {
//   const taskItem = event.target;
//   const itemId = taskItem.getAttribute('id');
//   const index = parseInt(itemId.replace('item', ''), 10);// radi
//   list[index].description = taskItem.value;
//   localStorage.setItem('todo-list', JSON.stringify(list));
//   const editBtn = document.getElementById(`edit${index}`);
//   const deletebtn = document.getElementById(`delete${index}`);

//   deletebtn.style.display = 'none';
//   editBtn.style.display = 'block';
// };
// TaskBox.addEventListener('blur', saveTaskOnBlur, true);

// window.CheckMe = (index) => {
//   const CheckCheck = document.getElementById(`check${index}`);
//   if (CheckCheck.checked === true) {
//     const storedData = localStorage.getItem('todo-list');
//     list = JSON.parse(storedData);
//     list[index].completed = true;
//     localStorage.setItem('todo-list', JSON.stringify(list));
//     DisplayTodo();
//   } else {
//     const storedData = localStorage.getItem('todo-list');
//     list = JSON.parse(storedData);
//     list[index].completed = false;
//     localStorage.setItem('todo-list', JSON.stringify(list));
//     DisplayTodo();
//   }
// };

// window.onload = () => {
//   if (localStorage.getItem('todo-list')) {
//     list = JSON.parse(localStorage.getItem('todo-list'));
//   }
//   DisplayTodo();
// };

// Clear.addEventListener('click', () => {
//   const storedData = localStorage.getItem('todo-list');
//   list = JSON.parse(storedData);
//   const AfterCleared = list.filter((element) => element.completed === false);
//   list = AfterCleared;
//   for (let i = 0; i < list.length; i += 1) {
//     list[i].index = i;
//   }
//   localStorage.setItem('todo-list', JSON.stringify(list));
//   DisplayTodo();
// });


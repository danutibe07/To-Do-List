// import _ from "lodash";
// import "./style.css";

// const finished = false;
// let index = 0;
// let container = [];

// const content = document.querySelector(".content");
// const taskInput = document.querySelector(".task-input");
// const taskEnter = document.querySelector(".enter");

// const inputValue = taskInput.value;

// function pendingTasks() {
//   let list = "";
//   list.innerHTML = `
//   <li class="task">
//   <input type="checkbox" class="checkme">
//   <input type="text" value="${element.description}" class="tasks" id="item${element.index}" readonly>
//   <i class="fa-solid uil-ellipsis-v edit " id="edit${element.index}" onclick="editItem(${element.index});"></i>
//   <i class="fa-solid fa-trash delete" id="delete${element.index}" onclick="removeItem(${element.index});"></i>
//   </li>`;
//   content.appendChild(list);
//   container.forEach((element) => {
//     listoftask += list;
//   });
// }

// taskEnter.addEventListener("keypress", (keys) => {
//   if (keys.key === "Enter" && taskInput.value !== "") {
//     const storedList = localStorage.getItem("todo-list");
//     if (storedList === null) {
//       container = [];
//     } else {
//       container = JSON.parse(storedList);
//       index = container.length === 0 ? 0 : container.length;
//     }
//     const LocalStore = {
//       index,
//       description: taskInput.value,
//       completed,
//     };
//     container.push(LocalStore);
//     localStorage.setItem("todo-list", JSON.stringify(container));
//     pendingTasks();
//   }
// });

// window.onload = () => {
//   if (localStorage.getItem("todo-list")) {
//     container = JSON.parse(localStorage.getItem("todo-list"));
//   }
//   pendingTasks();
// };

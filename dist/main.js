/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import _ from \"lodash\";\r\n// import \"./style.css\";\r\n\r\n// const finished = false;\r\n// let index = 0;\r\n// let container = [];\r\n\r\n// const content = document.querySelector(\".content\");\r\n// const taskInput = document.querySelector(\".task-input\");\r\n// const taskEnter = document.querySelector(\".enter\");\r\n\r\n// const inputValue = taskInput.value;\r\n\r\n// function pendingTasks() {\r\n//   let list = \"\";\r\n//   list.innerHTML = `\r\n//   <li class=\"task\">\r\n//   <input type=\"checkbox\" class=\"checkme\">\r\n//   <input type=\"text\" value=\"${element.description}\" class=\"tasks\" id=\"item${element.index}\" readonly>\r\n//   <i class=\"fa-solid uil-ellipsis-v edit \" id=\"edit${element.index}\" onclick=\"editItem(${element.index});\"></i>\r\n//   <i class=\"fa-solid fa-trash delete\" id=\"delete${element.index}\" onclick=\"removeItem(${element.index});\"></i>\r\n//   </li>`;\r\n//   content.appendChild(list);\r\n//   container.forEach((element) => {\r\n//     listoftask += list;\r\n//   });\r\n// }\r\n\r\n// taskEnter.addEventListener(\"keypress\", (keys) => {\r\n//   if (keys.key === \"Enter\" && taskInput.value !== \"\") {\r\n//     const storedList = localStorage.getItem(\"todo-list\");\r\n//     if (storedList === null) {\r\n//       container = [];\r\n//     } else {\r\n//       container = JSON.parse(storedList);\r\n//       index = container.length === 0 ? 0 : container.length;\r\n//     }\r\n//     const LocalStore = {\r\n//       index,\r\n//       description: taskInput.value,\r\n//       completed,\r\n//     };\r\n//     container.push(LocalStore);\r\n//     localStorage.setItem(\"todo-list\", JSON.stringify(container));\r\n//     pendingTasks();\r\n//   }\r\n// });\r\n\r\n// window.onload = () => {\r\n//   if (localStorage.getItem(\"todo-list\")) {\r\n//     container = JSON.parse(localStorage.getItem(\"todo-list\"));\r\n//   }\r\n//   pendingTasks();\r\n// };\r\n\r\nconst tasks = [\r\n    {\r\n      description: 'Read on Algorithms',\r\n      completed: false,\r\n      index: 0,\r\n    },\r\n    {\r\n      description: 'Complete section 2 of Rails bootcamp',\r\n      completed: false,\r\n      index: 1,\r\n    },\r\n  ];\r\n  \r\n  const pendingTasks = (tasks) => {\r\n    tasks.sort((a, b) => a.index - b.index);\r\n    const todoContent = document.getElementById('content');\r\n    todoContent.innerHTML = '';\r\n    tasks.forEach((task) => {\r\n      const template = `  <li class=\"task\">\r\n           <input type=\"checkbox\" class=\"checkme\">\r\n           <input type=\"text\" value=\"${todo.description}\" class=\"tasks\" id=\"item${todo.index}\" readonly>\r\n           <i class=\"fa-solid uil-ellipsis-v edit\" id=\"edit${todo.index}\"></i>\r\n           <i class=\"fa-solid fa-trash delete\" id=\"delete${todo.index}\"></i>\r\n           </li>`;\r\n      todoContent.innerHTML += template;\r\n    });\r\n  };\r\n\r\n  pendingTasks(tasks);\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
const CheckBoxEvent = (status, id) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  const elem = document.getElementById(id);
  const singleElem = tasks[+id?.substring(6) - 1];

  if (status) {
    elem.classList.add('completed');
    singleElem.completed = true;
  } else {
    elem.classList.remove('completed');
    singleElem.completed = false;
  }

  tasks[+id?.substring(6) - 1] = singleElem;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default CheckBoxEvent;

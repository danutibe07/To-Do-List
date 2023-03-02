const swapList = (fromIndex, toIndex, todo) => {
    const itemOne = todo.list[fromIndex - 1].index;
    const itemTwo = todo.list[toIndex - 1].index;
    todo.list[fromIndex - 1].index = itemTwo;
    todo.list[toIndex - 1].index = itemOne;
    todo.saveList();
    todo.renderList();
  };
  
  export const dragandDrop = (todo) => {
    let dragStart;
    const willdrag = document.querySelectorAll('.todo-list');
    const dragListItems = document.querySelectorAll('ul li');
    willdrag.forEach((draggable) => {
      draggable.addEventListener('dragstart', (e) => {
        dragStart = +e.target.closest('li').getAttribute('ide');
      });
    });
    dragListItems.forEach((item) => {
      item.addEventListener('dragover', (e) => {
        e.preventDefault();
      });
      item.addEventListener('dragenter', (e) => {
        e.target.closest('li').classList.add('over');
      });
      item.addEventListener('dragleave', (e) => {
        e.target.closest('li').classList.remove('over');
      });
      item.addEventListener('drop', (e) => {
        const dragEnd = +e.target.getAttribute('ide');
        e.target.closest('li').classList.remove('over');
        swapItems(dragStart, dragEnd, todo);
      });
    });
  };
  
  export default dragandDrop;
  
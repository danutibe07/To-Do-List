const CheckBoxEvents = (list) => {
    const checkBoxes = document.querySelectorAll('.checkbox');
    checkBoxes.forEach((checkbox) => {
      checkbox.addEventListener('change', (e) => {
        const index = e.target.dataset.index - 1;
        const textZone = document.querySelector(`.todo-description[data-index="${index + 1}"]`);
        textZone.classList.toggle('completed');
        list.toggleCompleted(index);
      });
    });
  };
  
  export default CheckBoxEvents;
  
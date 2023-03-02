import {appendlist ,clearTodoList, implementEdit,createClearCompletedElement, clearAll,} from './dom.js';
import CheckBoxEvents from './check.js';
import { dragandDrop } from './drag.js';

export default class Todo {
  constructor(list = []) {
    this.list = list;
  }

  sortList = () => {
    this.list.sort((a, b) => a.index - b.index);
  };

  renderList = () => {
    clearTodoList();
    this.sortList();
    for (let i = 0; i < this.list.length; i += 1) {
      this.list[i].index = i + 1;
      appendlist(this.list[i], this);
    }
    this.saveList();
    implementEdit(this);
    CheckBoxEvents(this);
    clearAll(this);
    dragandDrop(this);
  };

  saveList = () => {
    saveToLocalStorage(this.list);
  };

  addTask = (task) => {
    this.list.push(task);
    return this.list;
  };

  removeTask = (index) => {
    this.list.splice(index, 1);
    return this.list;
  };

  editTask = (index, description) => {
    this.list[index].description = '';
    this.list[index].description = description;
    return this.list;
  };

  toggleCompleted = (index) => {
    this.list[index].completed = !this.list[index].completed;
    saveToLocalStorage(this.list);
  };

  filterCompleted = () => {
    this.list = this.list.filter((task) => !task.completed);
    return this.list;
  };
}

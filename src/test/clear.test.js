import Clear from './clear';
// Mock localStorage
const localStorageMock = (() => {~``
  let store = {};
  return {
    getItem: (key) => store[key],
    setItem: (key, value) => { store[key] = value.toString(); },
    clear: () => { store = {}; },
  };
})();
global.localStorage = localStorageMock;
describe('Clear function', () => {
  it('should clear completed tasks from localStorage', () => {
    // Setup
    const tasks = [
      { id: 1, description: 'Task 1', completed: true },
      { id: 2, description: 'Task 2', completed: false },
      { id: 3, description: 'Task 3', completed: true },
      { id: 4, description: 'Task 4', completed: false },
      { id: 5, description: 'Task 5', completed: false },
      { id: 6, description: 'Task 6', completed: false },
      { id: 7, description: 'Task 7', completed: false },
    ];
    localStorageMock.setItem('tasks', JSON.stringify(tasks));
    // Execute
    Clear({ preventDefault: () => { } });
    // Assert
    const updatedTasks = JSON.parse(localStorageMock.getItem('tasks'));
    const expectedTasks = [
      {id: 2, description: 'Task 2', completed: false, index: 1,},
      {id: 4, description: 'Task 4', completed: false, index: 2,},
      {id: 5, description: 'Task 5', completed: false , index : 3},
      {id: 6, description: 'Task 6', completed: false , index : 4},
      {id: 7, description: 'Task 7', completed: false , index: 5},
    ];
    expect(updatedTasks).toEqual(expectedTasks);
  });
  it('should clear completed tasks from localStorage', () => {
    // Setup
    const tasks = [
      { id: 1, description: 'Task 1', completed: true },
      { id: 2, description: 'Task 2', completed: false },
      { id: 3, description: 'Task 3', completed: true },
    ];
    localStorageMock.setItem('tasks', JSON.stringify(tasks));
    // Execute
    Clear({ preventDefault: () => { } });
    // Assert
    const updatedTasks = JSON.parse(localStorageMock.getItem('tasks'));
    const expectedTasks = [
      {id: 2, description: 'Task 2', completed: false, index: 1,},
    ];
    expect(updatedTasks).toEqual(expectedTasks);
  });
});
// remove a task
const removeTask = (value) => {
  const tasks = [];
  const filtered = tasks.filter((task) => task.index !== parseInt(value, 10));
  filtered.forEach((task, i) => {
    task.index = i + 1;
  });
  return filtered;
};

export default removeTask;

import updateTaskListOnDOM from '../markup-injectors/update-tasklist-dom-injection.js';
import getParentElement from '../utils/get-parent-element-id.js';
import TaskManager from './task-manager-class.js';
import updateCompletedTaskStyles from '../utils/updateCompletedTaskStyles.js';

if (window.localStorage.length > 0) {
  updateTaskListOnDOM('fullList');
  updateCompletedTaskStyles();
}

document.querySelector('[data-refresh-btn]').addEventListener('click', () => {
  window.location.reload();
});

document.querySelector('[data-add-task]').addEventListener('click', () => {
  const taskData = document.querySelector('[name="new-task"]');
  if (!taskData.value) {
    return;
  }
  const taskList = new TaskManager();
  taskList.addNewTask({ description: taskData.value });
  updateTaskListOnDOM('lastTask');
  window.location.reload();
});

document.querySelectorAll('[data-task]').forEach((task) => {
  task.addEventListener('click', () => {
    task.readOnly = false;
  });

  document.addEventListener('click', (event) => {
    // ? if user has clicked outside the input => update data
    if (!task.contains(event.target)) {
      const parentDiv = getParentElement(task, 'div');
      const taskList = new TaskManager();
      taskList.updateTask({ index: parentDiv.id, description: task.value });
    }
  });
});

document.querySelectorAll('[data-task-checkbox]').forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    const taskCompleted = JSON.parse(event.target.dataset.completed);
    const parentDiv = getParentElement(checkbox, 'div');
    const taskList = new TaskManager();
    taskList.updateTask({ index: parentDiv.id, completed: !taskCompleted });
    parentDiv.classList.toggle('task-completed');
    window.location.reload();
  });
});

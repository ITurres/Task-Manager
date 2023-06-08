import updateTaskListOnDOM from '../markup-injectors/update-tasklist-dom-injection.js';
import getParentElementId from '../utils/get-parent-element-id.js';
import TaskManager from './task-manager-class.js';

if (window.localStorage.length > 0) {
  updateTaskListOnDOM('fullList');
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

document.querySelectorAll('[data-delete-task]').forEach((button) => {
  button.addEventListener('click', () => {
    const parentDivId = getParentElementId(button, 'div');
    const taskList = new TaskManager();
    taskList.removeTask(parentDivId);
    window.location.reload();
  });
});

document.querySelectorAll('[data-task]').forEach((task) => {
  task.addEventListener('click', () => {
    task.readOnly = false;
  });

  document.addEventListener('click', (event) => {
    // ? if user has clicked outside the input => update data
    if (!task.contains(event.target)) {
      const parentDivId = getParentElementId(task, 'div');
      const taskList = new TaskManager();
      taskList.updateTask({ index: parentDivId, newDescription: task.value });
    }
  });
});

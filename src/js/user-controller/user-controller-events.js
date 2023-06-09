import TaskManager from './task-manager-class.js';
import updateTaskListOnDOM from '../markup-injectors/update-tasklist-dom-injection.js';
import getParentElement from '../utils/get-parent-element-id.js';
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

document.querySelectorAll('[data-task]').forEach((taskInput) => {
  taskInput.addEventListener('click', () => {
    taskInput.readOnly = false;
  });

  document.addEventListener('mouseleave', (event) => {
    // ? update data => when mouse leaves input element
    if (!taskInput.contains(event.target)) {
      const parentDiv = getParentElement(taskInput, 'div');
      const taskList = new TaskManager();
      taskList.updateTask({
        index: parentDiv.id,
        description: taskInput.value
      });
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

document.querySelector('[data-clear-all-btn]').addEventListener('click', () => {
  const taskList = new TaskManager();
  taskList.removeCompletedTasks();
  window.location.reload();
});

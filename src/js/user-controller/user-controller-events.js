import TaskManager from './task-manager-class.js';
import updateTaskListOnDOM from '../markup-injectors/update-tasklist-dom-injection.js';
import getParentElement from '../utils/get-parent-element-id.js';
import updateCompletedTaskStyles from '../utils/updateCompletedTaskStyles.js';

if (window.localStorage.length > 0) {
  updateTaskListOnDOM.injectFullTaskList();
  updateCompletedTaskStyles();
}

document.querySelector('[data-refresh-btn]').addEventListener('click', () => {
  window.location.reload();
});

// * START of [Add New Task]

document.querySelector('[data-add-task]').addEventListener('click', () => {
  const taskData = document.querySelector('[name="new-task"]');
  if (!taskData.value) {
    return;
  }
  const taskList = new TaskManager();
  taskList.addNewTask({ description: taskData.value });
  updateTaskListOnDOM.injectLastTask();
  window.location.reload();
});

// * START of [Task Edition]

document.querySelectorAll('[data-task]').forEach((taskInput) => {
  taskInput.addEventListener('click', () => {
    taskInput.readOnly = false;
    taskInput.style.background = '#2ecd2e32';
  });

  taskInput.addEventListener('keyup', () => {
    const parentDiv = getParentElement(taskInput, 'div');
    const taskList = new TaskManager();
    taskList.updateTask({
      index: parentDiv.id,
      description: taskInput.value
    });
  });

  document.addEventListener('click', (event) => {
    if (!taskInput.contains(event.target)) {
      // ? user has clicked outside input
      taskInput.style.background = 'transparent';
    }
  });
});

// * START of [Task Checked]

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

// * START of [Task Single Deletion]

document.querySelectorAll('[data-delete-task]').forEach((button) => {
  button.addEventListener('click', () => {
    const parentDiv = getParentElement(button, 'div');
    const taskList = new TaskManager();
    taskList.removeTask(parentDiv.id);
    window.location.reload();
  });
});

// * START of [Task Multiple Deletion]

document.querySelector('[data-clear-all-btn]').addEventListener('click', () => {
  const taskList = new TaskManager();
  taskList.removeCompletedTasks();
  window.location.reload();
});

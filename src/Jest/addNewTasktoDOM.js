// import TaskManager from '../js/user-controller/task-manager-class.js';
import createTaskTemplate from '../js/markup-templates/create-task-template.js';

const injectLastTask = (taskListHolder, taskList) => {
  // // const taskListHolder = document.querySelector('[data-task-list-holder]');

  // const taskList = new TaskManager().getTaskList();
  const lastTask = taskList[taskList.length - 1];
  const taskElement = createTaskTemplate(lastTask);
  taskListHolder.appendChild(taskElement);
};

module.exports = injectLastTask;

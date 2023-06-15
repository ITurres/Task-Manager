import TaskManager from '../user-controller/task-manager-class.js';
import createTaskTemplate from '../markup-templates/create-task-template.js';

const taskListHolder = document.querySelector('[data-task-list-holder]');

const injectFullTaskList = () => {
  const taskList = new TaskManager().getTaskList();
  taskList.forEach((task) => {
    taskListHolder.innerHTML += createTaskTemplate(task);
  });
};

const injectLastTask = () => {
  const taskList = new TaskManager().getTaskList();
  taskListHolder.innerHTML += createTaskTemplate(taskList[taskList.length - 1]);
};

const updateTaskListOnDOM = {
  injectFullTaskList,
  injectLastTask
};

export default updateTaskListOnDOM;

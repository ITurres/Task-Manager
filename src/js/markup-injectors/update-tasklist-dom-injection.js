import TaskManager from '../user-controller/task-manager-class.js';
import createTaskTemplate from '../markup-templates/create-task-template.js';

const updateTaskListOnDOM = () => {
  const taskListHolder = document.querySelector('[data-task-list-holder]');
  const taskList = new TaskManager().getTaskList();
  taskList.forEach((task) => {
    taskListHolder.innerHTML += createTaskTemplate(task);
  });
};

export default updateTaskListOnDOM;

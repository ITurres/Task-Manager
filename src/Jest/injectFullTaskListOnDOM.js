import createTaskTemplate from '../js/markup-templates/create-task-template.js';

const injectFullTaskList = (taskListHolder, taskList) => {
  taskList.forEach((task) => {
    taskListHolder.innerHTML += createTaskTemplate(task);
  });
};

module.exports = injectFullTaskList;

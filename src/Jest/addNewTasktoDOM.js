import createTaskTemplate from '../js/markup-templates/create-task-template.js';

const injectLastTask = (taskListHolder, taskList) => {
  const lastTask = taskList[taskList.length - 1];
  taskListHolder.innerHTML += createTaskTemplate(lastTask);
};

module.exports = injectLastTask;

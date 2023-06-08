import TaskManager from '../user-controller/task-manager-class.js';
import createTaskTemplate from '../markup-templates/create-task-template.js';

const updateTaskListOnDOM = (updateWhen) => {
  const taskListHolder = document.querySelector('[data-task-list-holder]');
  const taskList = new TaskManager().getTaskList();
  if (updateWhen === 'lastTask') {
    taskListHolder.innerHTML += createTaskTemplate(
      taskList[taskList.length - 1]
    );
  } else if (updateWhen === 'fullList') {
    taskList.forEach((task) => {
      taskListHolder.innerHTML += createTaskTemplate(task);
    });
  }
};

export default updateTaskListOnDOM;

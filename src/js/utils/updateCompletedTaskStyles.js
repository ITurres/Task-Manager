const updateCompletedTaskStyles = () => {
  const taskHolder = document.querySelectorAll('[data-task-holder]');
  taskHolder.forEach((task) => {
    const taskCheckboxInput = task.children[0];
    if (JSON.parse(taskCheckboxInput.dataset.completed) === true) {
      task.classList.add('task-completed');
      taskCheckboxInput.checked = true;
    }
  });
};

export default updateCompletedTaskStyles;

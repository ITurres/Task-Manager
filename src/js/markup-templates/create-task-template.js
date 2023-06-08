const createTaskTemplate = (
  task
) => `<div id="${task.index}" class="w-100 p-3 ps-2 d-flex"
  data-task-holder
>
<input type="checkbox" class="m-2" data-task-checkbox
  data-completed="${task.completed}"
/>
<input
  type="text"
  value="${task.description}"
  class="border-0 ps-2 w-100"
  data-task
  readonly
/>
<button
  type="button"
  class="my-button draggable align-self-start ms-3"
  data-draggable-task
>
  <i class="fa-solid fa-ellipsis-vertical"></i>
</button>
</div>`;

export default createTaskTemplate;

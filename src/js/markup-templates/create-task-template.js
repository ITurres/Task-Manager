const createTaskTemplate = (task) => `<div class="w-100 p-3 ps-2 d-flex">
<input type="checkbox" name="task-complete" class="m-2" />
<input
  type="text"
  value="${task.description}"
  class="border-0 ps-2 w-100"
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

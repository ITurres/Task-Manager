class TaskManager {
  constructor() {
    this.taskList = JSON.parse(localStorage.getItem('taskList')) || [];
  }

  updateLocalStorage() {
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  addNewTask(task) {
    this.taskList.push({
      description: task.description,
      completed: false,
      index: this.taskList.length
    });
    this.updateLocalStorage();
  }

  updateTask(task) {
    if (task.index in this.taskList) {
      if ('description' in task) {
        this.taskList[task.index].description = task.description;
      }
      if ('completed' in task) {
        this.taskList[task.index].completed = task.completed;
      }
      this.updateLocalStorage();
    }
  }

  removeCompletedTasks() {
    this.taskList = this.taskList.filter((task) => !task.completed);
    this.updateTaskIndex();
    this.updateLocalStorage();
  }

  updateTaskIndex() {
    this.taskList.forEach((task, index) => {
      task.index = index;
    });
  }

  getTaskList() {
    return this.taskList;
  }
}

export default TaskManager;

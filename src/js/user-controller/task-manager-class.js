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
      this.taskList[task.index].description = task.newDescription;
      this.updateLocalStorage();
    }
  }

  removeTask(taskIndex) {
    this.taskList.splice(taskIndex, 1);
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

class TaskManager {
  constructor() {
    this.taskList = [
      {
        description: 'wash the dishes',
        completed: false,
        index: 1
      },
      {
        description: 'complete To Do list project',
        completed: false,
        index: 2
      }
    ];
  }

  getTaskList() {
    return this.taskList;
  }
}

export default TaskManager;

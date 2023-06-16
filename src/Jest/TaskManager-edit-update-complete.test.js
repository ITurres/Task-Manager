/**
 * @jest-environment jsdom
 */

const TaskManager = require('./TaskManager-toTest.js');
const injectFullTaskList = require('./injectFullTaskListOnDOM.js');

describe('TaskManager - Edit task description on LocalStorage', () => {
  let taskList;

  beforeEach(() => {
    taskList = new TaskManager();
  });

  afterEach(() => {
    taskList = null;
    localStorage.clear();
  });

  test('Should update a task description of the taskList array', () => {
    taskList.addNewTask({ description: 'New Task Test 5' });

    taskList.updateTask({ index: 0, description: 'Updated Task Test 5' });

    expect(taskList.getTaskList()[0].description).toBe('Updated Task Test 5');
  });
});

describe('TaskManager - Update task completed property on LocalStorage', () => {
  let taskList;

  beforeEach(() => {
    taskList = new TaskManager();
  });

  afterEach(() => {
    taskList = null;
    localStorage.clear();
  });

  test('Should update a task completed property', () => {
    taskList.addNewTask({ description: 'New Task Test 6' });

    taskList.updateTask({ index: 0, completed: true });

    expect(taskList.getTaskList()[0].completed).toBeTruthy();
  });
});

describe('TaskManager - Clear all Completed tasks from the DOM', () => {
  let taskList;
  let taskListHolder;

  beforeEach(() => {
    taskList = new TaskManager();
    taskListHolder = document.createElement('div');
    taskListHolder.setAttribute('data-task-list-holder', '');
    document.body.appendChild(taskListHolder);
  });

  afterEach(() => {
    document.body.innerHTML = '';
    taskList = null;
    taskListHolder = null;
    localStorage.clear();
  });

  test('Should Remove all Completed tasks from the DOM', () => {
    taskList.addNewTask({ description: 'Task 1 - Test 7' });
    taskList.addNewTask({ description: 'Task 2 - Test 7' });

    taskList.updateTask({ index: 0, completed: true });

    taskList.removeCompletedTasks();

    const tasklistElements = taskList.getTaskList();

    injectFullTaskList(taskListHolder, tasklistElements);

    const allItemsOnTheHolder = document.querySelectorAll(
      '[data-task-list-holder] div'
    );

    expect(allItemsOnTheHolder).toHaveLength(1);
  });
});

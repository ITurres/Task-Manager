/**
 * @jest-environment jsdom
 */

const TaskManager = require('./TaskManager-toTest.js');
// const injectFullTaskList = require('./injectFullTaskListOnDOM.js');

describe('TaskManager - Edit task description on LocalStorage', () => {
  let taskList;

  beforeEach(() => {
    taskList = new TaskManager();
  });

  afterEach(() => {
    taskList = null;
    localStorage.clear();
  });

  test('Should update an element description of the taskList array', () => {
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

  test('Should update an element completed property', () => {
    taskList.addNewTask({ description: 'New Task Test 6' });

    taskList.updateTask({ index: 0, completed: true });

    expect(taskList.getTaskList()[0].completed).toBeTruthy();
  });
});
/**
 * @jest-environment jsdom
 */

const TaskManager = require('./TaskManager-toTest.js');

describe('TaskManager - add New Task to LocalStorage', () => {
  let taskList;

  beforeEach(() => {
    taskList = new TaskManager();
    document.body.innerHTML = '<input type="text" value="" id="add-task"/>';
  });

  afterEach(() => {
    document.body.innerHTML = '';
    taskList = null;
  });

  test('Should add a new element to the taskList array', () => {
    const newTaskDescription = 'New Task';

    document.querySelector('#add-task').value = newTaskDescription;

    taskList.addNewTask({ description: newTaskDescription });

    expect(taskList.getTaskList().length).toBe(1);
  });
});

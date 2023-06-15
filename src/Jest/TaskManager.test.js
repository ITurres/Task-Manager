/**
 * @jest-environment jsdom
 */

const TaskManager = require('./TaskManager-toTest.js');

jest.mock('./TaskManager-toTest.js', () => [
  {
    description: 'Task 1',
    completed: false,
    index: 0
  },
  {
    description: 'Task 2',
    completed: false,
    index: 1
  },
  {
    description: 'Task 3',
    completed: false,
    index: 2
  }
]);

describe('#addNewTask method', () => {
  beforeEach(() => {
    document.body.innerHTML = '<input type="text" value="" id="add-task"/>';
  });

  test('Should add a new element to the taskList array', () => {
    const taskList = new TaskManager();
    const newTaskDescription = 'Task 4';

    document.querySelector('#add-task').value = newTaskDescription;

    taskList.addNewTask({ description: newTaskDescription });

    expect(taskList.getTaskList().length).toBe(4);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });
});

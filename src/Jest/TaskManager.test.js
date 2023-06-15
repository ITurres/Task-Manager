/**
 * @jest-environment jsdom
 */

const TaskManager = require('./TaskManager-toTest.js');
const injectLastTask = require('./addNewTasktoDOM.js');

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

describe('TaskManager - add a new element to the DOM', () => {
  // let taskList;

  beforeEach(() => {
    // taskList = new TaskManager();
    document.body.innerHTML = '<div data-task-list-holder></div>';
  });

  afterEach(() => {
    document.body.innerHTML = '';
    // taskList = null;
  });

  test('Should add a new DOM elemnt after adding a new tasklist', () => {
    const arrayToDoList = document.querySelectorAll(
      '[data-task-list-holder] div'
    );
    injectLastTask();
    expect(arrayToDoList).toHaveLength(1);
  });
});

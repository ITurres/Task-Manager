/**
 * @jest-environment jsdom
 */

jest.mock('./addNewTasktoDOM.js');

const TaskManager = require('./TaskManager-toTest.js');
const injectLastTask = require('./addNewTasktoDOM.js');

describe('TaskManager - add New Task to LocalStorage', () => {
  let taskList;

  beforeEach(() => {
    taskList = new TaskManager();
  });

  afterEach(() => {
    taskList = null;
  });

  test('Should add a new element to the taskList array', () => {
    taskList.addNewTask({ description: 'New Task' });

    expect(taskList.getTaskList().length).toBe(1);
  });
});

describe('TaskManager - add a new element to the DOM', () => {
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
  });

  test('Should add a new DOM elemnt after adding a new tasklist', () => {
    taskList.addNewTask({ description: 'newTask' });
    const initialElementCount = taskListHolder.querySelectorAll('div').length;
    injectLastTask(taskListHolder, taskList.getTaskList());
    const updatedElementCount = taskListHolder.querySelectorAll('div').length;
    expect(updatedElementCount).toBe(initialElementCount + 1);
  });
});

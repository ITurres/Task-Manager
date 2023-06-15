/**
 * @jest-environment jsdom
 */

const TaskManager = require('./TaskManager-toTest.js');
const injectLastTask = require('./addNewTasktoDOM.js');

describe('TaskManager - add New Task to LocalStorage', () => {
  let taskList;

  beforeEach(() => {
    taskList = new TaskManager();
  });

  afterEach(() => {
    taskList = null;
    localStorage.clear();
  });

  test('Should add a new element to the taskList array', () => {
    taskList.addNewTask({ description: 'New Task Test 1' });

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

  test('Should add a new DOM element after adding a new tasklist', () => {
    taskList.addNewTask({ description: 'new Task Test 2' });

    const tasklistElements = taskList.getTaskList();

    injectLastTask(taskListHolder, tasklistElements);

    const updatedElementCount = document.querySelectorAll(
      '[data-task-list-holder] div'
    );

    expect(updatedElementCount).toHaveLength(1);
  });
});

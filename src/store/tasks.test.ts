import { addTask, toggleTask, deleteTask, clearCompleted, setFilter, $filter } from './tasks';
import { $tasks, $filteredTasks } from './tasks';

jest.useFakeTimers();

describe('Tasks Store', () => {
  beforeEach(() => {
    // clear state before tests
    $tasks.reinit();
    $filteredTasks.reinit();
  });

  test('should add a new task', () => {
    addTask('New task');
    const tasks = $tasks.getState();
    expect(tasks).toHaveLength(1);
    expect(tasks[0].text).toBe('New task');
    expect(tasks[0].completed).toBe(false);
  });

  test('new task should be first in list', () => {
    addTask('Task to be third in the list');
    addTask('Task to be second in the list');
    addTask('Task to be first in the list');
    const firstTaskText = $tasks.getState()[0].text;
    const secondTaskText = $tasks.getState()[1].text;
    const thirdTaskText = $tasks.getState()[2].text;
    expect(firstTaskText).toBe('Task to be first in the list');
    expect(secondTaskText).toBe('Task to be second in the list');
    expect(thirdTaskText).toBe('Task to be third in the list');
  });

  test('should toggle task from active to completed', () => {
    addTask('Task to be completed');
    const id = $tasks.getState()[0].id;
    toggleTask(id);
    const updated = $tasks.getState()[0];
    expect(updated.completed).toBe(true);
  });

  test('should toggle task from completed to active', () => {
    addTask('Task to be active again');
    const id = $tasks.getState()[0].id;
    toggleTask(id);
    toggleTask(id);
    const updated = $tasks.getState()[0];
    expect(updated.completed).toBe(false);
  });

  test('should delete task by id', () => {
    addTask('Task to delete');
    const id = $tasks.getState()[0].id;
    deleteTask(id);
    expect($tasks.getState()).toHaveLength(0);
  });

  test('setFilter should update filter', () => {
    setFilter('completed');
    expect($filter.getState()).toBe('completed');
  });

  test('should clear completed tasks', () => {
    addTask('1 Task to be active'); //3 in the list
    addTask('2 Task to be completed'); //2 in the list
    addTask('3 Task to be completed'); //1 in the list
    const thirdTaskId = $tasks.getState()[0].id; //1 in the list
    const secondTaskId = $tasks.getState()[1].id; //2 in the list

    toggleTask(thirdTaskId);
    toggleTask(secondTaskId);
    setFilter('completed');

    jest.advanceTimersByTime(0);

    const filtered = $filteredTasks.getState();
    jest.advanceTimersByTime(0);

    expect(filtered).toHaveLength(2);

    clearCompleted();
    jest.advanceTimersByTime(0);

    const tasksAfterClear = $tasks.getState();
    const filteredAfterClear = $filteredTasks.getState();

    expect(filteredAfterClear).toHaveLength(0);
    expect(tasksAfterClear).toHaveLength(1);
    expect(tasksAfterClear[0].text).toBe('1 Task to be active');
  });

  test('should filter completed tasks', () => {
    addTask('1 Task to be active'); //3 in the list
    addTask('2 Task to be completed'); //2 in the list
    addTask('3 Task to be completed'); //1 in the list
    const thirdTaskId = $tasks.getState()[0].id; //1 in the list
    const secondTaskId = $tasks.getState()[1].id; //2 in the list

    toggleTask(thirdTaskId);
    toggleTask(secondTaskId);
    setFilter('completed');

    jest.advanceTimersByTime(0);

    const filtered = $filteredTasks.getState();
    expect(filtered).toHaveLength(2);
    expect(filtered[0].text).toBe('3 Task to be completed');
    expect(filtered[1].text).toBe('2 Task to be completed');
    expect(filtered[0].completed).toBe(true);
    expect(filtered[1].completed).toBe(true);
  });

  test('should filter tasks by active', () => {
    addTask('Task to be active');
    addTask('Task to be completed');
    const completedId = $tasks.getState()[0].id; // index 0
    toggleTask(completedId);
    setFilter('active');
    jest.advanceTimersByTime(0);
    const filtered = $filteredTasks.getState();
    expect(filtered).toHaveLength(1);
    expect(filtered[0].completed).toBe(false);
  });
});

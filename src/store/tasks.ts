import { createEvent, createStore, sample, createEffect } from 'effector';
import { Task } from '../types/Task';

//  Events
export const addTask = createEvent<string>('addTask');
export const toggleTask = createEvent<number>('toggleTask');
export const deleteTask = createEvent<number>('deleteTask');
export const clearCompleted = createEvent('clearCompleted');
export const setFilter = createEvent<'all' | 'active' | 'completed'>('setFilter');

//  Local storage effects
export const saveTasksFx = createEffect((tasks: Task[]) => {
  localStorage.setItem('todo-tasks', JSON.stringify(tasks));
});

export const loadTasksFx = createEffect(() => {
  const saved = localStorage.getItem('todo-tasks');
  return saved ? JSON.parse(saved) : [];
});

//  Stores
export const $tasks = createStore<Task[]>([]).on(loadTasksFx.doneData, (_, tasks) => tasks);
export const $filter = createStore<'all' | 'active' | 'completed'>('all');
export const $activeCount = $tasks.map((tasks) => tasks.filter((task) => !task.completed).length);
export const $completedCount = $tasks.map((tasks) => tasks.filter((task) => task.completed).length);
export const $totalCount = $tasks.map((tasks) => tasks.length);
export const $filteredTasks = createStore<Task[]>([]);

sample({
  source: {
    tasks: $tasks,
    filter: $filter,
  },
  clock: [$tasks.updates, $filter.updates],
  fn: ({ tasks, filter }) => {
    if (filter === 'active') return tasks.filter((task) => !task.completed);
    if (filter === 'completed') return tasks.filter((task) => task.completed);
    return tasks;
  },
  target: $filteredTasks,
});

// Event listener
$tasks
  .on(addTask, (prev, text) => [{ id: Date.now() + Math.random(), text, completed: false }, ...prev])
  .on(toggleTask, (prev, id) => prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  .on(deleteTask, (prev, id) => prev.filter((task) => task.id !== id))
  .on(clearCompleted, (prev) => prev.filter((task) => !task.completed));

$filter.on(setFilter, (_, filter) => filter);

// Save data to localStorage if $tasks changes
sample({
  source: $tasks,
  clock: $tasks.updates,
  target: saveTasksFx,
});

// Initial load
const initApp = createEvent();
sample({
  clock: initApp,
  target: loadTasksFx,
});

// Initialization
initApp();

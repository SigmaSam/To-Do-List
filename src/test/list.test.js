import * as list from '../modules/list';
import * as func from '../modules/functions';

const newChore = new func.Chore('title', 'description text', '2020-09-12', '2');
const newChore2 = new func.Chore('title 2', 'description text 2', '2020-04-12', '1');
newChore.group = 'group 1';
newChore2.group = 'group 2';
const testChores = func.chores

test('sortPrio changes the order from low to high if the first chore has not low priority', () => {
  func.addChore(newChore);
  func.addChore(newChore2);
  list.sortPrio();
  expect(func.chores[0]).toBe(newChore2);
});

test('sortPrio changes the order from high to low if the first chore has low priority', () => {
  list.sortPrio();
  expect(func.chores[0]).toBe(newChore);
});

test('sortTime changes the order first to last date if the first chore has a date before than the second chore', () => {
  list.sortTime();
  expect(func.chores[0]).toBe(newChore2);
});

test('sortTime changes the order last to first date if the first chore has a date after than the second chore', () => {
  list.sortTime();
  expect(func.chores[0]).toBe(newChore);
}); 

test('cleanGrid cleans all child elements in the grid', () => {
  const element = document.createElement('div');
  const li = document.createElement('div');
  element.appendChild(li);
  list.cleanGrid(element);
  expect(element.hasChildNodes()).toBe(true);
});

// test('filteredTask returns chores filtered by group', () => {
//   testChores.list.filteredTasks(newChore.group);
//   expect(func.chores.length).toBe(1)
// });

test('project returns all chores', () => {
  list.project();
  expect(func.chores.length).toBe(2)
});
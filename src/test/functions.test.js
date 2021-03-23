import * as func from '../modules/functions';

const newChore = new func.Chore('title', 'description text', '2020-09-12', 'mid');
const newChore2 = new func.Chore('title 2', 'description text 2', '2020-04-12', 'low');
const emptyChore = new func.Chore();

test('addChore push a chore into chores array', () => {
  func.addChore(newChore);
  expect(func.chores[0]).toBe(newChore);
});

test('addChore does not push an empty chore into chores array', () => {
  func.addChore(emptyChore);
  expect(func.chores.length).toBe(1);
});

test('removeChore delete a specific chore in chores array', () => {
  func.addChore(newChore2);
  func.removeChore(newChore);
  expect(func.chores[0]).toBe(newChore2);
});

test('addGroup push a group into groups array', () => {
  func.addGroup('new group');
  expect(func.groups[0]).toBe('new group');
});

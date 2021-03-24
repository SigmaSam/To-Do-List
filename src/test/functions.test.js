import * as func from '../modules/functions';

const newChore = new func.Chore('title', 'description text', '2020-09-12', 'mid');
const newChore2 = new func.Chore('title 2', 'description text 2', '2020-04-12', 'low');
const emptyChore = new func.Chore();
const task = [
  {
    title: 'test',
    description: 'description text',
    time: '2020-12-24',
  },
  {
    title: '',
    description: '',
    time: '',
  },
];

test('addChore push a chore into chores array', () => {
  func.addChore(newChore);
  expect(func.chores[0]).toBe(newChore);
});

test('addChore does not push an empty chore into chores array', () => {
  func.addChore(emptyChore);
  expect(func.chores.length).toBe(1);
});

test('saveLocalChore saves the item in to the local memory.', () => {
  func.saveLocalChore();
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

test('saveLocalGroup saves the group in to the local memory.', () => {
  func.saveLocalGroup();
  expect(func.groups.length).toBe(1);
});

test('validateForm returns true if the inputs are not empty', () => {
  expect(func.validateForm(task[0].title, task[0].description, task[0].time)).toBe(true);
});

test('validateForm returns false if the inputs are empty', () => {
  expect(func.validateForm(task[1].title, task[1].description, task[1].time)).toBe(false);
});

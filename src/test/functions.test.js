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

test('editChore changes the values of a specific chore', () => {
  const body = document.querySelector('body');
  const div = document.createElement('div');
  div.setAttribute('id', 'editModal');
  const form = document.createElement('form');
  const title = document.createElement('input');
  const description = document.createElement('input');
  const time = document.createElement('input');
  const priority = document.createElement('input');
  const group = document.createElement('input');

  title.setAttribute('value', 'changed');
  description.setAttribute('value', 'desc');
  time.setAttribute('value', '2020-12-12');
  priority.setAttribute('value', '1');
  group.setAttribute('value', 'group changed');

  form[0] = title;
  form[1] = description;
  form[2] = time;
  form[3] = priority;
  form[4] = group;
  div.appendChild(form);
  body.appendChild(div);
  func.editChore(newChore2);
  expect(func.chores[0].title).toBe('changed');
});

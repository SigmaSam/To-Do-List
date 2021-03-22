import { addChore, Chore, chores } from '../modules/functions';

const newChore = new Chore ('title','description text','2020-09-12','mid')
let emptyChore = new Chore ()

test('addChore push a chore into chores array', () => {
    addChore(newChore);
    expect(chores[0]).toBe(newChore);
});

test('addChore does not push an empty chore into chores array', () => {
    addChore(emptyChore);
    expect(chores.length).toBe(1);
});
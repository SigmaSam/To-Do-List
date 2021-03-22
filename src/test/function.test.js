const Functions = require

const newCHore = new Chore ('title','description text','2020-09-12','mid')
const emptyChores = []

test('Adds a new chore', () => {
    expect(addChore(newChore)).toBe(true)
});
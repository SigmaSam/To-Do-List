const chores = JSON.parse(localStorage.getItem('chores')) || [];
const groups = JSON.parse(localStorage.getItem('groups')) || [];

class Chore {
  constructor(title = '', description = '', time = '', priority, group = false, status = false) {
    this.title = title;
    this.description = description;
    this.time = time;
    this.priority = priority;
    this.status = status;
    this.group = group;
  }
}

const saveLocalChore = () => {
  localStorage.setItem('chores', JSON.stringify(chores));
};
const saveLocalGroup = () => {
  localStorage.setItem('groups', JSON.stringify(groups));
};

const addChore = (chore) => {
  const val = validateForm(chore.title, chore.description, chore.time);
  if (val) {
    chores.push(chore);
    saveLocalChore();
  }
};

const removeChore = (chore) => {
  const index = chores.indexOf(chore);
  chores.splice(index, 1);
  saveLocalChore();
  window.location.reload();
};

const addGroup = (name) => {
  groups.push(name);
  saveLocalGroup();
};

const validateForm = (title, desc, time) => {
  if (title.length < 1) {
    return false;
  }
  if (desc.length < 1) {
    return false;
  }
  if (time.length < 1) {
    return false;
  }
  return true;
}

const addNewChore = () => {
  const form = document.getElementsByTagName('form');
  const inputs = form[0];
  const textarea = document.getElementsByTagName('textarea');
  const title = inputs[0].value;
  const description = textarea[0].value;
  const time = inputs[2].value;
  const priority = inputs[3].value;
  const group = inputs[4].value;
  const status = false;

  const newChore = new Chore(title, description, time, priority, group, status);
  addChore(newChore);
};

const editChore = (chore) => {
  const index = chores.indexOf(chore);
  const div = document.querySelector('#editModal');
  const form = div.firstElementChild;
  chores[index].title = form[0].value;
  chores[index].description = form[1].value;
  chores[index].time = form[2].value;
  chores[index].priority = form[3].value;
  chores[index].group = form[4].value;
  saveLocalChore();
  window.location.reload();
};

const addNewGroup = () => {
  const form = document.getElementById('groupForm');
  const group = form[0].value;
  addGroup(group);
};

export {
  chores, groups, addNewChore, saveLocalChore, saveLocalGroup, addNewGroup, removeChore, editChore, addChore, Chore, validateForm, addGroup,
};
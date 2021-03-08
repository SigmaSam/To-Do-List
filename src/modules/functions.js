const chores =  JSON.parse(localStorage.getItem('chores')) || [];
const groups =  JSON.parse(localStorage.getItem('groups')) || [];

class Chore { 
    constructor(title, description, time, priority, group, status = false) {
      this.title = title;
      this.description = description;
      this.time = time;
      this.priority = priority;
      this.group = group;
    } 
};

const saveLocalChore = () => {
    localStorage.setItem('chores', JSON.stringify(chores));
}
const saveLocalGroup= () => {
    localStorage.setItem('groups', JSON.stringify(groups));
}
  
const addChore = (chore) => {
    chores.push(chore);
    saveLocalChore();
}
const addGroup = (name) => {
    groups.push(name);
    saveLocalGroup();
}

function addNewChore() {
    const form = document.getElementsByTagName('form')
    const inputs = form[0]
    const textarea = document.getElementsByTagName('textarea');
    const title = inputs[0].value;
    const description = textarea[0].value;
    const time = inputs[2].value;
    const priority = inputs[3].value;
    const status = false

    const newChore = new Chore(title, description, time, priority, status);

    addChore(newChore);
};

const addNewGroup =  () => {
    const form = document.getElementById('groupForm');
    const group = form[0].value;
    addGroup(group);
}


export {chores, groups, addNewChore, saveLocalChore, saveLocalGroup, addNewGroup };
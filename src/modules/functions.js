const chores =  JSON.parse(localStorage.getItem('chores')) || [];

class Chore { 
    constructor(title, description, time, priority, group, status = false) {
      this.title = title;
      this.description = description;
      this.time = time;
      this.priority = priority;
      this.group = group;
    } 
};

const saveLocal = () => {
    localStorage.setItem('chores', JSON.stringify(chores));
}
  
const addChore = (chore) => {
    chores.push(chore);
    saveLocal();
}

const addGroup = (group) => {
    console.log('cat')
    chores.push(group);
    chores[group] = {};
    console.log('cat')
    saveLocal();   
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

const addNewGroup =  (name) => {
    const inputs = document.getElementsByTagName('input');
    const group = inputs[0].value;
    
    addGroup(group);
    saveLocal();
}


export {chores,addNewChore, saveLocal, addNewGroup };
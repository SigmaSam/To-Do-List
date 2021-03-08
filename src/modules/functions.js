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

const addGroup = () => {
    console.log('cat');
}

function addNewChore() {
    const inputs = document.getElementsByTagName('input');
    const textarea = document.getElementsByTagName('textarea');
    const title = inputs[0].value;
    const description = textarea[0].value;
    const time = inputs[1].value;
    const priority = inputs[2].value;
    const status = false

    const newChore = new Chore(title, description, time, priority,status);

    addChore(newChore);
    console.log('hello world');
};

const addNewGroup =  (name) => {
    console.log('cat');
    saveLocal();
}


export {chores,addNewChore, saveLocal, addNewGroup };
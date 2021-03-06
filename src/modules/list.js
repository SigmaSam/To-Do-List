import {chores,saveLocal} from './functions';

const list = chores;

const todos = (projects) => {
  const todos = [];
    list.forEach(chore => {
      todos.push(chore)
    });
  return todos;
};

const showTodos = (chores) => {
  const grid = document.getElementById('grid');



  chores.forEach(chore => {
    const cont = document.createElement('div');
    cont.className = 'flex justify-between w-full';

    const title = document.createElement('div')
    title.className = 'border border-white bg-gray-300 text-bold font-mono text-center rounded w-1/5'
    title.textContent = chore['title']

    const description = document.createElement('div')
    description.className = 'border border-white bg-gray-300 text-bold font-mono text-center rounded w-1/5'
    description.textContent = chore['description']
    
    const time = document.createElement('div')
    time.className = 'border border-white bg-gray-300 text-bold font-mono text-center rounded w-1/5'
    time.textContent = chore['time']

    const priority = document.createElement('div')
    priority.className = 'border border-white bg-gray-300 text-bold font-mono text-center rounded w-1/5'

    const prioValue = (arg) => { if (arg == 1) {
      return priority.textContent = 'Low';
    } else if (arg == 2) {
      return priority.textContent = 'Mid';
      } else {
        return priority.textContent = 'High';
      }
    }

    prioValue(chore['priority']);
     
    const checkBox = document.createElement('div');
    checkBox.className = 'w-1/5 border border-white bg-gray-300 rounded flex justify-center';

    const status = document.createElement('input')
    status.setAttribute('id','check');
    status.setAttribute('type','checkbox'); 
    
   if (chore['status'] === true) {
    status.value = true;
   };

    cont.appendChild(title);
    cont.appendChild(description);
    cont.appendChild(time);
    cont.appendChild(priority);
    checkBox.appendChild(status);
    cont.appendChild(checkBox);
    grid.appendChild(cont);
  })
}

const project = () => {
  const all = list;
  const projects = Object.keys(all)
  const allTodos = todos(projects)
  showTodos(allTodos);
}

export default project;
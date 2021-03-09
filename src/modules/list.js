import {chores, saveLocalChore} from './functions';

const list = chores;

const todos = (projects) => {
  const todos = [];
    list.forEach(chore => {
      todos.push(chore)
    });
  return todos;
};

const cleanGrid = () => {
  const del = document.getElementsByClassName('flex justify-between w-full chore-row')
  while(del[0]) {
    del[0].parentNode.removeChild(del[0])
  }
}

const showTodos = (chores) => {
  const grid = document.getElementById('grid');
  
  chores.forEach(chore => {
    const cont = document.createElement('div');
    cont.setAttribute('id',chore['title'])
    cont.className = 'flex justify-between w-full bg-gray-300 font-mono font-sm chore-row';

    const title = document.createElement('div')
    title.className = 'border border-white text-bold font-mono text-center rounded w-1/5'
    title.textContent = chore['title']

    const description = document.createElement('div')
    description.className = 'border border-white text-bold font-mono text-center rounded w-1/5'
    description.textContent = chore['description']
    
    const time = document.createElement('div')
    time.className = 'border border-white text-bold font-mono text-center rounded w-1/5'
    time.textContent = chore['time']

    const priority = document.createElement('div')
    priority.className = 'border border-white text-bold font-mono text-center rounded w-1/5'

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
    checkBox.className = 'w-1/5 border border-white rounded flex justify-center';

    const status = document.createElement('button')
    status.className = 'border border-black bg-white font-bold px-1 rounded'
    status.innertext = chore['status'] === true ? status.textContent = 'Done' : status.textContent = 'To Do';
    
    const changeStatus = () => {
      chore['status'] === true ? chore['status'] = false : chore['status'] = true;
      saveLocalChore();
      chore['status'] === true ? status.textContent = 'Done' : status.textContent = 'To Do'
      window.location.reload();
    }
    
    status.addEventListener('click', changeStatus); 
    
    cont.appendChild(title);
    cont.appendChild(description);
    cont.appendChild(time);
    cont.appendChild(priority);
    checkBox.appendChild(status);
    cont.appendChild(checkBox);
    grid.appendChild(cont);
  })
}

const sortPrio = () => {
  chores.sort((a, b) => {
    if (chores[0].priority === '1') {
      if (a.priority < b.priority) {
        return 1;
      }
      if (a.priority > b.priority) {
        return -1;
      }
      return 0;
    } else {
      if (a.priority > b.priority) {
        return 1;
      }
      if (a.priority < b.priority) {
        return -1;
      }
      return 0;
    }
  })
  cleanGrid();
  showTodos(chores);
}

const sortTime = () => {
  const first = document.getElementsByClassName('flex justify-between w-full chore-row')
  console.log(first)
  chores.sort((a, b) => {
    if (chores[0].time < chores[chores.length-1].time) {
      if (a.time < b.time) {
        return 1;
      }
      if (a.time > b.time) {
        return -1;
      }
      return 0;
    } else {
      if (a.time > b.time) {
        return 1;
      }
      if (a.time < b.time) {
        return -1;
      }
      return 0;
    }
  })
  cleanGrid();
  showTodos(chores);
}

const project = () => {
  const all = list;
  const projects = Object.keys(all)
  const allTodos = todos(projects)
  showTodos(allTodos);
}

export {project, sortPrio, sortTime};
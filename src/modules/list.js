const list = {
  'project1': [{'title':'todo1',
                'description':'something',
                'time':'play',
                'priority':'low',
                'status':'true'},
                {'title':'todo2',
                'description':'something to do',
                'time':'1233',
                'priority':'mid',
                'status':'false'}],
  'project2': [{'title':'todo3',
                'description':'something to do',
                'time':'3322',
                'priority':'low',
                'status': 'false'}]
}

const todos = (projects) => {
  const todos = [];
  projects.forEach(project =>
    list[project].forEach(chore => {
      todos.push(chore)
    })
  )
  return todos;
}

const showTodos = (chores) => {
  const grid = document.getElementById('grid')
  chores.forEach(chore => {
    const title = document.createElement('div')
    title.className = 'border border-white bg-blue-200 text-bold font-mono text-center rounded'
    title.textContent = chore['title']

    const description = document.createElement('div')
    description.className = 'border border-white bg-blue-200 text-bold font-mono text-center rounded'
    description.textContent = chore['description']
    
    const time = document.createElement('div')
    time.className = 'border border-white bg-blue-200 text-bold font-mono text-center rounded'
    time.textContent = chore['time']

    const priority = document.createElement('div')
    priority.className = 'border border-white bg-blue-200 text-bold font-mono text-center rounded'
    priority.textContent = chore['priority']

    const status = document.createElement('div')
    status.className = 'border border-white bg-blue-200 text-bold font-mono text-center rounded'
    status.textContent = chore['status']

    grid.appendChild(title);
    grid.appendChild(description);
    grid.appendChild(time);
    grid.appendChild(priority);
    grid.appendChild(status);
  })
}

const project = () => {
  const all = list;
  const projects = Object.keys(all)
  const allTodos = todos(projects)
  showTodos(allTodos);
}

export default project;
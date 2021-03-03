const list = {
  'project1': [{'title':'todo1',
                'description':'something to do',
                'time':'play with date-fns',
                'priority':'low'},
                {'title':'todo2',
                'description':'something to do',
                'time':'play with date-fns',
                'priority':'mid'}],
  'project2': [{'title':'todo3',
                'description':'something to do',
                'time':'play with date-fns',
                'priority':'low'}]
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
    title.className = 'border border-white bg-blue-200 text-bold font-mono text-center max-h-6 rounded'
    title.textContent = chore['title']
    const description = document.createElement('div')
    description.className = 'border border-white bg-blue-200 text-bold font-mono text-center max-h-6 rounded'
    description.textContent = chore['description']
    const time = document.createElement('div')
    time.className = 'border border-white bg-blue-200 text-bold font-mono text-center max-h-6 rounded'
    time.textContent = chore['time']
    const priority = document.createElement('div')
    priority.className = 'border border-white bg-blue-200 text-bold font-mono text-center max-h-6 rounded'
    priority.textContent = chore['priority']
    grid.appendChild(title);
    grid.appendChild(description);
    grid.appendChild(time);
    grid.appendChild(priority);
  })
}

const project = () => {
  const all = list;
  const projects = Object.keys(all)
  const allTodos = todos(projects)
  showTodos(allTodos);
}

export default project;
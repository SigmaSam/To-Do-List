const list = [
  {'project1': [{'title':'todo1',
                'description':'something to do',
                'time':'play with date-fns',
                'priority':'low'},
                {'title':'todo2',
                'description':'something to do',
                'time':'play with date-fns',
                'priority':'mid'}]},
  {'project2': [{'title':'todo3',
                'description':'something to do',
                'time':'play with date-fns',
                'priority':'low'}]}
]

const project = () => {
  const allTodo = list;
  const todos = allTodo.map((project) => {return Object.values(project)})
  console.log(todos);
}

export default project;
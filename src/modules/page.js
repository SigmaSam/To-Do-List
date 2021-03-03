const button = (name) => {
    const btn = document.createElement('button');
    btn.setAttribute('id', name);
    btn.innerHTML = name;
    btn.className = 'p-4 mx-1 rounded-full border-2 border-black ring-white font-bold text-sm capitalize italic bg-gray-400'

    return btn;
}
const addNav = () => {
    const nav = document.createElement('nav');
    nav.className = 'min-w-full bg-blue-900 h-10 flex items-center justify-center font-mono text-white font-bold';

    const logo = document.createElement('i');
    logo.className = 'fas fa-stream fa-lg ml-2';
    
    const text = document.createElement('p');
    text.textContent = 'Tu-Du List!.'
    text.className = 'ml-1 text-lg'

    nav.appendChild(logo);
    nav.appendChild(text);
  
    return nav;
  };
const addGrid = () => {
  const grid = document.createElement('div');
  grid.className = 'grilla bg-white border-2 border-grey rounded p-1 grid grid-cols-4 grid-rows-auto m-auto w-9/12 h-96 '
  
  const title = document.createElement('div');
  title.innerText = 'Chores';
  title.className = 'border border-white  bg-blue-200 text-bold font-mono text-center max-h-6 rounded'

  const desc = document.createElement('div');
  desc.innerText = 'Description';
  desc.className = 'border border-white  bg-blue-200 text-bold font-mono text-center max-h-6 rounded'

  const time = document.createElement('div');
  time.innerText = 'Created at:';
  time.className = 'border border-white  bg-blue-200 text-bold font-mono text-center max-h-6 rounded'

  const check = document.createElement('div');
  check.innerText = 'Status'
  check.className = 'border border-white  bg-blue-200 text-bold font-mono text-center max-h-6 rounded' 

  grid.appendChild(title);
  grid.appendChild(desc);
  grid.appendChild(time);
  grid.appendChild(check);

  
  return grid
}  
const addControls = () => {
    const controls = document.createElement('footer');
    controls.className = 'flex bg-blue-300 w-1/2 h-16 rounded-full position absolute bottom-0 border border-black items-center justify-center ring ring-white'

    const add = button('add');
    
    controls.appendChild(add);

    return controls
}

  const body = () => {
    const content = document.getElementById('content');
    content.className = 'min-w-screen h-screen flex flex-col items-center';

  
    const nav = addNav();
    const grid = addGrid();
    const control = addControls();

    content.appendChild(nav);
    content.appendChild(grid);
    content.appendChild(control);
  

    return content
  };
  
  export default body;
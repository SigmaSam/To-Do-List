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
  grid.setAttribute('id', 'grid');
  grid.className = 'grilla bg-white border-2 border-grey rounded p-1 flex flex-col m-auto w-9/12 h-96 lg:text-md md:text-sm';
  
  const cont = document.createElement('div');
  cont.className = 'flex justify-between w-full'

  const title = document.createElement('p');
  title.innerText = 'Chores';
  title.className = 'border border-white w-1/5  bg-blue-200 text-bold font-mono text-center  rounded';

  const desc = document.createElement('p');
  desc.innerText = 'Description';
  desc.className = 'border border-white w-1/5 bg-blue-200 text-bold font-mono text-center  rounded';

  const time = document.createElement('p');
  time.innerText = 'Due to:';
  time.className = 'border border-white w-1/5  bg-blue-200 text-bold font-mono text-center  rounded';

  const priority = document.createElement('p');
  priority.innerText = 'Priority';
  priority.className = 'border border-white w-1/5 bg-blue-200 text-bold font-mono text-center  rounded';

  const check = document.createElement('p');
  check.innerText = 'Status'
  check.className = 'border border-white w-1/5 bg-blue-200 text-bold font-mono text-center  rounded';




  cont.appendChild(title);
  cont.appendChild(desc);
  cont.appendChild(time);
  cont.appendChild(priority);
  cont.appendChild(check);
  grid.appendChild(cont);

  
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
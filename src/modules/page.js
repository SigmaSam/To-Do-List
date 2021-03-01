const button = (name) => {
    const btn = document.createElement('button');
    btn.setAttribute('id', name);
    btn.innerHTML = name;
    btn.className = 'px-2 py-1 mx-5 rounded border-2 border-black ring-white font-bold capitalize italic bg-gray-200'

    return btn;
}

const addNav = () => {
    const nav = document.createElement('nav');
    nav.className = 'min-w-full bg-blue-900 h-10 flex items-center justify-between';

    const logo = document.createElement('i');
    logo.className = 'fas fa-stream fa-lg ml-2 text-white';
    
    const opt = document.createElement('div');
    opt.className = 'flex';

    const groups = button('groups');
    const last = button('last');
    const older = button('older');

    opt.appendChild(groups);
    opt.appendChild(last);
    opt.appendChild(older);

    nav.appendChild(logo);
    nav.appendChild(opt);
  
    return nav;
  };
  

  const body = () => {
    const content = document.getElementById('content');
    content.className = 'min-w-screen h-screen flex flex-col items-center';
  
    const nav = addNav('nav');
    content.appendChild(nav);
  

    return content
  };
  
  export default body;
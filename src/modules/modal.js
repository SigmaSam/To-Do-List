import {groups} from './functions';

const modal = () => {
  const body = document.getElementById('content');
  const cont = document.createElement('div');
  cont.setAttribute('id','modal');
  cont.className = 'hidden fixed z-10 inset-0  overflow-auto bg-black bg-opacity-20 w-full h-full font-mono';

  const content = document.createElement('form');
  content.className = 'modal-content border-black bg-white flex flex-col items-center mx-auto mt-52 p-15 w-1/3 rounded border border-gray-500';

  const labelOne = document.createElement('label');
  labelOne.setAttribute('for', 'tittle');
  labelOne.innerText = 'Title';
  labelOne.className = 'font-bold';

  const inputOne = document.createElement('input');
  inputOne.setAttribute('type', 'text');
  inputOne.setAttribute('id','title');
  inputOne.setAttribute('name','title');
  inputOne.className = 'border rounded border-black';

  const labelTwo = document.createElement('label');
  labelTwo.setAttribute('for', 'description');
  labelTwo.innerText = 'Description';
  labelTwo.className = 'font-bold';

  const inputTwo = document.createElement('textarea');
  inputTwo.setAttribute('cols','19');
  inputTwo.setAttribute('rows', '3')
  inputTwo.setAttribute('id','description');
  inputTwo.setAttribute('name','description');
  inputTwo.className = 'border rounded border-black';

  const labelThree = document.createElement('label');
  labelThree.setAttribute('for', 'time');
  labelThree.innerText = 'Due to:';
  labelThree.className = 'font-bold';
  
  const inputThree = document.createElement('input');
  inputThree.setAttribute('type', 'date')
  inputThree.setAttribute('id','time');
  inputThree.setAttribute('name','time');
  inputThree.className = 'border rounded border-black text-center';

  const labelFour = document.createElement('label');
  labelFour .setAttribute('for', 'priority');
  labelFour .innerText = 'Priority';
  labelFour .className = 'font-bold';

  const inputFour = document.createElement('input');
  inputFour.setAttribute('type', 'range')
  inputFour.setAttribute('id','priority');
  inputFour.setAttribute('name','priority');
  inputFour.setAttribute('min','1');
  inputFour.setAttribute('max','3');
  inputFour.setAttribute('list','marks');
  inputFour.setAttribute('value','1');
  inputFour.className = 'border rounded border-black text-center';

  const labelFive = document.createElement('label');
  labelFive.setAttribute('for','groups');
  labelFive.innerText = 'Asign it a Group';
  labelFive.className = 'font-bold';
  
  const inputFive = document.createElement('select');
  inputFive.setAttribute('id','groups');

  const selOption = document.createElement('option');
  selOption.setAttribute('value','');
  selOption.innerText = 'Asign a Group';
  
  inputFive.appendChild(selOption);

  for (let i = 0; i < groups.length; i++) {
    const opt = document.createElement('option');
    opt.setAttribute('value',groups[i]);
    opt.innerText = groups[i];

    inputFive.appendChild(opt);
  }
    
  const butBox = document.createElement('div');
  butBox.className = 'flex justify-between';

  const newChore = document.createElement('button');
  newChore.className = 'bg-green-500 border border-black rounded px-4 py-1 m-2 mt-2';
  newChore.setAttribute('type','submit')
  newChore.setAttribute('id','newChore');
  newChore.innerText = 'Create New'

  const cancel = document.createElement('button');
  cancel.setAttribute('id','cancel');
  cancel.setAttribute('type','button');
  cancel.className = 'bg-white px-4 py-1 m-2 mt-2 rounded border border-black'
  cancel.innerText = 'Cancel';

  content.appendChild(labelOne);
  content.appendChild(inputOne);
  content.appendChild(labelTwo);
  content.appendChild(inputTwo);
  content.appendChild(labelThree);
  content.appendChild(inputThree);
  content.appendChild(labelFour);
  content.appendChild(inputFour);
  content.appendChild(labelFive);
  content.appendChild(inputFive)
  content.appendChild(butBox);
  butBox.appendChild(newChore);
  butBox.appendChild(cancel);
  cont.appendChild(content);
  body.appendChild(cont)
    
  return body;
}

const modalGroup = () => {
  const body = document.getElementById('content');
  const cont = document.createElement('div');
  cont.setAttribute('id','modalGroup');
  cont.className = 'hidden fixed z-10 inset-0  overflow-auto bg-black bg-opacity-20 w-full h-full font-mono';

  const content = document.createElement('form');
  content.className = 'modal-content border-black bg-white flex flex-col items-center mx-auto mt-52 p-15 w-1/3 rounded border border-gray-500';
  content.setAttribute('id','groupForm');

  const labelOne = document.createElement('label');
  labelOne.setAttribute('for', 'gName');
  labelOne.innerText = 'Create a Group';
  labelOne.className = 'font-bold';

  const inputOne = document.createElement('input');
  inputOne.setAttribute('type', 'text');
  inputOne.setAttribute('id','gName');
  inputOne.setAttribute('name','gName');
  inputOne.className = 'border rounded border-black';
    
  const butBox = document.createElement('div');
  butBox.className = 'flex justify-between font-sm';

  const newGroup = document.createElement('button');
  newGroup.className = 'bg-green-500 border border-black rounded px-4 py-1 m-2 mt-2';
  newGroup.setAttribute('type','submit')
  newGroup.setAttribute('id','newGroup');
  newGroup.innerText = 'Create New'

  const cancel = document.createElement('button');
  cancel.setAttribute('id','cancelG');
  cancel.setAttribute('type','button');
  cancel.className = 'bg-white px-4 py-1 m-2 mt-2 rounded border border-black'
  cancel.innerText = 'Cancel';

  content.appendChild(labelOne);
  content.appendChild(inputOne);
  content.appendChild(butBox);
  butBox.appendChild(newGroup);
  butBox.appendChild(cancel);
  cont.appendChild(content);
  body.appendChild(cont)
    
  return body;
}

export {modal,modalGroup};
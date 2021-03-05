import page from './modules/page';
import modal from './modules/modal';
import list from './modules/list';
import {chores, addNewChore } from './modules/functions';

console.log(chores);

const addEvents = () => {
    const addButton = document.getElementById('add');
    const modCont = document.querySelector('#modal');
    const span = document.querySelector('#cancel');
    const addNew = document.querySelector('#newChore');
    
    const win = (event) => {
        if (event.target === modCont) {
          modCont.style.display = 'none';
        }
    };

    addButton.addEventListener('click', () => {
        modCont.style.display = 'block';
    });

    span.addEventListener('click', () => {
        modCont.style.display = 'none';
    });
    
    window.addEventListener('click', win);

    addNew.addEventListener('click', (e)=>{
        e.preventDefault
        addNewChore();
    });
    
}

const body = () => {
    
    page();
    list();
    modal();
    addEvents();
};

body();



   

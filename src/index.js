import page from './modules/page';
import {modal, modalGroup} from './modules/modal';
import list from './modules/list';
import {chores, addNewChore, addNewGroup, saveLocal } from './modules/functions';

console.log(chores);

const addEvents = () => {
    const addButton = document.getElementById('add');
    const groupButton = document.getElementById('group');
    const modCont = document.querySelector('#modal');
    const modGroup = document.querySelector('#modalGroup');
    const spanOne = document.querySelector('#cancel');
    const spanTwo = document.querySelector('#cancelG');
    const addNew = document.querySelector('#newChore');
    const addNewG = document.querySelector('#newGroup');
    const winOne = (event) => {
        if (event.target === modCont) {
          modCont.style.display = 'none';
        }
    };

    const winTwo = (event) => {
        if (event.target === modGroup) {
          modGroup.style.display = 'none';
        }
    };

    addButton.addEventListener('click', () => {
        modCont.style.display = 'block';
    });

    spanOne.addEventListener('click', () => {
        modCont.style.display = 'none';
    });
    
    window.addEventListener('click', winOne);

    addNew.addEventListener('click', (e)=>{
        e.preventDefault
        addNewChore();
    });

    groupButton.addEventListener('click', () => {
        modGroup.style.display = 'block';
    });

    spanTwo.addEventListener('click', () => {
        modGroup.style.display = 'none';
    });
    
    window.addEventListener('click', winTwo);

    addNewG.addEventListener('click', (e)=>{
        e.preventDefault
        addNewGroup();
    });
}

const body = () => {
    page();
    list();
    modal();
    modalGroup();
    addEvents();
};

body();



   

import page from './modules/page';
import modal from './modules/modal';
import list from './modules/list';


const addEvents = () => {
    const addButton = document.getElementById('add');
    const modCont = document.querySelector('#modal');
    const span = document.querySelector('#cancel');
    const newChore = document.querySelector('#newChore');

    const win = (event) => {
        if (event.target === modCont) {
          modCont.style.display = 'none';
        }
      }

    addButton.addEventListener('click', () => {
        modCont.style.display = 'block';
    });

    span.addEventListener('click', () => {
        modCont.style.display = 'none';
    });
    
    window.addEventListener('click', win);


    const addNewBtn = document.querySelector('#newChore');

    addNewBtn.addEventListener('click',addNew);

}

const body = () => {
    page();
    list();
    modal();
    addEvents();
};


body();
 
  

   

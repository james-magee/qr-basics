import {Board} from './board.js';

addEventListener('load', ()=> {
  // document.getElementsByTagName('div')[0].innerHTML = 'Hello World!!!!!!';
  console.log(new Board(10, 10, 25, document, document.getElementsByTagName('body')[0]));
});


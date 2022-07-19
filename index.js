import {Board} from './board.js';

addEventListener('load', ()=> {
  // document.getElementsByTagName('div')[0].innerHTML = 'Hello World!!!!!!';
  const b = new Board(10, 10, 25, document, document.getElementById('board-container'));
  b.updateCell(3,3,true);
  b.updateCell(3,8,true);
  b.updateCell(5,5,true);
});


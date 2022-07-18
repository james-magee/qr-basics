// create a set of functions (module) to represent Board:
// the board will hold two large parts of data: 
// 1) the HTMLElements that make up the QR code
// 2) the state of the QR code blocks, held in a 2D Array
// 
// the board will have methods that ensure each is updated in sync, so that the DOM content matches the QR code state
//
// NOTE: the alternative to this would be keeping track of everything in the DOM, which would be more efficient but would make it 
//       more difficult to separate the QR code logic from the logic for updating the HTML


import { Block } from "./block.js";

/**
 * 
 * @param {Number} height 
 * @param {Number} width 
 * @param {Number} blockSize 
 * @param {Document} doc
 * @param {HTMLElement} parent
 */
 export function Board(height, width, blockSize, doc, parent) {
  this.height = height;
  this.width = width;
  this.blockSize = blockSize;
  this.doc = doc;
  this.board = new Array(height);
  let r = 0;

  // SETUP DOM
  this.dom = new Object();
  this.dom.root = doc.createElement('board');
  this.dom.root.style.width = `${width * blockSize}px`;
  this.dom.root.style.height = `${height * blockSize}px`;

  console.log(this.dom.root);
  parent.appendChild(this.dom.root);
  for (let i = 0; i < height; i++) {
    const row = this.doc.createElement('row');
    for (let j = 0; j < width; j++) {

      const cell = doc.createElement('cell');
      r += 2;
      cell.style.backgroundColor = `rgb(${r}, 100, 100)`;
      row.appendChild(cell);

      cell.addEventListener('mouseover', (me) => {
        if ('previousStyle' in me.target) return;
        me.target.previousStyle = me.target.style.backgroundColor;
        me.target.style.backgroundColor = 'black';
      });

      cell.addEventListener('mouseleave', (me) => {
        setTimeout((me) => {
          me.target.style.backgroundColor = me.target.previousStyle;
          delete me.target.previousStyle;
        }, 1000, me);
      });

    }
    this.dom.root.appendChild(row);
  }
  

  // SETUP QR STATE
  console.log(this.board.length);
  for (let i = 0; i < height; i++)
    this.board[i] = new Array(width);

  // ADD METHODS
  // this.at = at.bind(this);
 };




 const renderBoard = (x, y) => {
 };


 const stateAt = (x, y) => {
  return this.board.at(y).at(x);
 }


 export const text = () => { document.getElementsByTagName('div')[0].innerHTML = 'Hello World!'; }



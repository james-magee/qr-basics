// create a set of functions (module) to represent Board:
// the board will hold two large parts of data: 
// 1) the HTMLElements that make up the QR code
// 2) the state of the QR code blocks, held in a 2D Array
// 
// the board will have methods that ensure each is updated in sync, so that the DOM content matches the QR code state
//
// DESIGN NOTE: the alternative to this would be keeping track of everything in the DOM, which would be more efficient but would make it 
//              more difficult to separate the QR code logic from the logic for updating the HTML

import { Block } from "./block.js";



/**
 * 
 * @param {Number} blockHeight 
 * @param {Number} blockWidth in almost all cases height === width ... but flexibility here could be useful
 * @param {Number} blockSqrt  how many blocks along one side 
 * @param {Document} doc
 * @param {HTMLElement} parent
 */
 export function Board(blocksX, blocksY, blockHeight, blockWidth, doc, parent) {
  this.doc = doc;
  this.node = doc.createElement('board');
  parent.appendChild(this.node);
  this.node.style.width =  `${blockWidth * 10}px`;
  this.node.style.height = `${blockHeight * 0}px`;
  this.board = Array.from(Array(blockHeight), () => new Array(blockWidth));

  for (let i = 0; i < blocksY; i++) {
    const row = this.doc.createElement('row');    // might be able to get rid of this using wrapping
    this.node.appendChild(row);
    for (let j = 0; j < blocksX; j++)
      this.board[i][j] = new Block(blockHeight, blockWidth, this, row, `lightgrey`);
  }

  

  // ADD METHODS
  this.updateCell = updateCell.bind(this);
  this.toggleCell = toggleCell.bind(this);
 };


 function updateCell (x, y, value) {
  this.board[y][x] = value;
  renderCell(x, y, this);
 }


 function toggleCell (x, y) {
  updateCell(x, y, !this.board[y][x]);
 }










// DOM MANAGEMENT FUNCTIONS

/**
 * render an individual cell (probably be used outside this module ... )
 * @param {Number} x
 * @param {Number} y
 * @param {Board} board 
 * 
 * 
 * * NOTE: enabled/disabled colors could be set dynamically (later)
 */
 const renderCell = (x, y, board) => {
  if (x > board.width || x < 0 || y > board.height || y < 0) return;
  if (board.board[y][x])
    board.dom.root.children[y].children[x].style.backgroundColor = 'black';
  else
    board.dom.root.children[y].children[x].style.backgroundColor = 'white';
 }


/**
 * render the entire board (probably be used outside this module ... )
 * @param {Board} board 
 */
 const renderBoard = (board) => {
  for (let y = 0; y < board.height; y++)
    for (let x = 0; x < board.width; x++)
      renderCell(x, y, board);
 }
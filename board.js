// create a set of functions (module) to represent Board:
// the board will hold two large parts of data: 
// 1) the HTMLElements that make up the QR code
// 2) the state of the QR code blocks, held in a 2D Array
// 
// the board will have methods that ensure each is updated in sync, so that the DOM content matches the QR code state
//
// DESIGN NOTE: the alternative to this would be keeping track of everything in the DOM, which would be more efficient but would make it 
//              more difficult to separate the QR code logic from the logic for updating the HTML



/**
 * 
 * @param {Number} height 
 * @param {Number} width in almost all cases height === width ... but flexibility here could be useful
 * @param {Number} blockSize 
 * @param {Document} doc
 * @param {HTMLElement} parent
 */
 export function Board(height, width, blockSize, doc, parent) {
  this.height = height;
  this.width = width;
  this.blockSize = blockSize;
  this.doc = doc;

  // SETUP DOM
  this.dom = new Object();
  this.dom.root = doc.createElement('board');
  this.dom.root.style.width = `${width * blockSize}px`;
  this.dom.root.style.height = `${height * blockSize}px`;
  parent.appendChild(this.dom.root);
  for (let i = 0; i < height; i++) {
    const row = this.doc.createElement('row');
    for (let j = 0; j < width; j++) {
      const cell = doc.createElement('cell');
      cell.style.backgroundColor = `lightgrey`;
      row.appendChild(cell);
    }
    this.dom.root.appendChild(row);
  }

  // SETUP QR STATE
  this.board = new Array(height);
  for (let i = 0; i < height; i++)
    this.board[i] = new Array(width);

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
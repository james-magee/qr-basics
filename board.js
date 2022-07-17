// create a set of functions (module) to represent Board:


// BOARD: [[]]

/**
 * 
 * @param {Number} size 
 * @param {Number} blockSize 
 */
 export const Board = (height, width, blockSize) => {
  this.height = height;
  this.width = width;
  this.blockSize = blockSize;
  this.board = new Array(height);
  console.log(this);
  return;
  for (let i = 0; i < height; i++)
    this.board.at(i) = new Array(width);
 };


 const renderBoard = () => {};



 export const text = () => { document.getElementsByTagName('div')[0].innerHTML = 'Hello World!'; }



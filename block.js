// BLOCK: the individual blocks that make up a QR code

import { Board } from "./board.js";


/**
 * construct a block
 * @param {Number} width
 * @param {Number} height 
 * @param {Boolean} on 
 * @param {Board} board
 */
export function Block(width, height, board, on) {
  this.width  = width;
  this.height = height;
  this.on     = on;
  this.doc    = board.doc;
  this.element = this.doc.createElement('block');

  // assign members
  this.toggleVisible = toggleVisible.bind(this);
}


const toggleVisible = () => {
  this.element.style.display = 'none';
}




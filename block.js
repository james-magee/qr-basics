// BLOCK: the individual blocks that make up a QR code

import { Board } from "./board.js";

const ENABLED_COLOR = 'black';
const NEUTRAL_COLOR = 'grey';
const DISABLED_COLOR = 'white';

/**
 * construct a block
 * @param {Number} width
 * @param {Number} height 
 * @param {Boolean} on 
 * @param {Board} board
 */
export function Block(width, height, board, parent, color, on) {
  this.width  = width;
  this.height = height;
  this.parent = parent;
  this.board  = board;
  this.on     = on;

  // dom
  this.node = this.board.doc.createElement('block');
  this.node.style.backgroundColor = (color !== undefined ? color : NEUTRAL_COLOR);
  this.parent.appendChild(this.node);

  // assign members
  this.toggleVisible = toggleVisible.bind(this);
  this.toggleOn = toggleOn.bind(this);
  this.isOn     = isOn.bind(this);
}


function isOn () {
  return this.on;
}


function toggleOn () {
  this.on = !this.on;
  if (this.on) this.node.style.backgroundColor = ENABLED_COLOR;
  else this.node.style.backgroundColor = DISABLED_COLOR;
}


const toggleVisible = () => {
  this.element.style.display = 'none';
}




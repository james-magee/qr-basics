// BLOCK: the individual blocks that make up a QR code

import { Board } from "./board.js";

const ENABLED_COLOR = 'black';
const NEUTRAL_COLOR = 'grey';
const DISABLED_COLOR = 'white';

const SUBBLOCK_SCALE_FACTOR = 0.1;

// derived constants
const SUBBLOCKS = 1 / SUBBLOCK_SCALE_FACTOR;

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
  this.color  = color;

  // dom
  atomicBlock.bind(this)(); 

  this.subblocks = Array.from(Array(SUBBLOCKS), () => new Array(SUBBLOCKS));
  this.node = this.board.doc.createElement('block');
  this.subBlockHeight = this.height * SUBBLOCK_SCALE_FACTOR;
  this.subBlockWidth  = this.width * SUBBLOCK_SCALE_FACTOR;
  for (let i = 0; i < SUBBLOCKS; i++)
    for (let j = 0; j < SUBBLOCKS; j++)
      this.subblocks[i][j] = new Block(this.subBlockWidth, this.subBlockHeight, this);

  // assign members
  this.toggleVisible = toggleVisible.bind(this);
  this.toggleOn = toggleOn.bind(this);
  this.isOn     = isOn.bind(this);
}


function atomicBlock() {
  this.node = this.board.doc.createElement('block');
  this.node.style.backgroundColor = (this.color !== undefined ? this.color : NEUTRAL_COLOR);
  this.node.style.width  =  `${this.width}px`;
  this.node.style.height = `${this.height}px`;
  this.parent.appendChild(this.node);
}

function subBlocks() {
  this.node = this.board.doc.createElement('block');
  for (int )

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




// THE QR LOGIC MODULE!
/**
 * 
 * 
 * 
 * 
 */

/**
 * constructor for QR object
 * @param {String} ecl error correction level. L = low (~7% recovery), M (15%), Q (25%), H (30%) - higher levels require more bytes
 * 
 * VERSION
 * ECL
 * MAX_SIZE
 * MODE
 */
export function QR (mode, ecl, payload) {
  this.version = smallestVersion(ecl, payload);
}



// with version 10, on high error correction, 119 characters can be encoded
const smallestVersion = (payload, ecl) => {
  return 10;
  // TODO: add support for all versions 
}



const modeIndicator = {
  'numericMode': '0001',
  'alphanumericMode': '0010',
  'byteMode': '0100',
  'kanjiMode': '1000',
  'eciMode': '0111'
}; const getModeIndicator = (mode) => modeIndicator[mode];

const characterCountIndicatorLength = [ // number of bits to represent character count
  [10, 9, 8, 8],    // versions  1 - 9, [numeric, alphanumeric, byte, kanji]
  [12, 11, 16, 10], // versions 10 - 26
  [14, 13, 16, 12], // versions 27 - 40
]; const getCharacterCountIndicator = (version, mode) => {
  let versionIndex;
  if (version >= 1 && version <= 9) versionIndex = 0;
  else if (version >= 10 && version <= 26) versionIndex = 1;
  else if (version >= 27 && version <= 40) versionIndex = 2;
  else return;

  if (mode === 'numericMode') {}
  else if (mode === 'alphanumericMode') {}
  else if (mode === 'byteMode') {}
  else if (mode === 'eciMode') {}
}

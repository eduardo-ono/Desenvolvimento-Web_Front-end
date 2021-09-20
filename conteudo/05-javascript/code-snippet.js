const dec2bin = function dec2bin(dec) {
  return Number(dec >=0 ? dec : ~dec).toString(2);
}

// ES6
const dec2bin_1 = (dec) => Number(dec >>> 0).toString(2);

const dec2bin_2 = dec => Number(dec >>> 0).toString(2);

console.log(dec2bin(-25));
console.log(dec2bin_1(25));
console.log(dec2bin_2(25));

/* --- */

const colors = ['red', 'green', 'blue', 'black', 'white'];

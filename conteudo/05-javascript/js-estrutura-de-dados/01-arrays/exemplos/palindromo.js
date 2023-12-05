
function ehPalindromo(str) {
  for (let i = 0; i < str.length / 2; i++) {
    var i_rev = str.length - 1 - i;
    if (str[i] != str[i_rev]) {
      return false;
    } 
  }
  return true;
}

console.log(ehPalindromo('arara'));

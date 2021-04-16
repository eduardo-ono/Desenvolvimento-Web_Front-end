
/*
   JavaScript Code Snippets

*/

// =====
// Vetores (Arrays)

const frutas = [ 'maçã', 'laranja', 'pera' ];
frutas[3] = 'uva'; // Cuidado!
frutas.push('manga'); // Insere como último elemento
frutas.unshift('morango'); // Insere como primeiro elemento
frutas.pop(); // Remove o último elemento
console.log(Array.isArray(frutas));
console.log(frutas);
console.log(frutas.indexOf('laranja'));

const coisas = [ 'maçã', 'laranja', 10, true ];
console.log(Array.isArray(frutas)); // => true
console.log(coisas);

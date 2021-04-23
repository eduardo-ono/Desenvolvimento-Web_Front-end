
/*
   JavaScript Code Snippets

*/

// =====
// Vetores (Arrays)

const frutas = [ 'maçã', 'laranja', 'pera' ];
frutas[5] = 'uva'; // OK, mas cuidado!
console.log(frutas);
console.log(frutas[4]); // => "undefined"
frutas.push('manga'); // Insere após o último elemento
frutas.unshift('morango'); // Insere antes do primeiro elemento
frutas.pop(); // Remove o último elemento
console.log(Array.isArray(frutas));
console.log(frutas);
console.log(frutas.indexOf('laranja'));

// Outro exemplo
const coisas = [ 'maçã', 'laranja', 10, true ];
console.log(Array.isArray(coisas)); // => true
console.log(coisas);

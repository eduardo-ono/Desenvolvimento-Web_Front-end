const frutas = new Set();

frutas.add('caju');
frutas.add('maçã');
frutas.add('pera');
frutas.add('banana');
console.log(frutas); // { 'caju', 'maça', 'pera', 'banana' }
frutas.delete('banana');
console.log(typeof frutas); // object

for (const el of frutas) {
  console.log(el);
}

console.log(frutas.has('banana')); // false


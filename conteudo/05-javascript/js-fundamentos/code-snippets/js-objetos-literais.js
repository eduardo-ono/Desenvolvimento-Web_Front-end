
/*
   JavaScript Code Snippets

*/

// =====
// Objetos Literais
const pessoa = {
  nome: 'Fulano',
  sobrenome: 'de Tal',
  idade: 91,
  hobbies: [ 'música', 'filmes', 'esporte' ],
  endereco: {
    rua: 'Francisco Glicério',
    numero: 1,
    cidade: 'Campinas',
    uf: 'SP'
  },
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.nome, pessoa.sobrenome);
console.log(pessoa.hobbies); // => filmes
console.log(pessoa.hobbies[1]); // => filmes
console.log(pessoa.endereco);
console.log(pessoa.endereco.cidade); // Campinas

pessoa.email = 'fulano@umbrella.com';
console.log(pessoa);

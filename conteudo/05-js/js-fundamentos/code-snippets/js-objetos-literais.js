
/*
   JavaScript Code Snippets

*/

// =====
// Vetores (Arrays)
const pessoa = {
  nome: 'Fulano',
  sobrenome: 'de tal',
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
console.log(pessoa.nome, pessoa.sobrenome);
console.log(pessoa.hobbies[1]); // => filmes
console.log(pessoa.endereco.cidade); // Campinas

pessoa.email = 'fulano@umbrella.com';
console.log(pessoa);

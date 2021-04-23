
/*
  const
*/
{
  let tmp = 2;
  console.log(tmp);
}
console.log(tmp); // ERRO!

const pi = 3.14;
pi = 3.1416; // ERRO!
console.log(pi);

const e; // ERRO! Constante não inicializada

/*
var e let
*/
nome = 'Fulano';
console.log(nome);

for (i = 0; i < 6; i++)
{
  console.log(i);
}
console.log('Valor de i = ' + i);

for (var i = 0; i < 6; i++)
{
  console.log(i);
}
console.log('Valor de i = ' + i);

for (var i = 0; i < 6; i++)
{
  console.log(i);
}
console.log('Valor de i = ' + i); // ERRO! A variável i não foi "definida".

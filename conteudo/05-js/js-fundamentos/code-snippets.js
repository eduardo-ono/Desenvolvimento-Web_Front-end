
/*
  const
*/

const pi = 3.14;
pi = 3.1416;
const e; // ERRO! Constante não inicializada

/*
  var e let
*/

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


for (let i = 0; i < 10; i++)
{
  console.log(i);
}
console.log('Valor de i = ' + i); // ERRO! A variável i não foi "definida".

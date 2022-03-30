const musicas = [
  {
    id: 'aaaaaaaa',
    musica: 'Sultans of Swing',
    album: 'Dire Straits',
    artista: 'Dire Straits',
    ano: 1978,
  },
  {
    id: 'bbbbbbbb',
    musica: 'Tears in Heaven',
    album: 'Unplugged',
    artista: 'Eric Clapton',
    ano: 1992,
  },
  {
    id: 'ccccccccc',
    musica: 'So far Away',
    album: 'Brothers in Arms',
    artista: 'Dire Straits',
    ano: 1985,
  },
];

console.log(musicas);

const json = JSON.stringify(musicas);
console.log(json);

var str = '\n';
for (let i = 0; i < musicas.length; i++)
{
  str += 'Música: ' + musicas[i]['musica'] + '\n';
  str += 'Artista: ' + musicas[i]['artista'] + '\n';
  str += 'Album: ' + musicas[i]['album'] + '\n';
  str += 'Ano: ' + musicas[i]['ano'] +'\n\n';
}
console.log(str);

// ES6
str = '\n';
for (let i = 0; i < musicas.length; i++)
{
  str += `Música: ${musicas[i]['musica']}\n`;
  str += `Artista: ${musicas[i]['artista']}\n`;
  str += `Album: ${musicas[i]['album']}\n`;
  str += `Ano: ${musicas[i]['ano']}\n\n`;
}
console.log(str);

console.log('--- forEach ---');
musicas.forEach(function (elemento) {
  console.log(elemento.musica);
});

console.log('\n--- forEach (ES6) ---');
musicas.forEach( elemento => {
  console.log(elemento.musica);
});


var filmes = [
  'https://www.themoviedb.org/t/p/original/f6cRsSrOlET0Hees6jAQDYENttk.jpg',
  'https://www.themoviedb.org/t/p/original/e9ZrMPiJqYg2qEnWS7n1U7W0GHL.jpg'
];
var elListaFilmes = document.getElementById('listaFilmes');

function adicionarFilme() {
  var url = document.getElementById('url').value;
  if (url != '') {
    document.getElementById('url').value = '';
    filmes.push(url);
    elListaFilmes.innerHTML += '<img src=' + url + '>';
  }
}

elListaFilmes.innerHTML = '';
for (var i = 0; i < filmes.length; i++) {
  elListaFilmes.innerHTML += '<img src=' + filmes[i] + '>';
}

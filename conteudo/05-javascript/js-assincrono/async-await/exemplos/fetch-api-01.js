/*
  Arquivo       : fetch-api-01.js
  Versão        :
  Desenvolvedor : Eduardo Ono
  Criado em     : 16/09/2022
  Atualizado em : 16/09/2022

  Descrição     :
  Recursos      : https://reqres.in
  Referências   : https://www.youtube.com/watch?v=we5Ac8U21lI
*/

function getUser(id) {
  const url = `https://reqres.in/api/users/${id}`;
  // Envia uma requisição do tipo "HTTP GET".
  const response = fetch(url)
    .then(data => data.json())
    .catch(err => console.log(err));
  return response;
}

async function showUserName(id) {
  try {
    const user = await getUser(id);
    const conteudo = document.querySelector('#app');
    conteudo.innerHTML = `Nome do usuário: ${user.data.first_name}`;
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
}

showUserName(3);

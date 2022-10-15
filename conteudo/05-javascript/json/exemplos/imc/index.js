
const myList = document.querySelector("ul");

fetch("./pacientes.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    for (const paciente of data.pacientes) {
      const listItem = document.createElement("li");
      const nome = document.createElement("strong");
      nome.textContent = paciente.nome;
      const peso = document.createElement("strong");
      peso.textContent = `${paciente.peso}`;
      const altura = document.createElement("strong");
      altura.textContent = `${paciente.altura}`;
      listItem.append(nome, ', ', peso, ' kg, ', altura, ' m');
      myList.appendChild(listItem);
    }
  })
  .catch((error) => {
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(`Error: ${error.message}`));
    document.body.insertBefore(p, myList);
  });

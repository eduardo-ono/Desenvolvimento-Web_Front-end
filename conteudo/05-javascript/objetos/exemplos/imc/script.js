
const paciente = {

  nome: "",
  peso: 0,
  altura: 0,
  imc: 0,
  
  main() {
    // let nome = document.getElementById('input-nome').value;
    let nome = document.querySelector('#input-nome').value;
    this.nome = nome;
    let peso = document.querySelector('#input-peso').value;
    this.peso = parseFloat(peso);
    let altura = document.querySelector('#input-altura').value;
    this.altura = parseFloat(altura);
    this.imc = this.peso / this.altura ** 2;
    let imcText = document.querySelector('#imc');
    imcText.innerHTML = `${this.imc.toFixed(1)}`;
  } // main()
  
}; // paciente

const button = document.querySelector('#button-calcular');
button.addEventListener('click', paciente.main);

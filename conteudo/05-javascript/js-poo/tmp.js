class Paciente {
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
    this.idade;
  }

  getImc() {
    if (this.peso > 0 && this.altura > 0)
      return this.peso / (this.altura ** 2);
    return null;
  }
} // Paciente

class Obituario extends Paciente {
  constructor(nome, peso, altura, idade) {
    super(nome, peso, altura);
    this.idade = idade;
  }
} // Obituario

var paciente1 = new Paciente('Beltrano', 50, 1.60);
paciente1.idade = 12;
console.log(paciente1.nome);
console.log(paciente1.idade);

var paciente2 = new Paciente('Mengano', 79, 1.85);
console.log(paciente2.nome);
console.log(paciente2.idade);

var obituario = new Obituario('Fulano', 84, 1.75, 89);
console.log(obituario.nome);
console.log(`IMC = ${obituario.getImc().toFixed(1)}`);
console.log(`Idade do óbito = ${obituario.idade}`);



function iniciar() {

  const calcularImc = function (peso, altura) {
    let imc = 0;
    if (peso > 0 && altura > 0) {
        imc = peso / (altura ** 2);
    }
    return imc;
  }

  const calcularImc2 = peso => {
    let imc = 0;
    if (peso > 0 && altura > 0) {
        imc = peso / (altura ** 2);
    }
    return imc;
  }

  var imc = calcularImc2(68);

}

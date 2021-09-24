function Paciente(nome, peso, altura) {
  this.nome = nome;
  this.peso = peso;
  this.altura = altura;
  this.getImc = function () {
    if (this.peso > 0 && this.altura > 0)
      return this.peso / this.altura ** 2;
    return null;
  }
}

Paciente.prototype.getImc = function () {
  if (this.peso > 0 && this.altura > 0)
    return this.peso / this.altura ** 2;
  return null;
}

var paciente1 = new Paciente('Fulano', 71, 1.76);
var paciente2 = new Paciente('Ciclano', 73, 1.72);
console.log(`Nome: ${paciente1.nome}\nIMC = ${paciente1.getImc().toFixed(1)}`);

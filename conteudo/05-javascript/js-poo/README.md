<table>
<tr>
<td align="left" width="8000">
  <small>Desenvolvimento Web (Front-End) > Conteúdo > JavaScript</small>
</td>
<td align="right">
  <small>Atualizado&nbsp;em:&nbsp;10/09/2022</small>
</td>
</tr>
</table>

<br>

<h1 align="center">Programação Orientada a Objeto em JavaScript</h1>

<h4 align="center">Prof. Eduardo Ono</h4>

&nbsp;

## Tópicos

<details>
  <summary>
    <strong><font size="+1">Strings</font></strong>
  </summary>
  <section markdown="1">

  </section>
</details>

Strings
```js
const str1 = 'Olá mundo!';
console.log(str1.toUpperCase());
console.log(typeof str1); // string

const str2 = new String('Olá mundo!');
console.log(typeof str2); // object
```

Window
```js
console.log(window);
console.log(navigator.appVersion);
```

Objeto Literal
```js
const paciente = {
  nome: 'Fulano de Tal',
  peso: 71,
  altura: 1.76,
  getImc: function () {
    if (this.peso > 0 && this.altura > 0)
      return this.peso / this.altura ** 2;
    else
      return null;
  }
};
```

```js
function Paciente(nome, peso, altura) {
  this.nome = nome;
  this.peso = peso;
  this.altura = altura;
  this.getImc = fucntion () {
    if (this.peso > 0 && this.altura > 0)
      return this.peso / this.altura ** 2;
    else
      return null;
  }
}

var paciente1 = new Paciente('Fulano', 71, 1.76);
var paciente2 = new Paciente('Ciclano', 73, 1.72)
console.log(paciente1.getImc());
```

Prototypes
```js
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
```

Classes
```js
class Paciente {
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  getImc() {
    if (this.peso > 0 && this.altura > 0)
      return this.peso / this.altura ** 2;
    return null;
  }

  static getClinica() {
    return 'Pé na Cova';
  }
} // Paciente

var paciente = new Paciente('Fulano', 84, 1.75);
console.log(Paciente.getClinica());
```

Herança
```js
class Paciente {
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
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

var obituario = new Obituario('Fulano', 84, 1.75, 89);
console.log(`IMC = ${obituario.getImc().toFixed(1)}`);
```

&nbsp;

## Vídeo Aulas

| Thumb | Descrição |
| :-: | --- |
| ![Thumb](https://img.youtube.com/vi/PFmuCDHHpwk/default.jpg) | <sup>[Programming with Mosh]</sup><br>[__Object-oriented Programming in JavaScript: Made Super Simple__](https://www.youtube.com/watch?v=PFmuCDHHpwk)<br><sub>(YouTube, 1:02:48, Mar/2018)</sub><br><br>Tópicos:
| ![Thumb](https://img.youtube.com/vi/vDJpGenyHaA/default.jpg) | <sup>[Traversy Media]</sup><br>[__JavaScript OOP Crash Course (ES5 & ES6)__](https://www.youtube.com/watch?v=vDJpGenyHaA)<br><sub>(YouTube, 40:20, Jun/2018)</sub><br><br>Tópicos:
| [![](https://img.youtube.com/vi/O8wwnhdkPE4/default.jpg)](https://www.youtube.com/watch?v=O8wwnhdkPE4 "Object Oriented JavaScript") | <sup>[Derek Banas]</sup><br>[__Object Oriented JavaScript__](https://www.youtube.com/watch?v=O8wwnhdkPE4)<br><sub>(1:00:34, YouTube, Set/2015)</sub>

&nbsp;

## Referências Bibliográficas

&nbsp;

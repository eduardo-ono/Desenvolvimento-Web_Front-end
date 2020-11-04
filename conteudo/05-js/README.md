> ### Desenvolvimento Web

# JavaScript

Prof. Eduardo Ono

Versão Web: https://eduardo-ono.github.io/desenvolvimento-web/conteudo/05-js/

<br>

## Overview

<p>
<a href="../../mapas-mentais/js-linguagem.svg" target="_new"><img src="../../mapas-mentais/js-linguagem.svg" width="300px"></a>
</p>

<br>

## Fundamentos da Linguagem

<details>
    <summary>Funções Anônimas</summary>

Função tradicional:

```js
function calcularIMC(peso, altura) {
    var imc = 0;
    if (peso > 0 && altura > 0) {
        imc = peso / (altura * altura);
    }
    return imc;
}

var imc = calcularIMC(67, 1.73);
console.log(imc.toFixed(1));
```

Função Anônima:

```js
const imc = (peso, altura) {
    var imc = 0;
    if (peso > 0 && altura > 0) {
        imc = peso / (altura * altura);
    }
    return imc;
}

console.log(imc(67, 1.73).toFixed(1));
```

</details>

<details>
    <summary>Arrow Functions</summary>

Função tradicional:

```js
function calcularIMC(peso, altura) {
    var imc = 0;
    if (peso > 0 && altura > 0) {
        imc = peso / (altura * altura);
    }
    return imc;
}
```

Arrow Function:

```js
const imc = (peso, altura) => {
    var imc = 0;
    if (peso > 0 && altura > 0) {
        imc = peso / (altura * altura);
    }
    return imc;
}

console.log(imc(68, 1.73).toFixed(1));

// ou

const imc = (peso, altura) => (peso > 0 && altura > 0) ? peso / (altura * altura) : 0;
```

</details>

<details>
    <summary>Arrow Function retornando um JSON</summary>

```js
const pessoa = () => {
    return {"nome": "Fulano de Tal"};
}
// ou
const pessoa = () => ({"nome": "Fulano de Tal"});

console.log(pessoa());

```

Função "auto-executável"

```js
(function () {
    const pessoa = () => ({"nome": "Fulano de Tal"});

    console.log(pessoa());
})();
```

Arrow Function "auto-executável"

```js
(() => {
    const pessoa = () => ({"nome": "Fulano de Tal"});

    console.log(pessoa());
})();
```

</details>

### Vídeos Recomendados

* [Derek Banas] [JavaScript Tutorial](https://youtu.be/fju9ii8YsGs) (YouTube, 1:37:08)
* [Traversy Media] [JavaScript Crash Course for Beginners](https://youtu.be/hdI2bqOjy3c) (YouTube, 1:40:29)
* [Derek Banas] [ECMAScript 6 Tutorial](https://youtu.be/Jakoi0G8lBg) (YouTube, 45:30)
* [Academind] [JavaScript Data Structures: Getting Started](https://youtu.be/41GSinwoMYA) (YouTube, 1:36:46)

<br>

## JavaScript Orientado a Objetos

### Vídeos Recomendados

* [Derek Banas] [Object Oriented JavaScript](https://youtu.be/O8wwnhdkPE4) (YouTube, 1:00:34)
* [Traversy Media] [JavaScript OOP Crash Course (ES5 & ES6)](https://youtu.be/vDJpGenyHaA) (YouTube, 40:20)
* [Programming with Mosh] [ES6 Tutorial: Learn Modern JavaScript in 1 Hour](https://www.youtube.com/watch?v=NCwa_xi0Uuc) (YouTube, 50:04)

<br>

## Bibliografia

* FLANAGAN, David. [JavaScript - O Guia Definitivo, 6 ed.](https://www.academia.edu/40442620/JavaScript_O_Guia_Definitivo_v), Porto Alegre: Bookman, 2013.
* [JavaScript Notes for Professionals](https://goalkicker.com/HTML5Book/) (PDF)

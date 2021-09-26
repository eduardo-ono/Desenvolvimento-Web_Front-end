### Desenvolvimento Web (Front-End)

# ECMAScript 6

Prof. Eduardo Ono

<br>

## Tópicos

### Keywords _var_ e _let_

  ```js
  function f() {
    for (var i = 0; i < 10; i++)
    {
      console.log(i);
    }
    console.log('Valor de i = ' + i);
  }

  f();
  ```

  ```js
  function f() {
    for (let i = 0; i < 10; i++)
    {
      console.log(i);
    }
    console.log('Valor de i = ' + i); // ERRO! A variável i não foi "definida".
  }

  f();
  ```

### Arrow functions

```js
const dec2bin = function dec2bin(dec) {
  return Number(dec >>> 0).toString(2);
}

// ES6
const dec2bin_1 = (dec) => {
  return Number(dec >>> 0).toString(2);
}

const dec2bin_2 = (dec) => Number(dec >>> 0).toString(2);

const dec2bin_3 = dec => Number(dec >>> 0).toString(2);

console.log(dec2bin(25));
console.log(dec2bin_1(-25));
console.log(dec2bin_2(25));
```

<br>

## Vídeo Aulas

| Thumb | Descrição |
| :-: | --- |
| ![Thumb](https://img.youtube.com/vi/NCwa_xi0Uuc/default.jpg) | [Programming with Mosh]<br>[**ES6 Tutorial: Learn Modern JavaScript in 1 Hour**](https://www.youtube.com/watch?v=NCwa_xi0Uuc) (YouTube, 50:04, Jun/2018)<br><br>Tópicos:

<br>

## Referências Bibliográficas

<br>

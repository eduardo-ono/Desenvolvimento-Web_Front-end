
# Vetores (Arrays)

__Prof. Eduardo Ono__

&nbsp;

```js
const frutas = ['maçã', 'laranja', 'pera'];

frutas[3] = 'uva'; // Cuidado!
console.log(frutas);

frutas[5] = 'uva'; // Cuidado!
console.log(frutas);

frutas.push('manga'); // Insere como último elemento
console.log(frutas);

frutas.unshift('morango'); // Insere como primeiro elemento
console.log(frutas);

frutas.pop(); // Remove o último elemento
console.log(frutas);

console.log(Array.isArray(frutas)); // true
console.log(frutas.indexOf('laranja')); // 2

const coisas = ['maçã', 'laranja', 10, true];
console.log(coisas);
console.log(Array.isArray(frutas)); // true
```

&nbsp;

## Vídeos de Apoio

| Thumb | Descrição |
| :-: | --- |
| [![img](https://img.youtube.com/vi/NH_lCxa1hv8/default.jpg)](https://www.youtube.com/watch?v=NH_lCxa1hv8) | <sup>[JavaScript Mastery]</sup> [__Top 10 JavaScript Array Methods__](https://www.youtube.com/watch?v=NH_lCxa1hv8) <br> <sub>(15:51, YouTube, Mai/2019)</sub>

&nbsp;


# Strings

__Prof. Eduardo Ono__

&nbsp;

## Concatenação de Strings

```javascript
const nome = 'Fulano';
const sobrenome = 'de Tal';
var nome_completo = nome + ' ' + sobrenome;
console.log(nome_completo); // Fulano de Tal
// Template string (entre back ticks)
nome_completo = `${nome} ${sobrenome}`;
console.log(nome_completo); // Fulano de Tal
```

&nbsp;

## Principais Métodos

```javascript
var peso = 68.56;
peso = peso.toFixed(0);
var altura = 1.73;
var imc = peso / altura ** 2;
console.log(`IMC = ${imc.toFixed(1)}`)
```

```javascript
const nome = 'Fulano de Tal';
const str = 'Beltrano de Tal'.toUpperCase();
console.log(str);
console.log(nome.substring(0, 6).toUpperCase()); // FULANO
```

```javascript
const str = 'JavaScript, Python, Ruby, Java';
console.log(str.split(', ')); // ['JavaScript', 'Python', 'Ruby', 'Java']
```

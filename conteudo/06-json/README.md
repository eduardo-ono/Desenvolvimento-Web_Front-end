> Desenvolvimento Web > Conteúdo

# JSON (JavaScript Object Notation)

Prof. Eduardo Ono

<br>

## Definição

Formato aberto para representação e troca de dados, assim como o XML, porém mais simples. É independente de lingugem de programação.

É constituído por pares do tipo `"chave": valor`, entre chaves e separados por vírgula.

<br>

## Fundamentos da Notação

* [Traversy Media] JSON Crash Course | [YouTube](https://youtu.be/wI1CWzNtE-M) (24:49)
* [LearnWebCode] JavaScript Template Literals: JSON to HTML | [YouTube](https://youtu.be/DG4obitDvUA) (39:33)

<br>

## Exemplos

```json
{
  "nome": "Fulano de Tal",
  "peso": 76,
  "altura": 1.74
}
```

```javascript
var strJSON = `{
  "nome": "Fulano de Tal",
  "peso": 84,
  "altura": 1.75
}`;
var paciente = JSON.parse(strJSON);
console.log(paciente.nome);
console.log(paciente.peso);
console.log(paciente['altura']);
```

## Vídeos de Apoio

| Thumb | Dewscrição |
| :-: | --- |
| [![img](https://img.youtube.com/vi/K1f7G0JMkLU/default.jpg)](https://www.youtube.com/watch?v=K1f7G0JMkLU "O que é JSON - JavaScript Object Notation") | <sup>[Bóson Treinamentos]</sup> [__O que é JSON - JavaScript Object Notation__](https://www.youtube.com/watch?v=K1f7G0JMkLU)<br><sub>(17:37, YouTube, Mar/2020)</sub>

<br>

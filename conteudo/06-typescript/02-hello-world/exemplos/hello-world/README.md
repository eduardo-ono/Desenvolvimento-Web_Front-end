<h1 align="center">"Hello World!" com TypeScript</h1>

<h4 align="center">Prof. Eduardo Ono</h4>

&nbsp;

## Descrição

Primeira página web usando a linguagem TypeScript.

## Execução do "Hello World!"

Clicar [__aqui__](https://eduardo-ono.github.io/Desenvolvimento-Web-Front-end/conteudo/06-typescript/) para abrir a página através do GitHub Pages.

&nbsp;

## Setup do TypeScript

### Instalar o TypeScript de forma global (-g), ou seja, não específico para um único projeto

<sup>OBS.: Só é necessário executar esse comando uma única vez.</sup>

```cmd
npm i -g typescript
```

* Para verificar se a instalação foi bem sucedida

  ```cmd
  tsc --version
  tsc -v
  ```

### Para iniciar um novo projeto com TypeScript

Mudar para o diretório do projeto e digitar

```cmd
tsc --init
```

<sup>Será criado o arquivo de configuração `tsconfig.json` no diretório raiz do projeto.</sup>

### Transpilação para arquivos JavaScript

```cmd
tsc
```

<sup>Serão criados os respectivos arquivos JavaScript (*.js) relativos aos arquivos TypeScript.</sup>

### Transpilação automática para JavaScript

```cmd
tsc -w
```

OBS.: Caso o servidor também esteja no modo "hot reload", a página será também automaticamente atualizada no navegador.

&nbsp;

## Referências

| Thumb | Título |
| --- | --- |
| [![img](https://img.youtube.com/vi/lCemyQeSCV8/default.jpg)](https://www.youtube.com/watch?v=lCemyQeSCV8) | <sup>[Matheus Battisti - Hora de Codar]</sup><br>[__CURSO DE TYPESCRIPT NA PRÁTICA - APRENDA TYPESCRIPT EM 1 HORA__](https://www.youtube.com/watch?v=lCemyQeSCV8)<br><sub>(1:11:22, YouTube, 11/Jan/2022)</sub> |

&nbsp;

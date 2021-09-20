### Desenvolvimento Web (Front-End)

# Aulas

Prof. Eduardo Ono

Home Page: https://eduardo-ono.github.io/desenvolvimento-web/aulas/

<br>

<details id="aula-01">
  <summary>
    <strong>Aula 01</strong>
    <h3>Introdução ao Desenvolvimento Web</h3>
  </summary>
  <section markdown="1">

  * Revisão de Redes; Protocolos de Comunicação; História da Internet
    * Vídeos
      * [TecMundo] [A História da Internet - TecMundo](https://www.youtube.com/watch?v=pKxWPo73pX0) (YouTube, 14:34, Abr/2018)
      * [Learn Engineering] [How does the INTERNET work?](https://www.youtube.com/watch?v=x3c1ih2NJEg) (YouTube, 8:58)
      * [PowerCert Animated Videos] [IP Address - IPv4 vs IPv6 Tutorial](https://www.youtube.com/watch?v=ThdO9beHhpA) (YouTube, 9:22, Jul/2016)
      * [PowerCert Animated Videos] [Como um servidor DNS (sistema de nomes de domínio) funciona](https://www.youtube.com/watch?v=mpQZVYPuDGU) (YouTube, 6:04, Mai/2016)
      * [PowerCert Animated Videos] [TCP vs UDP Comparison](https://www.youtube.com/watch?v=uwoD5YsGACg) (YouTube, 4:36, Nov/2016)
      * [PowerCert Animated Videos] [SSL, TLS, HTTP, HTTPS Explained](https://www.youtube.com/watch?v=hExRDVZHhig) (YouTube, 6:30, Dez/2018)

  * Overview de Desenvolvimento Web

  * Criação do Ambiente de Desenvolvimento: Git/GitHub
    * Instalação e configuração da ferramenta Git
    * Criação e configuração de uma conta no GitHub

  </section>
</details>

---

<details id="aula-02">
  <summary>
    <strong>Aula 02</strong>
    <h3>Configurando o Ambiente de Desenvolvimento; Introdução ao HTML</h3>
  </summary>
  <section markdown="1">

  * Configuração do GitHub
    * Habilitando o GitHub Pages (servidor Web do GitHub)

  * Configuração do ambiente de desenvolvimento (VS Code)
    * Microsoft Visual Studio Code (VS Code)
      * Extensão: Live Server (Ritwick Dey)
      * Vídeos
        * [Código Fonte TV] [O Segredo de Como Escrever HTML 50% Mais Rápido no VS Code](https://www.youtube.com/watch?v=8jLfTDn3_TM) (YouTube, 7:56, Fev/2021)

  * Introdução ao HTML
    * Definição

  </section>
</details>

---

<details id="aula-03">
  <summary>
    <strong>Aula 03</strong>
    <h3>Introdução ao CSS (Cascading Style Sheets)</h3>
  </summary>
  <section markdown="1">

* CSS (Cascading Style Sheets)
  * Conceitos
    * [Código Fonte TV] [Dicionário do Programador](https://www.youtube.com/watch?v=229xfk3EEM8) (YouTube, Mai/2020, 14:39)

* Inserindo CSS na página HTML
  * <a href="https://www.w3schools.com/css/css_howto.asp" target="_blank">Como adicionar código CSS</a>
  * Exemplos
    * CSS Inline
        ```html
        <p style="color: red">Este é um parágrafo escrito na cor vermelha.</p>
        <p>Esta é um parágrafo com esta <spam style="color: blue">palavra</spam> em cor azul.</p>
        ```

    * CSS Interno
      ```html
      <head>
          <style>
              body {
                  background-color: yellow;  /* cor de fundo */
              }
              p {
                  color: blue;
                  margin-left: 40px;
              }
              .class-selector {
                  /*
                  */
              }
              #id-selector {
                  /*
                  */
              }
          </style>
      </head>
      ```

    * CSS Externo
      ```html
      <head>
          <link rel="stylesheet" href="mystyle.css">
      </head>
      ```

  * SASS
    * Conceitos
      * [Código Fonte TV] [Sass // Dicionário do Programador](https://www.youtube.com/watch?v=WJSJCduJCQM) (YouTube, 4:45, Jul/2018)

  </section>
</details>

---

<details id="aula-04">
  <summary>
    <strong>Aula 04</strong>
    <h3>CSS (Cont.); Introdução à Linguagem JavaScript</h3>
  </summary>
  <section markdown="1">

  * Introdução à linguagem JavaScript
    * Conceitos

  </section>
</details>

---

<details id="aula-05">
  <summary>
    <strong>Aula 05</strong>
    <h3>Criando Formulários com HTML e CSS</h3>
  </summary>
  <section markdown="1">

  * Formulário geral
    * Vídeo Aulas
      [] []() (YouTube, )

  * Formulário de login responsivo
    * Vídeo Aulas
      * [Girl Coding] [Criando um formulário de login responsivo com HTML e CSS](https://www.youtube.com/watch?v=MkXuQ9CcHqU) (YouTube, 23:16, Jan/2021)

  </section>
</details>

---

<details id="aula-06">
  <summary>
    <strong>Aula 06</strong>
    <h3>Elemento HTML - Canvas</h3>
  </summary>
  <section markdown="1">

  * CSS - Position
    * **Vídeo Aulas**
      * [Girl Coding] [Entendendo sobre position no CSS](https://www.youtube.com/watch?v=Y7NeqpwLM2g) (YouTube, 12:08, Jan/2021)

  * AJAX
    * **Conceitos**

  * APIs

    * **API de Cotações de Moedas**
      * https://eduardo-ono.github.io/desenvolvimento-web/aulas/exemplos/api/cotacao-dolar.html
      * Código-fonte: [./exemplos/api/cotacao-dolar.html](./exemplos/api/cotacao-dolar.html)

    * **ViaCEP**
      * https://eduardo-ono.github.io/desenvolvimento-web/aulas/exemplos/api/viacep.html
      * Código-fonte: [./exemplos/api/viacep.html](./exemplos/api/viacep.html)

  </section>
</details>

---

<details id="aula-07">
  <summary>
    <strong>Aula 07</strong>
    <h3>JSON / AJAX / Consumo de APIs</h3>
  </summary>
  <section markdown="1">

  * ### CSS - Position
    * __Vídeo Aulas__
      * [Girl Coding] [Entendendo sobre position no CSS](https://www.youtube.com/watch?v=Y7NeqpwLM2g) (YouTube, 12:08, Jan/2021)

  * ### AJAX
    * **Conceitos**

  * ### Consumo de APIs
    * __Conteúdo__
      * [../conteudo/api/](../conteudo/api/)

    * __API de Cotações de Moedas__
      * https://eduardo-ono.github.io/Desenvolvimento-Web/aulas/exemplos/api/cotacao-dolar.html
      * Código-fonte: [./exemplos/api/cotacao-dolar.html](./exemplos/api/cotacao-dolar.html)

    * __ViaCEP__
      * https://eduardo-ono.github.io/desenvolvimento-web/aulas/exemplos/api/viacep.html
      * Código-fonte: [./exemplos/api/viacep.html](./exemplos/api/viacep.html)

    <br>
  </section>
</details>

---

<br>

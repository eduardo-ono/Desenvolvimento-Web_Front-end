> ### Desenvolvimento Web > Conteúdo

# Ambientes de Desenvolvimento

Prof. Eduardo Ono

<br>

## Ferramentas de Desenvolvimento

### Git/GitHub

Comandos Básicos do Git/GitHub

[<img src="../../mapas-mentais/git-github.svg" width="300">](../../mapas-mentais/git-github.svg)

#### Vídeos Recomendados

* [Filipe Deschamps] [680 Recursos Grátis para Programadores Frontend, Backend, DevOps e Designers](https://www.youtube.com/watch?v=tpaSZ8x21PI) (YouTube, 10:00)

<br>

### Opcional: asdf (Linux)

* https://asdf-vm.com/#/core-manage-asdf

No Terminal (Bash), digitar:

    git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.8.0

Abrir o arquivo `~/.bashrc` e adicionar as linhas (inclusive os pontos iniciais):

    . $HOME/.asdf/asdf.sh
    . $HOME/.asdf/completions/asdf.bash

<br>

## Editores/IDEs para Desenvolvimento Web

### Opção 1:

### Microsoft Visual Studio Code (VS Code) + Extensões

  * Instalação do VS Code (Windows)
      * Site do desenvolvedor: https://code.visualstudio.com
      * Vídeos
        * [freeCodeCamp.org] [Visual Studio Code Crash Course](https://www.youtube.com/watch?v=WPqXP_kLzpo) (YouTube, 1:32:34)

  * Instalação do VS Code (Ubuntu)

    * No Terminal, digitar:

      `sudo snap install code --classic`

  * Extensões do VS Code

    * Live Server (Ritwick Dey)

    > Caso aconteça um erro na execução do Live Sever (Go Live), abrir a tela de configuração da extensão (Extension Settings) e procurar pela opção `Use local IP as host`. Habilitar esta opção.

    * Vídeos
      * [Código Fonte TV] [23 Extensões do VS Code para 2020](https://www.youtube.com/watch?v=tmgpF7Bn3_E) (YouTube, 15:44)

<br>

### Opção 2:

### Editor/IDE de sua preferência + Live Server

* Exemplos de Editores

   * Sublime Text
   * BlueGriffon (Editor WYSIWYG)
     * http://bluegriffon.org

* Node.js e (pacote) live-server

> O ***Node.js*** é um ambiente de execução para JavaScript, sendo necessário para a instalação e execução de outros softwares.<br>

> O ***live-server*** é um pequeno servidor local para desenvolvimento web (HTML/CSS/JS) com capacidade para "live reload" ("hot reload").

  * Instalação do Node.js (Windows)

    * [Bóson Treinamentos] [Como baixar e instalar o Node.js no Windows 10](https://youtu.be/Wras1X6rBrc) (YouTube, 10:22)

  * Instalação do Node.js (Ubuntu)

    `sudo apt install nodejs`

  * Instalação do live-server (Windows e Ubuntu)

    > Obs.: Requer o Node.js já instalado.

    * No terminal, digitar

      `npm install -g live-server`

  * Executando o live-server

    Para executar o live-server, mudar para o diretório do projeto e digitar no terminal:

    `live-server`

<br>

## Sistemas Operacionais

### Linux (Ubuntu)

* [Fabio Akita] [O Guia DEFINITIVO de UBUNTU para Devs Iniciantes](https://youtu.be/epiyExCyb2s) (YouTube, 1:20:18)

### Microsoft Windows

<br>

### Vídeos Recomendados

* [LINUXtips] [Giovanni Bassi - Usando um ambiente Linux completo no Windows com WSL e VSCode (Abr/2020)](https://www.youtube.com/watch?v=_Uqf5_kN6Rw) (YouTube, 2:10:00)

<br>

## Bibliografia

* BOOTH, Joseph D. [GitHub Succinctly](https://www.syncfusion.com/ebooks/github_succinctly), 80p, 2016.

<br>
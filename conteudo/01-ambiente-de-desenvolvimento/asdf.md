### Desenvolvimento Web > Ambiente de Desenvolvimento

# asdf

Prof. Eduardo Ono

<br>

## Descrição

> O asdf é um gerenciador de versões de compiladores, interpretadores, ambientes de execução, etc. para Linux.

<br>

## Instalação (Ubuntu)

> OBS.: Requer o Git previamente instalado.

* Site do desenvolvedor

  * https://asdf-vm.com/#/core-manage-asdf

* No Terminal (Bash), digitar:

  ```bash
  git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.8.0
  ```

* Abrir o arquivo `~/.bashrc` e adicionar as linhas (inclusive os pontos iniciais):

  ```bash
  . $HOME/.asdf/asdf.sh
  . $HOME/.asdf/completions/asdf.bash
  ```

<br>

## Plugins

### Java

    asdf plugin add java

Para verificar as versões disponíveis do Java:

    asdf list all java

Para instalar uma versão específica do Java (exemplo):

    asdf install java openjdk-11.0.2

Para configurar a versão corrente (exemplo):

    asdf global java openjdk-11.0.2

Para estabelecer o JAVA_HOME na inicialização do bash shell, adicionar a seguinte linha no arquivo `~/.bashrc`:

    . ~/.asdf/plugins/java/set-java-home.bash

<br>

### Node.js

    asdf plugin add nodejs

Será necessário instalar algumas licenças:

    ...

asdf

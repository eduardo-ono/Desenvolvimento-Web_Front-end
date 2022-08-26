> Desenvolvimento Web (Front-End) > Conteúdo > Ambiente de Desenvolvimento

<div align="center">

# Microsoft Visual Studio Code (VS Code)

__Prof. Eduardo Ono__

</div>

&nbsp;

## Instalação

### Windows

* Site do desenvolvedor: https://code.visualstudio.com

* Vídeos Recomendados

  | Thumb | Descrição |
  | :-: | --- |
  | [![Thumb](https://img.youtube.com/vi/9miOzgB4KC0/default.jpg)](https://www.youtube.com/watch?v=9miOzgB4KC0 "How I Setup And Customize VSCode") | <sup>[Carreira Desenvolvedor]</sup> [__Instalando e Configurando Visual Studio Code (VSCode) para HTML, CSS e JAVASCRIPT__](https://www.youtube.com/watch?v=9miOzgB4KC0)<br><sub>(56:05, YouTube, Abr/2022)</sub>
  | [![Thumb](https://img.youtube.com/vi/VknMxAIbJj4/default.jpg)](https://www.youtube.com/watch?v=VknMxAIbJj4 "How I Setup And Customize VSCode") | <sup>[[Web Dev Simplified]]</sup> [__How I Setup And Customize VSCode__](https://www.youtube.com/watch?v=VknMxAIbJj4)<br><sub>(10:20, YouTube, Mai/2021)</sub>
  | [![Thumb](https://img.youtube.com/vi/WPqXP_kLzpo/default.jpg)](https://www.youtube.com/watch?v=WPqXP_kLzpo "Visual Studio Code Crash Course") | <sup>[[freeCodeCamp.org]]</sup> [__Visual Studio Code Crash Course__](https://www.youtube.com/watch?v=WPqXP_kLzpo)<br><sub>(1:32:34, YouTube, Set/2020)</sub>

<br>

### Ubuntu 22.04 LTS

* No Terminal, digitar:

  ```bash
  sudo snap install code --classic
  ```

<br>

## Configurações Recomendadas

| Comando | Chave: Valor (settings.json) | Descrição
| --- | --- | --- |
| Editor: Linked Editing | `"editor.linkedEditing": true` | Auto renomeação de tags.
| Editor: Mouse Wheel Zoom | `"editor.mouseWheelZoom": true` | Habilita o zoom via <kbd>Ctrl</kbd>+<kbd>rolete do mouse</kbd>
| Editor: Wrapping Indent | `"editor.wrappingIndent": "deepIndent"` | Espaçamento do "wrapping"
| Window: Command Center | `"window.commandCenter": true` | 

&nbsp;

### Vídeos Recomendados

| Thumb | Descrição |
| :-: | --- |
| [![img](https://img.youtube.com/vi/H2gvHxC9gFY/default.jpg)](https://www.youtube.com/watch?v=H2gvHxC9gFY) | <sup>[ForrestKnight]</sup><br>[__My Visual Studio Code Setup for Web Development__](https://www.youtube.com/watch?v=H2gvHxC9gFY)<br><sub>(15:21, YouTube, Jul/2022)</sub>

&nbsp;

## Extensões

* [Ritwick Dey] Live Server

| Thumb | Descrição |
| :-: | --- |
| [![img](https://img.youtube.com/vi/tmgpF7Bn3_E/default.jpg)](https://www.youtube.com/watch?v=tmgpF7Bn3_E) | <sup>[Código Fonte TV]</sup><br>[__23 Extensões do VS Code para 2020 // Mão no Código #25__](https://www.youtube.com/watch?v=tmgpF7Bn3_E)<br><sub>(15:44, YouTube, Dez/2019)</sub>
| [![img](https://img.youtube.com/vi/p1W-r2jUHPs/default.jpg)](https://www.youtube.com/watch?v=p1W-r2jUHPs) | <sup>[João Bibiano]</sup><br>[__20 Extensões para o VSCODE que Você PRECISA Instalar se é Front-end__](https://www.youtube.com/watch?v=p1W-r2jUHPs)<br><sub>(24:32, YouTube, Jan/2022)</sub>

<br>

### Backup e Recuperação de Extensões do VS Code

```
Windows: %USERPROFILE%\.vscode\extensions
Linux: ~/.vscode/extensions
Mac: ~/.vscode/extensions
```

```powershell
code --list-extensions > vsc-extensions.txt
```

* Restaurar (Windows PowerShell)

```PowerShell
cat vsc-extensions.txt | % { "code --install-extension $_" }
```

ou

```powershell
code --list-extensions | % { "code --install-extension $_" }
```

* Restaurar (Linux)

```sh
cat vsc-extensions.txt | xargs -L 1 code --install-extension
```

<br>

## Dicas de Utilização

### Dicas Gerais

| Thumb | Descrição |
| :-: | --- |
| [![img](https://img.youtube.com/vi/uxln1hT_Ev4/default.jpg)](https://www.youtube.com/watch?v=uxln1hT_Ev4) | <sup>[Dev em Dobro]</sup><br>[__COMO BAIXAR E CONFIGURAR O VISUAL STUDIO CODE PARA INICIANTES__](https://www.youtube.com/watch?v=uxln1hT_Ev4)<br><sub>(17:02, YouTube, Jan/2022)</sub>

### Emmet Abbreviations

| Thumb | Descrição |
| :-: | --- |
| [![img](https://img.youtube.com/vi/8jLfTDn3_TM/default.jpg)](https://www.youtube.com/watch?v=8jLfTDn3_TM) | <sup>[Código Fonte TV]</sup><br>[__O Segredo de Como Escrever HTML 50% Mais Rápido no VS Code // Mão no Código #45__](https://www.youtube.com/watch?v=8jLfTDn3_TM)<br><sub>(7:56, YouTube, Fev/2021)</sub>

<br>

[Web Dev Simplified]: https://www.youtube.com/c/WebDevSimplified/videos
[freeCodeCamp.org]: https://www.youtube.com/c/Freecodecamp/videos

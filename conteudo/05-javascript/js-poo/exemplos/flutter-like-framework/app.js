import * as fw from './framework.js';

const app = document.querySelector('#app');

function fontStyle() {
  const size = '20px';
  const color = '#00FF00';
  return new fw.FontStyle({size: size, color: color});
}

app.appendChild(new fw.Text('Texto', {fontStyle: fontStyle()}).build());

app.appendChild(new fw.Link('https://www.kalunga.com.br', 'Kalunga', {}).build());

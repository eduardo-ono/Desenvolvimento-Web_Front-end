export class FontStyle {
  constructor({ size = '12px', color = '#000000' }) {
    this.size = size;
    this.color = color;
  }
}

export class Text {
  constructor(text, { className = '', id = '', fontStyle = new FontStyle({}) }) {
    this.innerHTML = text;
    this.id = id;
    this.fontStyle = fontStyle;
    this.build = () => {
      const p = document.createElement('p');
      p.setAttribute('id', this.id);
      p.setAttribute('style', `font-size: ${this.fontStyle.size}; color: ${this.fontStyle.color}`);
      p.innerHTML = this.innerHTML;
      return p;
    }
  }
} // class

export class Link {
  constructor(url, text, { className = '', id = '', style = '' }) {
    this.url = url;
    this.text = text;
    this.className = className;
    this.build = () => {
      const a = document.createElement('a');
      a.setAttribute('href', this.url);
      a.innerHTML = this.text;
      return a;
    }
  }
} // class

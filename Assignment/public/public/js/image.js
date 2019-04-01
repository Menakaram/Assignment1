class EditSymbol extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const image = document.createElement('span');
    image.setAttribute('class', 'image');
    const icon = document.createElement('span');
    icon.setAttribute('class', 'icon');
    
    let imgUrl;
    if(this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img');
    } else {
      imgUrl = './images/edit.png';
    }
  
    const img = document.createElement('img');
    img.src = imgUrl;
    icon.appendChild(img);
    const style = document.createElement('style');
    console.log(style.isConnected);
  
    style.textContent = `
      img {
        width: 25px;
      }
        `;
  
    image.appendChild(icon);
    shadow.appendChild(style);
    shadow.appendChild(image);
    }
  }

customElements.define('edit-symbol', EditSymbol);

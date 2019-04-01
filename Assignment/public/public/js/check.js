class FooterWrapper extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const icon = document.createElement('footer');
    icon.setAttribute('class', 'footer');
    icon.innerHTML = 'Acheron Software Consultancy Pvt. Ltd. Copyright © 2018. All rights reserved &nbsp;&nbsp;&nbsp;&nbsp;contact@acheron-tech.com ';
    shadow.appendChild(icon);
    }
  }

customElements.define('footer-info', FooterWrapper);

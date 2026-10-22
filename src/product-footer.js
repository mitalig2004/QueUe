import {Logo} from './brand-identity.js';

export function productFooter(){
  return `<footer class="queue-product-footer">
    <a class="queue-footer-brand" href="/" aria-label="QUEUE home">${Logo({label:'QUEUE'})}<span>Know what you have time for.</span></a>
    <nav aria-label="About QUEUE"><a class="queue-footer-case" href="/work/queue">Case study <span aria-hidden="true">↗</span></a></nav>
    <p>Product exploration by <strong>Mitali Giri</strong></p>
  </footer>`;
}

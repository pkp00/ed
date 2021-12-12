import header from './index.html';
import './style.scss';

document.getElementById('header').insertAdjacentHTML('afterbegin', header);
document.getElementById('header').insertAdjacentHTML('afterend', '<hr class="hr">');
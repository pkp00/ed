import './style.scss';
import alert from './index.html';

import product0 from '../../assets/images/image 18.png';
import product1 from '../../assets/images/image 20.png';
import product2 from '../../assets/images/image 22.png';

const images = [{
    img: product0,
    alert: 'secondary',
},{
    img: product1,
    alert: 'warning',
},{
    img: product2,
    alert: 'info',
}];

images.forEach((item, index) => {
    const id = `alert#${index}`;
    document.getElementById('alerts').insertAdjacentHTML(
        'beforeend',
        `<div id="${id}" class="alert alert-${item.alert} row" role="alert"></div>`
    );
    document.getElementById(id).insertAdjacentHTML('afterbegin', alert);
    document.getElementById(id).getElementsByTagName('img')[0].src = item.img;
});
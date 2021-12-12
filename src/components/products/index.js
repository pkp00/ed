import './product/index';
import {addProductHTML} from './product/index';

import product0 from '../../assets/images/Frame 245.png';
import product1 from '../../assets/images/Frame 246.png';
import product2 from '../../assets/images/Frame 247.png';
import product3 from '../../assets/images/Frame 248.png';
const imgsProducts = [product0, product1, product2, product3];
if(document.getElementById('products')) {
    imgsProducts.forEach((item, index) => {
        const id = `product#${index}`;
        document.getElementById('products').insertAdjacentHTML(
            'afterbegin',
            `<div id="${id}" class="col"></div>`
        );
        addProductHTML(id);
        document.getElementById(id).getElementsByTagName('img')[0].src = item;
    });
}

import img0 from '../../assets/images/image n1.png';
import img1 from '../../assets/images/image 2.png';
import img2 from '../../assets/images/image 1.png';
import img3 from '../../assets/images/image 14.png';
const images = [img0, img1, img2, img3];
if(document.getElementById('products1')) {
    images.forEach((item, index) => {
        const id = `product1#${index}`;
        document.getElementById('products1').insertAdjacentHTML(
            'beforeend',
            `<div id="${id}" class="col"></div>`
        );
        addProductHTML(id);
        document.getElementById(id).getElementsByTagName('img')[0].src = item;
    });
}

import i1 from '../../assets/images/i1.png';
import i2 from '../../assets/images/i2.png';
import i3 from '../../assets/images/i3.png';
const imagesList = [i1, i2, i3];
if(document.getElementById('products2')) {
    imagesList.forEach((item, index) => {
        const id = `product2#${index}`;
        document.getElementById('products2').insertAdjacentHTML(
            'beforeend',
            `<div id="${id}" class="col"></div>`
        );
        addProductHTML(id);
        document.getElementById(id).getElementsByTagName('img')[0].src = item;
    });
}

import i4 from '../../assets/images/Rectangle 62.png';
import i5 from '../../assets/images/Rectangle 47.png';
import i6 from '../../assets/images/Rectangle 48.png';
import i7 from '../../assets/images/Rectangle 65.png';
import i8 from '../../assets/images/Rectangle 66.png';
import i9 from '../../assets/images/Rectangle 67.png';
import i10 from '../../assets/images/Rectangle 70.png';
import i11 from '../../assets/images/Rectangle 71.png';
import i12 from '../../assets/images/Rectangle 72.png';
import i13 from '../../assets/images/Rectangle 1559.png';
import i14 from '../../assets/images/Rectangle 1560.png';
import i15 from '../../assets/images/Rectangle 1561.png';
const imagesList1 = [i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15];
if (document.getElementById('products3')) {
    imagesList1.forEach((item, index) => {
        const id = `product3#${index}`;
        document.getElementById('products3').insertAdjacentHTML(
            'beforeend',
            `<div id="${id}" class="col"></div>`
        );
        addProductHTML(id);
        document.getElementById(id).getElementsByTagName('img')[0].src = item;
    });
}

if(document.getElementById('products4')) {
    imgsProducts.forEach((item, index) => {
        const id = `product4#${index}`;
        if(index !== 0) {
            document.getElementById('products4').insertAdjacentHTML(
                'beforeend',
                `<div id="${id}" class="col"></div>`
            );
            addProductHTML(id);
            document.getElementById(id).getElementsByTagName('img')[0].src = item;
        }
    });
}

if(document.getElementById('products5')) {
    imagesList1.forEach((item, index) => {
        const id = `product4#${index}`;
        if(index < 4) {
            document.getElementById('products5').insertAdjacentHTML(
                'beforeend',
                `<div id="${id}" class="col"></div>`
            );
            addProductHTML(id);
            document.getElementById(id).getElementsByTagName('img')[0].src = item;
        }
    });
}
import product from './index.html';
import './style.scss';

export const addProductHTML = (id) => {
    document.getElementById(id).insertAdjacentHTML('afterbegin', product);
}
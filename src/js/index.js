import { init } from './controller.js';
import '../styles/css/style.css';
import Icon from '../img/tomato.svg';

console.log(Icon);
init();

const myIcon = new Image();
myIcon.src = Icon;

document.querySelector('.header__logo--icon').setAttribute('src', myIcon.src);
document.querySelector('.footer__icon').setAttribute('src', myIcon.src);

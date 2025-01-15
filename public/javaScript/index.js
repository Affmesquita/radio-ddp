import { toggleMenu } from "./hamburguerMenu.js";
import { handleNewsCardMediaQuery } from './backgroundImage.js';
import { sliderFunction } from './slider.js';
import { showLinkInsta } from './link-insta.js';


window.addEventListener('scroll', showLinkInsta)
sliderFunction()
handleNewsCardMediaQuery();
btnMenu.addEventListener('click', toggleMenu)

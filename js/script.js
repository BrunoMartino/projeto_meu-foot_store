import MenuMobile from "./modulos/menu-mobile.js";

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

import Slide from "./modulos/slide.js";

const slide = new Slide(".slide", ".slide-wrapper");
slide.init();

slide.changeSlide(0);

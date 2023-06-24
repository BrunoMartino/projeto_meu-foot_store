import MenuMobile from "./modulos/menu-mobile.js";
import SlideNav from "./modulos/slide.js";
import RegressiveTimer from "./modulos/regressive-timer.js";

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addArrow(".prev", ".next");
slide.addControl();

const timer = new RegressiveTimer(
  ".chrono-galeria .product-list .product-item"
);
timer.init();

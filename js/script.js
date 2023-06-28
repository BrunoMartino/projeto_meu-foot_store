import MenuMobile from "./modulos/menu-mobile.js";
import SlideNav from "./modulos/slide.js";
import RegressiveTimer from "./modulos/regressive-timer.js";

const menuMobile = new MenuMobile(
  '[data-menu="button"]',
  '[data-menu="list"]',
  "#menu-categorias > li.menu-item > a",
  "#menu-categorias .sub-menu"
);
menuMobile.init();
const filterMobile = new MenuMobile(
  ".filter-mobile",
  ".filters",
  "#menu-categorias-internas > li.menu-item > a",
  "#menu-categorias-internas .sub-menu"
);
filterMobile.init();

const slide = new SlideNav(".slide", ".slide-wrapper");
if (slide) {
  slide.init();
  slide.addArrow(".prev_btn", ".next_btn");
  slide.addControl();
}

const timer = new RegressiveTimer(
  ".chrono-galeria .product-list .product-item"
);
timer.init();

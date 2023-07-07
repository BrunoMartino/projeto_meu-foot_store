import MenuMobile from "./modulos/menu-mobile.js";
import SlideNav from "./modulos/slide.js";
import RegressiveTimer from "./modulos/regressive-timer.js";
import Cat_Swachtes from "./modulos/category-swatches.js";

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

const slideExist = document.querySelector('[data-home="slide"]');
if (slideExist) {
  const slide = new SlideNav(".slide", ".slide-wrapper");
  slide.init();
  slide.addArrow(".prev_btn", ".next_btn");
  slide.addControl();
}
const cronoExist = document.querySelector('[data-home="crono"]');
if (cronoExist) {
  const timer = new RegressiveTimer(
    ".chrono-galeria .product-list .product-item"
  );
  timer.init();
}

const swatches = new Cat_Swachtes(
  '[data-cat="imgs"]',
  '[data-cat="attributes"]',
  ".variations select",
  "#pa_imagem"
);
swatches.init();

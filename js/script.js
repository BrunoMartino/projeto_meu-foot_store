import MenuMobile from "./modulos/menu-mobile.js";
import SlideNav from "./modulos/slide.js";
import RegressiveTimer from "./modulos/regressive-timer.js";
import Cat_Swachtes from "./modulos/category-swatches.js";
import Img_Swachtes from "./modulos/image-swatches.js";
import IncrementQty from "./modulos/increment-qty.js";
import ChangeGallery from "./modulos/change-main-gallery.js";

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
const infoProductExist = document.querySelector(".product-info");
if (infoProductExist) {
  const swatches = new Cat_Swachtes(
    '[data-cat="attributes"]',
    ".variations select"
  );
  swatches.init();

  const idImage = "#pa_imagem";
  const selectImgExist = document.querySelector(idImage);
  if (selectImgExist) {
    const swatchesImg = new Img_Swachtes('[data-cat="imgs"]', idImage);
    swatchesImg.init();
  }

  const qtyValues = new IncrementQty(".qty");
  qtyValues.init();
}

const galleryExist = document.querySelector(".product-gallery");
if (galleryExist) {
  const galleryChange = new ChangeGallery(
    "[data-gallery=gallery-list]",
    "[data-cat=imgs-box]",
    "[data-gallery=gallery-main]"
  );
  galleryChange.init();
}

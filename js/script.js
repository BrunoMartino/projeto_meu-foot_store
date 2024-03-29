import MenuMobile from "./modulos/menu-mobile.js";
import SlideNav from "./modulos/slide.js";
import RegressiveTimer from "./modulos/regressive-timer.js";
import Cat_Swachtes from "./modulos/category-swatches.js";
import Img_Swachtes from "./modulos/image-swatches.js";
import IncrementQty from "./modulos/increment-qty.js";
import ChangeGallery from "./modulos/change-main-gallery.js";
import ChangeColor from "./modulos/change-color.js";
import CopyButton from "./modulos/copy-btn.js";
import ActiveDropDownMenu from "./modulos/active-dropdown-menu.js";
import GallerySlide from "./modulos/slide-gallery.js";

const menuMobile = new MenuMobile(
  '[data-menu="button"]',
  '[data-menu="list"]',
  "#menu-categorias > .menu-item",
  ".sub-menu"
);
menuMobile.init();

const filterMobile = new MenuMobile(
  ".filter-mobile",
  ".filters",
  "#menu-categorias-internas > .menu-item",
  ".sub-menu"
);
filterMobile.init();

const dropdownFilterActive = new ActiveDropDownMenu(
  "#menu-categorias-internas > .menu-item",
  ".sub-menu"
);
dropdownFilterActive.init();

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

const slideGallery = document.querySelector(".product-gallery__list");
if (slideGallery) {
  const gallerySlide = new GallerySlide(
    ".gallery-slide",
    ".product-gallery__list .prev",
    ".product-gallery__list .next"
  );
  gallerySlide.init();
}

const statusExist = document.querySelector(".order-status");
if (statusExist) {
  const colorChange = new ChangeColor(".order-status");
  colorChange.init();
}
const trackExist = document.querySelector(".wc-correios-tracking__description");
if (trackExist) {
  const buttonCopy = new CopyButton(
    ".wc-correios-tracking__description",
    ".wc-correios-tracking__description strong"
  );
  buttonCopy.init();
}

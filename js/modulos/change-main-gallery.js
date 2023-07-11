export default class ChangeGallery {
  constructor(galleryList, swatches, mainImg) {
    this.galleryList = document.querySelectorAll(galleryList);
    this.swatches = document.querySelectorAll(swatches);
    this.mainImg = document.querySelector(mainImg);

    this.changeImage = this.changeImage.bind(this);
  }

  changeImage({ currentTarget }) {
    this.mainImg.src = currentTarget.src;
  }
  addListChangeEvent() {
    this.galleryList.forEach((img) => {
      img.addEventListener("mouseover", this.changeImage);
    });
  }
  addSwatchesChangeEvent() {
    this.swatches.forEach((img) => {
      img.addEventListener("click", this.changeImage);
    });
    this.swatches.forEach((img) => {
      img.addEventListener("click", () => {
        this.swatches.forEach((obj) => {
          obj.parentElement.classList.remove("ativo");
        });
        img.parentElement.classList.add("ativo");
      });
    });
  }

  init() {
    this.addListChangeEvent();
    this.addSwatchesChangeEvent();
  }
}

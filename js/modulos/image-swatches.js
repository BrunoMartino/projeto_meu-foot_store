export default class Img_Swachtes {
  constructor(imageUL, imageID) {
    if (imageUL && imageID) {
      this.imageUL = document.querySelector(imageUL);
      this.imageID = document.querySelector(imageID);
      //create images arrays for control
      this.arrayImgUl = Array.from(this.imageUL.children);
      this.arrayImgSelect = Array.from(this.imageID.children);
      this.arrayImgSelect.shift();
      this.arrayImgSelect.reverse();
    }
  }
  SetImgSelected() {
    this.arrayImgUl.forEach((img, index) => {
      img.addEventListener("click", () => {
        this.arrayImgSelect.forEach((option) => {
          option.removeAttribute("selected");
        });
        this.arrayImgSelect[index].setAttribute("selected", "selected");
        if (this.imageID) {
          this.imageID.value = this.arrayImgSelect[index].value;
        }

        this.updateForm();
      });
    });
  }

  // this two functions updates the default form created by the woocommerce.
  updateForm() {
    const changeEvent = new Event("change", { bubbles: true });

    if (this.imageID) {
      this.imageID.dispatchEvent(changeEvent);
    }

    this.imageUL.dispatchEvent(changeEvent);
  }

  init() {
    this.SetImgSelected();
  }
}

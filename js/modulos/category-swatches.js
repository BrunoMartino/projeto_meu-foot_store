export default class Cat_Swachtes {
  constructor(imageUL, attrUL, variationSelect, imageID) {
    this.imageUL = document.querySelector(imageUL);
    this.imageID = document.querySelector(imageID);
    this.attrUL = Array.from(document.querySelectorAll(attrUL));
    this.variationSelect = Array.from(
      document.querySelectorAll(variationSelect)
    );

    //create images arrays for control
    this.arrayImgUl = Array.from(this.imageUL.children);
    this.arrayImgSelect = Array.from(this.imageID.children);
    this.arrayImgSelect.shift();
    this.arrayImgSelect.reverse();
  }

  createVariationsArray() {
    this.variationSelect.forEach((element) => {
      const selectID = element.id;
      let variationArray = Array.from(element.children);
      variationArray.shift();

      const attrElements = this.attrUL.filter((attrElement) =>
        attrElement.classList.contains(selectID)
      );
      attrElements.forEach((attrElement) => {
        let attrArray = Array.from(attrElement.children);
        this.setVariationsSelected(attrArray, element, variationArray);
      });
      this.addChangeEvents(element);
      console.log(element);
    });
  }

  setVariationsSelected(attrArray, selectElement, variationArray) {
    attrArray.forEach((attr, index) => {
      attr.addEventListener("click", () => {
        if (!this.isChangeEventInProgress) {
          this.isChangeEventInProgress = true;

          variationArray.forEach((variationElement, variationIndex) => {
            variationElement.removeAttribute("selected");
            if (variationIndex === index) {
              variationElement.setAttribute("selected", "selected");
              selectElement.value = variationElement.value;
            }
          });
          this.updateForm();

          this.isChangeEventInProgress = false;
        }
      });
    });
  }

  SetImgSelected() {
    this.arrayImgUl.forEach((img, index) => {
      img.addEventListener("click", () => {
        this.arrayImgSelect.forEach((option) => {
          option.removeAttribute("selected");
        });
        this.arrayImgSelect[index].setAttribute("selected", "selected");
        this.imageID.value = this.arrayImgSelect[index].value;

        this.updateForm();
      });
    });
  }

  // this two functions updates the default form created by the woocommerce.
  updateForm() {
    const changeEvent = new Event("change", { bubbles: true });

    this.variationSelect.forEach((element) => {
      element.dispatchEvent(changeEvent);
    });
    this.attrUL.forEach((attrElement) => {
      attrElement.dispatchEvent(changeEvent);
    });
  }

  addChangeEvents(element) {
    element.addEventListener("change", () => {
      if (!this.isChangeEventInProgress) {
        this.isChangeEventInProgress = true;
        this.updateForm();
        this.isChangeEventInProgress = false;
      }
    });
  }

  init() {
    this.createVariationsArray();
    this.SetImgSelected();
  }
}

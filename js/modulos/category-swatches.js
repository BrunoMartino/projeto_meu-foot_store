export default class Cat_Swachtes {
  constructor(attrUL, variationSelect) {
    this.attrUL = Array.from(document.querySelectorAll(attrUL));
    this.variationSelect = Array.from(
      document.querySelectorAll(variationSelect)
    );
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
        attrArray.forEach((el) => {
          el.classList.remove("ativo");
        });
        attr.classList.add("ativo");
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
  }
}

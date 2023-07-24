export default class CopyButton {
  constructor(copyContainer, copyText) {
    this.copyContainer = document.querySelector(copyContainer);
    this.copyText = document.querySelector(copyText);
  }

  createBtn() {
    const copyBtn = document.createElement("span");
    const copySvg = document.createElement("img");
    this.setSvg(copySvg);
    copyBtn.classList.add("copy-button");
    copyBtn.appendChild(copySvg);
    this.copyContainer.appendChild(copyBtn);
  }
  setSvg(element) {
    element.src =
      "https://meufoot.test/wp-content/themes/Meu_Foot/img-meufoot/icones/content-copy.svg";
  }

  copyEvent() {
    const btnCopy = document.querySelector(".copy-button");
    btnCopy.addEventListener("click", () => {
      const textToCopy = this.copyText.innerHTML;
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      document.body.appendChild(textArea);

      textArea.select();
      document.execCommand("copy");

      document.body.removeChild(textArea);

      const alert = document.createElement("span");
      alert.classList.add("copy-alert");
      alert.innerHTML = "Copiado !";
      this.copyContainer.appendChild(alert);
    });
  }

  init() {
    this.createBtn();
    this.copyEvent();
  }
}

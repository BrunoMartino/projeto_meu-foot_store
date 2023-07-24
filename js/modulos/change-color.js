export default class ChangeColor {
  constructor(element) {
    this.element = document.querySelector(element);
    this.text = this.element.innerHTML;

    this.orderStatus = {
      pending: "Pagamento pendente",
      processing: "Processando",
      waiting: "Aguardando",
      concluded: "Concluído",
      canceled: "Cancelado",
      refunded: "Reembolsado",
      unsucced: "Malsucedido",
    };
  }

  yellowBackground() {
    this.element.style.backgroundColor = "#FFDA73";
  }
  redBackground() {
    this.element.style.backgroundColor = "#f79f9f";
  }
  grayBackground() {
    this.element.style.backgroundColor = "#ededed";
  }

  setBackgroundColor() {
    if (this.text === this.orderStatus.pending) {
      this.yellowBackground();
    } else if (
      this.text === this.orderStatus.canceled ||
      this.text === this.orderStatus.refunded ||
      this.text === this.orderStatus.unsucced
    ) {
      this.redBackground();
    } else if (
      this.text === this.orderStatus.processing ||
      this.text === this.orderStatus.waiting
    ) {
      this.grayBackground();
    } else {
      this.element.style.backgroundColor = "#a3de67";
    }
  }
  init() {
    this.setBackgroundColor();
  }
}

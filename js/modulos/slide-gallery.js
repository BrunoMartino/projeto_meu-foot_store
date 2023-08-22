export default class GallerySlide {
  constructor(slide, prev, next) {
    this.slide = document.querySelector(slide);
    this.prevbtn = document.querySelector(prev);
    this.nextbtn = document.querySelector(next);

    this.slideItems = Array.from(this.slide.children);
    this.itemWidth = this.slideItems[0].offsetWidth;

    this.currentPosition = 1;

    this.prevEvent = this.prevEvent.bind(this);
    this.nextEvent = this.nextEvent.bind(this);

    this.updateSlidePosition();
  }

  prevEvent() {
    this.currentPosition =
      (this.currentPosition - 1 + this.slideItems.length) %
      this.slideItems.length;
    this.updateSlidePosition();
  }

  nextEvent() {
    this.currentPosition = (this.currentPosition + 1) % this.slideItems.length;
    this.updateSlidePosition();
  }

  updateSlidePosition() {
    const adjustedPosition =
      (this.currentPosition + this.slideItems.length - 1) %
      this.slideItems.length;
    this.slide.style.transform = `translate3d(${
      -adjustedPosition * this.itemWidth
    }px, 0, 0)`;
  }

  addGalleryEvents() {
    this.prevbtn.addEventListener("click", this.prevEvent);
    this.nextbtn.addEventListener("click", this.nextEvent);
  }

  init() {
    if (this.slideItems.length > 4) {
      this.addGalleryEvents();
      return this;
    } else {
      this.prevbtn.style.display = "none";
      this.nextbtn.style.display = "none";
      return this;
    }
  }
}

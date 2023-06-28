import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, links, submenu, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelectorAll(menuList);
    this.links = Array.from(document.querySelectorAll(links));
    this.submenu = document.querySelectorAll(submenu);
    this.html = document.querySelector("html");

    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
    this.openMenu = this.openMenu.bind(this);
    this.activeSubmenu = this.activeSubmenu.bind(this);
  }

  openMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    this.menuList.forEach((element) => {
      element.classList.add("ativo");
    });
    this.menuButton.classList.add("ativo");
    outsideClick(Array.from(this.menuList), this.events, () => {
      this.menuList.forEach((element) => {
        element.classList.remove("ativo");
      });
      this.menuButton.classList.remove("ativo");
    });
  }
  addMenuMobileEvents() {
    this.events.forEach((event) => {
      this.menuButton.addEventListener(event, this.openMenu);
    });
  }
  addSubmenuEvents() {
    this.links.forEach((link) => {
      link.addEventListener("click", this.activeSubmenu);
    });
  }

  activeSubmenu(event) {
    event.preventDefault();
    this.links.forEach((link) => {
      link.classList.remove("ativo");
    });
    this.submenu.forEach((element) => {
      element.classList.remove("ativo");
    });
    const currentLink = event.target;
    const currentSubMenu = currentLink.nextElementSibling;
    currentLink.classList.add("ativo");
    currentSubMenu.classList.add("ativo");

    setTimeout(() => {
      console.log("removeu");
      event.target.removeEventListener("click", this.activeSubmenu);
    }, 150);
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
      this.addSubmenuEvents();
    }
    return this;
  }
}

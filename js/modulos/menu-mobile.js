import outsideClick from "./outsideclick.js";
import ActiveDropDownMenu from "./active-dropdown-menu.js";

export default class MenuMobile {
  constructor(menuButton, menuList, parentCat, submenu, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelectorAll(menuList);
    this.parentCat = document.querySelectorAll(parentCat);
    this.submenu = document.querySelectorAll(submenu);
    this.html = document.querySelector("html");
    this.isOpen = false;
    this.dropdownMenu = new ActiveDropDownMenu(parentCat, submenu);

    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
    this.openMenu = this.openMenu.bind(this);
    this.linkPreventRemove = this.linkPreventRemove.bind(this);
  }

  linkPreventRemove(event) {
    event.preventDefault();
  }

  openMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    if (!this.isOpen) {
      this.menuList.forEach((element) => {
        element.classList.add("ativo");
      });
      this.menuButton.classList.add("ativo");

      outsideClick(Array.from(this.menuList), this.events, () => {
        this.menuList.forEach((element) => {
          element.classList.remove("ativo");
        });
        this.menuButton.classList.remove("ativo");
        this.isOpen = false;
      });
      this.isOpen = true;
      if (this.isOpen) {
        this.dropdownMenu.init();
      }
    } else {
      this.menuList.forEach((element) => {
        element.classList.remove("ativo");
      });
      this.menuButton.classList.remove("ativo");
      this.isOpen = false;
    }
  }
  addMenuMobileEvents() {
    this.events.forEach((event) => {
      this.menuButton.addEventListener(event, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}

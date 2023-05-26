export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelectorAll(menuList);
    this.html = document.querySelector("html");

    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
    this.openMenu = this.openMenu.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  openMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    this.menuList.forEach((element) => {
      element.classList.toggle("ativo");
    });
    this.menuButton.classList.toggle("ativo");

    const links = Array.from(
      document.querySelectorAll(".menu-categorias-container a")
    );
    const submenu = document.querySelectorAll(".sub-menu");
    links.forEach((link) => {
      link.addEventListener("click", activeSubMenu);
    });
    function activeSubMenu(event) {
      event.preventDefault();
      submenu.forEach((element) => {
        element.classList.add("ativo");
      });
      if (!this.eventRemoved) {
        links.forEach((link) => {
          link.removeEventListener("click", activeSubMenu);
        });
        this.eventRemoved = true;
      }
    }
  }
  handleOutsideClick(event) {
    const buttonMenu = document.querySelector(".menu-mobile");
    const listMenu = document.querySelector(".menu-categorias-container");
    const loginMenu = document.querySelector(".menu-login");

    const targetElements = [buttonMenu, listMenu, loginMenu];

    handleOutsideClick(targetElements, event, () => {
      setTimeout(() => {
        this.menuList.forEach((element) => {
          element.classList.remove("ativo");
        });
      });
    });
  }
  addMenuMobileEvents() {
    this.events.forEach((event) => {
      this.menuButton.addEventListener(event, this.openMenu);
      this.html.addEventListener(event, this.handleOutsideClick);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
function handleOutsideClick(elementTargets, events, callback) {
  const insideClick = elementTargets.some((elementTarget) => {
    return elementTarget.contains(events.target);
  });
  if (!insideClick) {
    callback();
  }
}

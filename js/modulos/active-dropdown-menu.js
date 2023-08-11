export default class ActiveDropDownMenu {
  constructor(linksSelector, submenuSelector) {
    this.links = document.querySelectorAll(linksSelector);
    this.submenu = document.querySelectorAll(submenuSelector);

    this.activeSubMenu = this.activeSubMenu.bind(this);
  }

  hasSubMenu(link) {
    const linkChildren = Array.from(link.children);
    const submenuChildren = Array.from(this.submenu);
    return linkChildren.some((child) => submenuChildren.includes(child));
  }

  activeSubMenu(event) {
    const link = event.currentTarget;
    const submenu = link.querySelector(".sub-menu");

    if (submenu) {
      this.submenu.forEach((element) => {
        element.classList.remove("active");
      });
      submenu.classList.add("active");

      setTimeout(() => {
        link.removeEventListener("click", this.removePreventedEvent);
        console.log("removeu trava");
      }, 600);
    }
  }

  removePreventedEvent(event) {
    event.preventDefault();
  }

  subMenuEvents() {
    this.links.forEach((link) => {
      if (this.hasSubMenu(link)) {
        link.addEventListener("click", this.activeSubMenu);
        link.addEventListener("click", this.removePreventedEvent);
      }
    });
  }

  init() {
    this.subMenuEvents();
  }
}

export class Popover {
  constructor(element) {
    this.element = element;
    this.popover = null;
  }

  hide() {
    this.popover.remove();
    this.popover = null;
  }

  create() {
    this.popover = document.createElement('div');
    this.popover.classList.add('popover');
    this.popover.setAttribute('role', 'tooltip');
    const popoverHeader = document.createElement('h3');
    popoverHeader.classList.add('popover-header');
    const title = this.element.dataset.title;
    popoverHeader.textContent = title;

    const popoverBody = document.createElement('div');
    popoverBody.classList.add('popover-body');
    const textPopver = this.element.dataset.content;
    popoverBody.textContent = textPopver;

    this.popover.append(popoverHeader, popoverBody);
  }

  render() {
    this.create();
    this.element.append(this.popover);

    const { left, top, width } = this.element.getBoundingClientRect();

    this.popover.style.left = '50%';
    this.popover.style.top = `-${this.popover.offsetHeight + 10}px`;
    this.popover.style.transform = 'translateX(-50%)';
  }

  toggle(event) {
    if (event) event.stopPropagation();

    if (this.element.contains(this.popover)) {
      this.hide();
      return;
    }
    this.render();
  }
}

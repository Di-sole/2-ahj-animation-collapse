export default class WidgetCollapsible {
  constructor(container) {
    this.container = container;
    this.boxCollapsible = null;
    this.button = null;

    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  start() {
    const widget = document.createElement('div');
    widget.classList.add('widget-collapsible');
    widget.innerHTML = `
      <button class="collapse-btn">Collapse</button>
      <div class="collapse-box"></div>
    `;

    this.container.appendChild(widget);

    this.boxCollapsible = this.container.querySelector('.collapse-box');
    this.boxCollapsible.style.height = '0px';

    this.button = this.container.querySelector('.collapse-btn');
    this.button.addEventListener('click', this.toggleCollapse);
  }

  toggleCollapse(e) {
    e.preventDefault();

    const hasContent = this.boxCollapsible.hasChildNodes();

    if (!hasContent) {
      this.addContent();
      const content = this.container.querySelector('.collapse-box-content');
      const contentHeight = content.getBoundingClientRect().height;
      this.boxCollapsible.style.height = `${contentHeight}px`;
    } else {
      this.removeContent();
      this.boxCollapsible.style.height = '0px';
    }
  }

  addContent() {
    const contentEl = document.createElement('p');
    contentEl.classList.add('collapse-box-content');
    contentEl.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';
    this.boxCollapsible.appendChild(contentEl);
  }

  removeContent() {
    this.boxCollapsible.innerHTML = '';
  }
}

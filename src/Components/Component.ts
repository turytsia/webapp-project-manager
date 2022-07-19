/**
 * Creates HTML node
 * @private {template} Selected template
 * @private {element} First template's child node
 */
 export default abstract class Component {
    private template: HTMLTemplateElement;
    private element: Partial<Element> = {};
  
    get getElement() {
      return this.element as Element;
    }
  
    constructor(templateId: string, rootElement: HTMLElement) {
      this.template = document.getElementById(templateId)! as HTMLTemplateElement;
      this.createElementInDOM(rootElement);
    }
  
    protected createElementInDOM(rootElement: HTMLElement) {
      const templateNode = document.importNode(this.template.content, true);
      this.element = templateNode.firstElementChild! as Element;
      rootElement.insertAdjacentElement("beforeend", this.element as Element);
    }
  
    protected abstract configureElementInDOM(): void;
  }
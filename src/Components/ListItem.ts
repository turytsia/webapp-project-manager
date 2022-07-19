import Component from "./Component";
import { Draggable } from "../Utils/Draggable";
import autobind from "../Decorators/autobind";
import { ProjectStatus } from "../Constants/project-status";
import {FormBody} from './Form'

/**
 * Project Item
 * @private {title} Item's Title
 * @private {description} Item's Description
 * @private {people} Item's People
 */
export default class ListItem extends Component implements Draggable {
  public id: string;
  public type: ProjectStatus;
  public title: string;
  public description: string;
  public people: string;

  get getItem(): FormBody {
    return {
      title: this.title,
      description: this.description,
      people: this.people,
      type: this.type,
    };
  }

  constructor(body: FormBody) {
    super(
      "template-list-item",
      document.querySelector(
        body.type === ProjectStatus.ACTIVE
          ? ".list--active ul"
          : ".list--finished ul"
      )!
    );

    this.id = Math.random().toString();
    this.title = body.title;
    this.description = body.description;
    this.people = body.people;
    this.type = body.type;

    this.configureElementInDOM();
  }

  @autobind
  public onDragStart(event: Event): void {
    (event as DragEvent).dataTransfer?.setData("plain/text", this.id);
  }

  @autobind
  public onDragEnd(event: Event): void {}

  public updateElementInDOM() {
    let CSSClass = ".list--active ul";

    if (this.type === ProjectStatus.FINISHED) {
      CSSClass = ".list--finished ul";
    }

    const rootElement = document.querySelector(CSSClass)! as HTMLElement;

    this.getElement.remove();
    this.createElementInDOM(rootElement);
    this.configureElementInDOM();
  }

  public configureElementInDOM() {
    this.getElement.addEventListener("dragstart", this.onDragStart);
    this.getElement.addEventListener("dragend", this.onDragEnd);

    this.getElement.setAttribute("id", this.id);
    const titleElement = this.getElement.querySelector("h2")!;
    const peopleElement = this.getElement.querySelector("span")!;
    titleElement.innerHTML = this.title;
    peopleElement.innerHTML = this.description;
  }
}

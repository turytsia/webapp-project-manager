import Component from "./Component";
import autobind from "../Decorators/autobind";
import { ProjectStatus } from "../Constants/project-status";
import ListItem from "./ListItem";
import { DragArea } from "../Utils/Draggable";
import { FormBody } from "./Form";

const root = document.getElementById("app")!;

/**
 * Project List Section
 */
export default class List extends Component implements DragArea {
  static items: ListItem[] = [];

  private type: ProjectStatus;

  constructor(type: ProjectStatus) {
    super("template-list", root);
    this.type = type;
    this.configureElementInDOM();
  }

  static append(body: FormBody) {
    List.items.push(new ListItem(body));
  }

  @autobind
  public onDragOver(event: Event) {
    event.preventDefault();
    this.getElement.classList.add("droppable");
  }

  @autobind
  public onDragDrop(event: Event) {
    const id = (event as DragEvent).dataTransfer?.getData("plain/text");
    if (id) {
      const index = List.items.findIndex((item) => item.id === id);
      List.items[index].type = this.type;
      this.updateElementInDOM();
    }
    this.getElement.classList.remove("droppable");
  }

  @autobind
  public onDragLeave(event: Event) {
    this.getElement.classList.remove("droppable");
  }
  public updateElementInDOM() {
    for (const item of List.items) {
      if (item.type === this.type) {
        item.updateElementInDOM();
      }
    }
  }

  protected configureElementInDOM() {
    this.getElement.addEventListener("dragover", this.onDragOver);
    this.getElement.addEventListener("drop", this.onDragDrop);
    this.getElement.addEventListener("dragleave", this.onDragLeave);

    if (this.type === ProjectStatus.ACTIVE) {
      this.getElement.classList.add("list--active");
      this.getElement.querySelector("h2")!.innerHTML = "Active Projects";
    } else {
      this.getElement.classList.add("list--finished");
      this.getElement.querySelector("h2")!.innerHTML = "Finished Projects";
    }
  }
}

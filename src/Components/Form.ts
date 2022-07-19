import Component from './Component'
import autobind from '../Decorators/autobind'
import { ProjectStatus } from '../Constants/project-status';

const root = document.getElementById("app")!;

// Validator
class Validator {
    static isEmpty(value: string, message: string = "Value is empty") {
      if (value.length === 0) {
        alert(message);
        return true;
      }
      return false;
    }
  }

type FormInputElements = HTMLInputElement | HTMLTextAreaElement;

export type FormInputProps = "title" | "description" | "people";

export interface FormBody {
  title: string;
  description: string;
  people: string;
  type: ProjectStatus;
}

const defaultBody: FormBody = {
  title: "",
  description: "",
  people: "",
  type: ProjectStatus.ACTIVE,
};

export default class Form extends Component {
  public onsubmit: (body: FormBody) => void = () => {};

  private inputs: FormInputElements[] = [];
  private body = { ...defaultBody };

  constructor() {
    super("template-form", root);
    this.configureElementInDOM();
  }

  @autobind
  private onInputChange(e: Event & { target: any }) {
    const inputName = e.target.getAttribute("name");
    this.body[inputName as FormInputProps] = e.target.value;
  }

  @autobind
  private onSubmit(e: Event) {
    e.preventDefault();
    if (
      Validator.isEmpty(this.body.title, "Error: Title is empty") ||
      Validator.isEmpty(this.body.description, "Error: Description is empty") ||
      Validator.isEmpty(this.body.people, "Error: People is empty")
    ) {
      return;
    }
    this.onsubmit(this.body);
    this.clear();
  }

  protected configureElementInDOM() {
    const inputs = this.getElement.getElementsByTagName!("input");
    const textareas = this.getElement.getElementsByTagName!("textarea");
    this.inputs = this.inputs.concat(Array.from(inputs), Array.from(textareas));

    this.getElement.addEventListener!("submit", this.onSubmit);
    for (const input of this.inputs) {
      input.addEventListener("change", this.onInputChange);
    }
  }

  private clear() {
    for (const input of this.inputs) {
      input.value = "";
    }
    this.body = { ...defaultBody };
  }
}

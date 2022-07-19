import Form from "./Components/Form";
import List from "./Components/List";
import { ProjectStatus as status } from "./Constants/project-status";

const form = new Form();

new List(status.ACTIVE);

new List(status.FINISHED);

form.onsubmit = (body) => {
  List.append(body);
};
//test

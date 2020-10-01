import {
  FASTElement,
  customElement,
  attr,
  html,
} from "@microsoft/fast-element";
import "./profile";

const template = html<NameTag>`
  <div class="header">
    <h3>${(x) => x.title.toUpperCase()}</h3>
    <app-profile></app-profile>
  </div>
`;

@customElement({
  name: "name-tag",
  template,
})
export class NameTag extends FASTElement {
  @attr title = "MyApp";
  constructor() {
    super();
  }
}

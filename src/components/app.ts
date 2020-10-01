import {
  FASTElement,
  customElement,
  attr,
  html, css
} from "@microsoft/fast-element";
import "./profile";
import "./navbar";

const styles = css`
 
`;

const template = html<NameTag>`
  <div class="header">
  <app-navbar></app-navbar>
    
    <app-profile title="${(x) => x.title.toUpperCase()}"></app-profile>
  </div>
`;

@customElement({
  name: "name-tag",
  template,
  styles
})
export class NameTag extends FASTElement {
  @attr title = "MyApp";
  constructor() {
    super();
  }
}

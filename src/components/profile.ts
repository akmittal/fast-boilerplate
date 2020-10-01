import { FASTElement, customElement, html } from "@microsoft/fast-element";

const template = html<Profile>` <h2>MyProfile</h2> `;

@customElement({
  name: "app-profile",
  template,
})
export class Profile extends FASTElement {}

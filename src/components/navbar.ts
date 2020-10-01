import { FASTElement, customElement, html, css, attr } from "@microsoft/fast-element";

const template = html<Navbar>`<ul>
  <li class="logo"><a href="default.asp">${(x) => x.title.toUpperCase()}</a></li>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
</ul>`;

const styles = css`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }
  

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    background-color: #111;
  }

  .active {
    background-color: #4caf50;
  }
`;

@customElement({
  name: "app-navbar",
  template,
  styles,
})
export class Navbar extends FASTElement {
    @attr() title = "";
}

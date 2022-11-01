import Component from "./base/Components";

class App extends Component {
  setup() {
    this.state = {};
  }
  template() {
    const {} = this.state;
    return ``;
  }
  setEvent() {}
}

new App(document.querySelector("#root"));

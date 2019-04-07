import { LitElement, html, customElement, property, css } from "lit-element";
import "@polymer/paper-card/paper-card.js";
import "@polymer/paper-button/paper-button.js";



@customElement("list-item")
export class ListItem extends LitElement {
  @property({type: Object}) data: any;

  constructor() {
    super();
  }

  static get styles(){
    return  css `
      div {
        padding: 10px;
      }
    `;
  }


  render() {
    return html`
      <div>
          <div>
          ${this.data.map((item:any, index: any) => html `
            <div>${index+1} ${item.title}</div>
          `)}
          </div>
      </div>
    `;
  }

}

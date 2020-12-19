import { r as registerInstance, h } from './index-ea1051fa.js';

const bswButtonCss = ":host{display:block;font-family:'Times New Roman', Times, serif}.button{--button-background-color:var(--palette-color2);background-color:var(--button-background-color);color:var(--button-color);padding:12px 24px;border-radius:4px;outline:none;font-size:1em;border-color:transparent;font-weight:500;font-family:sans-serif;cursor:pointer}.bsw-button-primary{background-color:aliceblue;color:aquamarine;border-color:aqua;border-radius:3px;border-width:1px;padding:12px 24px;box-shadow:none;font-size:1em;font-family:'Courier New', Courier, monospace}";

const BswButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onClick = () => {
    };
  }
  render() {
    return (h("button", { class: `bsw-button-primary ${this.class}`, onClick: this.onClick }, h("slot", null)));
  }
};
BswButton.style = bswButtonCss;

export { BswButton as bsw_button };

/**
 * Copyright 2025 btopro
 * @license Apache-2.0, see LICENSE for full text.
 */
import { html, css } from "lit";
import { HTCScreen } from "./htc-screen.js";
/**
 * `example-htc-screen`
 * This provides a 'screen' as far as sizing and some base requirements discussed in meeting
 * 
 * @demo index.html
 * @element wendy-screen
 */
export class WendyScreen extends HTCScreen {

  static get tag() {
    return "";
  }
  constructor() {
    super();
  }

  static get styles() {
  return css`
    :host {   
      background: #EEAECA;
      background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
    }
  `;
}


}

globalThis.customElements.define("wendy-screen", WendyScreen);


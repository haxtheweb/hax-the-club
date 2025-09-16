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
    return "wendy-screen";
  }
  constructor() {
    super();
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          background: #eeaeca;
          background: radial-gradient(
            circle,
            rgba(238, 174, 202, 1) 0%,
            rgba(148, 187, 233, 1) 100%
          );
        }
      `,
    ];
  }
  render() {
    return html`<div class="my-background"><slot></slot></div>`;
  }
}

globalThis.customElements.define(WendyScreen.tag, WendyScreen);

/**
 * Copyright 2025 btopro
 * @license Apache-2.0, see LICENSE for full text.
 */
import { html, css } from "lit";
import { HTCScreen } from "./htc-screen.js";
/**
 * `synthywavy-htc-screen`
 * This provides a 'screen' as far as sizing and some base requirements discussed in meeting
 * 
 * @demo index.html
 * @element htc-screen
 */
export class SynthyWavyHTCScreen extends HTCScreen {

  static get tag() {
    return "synthywavy-htc-screen";
  }
  constructor() {
    super();
    this.width = 1280;
    this.height = 720;
    this.x = 0;
    this.bottomoffset = 0;
    this.ctx = null;
  }
  static get styles() {
    return [
      super.styles,
      css`
    canvas {
      position: absolute;
      top: 40vh;
      width: 100vw;
      height: 60vh;
    }
`];
  }
  applytocanvas() {
    const c = this.shadowroot.querySelector("canvas");
    this.ctx = c.getContext("2d");
  }
  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, 0);
    ctx.lineTo(this.x + this.bottomOffset, c.height);
    ctx.strokeStyle = "#fff3ff";
    ctx.stroke();
  }
  
  update() {
    //requestAnimationFrame(this.update());

    this.dy += 0.1;

    if (this.y > c.height) {
      this.y = 0;
      this.dy = 1;
    } else {
      this.y += this.dy;
    }

    this.draw();
  }
  drawVertLines() {
    vertArr.forEach(function(item) {
      item.draw();
    });
  }
  clicked() {
    if (beenClicked === false) {
      beenClicked = true;
      mainFunc();
    } else {
      document.querySelector(
        ".testarossa"
      ).style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
      rotation += 60;
    }
  }
  
  
  render() {
    return html`
    <div>
      <slot>  
      </slot>
      <canvas></canvas>
    </div>
    
    `;
  }

}

globalThis.customElements.define(SynthyWavyHTCScreen.tag, SynthyWavyHTCScreen);
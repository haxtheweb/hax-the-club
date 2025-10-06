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
 * @element htc-screen
 */
export class FiraolScreen extends HTCScreen {

  static get tag() {
    return "firaol-screen";
  }
  constructor() {
    super();
    this.title = "Every MONDAY, HAX CLUB MEETS";

  }
  
  static get styles() {
    return [
      super.styles,
      css`
        .sky {
          position: relative;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at bottom, #0b1d3a, #000);
          overflow: hidden;
        }

        /* Moon */
        .moon {
          position: absolute;
          top: 50px;
          left: 60px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          
         
          
          
          background-color: rgba(255, 255, 255, .9);
          
          /* Glow + crater depth */
          box-shadow: 
            0 0 40px 15px rgba(255, 255, 200, 0.4), /* outer glow */
            inset -15px -15px 40px rgba(0, 0, 0, 0.5), /* crater shading */
            inset 10px 10px 20px rgba(255, 255, 255, 0.3); /* highlight */
          
          /* Optional: slight animation for mystical vibe */
          animation: moon-glow 6s infinite alternate ease-in-out;
        }

        /* Stars */
        .stars {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          top: 0;
          left: 0;
          /* box-shadow generates a bunch of stars */
          box-shadow:
            20px 40px white,
            80px 120px white,
            200px 30px white,
            150px 90px white,
            300px 60px white,
            250px 150px white,
            400px 100px white,
            500px 50px white,
            600px 130px white,
            700px 70px white;
          animation: twinkle 2s infinite alternate;
        }

        @keyframes twinkle {
          from { opacity: 0.6; }
          to   { opacity: 1; }
        }
        @keyframes moon-glow {
          from { box-shadow: 0 0 30px 10px rgba(255, 255, 200, 0.3); }
          to   { box-shadow: 0 0 50px 20px rgba(255, 255, 230, 0.6); }
        }
      `
    ];
    
  }
  render() {
    return html`
       <div class="sky">
        <div class="moon"></div>
        <div><h1>${this.title}</h1></div>
        <div class="stars"></div>
      </div>
      `;
  }
  
}

globalThis.customElements.define(FiraolScreen.tag, FiraolScreen);
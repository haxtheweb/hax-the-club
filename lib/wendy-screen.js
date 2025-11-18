/**
 * Copyright 2025 btopro
 * @license Apache-2.0, see LICENSE for full text.
 */
import { html, css } from "lit";
import { HTCScreen } from "./htc-screen.js";
import "../components /syllabus-section.js";
import "../components /weekly-lessons.js";
import "../components /header-component.js";
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
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background: #0d0d14;
          color: #e6daff;
          font-family: var(--ddd-font-primary, "Inter", sans-serif);
          scroll-behavior: smooth;
          height: 100vh;
          overflow-y: auto; 
        }

        header {
          padding: 2rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .course-title {
          font-size: 1.6rem;
          font-weight: 600;
        }

        .contact-btn {
          background: #ddc9ff;
          color: #1a1a25;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
        }

        /* Hero Section */
        .hero {
          position: relative;
          padding: 4rem 3rem 2rem 3rem;
        }

        .hero h1 {
          font-size: clamp(4rem, 14vw, 12rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          margin: 0;
          color: white;
          text-shadow: 0px 0px 25px rgba(255, 255, 255, 0.22);
        }

        /* Module Cards */
        .modules {
          margin-top: 4rem;
          display: flex;
          flex-direction: column;
          overflow-x: auto;
          padding-bottom: 4rem;
          gap: 1rem;
          padding-left: 2rem;
        }
      `,
    ];
  }

  render() {
    return html`
      <header-component
        course="IST 256"
        instructor="Bryan Ollendyke"
        contactLink="mailto:bo@psu.edu"
      ></header-component>

      <section class="hero">
        <h1>Syllabus.</h1>
        <syllabus-section></syllabus-section>
      </section>

      <section class="modules">
        <weekly-lessons></weekly-lessons>
      </section>
    `;
  }
}

globalThis.customElements.define(WendyScreen.tag, WendyScreen);

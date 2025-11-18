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
          display: block;
          background: #0d0d14;
          color: #e6daff;
          font-family: var(--ddd-font-primary, "Inter", sans-serif);
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

        /* Buttons Grid */
        .grid {
          margin-top: -4rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          max-width: 700px;
        }

        .grid button {
          background: #111115;
          border: none;
          border-radius: 16px;
          padding: 1.5rem;
          text-align: left;
          color: white;
          font-size: 1.3rem;
          box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }

        .grid button span {
          display: block;
          font-size: 0.8rem;
          opacity: 0.6;
          margin-top: 0.3rem;
        }

        /* Module Cards */
        .modules {
          margin-top: 4rem;
          display: flex;
          overflow-x: auto;
          padding-bottom: 4rem;
          gap: 1rem;
          padding-left: 2rem;
        }

        .module-card {
          min-width: 220px;
          background: #ece2ff;
          border-radius: 12px;
          padding-bottom: 2rem;
          flex-shrink: 0;
        }

        .module-number {
          background: #0d0d17;
          padding: 2.2rem 1.5rem;
          border-radius: 12px 12px 0 0;
          font-size: 3rem;
          font-weight: 700;
          text-align: center;
          color: #cbb5f8;
        }

        .progress {
          margin: 1.5rem auto 0 auto;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 3px solid #c4b2ff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #6e5ca6;
        }
      `,
    ];
  }

  render() {
    return html`
      <header>
        <div class="course-title">IST 256</div>
        <a class="contact-btn" href="#">Contact ↗</a>
      </header>

      <section class="hero">
        <h1>Syllabus.</h1>

        <div class="grid">
          <button>
            Overview
            <span>Location, Time, Objectives</span>
          </button>
          <button>Assessments</button>
          <button>Calendar</button>
          <button>Policy</button>
        </div>
      </section>

      <section class="modules">
        ${[1, 2, 3, 4, 5].map(
          (n) => html`
            <div class="module-card">
              <div class="module-number">${String(n).padStart(2, "0")}</div>
              <div class="progress">100%</div>
            </div>
          `
        )}
      </section>
    `;
  }
}

globalThis.customElements.define(WendyScreen.tag, WendyScreen);

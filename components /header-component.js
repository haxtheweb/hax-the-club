import { LitElement, html, css } from "lit";

export class HeaderComponent extends LitElement {
  static get tag() {
    return "header-component";
  }

  static get properties() {
    return {
      course: { type: String },
      instructor: { type: String },
      contactLink: { type: String },
    };
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          width: 100%;
          background: #0d0d14;
          color: #e6daff;
          font-family: var(--ddd-font-primary, "Inter", sans-serif);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        header {
          margin-top: 72px;
          padding: 1.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .course {
          font-size: 1.4rem;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .right {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .instructor {
          font-size: 1rem;
          opacity: 0.85;
          font-weight: 500;
        }

        .contact-btn {
          background: #ddc9ff;
          color: #1a1a25;
          padding: 0.45rem 1rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          transition: background 0.25s ease, transform 0.2s ease;
        }

        .contact-btn:hover {
          background: #f1e6ff;
          transform: translateY(-2px);
        }

        @media (max-width: 600px) {
          header {
            flex-direction: column;
            gap: 0.8rem;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <header>
        <div class="course">${this.course}</div>

        <div class="right">
          <div class="instructor">${this.instructor}</div>
          <a class="contact-btn" href="${this.contactLink}" target="_blank">
            Contact ↗
          </a>
        </div>
      </header>
    `;
  }
}

customElements.define(HeaderComponent.tag, HeaderComponent);

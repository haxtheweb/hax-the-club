import { LitElement, html, css } from "lit";

export class SyllabusSection extends LitElement {
  static get tag() { return "syllabus-section"; }

  static get properties() {
    return {
      items: { type: Array },
    };
  }

  constructor() {
    super();
    this.items = [
      {
        icon: "⭐",
        title: "Overview",
        subtitle: "Location, Time, Objectives",
        link: "/overview"
      },
      {
        icon: "◎",
        title: "Assessments",
        subtitle: "Grading Breakdown",
        link: "/assessments"
      },
      {
        icon: "⚑",
        title: "Policy",
        subtitle: "Academic Integrity",
        link: "/policy"
      },
      {
        icon: "🔗",
        title: "Resources",
        subtitle: "Tools & Links",
        link: "/resources"
      }
    ];
  }

  static styles = css`
    :host { display: block; padding: 2rem; }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1.5rem;
    }
    .card {
      background: #111115;
      padding: 1.5rem;
      border-radius: 15px;
      cursor: pointer;
      color: white;
      transition: 0.25s;
    }
    .card:hover {
      transform: translateY(-4px);
      background: #1a1a22;
    }
    .icon {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    .title {
      font-size: 1.2rem;
      font-weight: 700;
    }
    .subtitle {
      opacity: 0.6;
      font-size: 0.85rem;
      margin-top: 0.3rem;
    }
  `;

  render() {
    return html`
      <section class="grid">
        ${this.items.map(
          (i) => html`
            <a class="card" href="${i.link}">
              <div class="icon">${i.icon}</div>
              <div class="title">${i.title}</div>
              <div class="subtitle">${i.subtitle}</div>
            </a>
          `
        )}
      </section>
    `;
  }
}

customElements.define(SyllabusSection.tag, SyllabusSection);


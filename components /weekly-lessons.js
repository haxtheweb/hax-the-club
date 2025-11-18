import { LitElement, html, css } from "lit";

export class WeeklyLessons extends LitElement {
  static get tag() { return "weekly-lessons"; }

  static get properties() {
    return {
      weeks: { type: Array }
    };
  }

  constructor() {
    super();
    this.weeks = [
      { week: 1, title: "Intro to Coding", desc: "Variables, console, basic JS" },
      { week: 2, title: "Control Flow", desc: "Conditions + loops" },
      { week: 3, title: "Functions", desc: "Reusability and parameters" },
      { week: 4, title: "Arrays & Objects", desc: "Data structures" },
      // … continue to week 12
    ];
  }

  static styles = css`
    :host { display: block; padding: 2rem; }

    .list {
      display: grid;
      grid-template-rows: repeat(auto-fit, minmax(0, 1fr));
      gap: 1rem;
    }

    .card {
      background: #ece2ff;
      padding: 1.5rem;
      border-radius: 12px;
      color: #2a2347;
      min-height: 160px;
      transition: 0.25s ease;
    }

    .card:hover {
      transform: translateY(-4px);
    }

    .week {
      font-size: 2.4rem;
      font-weight: 700;
      color: #6e5ca6;
    }

    .title {
      font-size: 1.1rem;
      font-weight: 700;
      margin-top: 0.5rem;
    }

    .desc {
      margin-top: 0.3rem;
      opacity: 0.75;
      font-size: 0.9rem;
    }
  `;

  render() {
    return html`
      <section class="list">
        ${this.weeks.map(
          (w) => html`
            <div class="card">
              <div class="week">${String(w.week).padStart(2, "0")}</div>
              <div class="title">${w.title}</div>
              <div class="desc">${w.desc}</div>
            </div>
          `
        )}
      </section>
    `;
  }
}

customElements.define(WeeklyLessons.tag, WeeklyLessons);

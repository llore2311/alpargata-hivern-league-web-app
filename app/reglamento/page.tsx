import { ruleSections } from "@/data/mockData";

export default function ReglamentoPage() {
  return (
    <section className="page">
      <article className="hero">
        <span className="hero-tag">Reglamento</span>
        <h1>Normativa oficial del torneo</h1>
        <p>
          Base reglamentaria para equipos, jugadores y cuerpo arbitral durante
          toda la temporada.
        </p>
      </article>

      <section className="cards-grid">
        {ruleSections.map((section) => (
          <article
            key={section.title}
            className="rule-section"
            style={{ gridColumn: "span 6" }}
          >
            <h2>{section.title}</h2>
            <ul className="rule-list">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </section>
  );
}

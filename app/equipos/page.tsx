import { getTeams } from "@/lib/tournament";

export const dynamic = "force-dynamic";

export default async function EquiposPage() {
  const teams = await getTeams();

  return (
    <section className="page">
      <article className="hero">
        <span className="hero-tag">Equipos</span>
        <h1>Plantillas participantes</h1>
        <p>
          Conoce los equipos del torneo, su ciudad, cuerpo tecnico y rendimiento
          en la temporada actual.
        </p>
      </article>

      <section className="cards-grid">
        {teams.length > 0 ? (
          teams.map((team) => {
            const gamesPlayed = team.wins + team.losses;
            const ratio =
              gamesPlayed > 0 ? ((team.wins / gamesPlayed) * 100).toFixed(1) : "0.0";

            return (
              <article
                key={team.id}
                className="panel"
                style={{ gridColumn: "span 6" }}
              >
                <div className="list-item-top">
                  <h2 style={{ margin: 0 }}>{team.name}</h2>
                  <span className="team-pill">
                    <span
                      className="team-dot"
                      style={{ backgroundColor: team.logoColor }}
                    />
                    {team.city}
                  </span>
                </div>
                <p style={{ margin: "0.45rem 0 0.9rem" }}>
                  Entrenador: <strong>{team.coach}</strong>
                </p>
                <div className="metric-line">
                  <span>Balance</span>
                  <span className="metric-value">
                    {team.wins}-{team.losses}
                  </span>
                </div>
                <div className="metric-line">
                  <span>Porcentaje de victoria</span>
                  <span className="metric-value">{ratio}%</span>
                </div>
                <div className="metric-line">
                  <span>Puntos a favor</span>
                  <span className="metric-value">{team.pointsFor}</span>
                </div>
                <div className="metric-line">
                  <span>Puntos en contra</span>
                  <span className="metric-value">{team.pointsAgainst}</span>
                </div>
              </article>
            );
          })
        ) : (
          <article className="panel" style={{ gridColumn: "span 12" }}>
            <p className="small-text">No hay equipos cargados en base de datos.</p>
          </article>
        )}
      </section>
    </section>
  );
}

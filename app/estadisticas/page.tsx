import { getPlayers } from "@/lib/tournament";

export const dynamic = "force-dynamic";

export default async function EstadisticasPage() {
  const players = await getPlayers();

  const topScorers = [...players].sort((a, b) => b.points - a.points).slice(0, 5);
  const topAssists = [...players]
    .sort((a, b) => b.assists - a.assists)
    .slice(0, 5);
  const topRebounds = [...players]
    .sort((a, b) => b.rebounds - a.rebounds)
    .slice(0, 5);
  const topEfficiency = [...players]
    .sort((a, b) => b.efficiency - a.efficiency)
    .slice(0, 5);

  return (
    <section className="page">
      <article className="hero">
        <span className="hero-tag">Estadisticas</span>
        <h1>Rendimiento individual</h1>
        <p>
          Analiza los lideres de anotacion, asistencia, rebotes y valoracion en
          cada jornada.
        </p>
      </article>

      <section className="cards-grid">
        <article className="panel" style={{ gridColumn: "span 6" }}>
          <h2>Top anotadores</h2>
          <div className="list">
            {topScorers.length > 0 ? (
              topScorers.map((player, index) => (
                <div className="list-item" key={player.id}>
                  <div className="list-item-top">
                    <strong>
                      {index + 1}. {player.name}
                    </strong>
                    <strong>{player.points.toFixed(1)} ppp</strong>
                  </div>
                  <p className="small-text">
                    {player.team.name} | {player.position}
                  </p>
                </div>
              ))
            ) : (
              <p className="small-text">No hay jugadores cargados.</p>
            )}
          </div>
        </article>

        <article className="panel" style={{ gridColumn: "span 6" }}>
          <h2>Top asistentes</h2>
          <div className="list">
            {topAssists.length > 0 ? (
              topAssists.map((player, index) => (
                <div className="list-item" key={player.id}>
                  <div className="list-item-top">
                    <strong>
                      {index + 1}. {player.name}
                    </strong>
                    <strong>{player.assists.toFixed(1)} app</strong>
                  </div>
                  <p className="small-text">
                    {player.team.name} | {player.position}
                  </p>
                </div>
              ))
            ) : (
              <p className="small-text">No hay jugadores cargados.</p>
            )}
          </div>
        </article>

        <article className="panel" style={{ gridColumn: "span 6" }}>
          <h2>Top reboteadores</h2>
          <div className="list">
            {topRebounds.length > 0 ? (
              topRebounds.map((player, index) => (
                <div className="list-item" key={player.id}>
                  <div className="list-item-top">
                    <strong>
                      {index + 1}. {player.name}
                    </strong>
                    <strong>{player.rebounds.toFixed(1)} rpp</strong>
                  </div>
                  <p className="small-text">
                    {player.team.name} | {player.position}
                  </p>
                </div>
              ))
            ) : (
              <p className="small-text">No hay jugadores cargados.</p>
            )}
          </div>
        </article>

        <article className="panel" style={{ gridColumn: "span 6" }}>
          <h2>Top valoracion</h2>
          <div className="list">
            {topEfficiency.length > 0 ? (
              topEfficiency.map((player, index) => (
                <div className="list-item" key={player.id}>
                  <div className="list-item-top">
                    <strong>
                      {index + 1}. {player.name}
                    </strong>
                    <strong>{player.efficiency.toFixed(1)} val</strong>
                  </div>
                  <p className="small-text">
                    {player.team.name} | {player.position}
                  </p>
                </div>
              ))
            ) : (
              <p className="small-text">No hay jugadores cargados.</p>
            )}
          </div>
        </article>
      </section>
    </section>
  );
}

import { getPlayers } from "@/lib/tournament";

export const dynamic = "force-dynamic";

export default async function JugadoresPage() {
  const players = await getPlayers();
  const sortedPlayers = [...players].sort((a, b) => b.efficiency - a.efficiency);

  return (
    <section className="page">
      <article className="hero">
        <span className="hero-tag">Jugadores</span>
        <h1>Ranking de jugadores</h1>
        <p>
          Consulta el rendimiento individual de cada jugador con indicadores
          clave de ataque y defensa.
        </p>
      </article>

      <section className="cards-grid">
        {sortedPlayers.length > 0 ? (
          sortedPlayers.map((player, index) => (
            <article
              key={player.id}
              className="panel"
              style={{ gridColumn: "span 4" }}
            >
              <div className="list-item-top">
                <h2 style={{ margin: 0 }}>
                  {index + 1}. {player.name}
                </h2>
                <span className="badge finalizado">{player.position}</span>
              </div>
              <p style={{ margin: "0.4rem 0 0.9rem" }}>{player.team.name}</p>
              <div className="metric-line">
                <span>Puntos por partido</span>
                <span className="metric-value">{player.points.toFixed(1)}</span>
              </div>
              <div className="metric-line">
                <span>Asistencias por partido</span>
                <span className="metric-value">{player.assists.toFixed(1)}</span>
              </div>
              <div className="metric-line">
                <span>Rebotes por partido</span>
                <span className="metric-value">{player.rebounds.toFixed(1)}</span>
              </div>
              <div className="metric-line">
                <span>Valoracion</span>
                <span className="metric-value">
                  {player.efficiency.toFixed(1)}
                </span>
              </div>
            </article>
          ))
        ) : (
          <article className="panel" style={{ gridColumn: "span 12" }}>
            <p className="small-text">No hay jugadores cargados en base de datos.</p>
          </article>
        )}
      </section>
    </section>
  );
}

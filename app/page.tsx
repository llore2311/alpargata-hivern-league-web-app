import {
  compareTeamsByStandings,
  formatWinPercentage,
  formatGameDate,
  formatGameTime,
  getCurrentRound,
  getGames,
  getTeams,
  statusToClassName
} from "@/lib/tournament";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [teams, games] = await Promise.all([getTeams(), getGames()]);

  const upcomingGames = games
    .filter((game) => game.status !== "Finalizado")
    .slice(0, 4);

  const topTeams = [...teams].sort(compareTeamsByStandings).slice(0, 4);

  return (
    <section className="page">
      <article className="hero">
        <span className="hero-tag">Temporada 2026</span>
        <h1>Todo el torneo en una sola web</h1>
        <p>
          Sigue calendario, resultados, clasificacion y estadisticas del torneo
          de baloncesto Alpargata Hivern, con datos reales cargados desde Neon
          mediante Prisma.
        </p>
      </article>

      <section className="stats-grid">
        <article className="stat-card">
          <p className="stat-label">Equipos</p>
          <p className="stat-value">{teams.length}</p>
        </article>
        <article className="stat-card">
          <p className="stat-label">Partidos jugados</p>
          <p className="stat-value">
            {games.filter((game) => game.status === "Finalizado").length}
          </p>
        </article>
        <article className="stat-card">
          <p className="stat-label">Proximos partidos</p>
          <p className="stat-value">
            {games.filter((game) => game.status === "Programado").length}
          </p>
        </article>
        <article className="stat-card">
          <p className="stat-label">Jornada actual</p>
          <p className="stat-value">{getCurrentRound(games)}</p>
        </article>
      </section>

      <section className="cards-grid">
        <article className="panel" style={{ gridColumn: "span 7" }}>
          <h2>Proximos encuentros</h2>
          <div className="list">
            {upcomingGames.length > 0 ? (
              upcomingGames.map((game) => (
                <div key={game.id} className="list-item">
                  <div className="list-item-top">
                    <strong>
                      {game.homeTeam.name} vs {game.awayTeam.name}
                    </strong>
                    <span
                      className={`badge ${statusToClassName(game.status)}`}
                    >
                      {game.status}
                    </span>
                  </div>
                  <p className="small-text">
                    {game.round} | {formatGameDate(game.date)}{" "}
                    {formatGameTime(game.date)} | {game.venue}
                  </p>
                </div>
              ))
            ) : (
              <p className="small-text">
                No hay partidos programados. Ejecuta el seed inicial para cargar
                datos.
              </p>
            )}
          </div>
        </article>

        <article className="panel" style={{ gridColumn: "span 5" }}>
          <h2>Top de la clasificacion</h2>
          <div className="list">
            {topTeams.length > 0 ? (
              topTeams.map((team, index) => (
                <div key={team.id} className="list-item">
                  <div className="list-item-top">
                    <div className="team-pill">
                      <span
                        className="team-dot"
                        style={{ backgroundColor: team.logoColor }}
                      />
                      #{index + 1} {team.name}
                    </div>
                    <strong>{formatWinPercentage(team)}</strong>
                  </div>
                  <p className="small-text">
                    Balance {team.wins}-{team.losses} | DIF{" "}
                    {team.pointsFor - team.pointsAgainst > 0
                      ? `+${team.pointsFor - team.pointsAgainst}`
                      : team.pointsFor - team.pointsAgainst}{" "}
                    | PF {team.pointsFor} | PC {team.pointsAgainst}
                  </p>
                </div>
              ))
            ) : (
              <p className="small-text">No hay equipos cargados en base de datos.</p>
            )}
          </div>
        </article>
      </section>
    </section>
  );
}

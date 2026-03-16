import {
  formatGameDate,
  formatGameTime,
  getGames,
  statusToClassName
} from "@/lib/tournament";

export const dynamic = "force-dynamic";

export default async function PartidosPage() {
  const games = await getGames();

  const upcoming = games.filter((game) => game.status === "Programado");
  const live = games.filter((game) => game.status === "En juego");
  const finished = games.filter((game) => game.status === "Finalizado");

  return (
    <section className="page">
      <article className="hero">
        <span className="hero-tag">Partidos</span>
        <h1>Resultados y enfrentamientos</h1>
        <p>
          Vista centralizada de partidos en juego, proximos encuentros y
          marcadores finales.
        </p>
      </article>

      {live.length > 0 && (
        <article className="panel">
          <h2>En juego</h2>
          <div className="list">
            {live.map((game) => (
              <div className="list-item" key={game.id}>
                <div className="list-item-top">
                  <strong>
                    {game.homeTeam.name} vs {game.awayTeam.name}
                  </strong>
                  <span className={`badge ${statusToClassName(game.status)}`}>
                    {game.status}
                  </span>
                </div>
                <p className="small-text">
                  {game.round} | {formatGameDate(game.date)}{" "}
                  {formatGameTime(game.date)} | {game.homeScore ?? "-"} -{" "}
                  {game.awayScore ?? "-"}
                </p>
              </div>
            ))}
          </div>
        </article>
      )}

      <section className="cards-grid">
        <article className="panel" style={{ gridColumn: "span 6" }}>
          <h2>Proximos</h2>
          <div className="list">
            {upcoming.length > 0 ? (
              upcoming.map((game) => (
                <div className="list-item" key={game.id}>
                  <div className="list-item-top">
                    <strong>
                      {game.homeTeam.name} vs {game.awayTeam.name}
                    </strong>
                    <span className={`badge ${statusToClassName(game.status)}`}>
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
              <p className="small-text">No hay partidos proximos.</p>
            )}
          </div>
        </article>

        <article className="panel" style={{ gridColumn: "span 6" }}>
          <h2>Finalizados</h2>
          <div className="list">
            {finished.length > 0 ? (
              finished.map((game) => (
                <div className="list-item" key={game.id}>
                  <div className="list-item-top">
                    <strong>
                      {game.homeTeam.name} {game.homeScore ?? "-"} -{" "}
                      {game.awayScore ?? "-"} {game.awayTeam.name}
                    </strong>
                    <span className={`badge ${statusToClassName(game.status)}`}>
                      {game.status}
                    </span>
                  </div>
                  <p className="small-text">
                    {game.round} | {formatGameDate(game.date)} | {game.venue}
                  </p>
                </div>
              ))
            ) : (
              <p className="small-text">No hay partidos finalizados.</p>
            )}
          </div>
        </article>
      </section>
    </section>
  );
}

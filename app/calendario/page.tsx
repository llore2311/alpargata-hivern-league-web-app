import {
  formatGameDate,
  formatGameTime,
  getGames,
  statusToClassName
} from "@/lib/tournament";

export const dynamic = "force-dynamic";

export default async function CalendarioPage() {
  const sortedGames = await getGames();

  return (
    <section className="page">
      <article className="hero">
        <span className="hero-tag">Calendario</span>
        <h1>Agenda completa del torneo</h1>
        <p>
          Consulta todas las fechas, horarios y sedes en un unico calendario
          para planificar cada jornada.
        </p>
      </article>

      <article className="panel">
        <h2>Partidos por fecha</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Jornada</th>
                <th>Partido</th>
                <th>Sede</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {sortedGames.length > 0 ? (
                sortedGames.map((game) => (
                  <tr key={game.id}>
                    <td>{formatGameDate(game.date)}</td>
                    <td>{formatGameTime(game.date)}</td>
                    <td>{game.round}</td>
                    <td>
                      {game.homeTeam.name} vs {game.awayTeam.name}
                    </td>
                    <td>{game.venue}</td>
                    <td>
                      <span className={`badge ${statusToClassName(game.status)}`}>
                        {game.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}>No hay partidos cargados en base de datos.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}

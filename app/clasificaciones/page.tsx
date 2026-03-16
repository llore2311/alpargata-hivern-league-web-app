import {
  compareTeamsByStandings,
  formatWinPercentage,
  getTeams
} from "@/lib/tournament";

export const dynamic = "force-dynamic";

export default async function ClasificacionesPage() {
  const teams = await getTeams();

  const standings = [...teams].sort(compareTeamsByStandings);

  return (
    <section className="page">
      <article className="hero">
        <span className="hero-tag">Clasificaciones</span>
        <h1>Tabla general del torneo</h1>
        <p>
          Ranking actualizado por porcentaje de victorias. En caso de empate se
          usan diferencia, puntos a favor y puntos en contra.
        </p>
      </article>

      <article className="panel">
        <h2>Clasificacion general</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Equipo</th>
                <th>PJ</th>
                <th>G</th>
                <th>P</th>
                <th>WIN%</th>
                <th>PF</th>
                <th>PC</th>
                <th>DIF</th>
              </tr>
            </thead>
            <tbody>
              {standings.length > 0 ? (
                standings.map((team, index) => {
                  const gamesPlayed = team.wins + team.losses;
                  const diff = team.pointsFor - team.pointsAgainst;

                  return (
                    <tr key={team.id}>
                      <td>{index + 1}</td>
                      <td>
                        <span className="team-pill">
                          <span
                            className="team-dot"
                            style={{ backgroundColor: team.logoColor }}
                          />
                          {team.name}
                        </span>
                      </td>
                      <td>{gamesPlayed}</td>
                      <td>{team.wins}</td>
                      <td>{team.losses}</td>
                      <td>
                        <strong>{formatWinPercentage(team)}</strong>
                      </td>
                      <td>{team.pointsFor}</td>
                      <td>{team.pointsAgainst}</td>
                      <td>{diff > 0 ? `+${diff}` : diff}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={9}>No hay equipos cargados en base de datos.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}

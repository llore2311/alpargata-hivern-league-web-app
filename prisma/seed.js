const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const teams = [
  {
    name: "CB Ciutadella",
    city: "Ciutadella",
    coach: "Sergio Mena",
    wins: 8,
    losses: 2,
    pointsFor: 841,
    pointsAgainst: 744,
    logoColor: "#e85c39"
  },
  {
    name: "Ferreries",
    city: "Ferreries",
    coach: "Daniel Vico",
    wins: 7,
    losses: 3,
    pointsFor: 818,
    pointsAgainst: 768,
    logoColor: "#1d4c7a"
  },
  {
    name: "Mercadal",
    city: "Es Mercadal",
    coach: "Victor Cea",
    wins: 7,
    losses: 3,
    pointsFor: 809,
    pointsAgainst: 771,
    logoColor: "#ef9d1a"
  },
  {
    name: "Alaior",
    city: "Alaior",
    coach: "Ruben Nieto",
    wins: 6,
    losses: 4,
    pointsFor: 792,
    pointsAgainst: 780,
    logoColor: "#ba2f4a"
  },
  {
    name: "Alcázar A",
    city: "Maó",
    coach: "Aitor Landa",
    wins: 5,
    losses: 5,
    pointsFor: 784,
    pointsAgainst: 790,
    logoColor: "#345a8a"
  },
  {
    name: "Sant Lluís",
    city: "Sant Lluís",
    coach: "Ivan Bernal",
    wins: 4,
    losses: 6,
    pointsFor: 768,
    pointsAgainst: 812,
    logoColor: "#2f8f4e"
  },
  {
    name: "Es Castell",
    city: "Es Castell",
    coach: "Pablo Llorca",
    wins: 3,
    losses: 7,
    pointsFor: 745,
    pointsAgainst: 821,
    logoColor: "#7f52b9"
  },
  {
    name: "Alcázar B",
    city: "Maó",
    coach: "Adrian Blasco",
    wins: 2,
    losses: 8,
    pointsFor: 731,
    pointsAgainst: 813,
    logoColor: "#596273"
  }
];

const legacyTeamNames = {
  "CB Ciutadella": "Lobos Barcelona",
  Ferreries: "Titanes Madrid",
  Mercadal: "Atleticos Valencia",
  Alaior: "Dragones Sevilla"
};

const playersByTeam = {
  "CB Ciutadella": [
    {
      name: "Jaime Navarro",
      position: "Base",
      points: 19.4,
      assists: 7.8,
      rebounds: 3.1,
      efficiency: 24.2
    },
    {
      name: "Alvaro Serra",
      position: "Escolta",
      points: 14.7,
      assists: 2.5,
      rebounds: 2.8,
      efficiency: 15.6
    },
    {
      name: "Marcos Vidal",
      position: "Alero",
      points: 12.8,
      assists: 2.2,
      rebounds: 5.9,
      efficiency: 14.3
    },
    {
      name: "Carlos Rios",
      position: "Ala-pivot",
      points: 11.3,
      assists: 1.9,
      rebounds: 7.4,
      efficiency: 16.1
    },
    {
      name: "Hector Salas",
      position: "Pivot",
      points: 10.1,
      assists: 1.1,
      rebounds: 8.8,
      efficiency: 15.4
    },
    {
      name: "Toni Merino",
      position: "Base",
      points: 8.3,
      assists: 5.6,
      rebounds: 2.1,
      efficiency: 12.7
    },
    {
      name: "Bruno Leal",
      position: "Escolta",
      points: 9.2,
      assists: 1.8,
      rebounds: 3.3,
      efficiency: 11.4
    },
    {
      name: "Dani Soler",
      position: "Alero",
      points: 7.8,
      assists: 1.5,
      rebounds: 4.7,
      efficiency: 10.9
    }
  ],
  Ferreries: [
    {
      name: "Rafa Tena",
      position: "Escolta",
      points: 22.1,
      assists: 4.3,
      rebounds: 4.6,
      efficiency: 23.7
    },
    {
      name: "Alex Guillen",
      position: "Base",
      points: 13.6,
      assists: 6.9,
      rebounds: 2.5,
      efficiency: 18.2
    },
    {
      name: "Javi Mora",
      position: "Alero",
      points: 15.4,
      assists: 2.7,
      rebounds: 5.8,
      efficiency: 17.8
    },
    {
      name: "Iker Roman",
      position: "Ala-pivot",
      points: 12.7,
      assists: 2.1,
      rebounds: 7.2,
      efficiency: 16.4
    },
    {
      name: "Ruben Casas",
      position: "Pivot",
      points: 11.9,
      assists: 1.2,
      rebounds: 9.1,
      efficiency: 17.1
    },
    {
      name: "Miguel Otero",
      position: "Base",
      points: 8.7,
      assists: 4.9,
      rebounds: 2.2,
      efficiency: 12.9
    },
    {
      name: "Pablo Ureña",
      position: "Escolta",
      points: 10.3,
      assists: 2.0,
      rebounds: 3.8,
      efficiency: 13.5
    },
    {
      name: "Samuel Prado",
      position: "Alero",
      points: 9.4,
      assists: 1.7,
      rebounds: 4.2,
      efficiency: 12.2
    }
  ],
  Mercadal: [
    {
      name: "Luis Miret",
      position: "Alero",
      points: 17.8,
      assists: 3.9,
      rebounds: 6.4,
      efficiency: 20.1
    },
    {
      name: "Sergio Pena",
      position: "Base",
      points: 14.8,
      assists: 7.1,
      rebounds: 2.4,
      efficiency: 20.4
    },
    {
      name: "Victor Cabanas",
      position: "Escolta",
      points: 13.9,
      assists: 2.5,
      rebounds: 3.6,
      efficiency: 15.8
    },
    {
      name: "Mario Crespo",
      position: "Ala-pivot",
      points: 12.2,
      assists: 2.0,
      rebounds: 7.9,
      efficiency: 16.3
    },
    {
      name: "Joel Sancho",
      position: "Pivot",
      points: 11.5,
      assists: 1.3,
      rebounds: 8.7,
      efficiency: 15.9
    },
    {
      name: "Diego Llopis",
      position: "Base",
      points: 9.1,
      assists: 4.8,
      rebounds: 2.0,
      efficiency: 12.1
    },
    {
      name: "Nestor Ferrer",
      position: "Escolta",
      points: 8.8,
      assists: 1.9,
      rebounds: 3.5,
      efficiency: 11.7
    },
    {
      name: "Adrian Roig",
      position: "Alero",
      points: 7.9,
      assists: 1.6,
      rebounds: 4.1,
      efficiency: 10.8
    }
  ],
  Alaior: [
    {
      name: "Nico Pardo",
      position: "Ala-pivot",
      points: 16.9,
      assists: 2.4,
      rebounds: 8.5,
      efficiency: 21.6
    },
    {
      name: "Andres Luna",
      position: "Base",
      points: 13.2,
      assists: 6.3,
      rebounds: 2.3,
      efficiency: 18.5
    },
    {
      name: "Jorge Pineda",
      position: "Escolta",
      points: 14.1,
      assists: 2.7,
      rebounds: 3.4,
      efficiency: 16.2
    },
    {
      name: "Raul Casado",
      position: "Alero",
      points: 12.6,
      assists: 2.1,
      rebounds: 5.6,
      efficiency: 15.4
    },
    {
      name: "Paco Recio",
      position: "Pivot",
      points: 10.7,
      assists: 1.0,
      rebounds: 9.0,
      efficiency: 15.1
    },
    {
      name: "Yago Silva",
      position: "Base",
      points: 8.5,
      assists: 4.6,
      rebounds: 2.1,
      efficiency: 11.9
    },
    {
      name: "Fran Cid",
      position: "Escolta",
      points: 9.0,
      assists: 1.8,
      rebounds: 3.2,
      efficiency: 11.5
    },
    {
      name: "Tomas Reina",
      position: "Ala-pivot",
      points: 8.1,
      assists: 1.3,
      rebounds: 6.8,
      efficiency: 12.4
    }
  ],
  "Alcázar A": [
    { name: "Mikel Ochoa", position: "Pivot", points: 14.3, assists: 1.8, rebounds: 10.2, efficiency: 22.4 },
    { name: "Joan Pons", position: "Base", points: 12.6, assists: 6.4, rebounds: 2.6, efficiency: 17.1 },
    { name: "Marc Torres", position: "Escolta", points: 13.8, assists: 2.9, rebounds: 3.5, efficiency: 15.9 },
    { name: "Alex Sintes", position: "Alero", points: 11.9, assists: 2.1, rebounds: 5.8, efficiency: 14.6 },
    { name: "Biel Mas", position: "Ala-pivot", points: 10.7, assists: 1.5, rebounds: 7.6, efficiency: 15.2 },
    { name: "Pol Vidal", position: "Base", points: 8.4, assists: 4.7, rebounds: 2.0, efficiency: 11.8 },
    { name: "Dani Font", position: "Escolta", points: 9.6, assists: 1.9, rebounds: 3.1, efficiency: 11.7 },
    { name: "Toni Riera", position: "Alero", points: 7.7, assists: 1.4, rebounds: 4.3, efficiency: 10.4 }
  ],
  "Sant Lluís": [
    { name: "Ivan Pozo", position: "Escolta", points: 15.1, assists: 4.7, rebounds: 3.2, efficiency: 17.4 },
    { name: "Oriol Costa", position: "Base", points: 12.5, assists: 6.0, rebounds: 2.4, efficiency: 16.6 },
    { name: "Sergi Camps", position: "Alero", points: 13.0, assists: 2.3, rebounds: 5.5, efficiency: 15.0 },
    { name: "David Borras", position: "Ala-pivot", points: 11.4, assists: 1.7, rebounds: 7.3, efficiency: 15.1 },
    { name: "Lluis Coll", position: "Pivot", points: 10.2, assists: 1.2, rebounds: 8.6, efficiency: 14.7 },
    { name: "Xavi Febrer", position: "Base", points: 7.8, assists: 4.5, rebounds: 2.1, efficiency: 10.9 },
    { name: "Enric Serra", position: "Escolta", points: 8.9, assists: 1.8, rebounds: 3.0, efficiency: 10.8 },
    { name: "Roger Prats", position: "Alero", points: 7.4, assists: 1.5, rebounds: 4.0, efficiency: 9.8 }
  ],
  "Es Castell": [
    { name: "Dario Cardenas", position: "Alero", points: 18.2, assists: 2.8, rebounds: 5.7, efficiency: 18.9 },
    { name: "Jordi Moll", position: "Base", points: 11.8, assists: 5.9, rebounds: 2.3, efficiency: 15.7 },
    { name: "Arnau Triay", position: "Escolta", points: 12.4, assists: 2.2, rebounds: 3.2, efficiency: 13.9 },
    { name: "Nil Roca", position: "Ala-pivot", points: 10.6, assists: 1.6, rebounds: 7.0, efficiency: 14.3 },
    { name: "Jaume Pons", position: "Pivot", points: 9.8, assists: 1.0, rebounds: 8.2, efficiency: 13.8 },
    { name: "Miquel Bosch", position: "Base", points: 7.6, assists: 4.1, rebounds: 1.9, efficiency: 10.2 },
    { name: "Bernat Soler", position: "Escolta", points: 8.2, assists: 1.7, rebounds: 2.8, efficiency: 9.9 },
    { name: "Oscar Florit", position: "Alero", points: 7.0, assists: 1.3, rebounds: 3.8, efficiency: 9.2 }
  ],
  "Alcázar B": [
    { name: "Pau Isern", position: "Base", points: 13.6, assists: 6.5, rebounds: 2.7, efficiency: 16.8 },
    { name: "Joan Ferrer", position: "Escolta", points: 12.8, assists: 2.6, rebounds: 3.4, efficiency: 14.3 },
    { name: "Marc Noguera", position: "Alero", points: 11.5, assists: 2.0, rebounds: 5.3, efficiency: 13.4 },
    { name: "Alex Mercadal", position: "Ala-pivot", points: 10.1, assists: 1.4, rebounds: 6.8, efficiency: 13.4 },
    { name: "Biel Pons", position: "Pivot", points: 9.5, assists: 1.1, rebounds: 7.9, efficiency: 13.1 },
    { name: "Guillem Segui", position: "Base", points: 7.3, assists: 3.9, rebounds: 2.0, efficiency: 9.8 },
    { name: "Dani Casas", position: "Escolta", points: 8.0, assists: 1.6, rebounds: 2.7, efficiency: 9.5 },
    { name: "Toni Vidal", position: "Alero", points: 6.8, assists: 1.2, rebounds: 3.6, efficiency: 8.7 }
  ]
};

const games = [
  {
    round: "Jornada 11",
    date: "2026-03-20",
    time: "19:30",
    venue: "Palau Nord",
    homeTeam: "CB Ciutadella",
    awayTeam: "Ferreries",
    status: "Programado",
    homeScore: null,
    awayScore: null
  },
  {
    round: "Jornada 11",
    date: "2026-03-21",
    time: "18:00",
    venue: "Pabellon Turia",
    homeTeam: "Mercadal",
    awayTeam: "Alaior",
    status: "Programado",
    homeScore: null,
    awayScore: null
  },
  {
    round: "Jornada 10",
    date: "2026-03-14",
    time: "18:30",
    venue: "Palacio Central",
    homeTeam: "Ferreries",
    awayTeam: "Mercadal",
    status: "Finalizado",
    homeScore: 82,
    awayScore: 76
  },
  {
    round: "Jornada 10",
    date: "2026-03-13",
    time: "20:00",
    venue: "Pabellon Aljarafe",
    homeTeam: "Alaior",
    awayTeam: "CB Ciutadella",
    status: "Finalizado",
    homeScore: 74,
    awayScore: 88
  },
  {
    round: "Jornada 9",
    date: "2026-03-07",
    time: "19:00",
    venue: "Palau Nord",
    homeTeam: "CB Ciutadella",
    awayTeam: "Mercadal",
    status: "Finalizado",
    homeScore: 90,
    awayScore: 86
  },
  {
    round: "Jornada 9",
    date: "2026-03-08",
    time: "18:30",
    venue: "Palacio Central",
    homeTeam: "Ferreries",
    awayTeam: "Alaior",
    status: "Finalizado",
    homeScore: 79,
    awayScore: 72
  },
  {
    round: "Jornada 12",
    date: "2026-03-27",
    time: "20:00",
    venue: "Pabellon Aljarafe",
    homeTeam: "Alaior",
    awayTeam: "Ferreries",
    status: "En juego",
    homeScore: 61,
    awayScore: 63
  },
  {
    round: "Jornada 12",
    date: "2026-03-28",
    time: "18:45",
    venue: "Palau Nord",
    homeTeam: "CB Ciutadella",
    awayTeam: "Mercadal",
    status: "Programado",
    homeScore: null,
    awayScore: null
  }
];

function toDateTime(date, time) {
  return new Date(`${date}T${time}:00+01:00`);
}

function validateSeedData() {
  const teamNames = new Set(teams.map((team) => team.name));
  if (teams.length !== 8 || teamNames.size !== 8) {
    throw new Error("The league must have exactly 8 uniquely named teams");
  }

  if (Object.keys(playersByTeam).length !== teams.length) {
    throw new Error("Each team must have a seed roster");
  }

  for (const team of teams) {
    if (!team.city || !playersByTeam[team.name]) {
      throw new Error(`Missing city or roster for "${team.name}"`);
    }
  }

  for (const [teamName, roster] of Object.entries(playersByTeam)) {
    if (!teamNames.has(teamName) || roster.length !== 8) {
      throw new Error(
        `Team "${teamName}" must have exactly 8 players, found ${roster.length}`
      );
    }

    if (new Set(roster.map((player) => player.name)).size !== roster.length) {
      throw new Error(`Duplicate player names in the roster for "${teamName}"`);
    }
  }

  for (const game of games) {
    if (!teamNames.has(game.homeTeam) || !teamNames.has(game.awayTeam)) {
      throw new Error(`Invalid team in game ${game.homeTeam} vs ${game.awayTeam}`);
    }

    if (Number.isNaN(toDateTime(game.date, game.time).getTime())) {
      throw new Error(`Invalid date in game ${game.homeTeam} vs ${game.awayTeam}`);
    }
  }
}

async function main() {
  console.log("Starting seed...");
  validateSeedData();

  const [teamCount, playerCount, gameCount] = await prisma.$transaction(async (tx) => {
    const dbTeams = await tx.team.findMany({
      include: { _count: { select: { players: true } } }
    });
    const acceptedNames = new Set([
      ...teams.map((team) => team.name),
      ...Object.values(legacyTeamNames)
    ]);
    const unexpectedTeam = dbTeams.find((team) => !acceptedNames.has(team.name));
    if (unexpectedTeam) {
      throw new Error(`Unexpected existing team "${unexpectedTeam.name}"; no data was changed`);
    }

    // Validate every existing roster and name before the first database write.
    const teamPlans = teams.map((team) => {
      const matches = dbTeams.filter((existing) =>
        existing.name === team.name || existing.name === legacyTeamNames[team.name]
      );
      if (matches.length > 1) {
        throw new Error(`Both current and legacy names exist for "${team.name}"`);
      }

      const existing = matches[0];
      if (existing && existing._count.players !== 0 && existing._count.players !== 8) {
        throw new Error(`Existing team "${existing.name}" has ${existing._count.players} players; expected 8`);
      }

      return { team, existing };
    });
    const shouldCreateGames = (await tx.game.count()) === 0;
    const teamIdByName = new Map();

    for (const { team, existing } of teamPlans) {
      let teamId;
      if (existing) {
        teamId = existing.id;
        if (existing.name !== team.name || existing.city !== team.city) {
          // Keep team IDs, statistics, coaching data, players and game links intact.
          await tx.team.update({
            where: { id: teamId },
            data: { name: team.name, city: team.city }
          });
        }
      } else {
        const created = await tx.team.create({ data: team });
        teamId = created.id;
      }
      teamIdByName.set(team.name, teamId);

      // A populated roster is preserved exactly on every subsequent run.
      if (!existing || existing._count.players === 0) {
        await tx.player.createMany({
          data: playersByTeam[team.name].map((player) => ({ ...player, teamId }))
        });
      }
    }

    if (shouldCreateGames) {
      await tx.game.createMany({
        data: games.map((game) => ({
          round: game.round,
          date: toDateTime(game.date, game.time),
          venue: game.venue,
          status: game.status,
          homeScore: game.homeScore,
          awayScore: game.awayScore,
          homeTeamId: teamIdByName.get(game.homeTeam),
          awayTeamId: teamIdByName.get(game.awayTeam)
        }))
      });
    }

    return Promise.all([tx.team.count(), tx.player.count(), tx.game.count()]);
  }, { isolationLevel: "Serializable", timeout: 30_000 });

  console.log(
    `Seed completed: ${teamCount} teams, ${playerCount} players, ${gameCount} games`
  );
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

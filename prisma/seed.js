const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const teams = [
  {
    name: "Lobos Barcelona",
    city: "Barcelona",
    coach: "Sergio Mena",
    wins: 8,
    losses: 2,
    pointsFor: 841,
    pointsAgainst: 744,
    logoColor: "#e85c39"
  },
  {
    name: "Titanes Madrid",
    city: "Madrid",
    coach: "Daniel Vico",
    wins: 7,
    losses: 3,
    pointsFor: 818,
    pointsAgainst: 768,
    logoColor: "#1d4c7a"
  },
  {
    name: "Atleticos Valencia",
    city: "Valencia",
    coach: "Victor Cea",
    wins: 7,
    losses: 3,
    pointsFor: 809,
    pointsAgainst: 771,
    logoColor: "#ef9d1a"
  },
  {
    name: "Dragones Sevilla",
    city: "Sevilla",
    coach: "Ruben Nieto",
    wins: 6,
    losses: 4,
    pointsFor: 792,
    pointsAgainst: 780,
    logoColor: "#ba2f4a"
  }
];

const playersByTeam = {
  "Lobos Barcelona": [
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
  "Titanes Madrid": [
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
  "Atleticos Valencia": [
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
  "Dragones Sevilla": [
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
  ]
};

const games = [
  {
    round: "Jornada 11",
    date: "2026-03-20",
    time: "19:30",
    venue: "Palau Nord",
    homeTeam: "Lobos Barcelona",
    awayTeam: "Titanes Madrid",
    status: "Programado",
    homeScore: null,
    awayScore: null
  },
  {
    round: "Jornada 11",
    date: "2026-03-21",
    time: "18:00",
    venue: "Pabellon Turia",
    homeTeam: "Atleticos Valencia",
    awayTeam: "Dragones Sevilla",
    status: "Programado",
    homeScore: null,
    awayScore: null
  },
  {
    round: "Jornada 10",
    date: "2026-03-14",
    time: "18:30",
    venue: "Palacio Central",
    homeTeam: "Titanes Madrid",
    awayTeam: "Atleticos Valencia",
    status: "Finalizado",
    homeScore: 82,
    awayScore: 76
  },
  {
    round: "Jornada 10",
    date: "2026-03-13",
    time: "20:00",
    venue: "Pabellon Aljarafe",
    homeTeam: "Dragones Sevilla",
    awayTeam: "Lobos Barcelona",
    status: "Finalizado",
    homeScore: 74,
    awayScore: 88
  },
  {
    round: "Jornada 9",
    date: "2026-03-07",
    time: "19:00",
    venue: "Palau Nord",
    homeTeam: "Lobos Barcelona",
    awayTeam: "Atleticos Valencia",
    status: "Finalizado",
    homeScore: 90,
    awayScore: 86
  },
  {
    round: "Jornada 9",
    date: "2026-03-08",
    time: "18:30",
    venue: "Palacio Central",
    homeTeam: "Titanes Madrid",
    awayTeam: "Dragones Sevilla",
    status: "Finalizado",
    homeScore: 79,
    awayScore: 72
  },
  {
    round: "Jornada 12",
    date: "2026-03-27",
    time: "20:00",
    venue: "Pabellon Aljarafe",
    homeTeam: "Dragones Sevilla",
    awayTeam: "Titanes Madrid",
    status: "En juego",
    homeScore: 61,
    awayScore: 63
  },
  {
    round: "Jornada 12",
    date: "2026-03-28",
    time: "18:45",
    venue: "Palau Nord",
    homeTeam: "Lobos Barcelona",
    awayTeam: "Atleticos Valencia",
    status: "Programado",
    homeScore: null,
    awayScore: null
  }
];

function toDateTime(date, time) {
  return new Date(`${date}T${time}:00+01:00`);
}

async function main() {
  console.log("Starting seed...");

  for (const [teamName, roster] of Object.entries(playersByTeam)) {
    if (roster.length !== 8) {
      throw new Error(
        `Team "${teamName}" must have exactly 8 players, found ${roster.length}`
      );
    }
  }

  await prisma.$transaction([
    prisma.game.deleteMany(),
    prisma.player.deleteMany(),
    prisma.team.deleteMany()
  ]);

  await prisma.team.createMany({
    data: teams
  });

  const dbTeams = await prisma.team.findMany({
    select: { id: true, name: true }
  });

  const teamIdByName = new Map(dbTeams.map((team) => [team.name, team.id]));

  const players = Object.entries(playersByTeam).flatMap(([teamName, roster]) =>
    roster.map((player) => {
      const teamId = teamIdByName.get(teamName);

      if (!teamId) {
        throw new Error(`Missing teamId for "${teamName}"`);
      }

      return {
        ...player,
        teamId
      };
    })
  );

  await prisma.player.createMany({
    data: players
  });

  const gamesData = games.map((game) => {
    const homeTeamId = teamIdByName.get(game.homeTeam);
    const awayTeamId = teamIdByName.get(game.awayTeam);

    if (!homeTeamId || !awayTeamId) {
      throw new Error(`Invalid team in game ${game.homeTeam} vs ${game.awayTeam}`);
    }

    return {
      round: game.round,
      date: toDateTime(game.date, game.time),
      venue: game.venue,
      status: game.status,
      homeScore: game.homeScore,
      awayScore: game.awayScore,
      homeTeamId,
      awayTeamId
    };
  });

  await prisma.game.createMany({
    data: gamesData
  });

  const [teamCount, playerCount, gameCount] = await Promise.all([
    prisma.team.count(),
    prisma.player.count(),
    prisma.game.count()
  ]);

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

export type MatchStatus = "Programado" | "Finalizado" | "En juego";

export type Team = {
  id: number;
  name: string;
  city: string;
  coach: string;
  wins: number;
  losses: number;
  pointsFor: number;
  pointsAgainst: number;
  logoColor: string;
};

export type Game = {
  id: number;
  round: string;
  date: string;
  time: string;
  venue: string;
  homeTeam: string;
  awayTeam: string;
  status: MatchStatus;
  homeScore?: number;
  awayScore?: number;
};

export type Player = {
  id: number;
  name: string;
  team: string;
  position: "Base" | "Escolta" | "Alero" | "Ala-pivot" | "Pivot";
  points: number;
  assists: number;
  rebounds: number;
  efficiency: number;
};

export type RuleSection = {
  title: string;
  items: string[];
};

export const teams: Team[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    name: "Dragones Sevilla",
    city: "Sevilla",
    coach: "Ruben Nieto",
    wins: 6,
    losses: 4,
    pointsFor: 792,
    pointsAgainst: 780,
    logoColor: "#ba2f4a"
  },
  {
    id: 5,
    name: "Piratas Bilbao",
    city: "Bilbao",
    coach: "Aitor Landa",
    wins: 5,
    losses: 5,
    pointsFor: 784,
    pointsAgainst: 790,
    logoColor: "#345a8a"
  },
  {
    id: 6,
    name: "Halcones Zaragoza",
    city: "Zaragoza",
    coach: "Ivan Bernal",
    wins: 4,
    losses: 6,
    pointsFor: 768,
    pointsAgainst: 812,
    logoColor: "#2f8f4e"
  },
  {
    id: 7,
    name: "Guerreros Malaga",
    city: "Malaga",
    coach: "Pablo Llorca",
    wins: 3,
    losses: 7,
    pointsFor: 745,
    pointsAgainst: 821,
    logoColor: "#7f52b9"
  },
  {
    id: 8,
    name: "Fenix Girona",
    city: "Girona",
    coach: "Adrian Blasco",
    wins: 2,
    losses: 8,
    pointsFor: 731,
    pointsAgainst: 813,
    logoColor: "#596273"
  }
];

export const games: Game[] = [
  {
    id: 1,
    round: "Jornada 11",
    date: "2026-03-20",
    time: "19:30",
    venue: "Palau Nord",
    homeTeam: "Lobos Barcelona",
    awayTeam: "Titanes Madrid",
    status: "Programado"
  },
  {
    id: 2,
    round: "Jornada 11",
    date: "2026-03-21",
    time: "18:00",
    venue: "Pabellon Turia",
    homeTeam: "Atleticos Valencia",
    awayTeam: "Dragones Sevilla",
    status: "Programado"
  },
  {
    id: 3,
    round: "Jornada 11",
    date: "2026-03-21",
    time: "20:15",
    venue: "Arena Cantabrico",
    homeTeam: "Piratas Bilbao",
    awayTeam: "Halcones Zaragoza",
    status: "Programado"
  },
  {
    id: 4,
    round: "Jornada 11",
    date: "2026-03-22",
    time: "12:00",
    venue: "Ciudad Deportiva Sur",
    homeTeam: "Guerreros Malaga",
    awayTeam: "Fenix Girona",
    status: "Programado"
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
    round: "Jornada 10",
    date: "2026-03-13",
    time: "20:45",
    venue: "Pabellon Ebro",
    homeTeam: "Halcones Zaragoza",
    awayTeam: "Guerreros Malaga",
    status: "Finalizado",
    homeScore: 79,
    awayScore: 71
  },
  {
    id: 8,
    round: "Jornada 10",
    date: "2026-03-12",
    time: "19:15",
    venue: "Girona Arena",
    homeTeam: "Fenix Girona",
    awayTeam: "Piratas Bilbao",
    status: "Finalizado",
    homeScore: 67,
    awayScore: 83
  }
];

export const players: Player[] = [
  {
    id: 1,
    name: "Jaime Navarro",
    team: "Lobos Barcelona",
    position: "Base",
    points: 19.4,
    assists: 7.8,
    rebounds: 3.1,
    efficiency: 24.2
  },
  {
    id: 2,
    name: "Rafa Tena",
    team: "Titanes Madrid",
    position: "Escolta",
    points: 22.1,
    assists: 4.3,
    rebounds: 4.6,
    efficiency: 23.7
  },
  {
    id: 3,
    name: "Luis Miret",
    team: "Atleticos Valencia",
    position: "Alero",
    points: 17.8,
    assists: 3.9,
    rebounds: 6.4,
    efficiency: 20.1
  },
  {
    id: 4,
    name: "Nico Pardo",
    team: "Dragones Sevilla",
    position: "Ala-pivot",
    points: 16.9,
    assists: 2.4,
    rebounds: 8.5,
    efficiency: 21.6
  },
  {
    id: 5,
    name: "Mikel Ochoa",
    team: "Piratas Bilbao",
    position: "Pivot",
    points: 14.3,
    assists: 1.8,
    rebounds: 10.2,
    efficiency: 22.4
  },
  {
    id: 6,
    name: "Ivan Pozo",
    team: "Halcones Zaragoza",
    position: "Escolta",
    points: 15.1,
    assists: 4.7,
    rebounds: 3.2,
    efficiency: 17.4
  },
  {
    id: 7,
    name: "Dario Cardenas",
    team: "Guerreros Malaga",
    position: "Alero",
    points: 18.2,
    assists: 2.8,
    rebounds: 5.7,
    efficiency: 18.9
  },
  {
    id: 8,
    name: "Pau Isern",
    team: "Fenix Girona",
    position: "Base",
    points: 13.6,
    assists: 6.5,
    rebounds: 2.7,
    efficiency: 16.8
  }
];

export const ruleSections: RuleSection[] = [
  {
    title: "Formato de competicion",
    items: [
      "Liga regular de doble vuelta con ocho equipos inscritos.",
      "La clasificacion se ordena por porcentaje de victorias.",
      "Los cuatro mejores equipos acceden a semifinales."
    ]
  },
  {
    title: "Normas de partido",
    items: [
      "Los partidos se juegan a 4 cuartos de 10 minutos.",
      "Tiempo muerto: dos por parte en primera mitad y tres en segunda mitad.",
      "Empate al final del tiempo reglamentario: prorroga de 5 minutos."
    ]
  },
  {
    title: "Criterios de desempate",
    items: [
      "Primer criterio: mejor diferencia de puntos (PF - PC).",
      "Segundo criterio: mayor cantidad de puntos a favor.",
      "Tercer criterio: menor cantidad de puntos en contra."
    ]
  },
  {
    title: "Conducta y sanciones",
    items: [
      "Dos tecnicas en un mismo partido implican descalificacion.",
      "Acumulacion de cinco faltas personales elimina al jugador del partido.",
      "El comite disciplinario revisa sanciones graves en un plazo maximo de 72 horas."
    ]
  }
];

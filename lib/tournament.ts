import { cache } from "react";
import { prisma } from "@/lib/prisma";

export const getTeams = cache(async () =>
  prisma.team.findMany({
    orderBy: [{ wins: "desc" }, { pointsFor: "desc" }]
  })
);

export const getPlayers = cache(async () =>
  prisma.player.findMany({
    include: {
      team: {
        select: {
          name: true
        }
      }
    },
    orderBy: [{ efficiency: "desc" }, { points: "desc" }]
  })
);

export const getGames = cache(async () =>
  prisma.game.findMany({
    include: {
      homeTeam: {
        select: {
          name: true
        }
      },
      awayTeam: {
        select: {
          name: true
        }
      }
    },
    orderBy: [{ date: "asc" }]
  })
);

const dateFormatter = new Intl.DateTimeFormat("sv-SE", {
  timeZone: "Europe/Madrid"
});

const timeFormatter = new Intl.DateTimeFormat("es-ES", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Europe/Madrid"
});

export function formatGameDate(date: Date): string {
  return dateFormatter.format(date);
}

export function formatGameTime(date: Date): string {
  return timeFormatter.format(date);
}

export function statusToClassName(status: string): string {
  return status.toLowerCase().replace(/\s+/g, "-");
}

type TeamStandingInput = {
  name: string;
  wins: number;
  losses: number;
  pointsFor: number;
  pointsAgainst: number;
};

export function getWinPercentage(team: TeamStandingInput): number {
  const gamesPlayed = team.wins + team.losses;

  if (gamesPlayed === 0) {
    return 0;
  }

  return team.wins / gamesPlayed;
}

export function formatWinPercentage(team: TeamStandingInput): string {
  return `${(getWinPercentage(team) * 100).toFixed(1)}%`;
}

export function compareTeamsByStandings(
  a: TeamStandingInput,
  b: TeamStandingInput
): number {
  const winPctDiff = getWinPercentage(b) - getWinPercentage(a);

  if (Math.abs(winPctDiff) > 0.0001) {
    return winPctDiff;
  }

  const diffA = a.pointsFor - a.pointsAgainst;
  const diffB = b.pointsFor - b.pointsAgainst;
  if (diffB !== diffA) {
    return diffB - diffA;
  }

  if (b.pointsFor !== a.pointsFor) {
    return b.pointsFor - a.pointsFor;
  }

  if (a.pointsAgainst !== b.pointsAgainst) {
    return a.pointsAgainst - b.pointsAgainst;
  }

  return a.name.localeCompare(b.name);
}

export function getCurrentRound(rounds: Array<{ round: string }>): string {
  const roundNumbers = rounds
    .map((game) => Number(game.round.replace(/\D/g, "")))
    .filter((value) => Number.isFinite(value) && value > 0);

  if (roundNumbers.length === 0) {
    return "-";
  }

  return String(Math.max(...roundNumbers));
}

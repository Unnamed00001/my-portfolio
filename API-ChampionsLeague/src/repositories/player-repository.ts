import { PlayerModel } from "../models/players-model";
import { StatisticsModel } from "../models/statistics-model";



export const database: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Passing: 91,
      Dribbling: 95,
      Defending: 38,
      Physical: 65,
    },
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Manchester United",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 87,
      Shooting: 93,
      Passing: 82,
      Dribbling: 88,
      Defending: 35,
      Physical: 77,
    },
  },
  {
    id: 3,
    name: "Neymar Jr",
    club: "Paris Saint-Germain",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 91,
      Shooting: 85,
      Passing: 86,
      Dribbling: 94,
      Defending: 36,
      Physical: 62,
    },
  },
  {
    id: 4,
    name: "Kylian Mbappé",
    club: "Paris Saint-Germain",
    nationality: "France",
    position: "Forward",
    statistics: {
      Overall: 92,
      Pace: 97,
      Shooting: 88,
      Passing: 80,
      Dribbling: 92,
      Defending: 36,
      Physical: 77,
    },
  },
  {
    id: 5,
    name: "Robert Lewandowski",
    club: "Barcelona",
    nationality: "Poland",
    position: "Forward",
    statistics: {
      Overall: 92,
      Pace: 78,
      Shooting: 93,
      Passing: 79,
      Dribbling: 86,
      Defending: 44,
      Physical: 82,
    },
  },
  {
    id: 6,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    statistics: {
      Overall: 91,
      Pace: 76,
      Shooting: 86,
      Passing: 93,
      Dribbling: 88,
      Defending: 64,
      Physical: 78,
    },
  },
  {
    id: 7,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nationality: "Netherlands",
    position: "Defender",
    statistics: {
      Overall: 90,
      Pace: 78,
      Shooting: 60,
      Passing: 71,
      Dribbling: 72,
      Defending: 91,
      Physical: 86,
    },
  },
  {
    id: 8,
    name: "Mohamed Salah",
    club: "Liverpool",
    nationality: "Egypt",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 93,
      Shooting: 87,
      Passing: 81,
      Dribbling: 90,
      Defending: 45,
      Physical: 75,
    },
  },
  {
    id: 9,
    name: "Luka Modrić",
    club: "Real Madrid",
    nationality: "Croatia",
    position: "Midfielder",
    statistics: {
      Overall: 88,
      Pace: 74,
      Shooting: 76,
      Passing: 89,
      Dribbling: 90,
      Defending: 72,
      Physical: 66,
    },
  },
  {
    id: 10,
    name: "Erling Haaland",
    club: "Manchester City",
    nationality: "Norway",
    position: "Forward",
    statistics: {
      Overall: 89,
      Pace: 91,
      Shooting: 91,
      Passing: 70,
      Dribbling: 80,
      Defending: 45,
      Physical: 88,
    },
  },
];
    


export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player);
};

export const  deleteOnePlayer = async (id: number) => {
    const index = database.findIndex( p => p.id === id);

    if (index !== -1){
        database.splice(index, 1);
        return true;
    }
    return false
    
};

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
    //find player
    const playerindex = database.findIndex(player => player.id === id);

    if(playerindex !== -1){
        database[playerindex].statistics = statistics
    }
    return database[playerindex];
};
import { Player } from './Player';
export const players: Players;
declare class Players {
    getPlayerByName(username: string): Player;
    getPlayerByID(id: string): Player;
    searchPlayers(name: string): Player;
}
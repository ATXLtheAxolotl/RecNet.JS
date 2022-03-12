import { Player } from './Player';
export const players: Players;
declare class Players {
    getPlayerByName(username: string): Promise<Player>;
    getPlayerByID(id: string): Promise<Player>;
    searchPlayers(name: string): Promise<Player>;
}
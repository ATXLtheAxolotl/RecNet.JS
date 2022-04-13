import { Player } from './Player';
export const players: PlayerManager;
declare class PlayerManager {
    getPlayerByName(username: string): Promise<Player>;
    getPlayerByID(id: string): Promise<Player>;
    searchPlayers(name: string): Promise<Player>;
}
import { Player } from "./Player";

export const players: Players;
declare class Players {
    getPlayerByName(username: string): Promise<Player>;
    getPlayerByID(id: number): Promise<Player>;
    searchPlayers(name: string): Promise<Player[]>;
}
export {};
//# sourceMappingURL=Players.d.ts.map
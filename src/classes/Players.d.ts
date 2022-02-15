import { Player } from "./Player";

export var players: Players;
declare class Players {
    getPlayerByName(username: string): Promise<Player>;
    getPlayerByID(id: number): Promise<Player>;
    searchPlayers(name: string): Promise<Player[]>;
}
export {};
//# sourceMappingURL=Players.d.ts.map
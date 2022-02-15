import { Player } from './Player'
export class Friend {
    constructor(RelationshipID: number, PlayerID: number, RelationshipType: number, Favorited: number, Muted: number, Ignored: number);
    rid: number;
    pid: number;
    rtype: number;
    fav: number;
    m: number;
    ign: number;
    unfriend(token: string): void;
    sendFriendRequest(token: string): void;
    isIgnored(): boolean;
    isMuted(): boolean;
    getPlayerID(): number;
    getRelationshipID(): number;
    getUsername(): Promise<string>;
    getDisplayName(): Promise<string>;
    isJunior(): Promise<boolean>;
    getCreationDate(): Promise<Date>;
    getProfilePictureResourceName(): Promise<string>;
    getExtraInfo(): Player;
}
//# sourceMappingURL=Friends.d.ts.map
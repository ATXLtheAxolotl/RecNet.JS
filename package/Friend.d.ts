import { Player } from './Player';
export class Friend {
    constructor(RelationshipID: any, PlayerID: any, RelationshipType: any, Favorited: any, Muted: any, Ignored: any);
    RelationshipID: any;
    PlayerID: any;
    RelationshipType: any;
    Favorited: any;
    Muted: any;
    Ignored: any;
    unfriend(token: string): void;
    sendFriendRequest(token: string): void;
    getUsername(): Promise<string>;
    getDisplayName(): Promise<string>;
    isJunior(): Promise<boolean>;
    getCreationDate(): Promise<Date>;
    getProfilePictureResourceName(): Promise<any>;
    getPlayer(): Promise<Player>;
}
//# sourceMappingURL=Friend.d.ts.map
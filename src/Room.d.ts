import { Player } from "./Player";

export class Room {
    constructor(RoomId: number, IsDorm: boolean, MaxPlayerCalculationMode: number, MaxPlayers: number, CloningAllowed: boolean, DisableMicAutoMute: boolean, DisableRoomComments: boolean, EncryptVoiceChat: boolean, LoadScreenLocked: boolean, Version: number, Name: string, Description: string, ImageName: string, WarningMask: number, CustomWarning: any, CreatorAccountId: number, State: number, Accessibility: number, SupportsLevelVoting: any, IsRRO: boolean, SupportsScreens: boolean, SupportsWalkVR: boolean, SupportsTeleportVR: boolean, SupportsVRLow: boolean, SupportsQuest2: boolean, SupportsMobile: boolean, SupportsJuniors: boolean, MinLevel: number, CreatedAt: string, Stats: { CheerCount:number, FavoriteCount:number, VisitorCount:number, VisitCount:number });
    RoomID: number;
    IsDorm: boolean;
    MaxPlayerCalculationMode: number;
    MaxPlayers: number;
    CloningAllowed: boolean;
    DisableMicAutoMute: boolean;
    DisableRoomComments: boolean;
    EncryptVoiceChat: boolean;
    LoadScreenLocked: boolean;
    Version: number;
    Name: string;
    Description: string;
    ImageName: string;
    WarningMask: number;
    CustomWarning: any;
    CreatorAccountId: number;
    State: number;
    Accessibility: number;
    SupportsLevelVoting: any;
    IsRRO: boolean;
    SupportsScreens: boolean;
    SupportsWalkVR: boolean;
    SupportsTeleportVR: boolean;
    SupportsVRLow: boolean;
    SupportsQuest2: boolean;
    SupportsMobile: boolean;
    SupportsJuniors: boolean;
    MinLevel: number;
    CreatedAt: Date;
    Stats: { CheerCount:number, FavoriteCount:number, VisitorCount:number, VisitCount:number };
    getCreator(): Promise<Player>;
    getImage(): Promise<string>;
}
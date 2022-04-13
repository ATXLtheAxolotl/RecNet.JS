import axios from "axios";
import { Player } from './Player/Player.js'

export class Room {
    RoomID;
    IsDorm;
    MaxPlayerCalculationMode;
    MaxPlayers;
    CloningAllowed;
    DisableMicAutoMute;
    DisableRoomComments;
    EncryptVoiceChat;
    LoadScreenLocked;
    Version;
    Name;
    Description;
    ImageName;
    WarningMask;
    CustomWarning;
    CreatorAccountId;
    State;
    Accessibility;
    SupportsLevelVoting;
    IsRRO;
    SupportsScreens;
    SupportsWalkVR;
    SupportsTeleportVR;
    SupportsVRLow;
    SupportsQuest2;
    SupportsMobile;
    SupportsJuniors;
    MinLevel;
    CreatedAt;
    Stats;

    constructor(RoomId, IsDorm, MaxPlayerCalculationMode, MaxPlayers, CloningAllowed, DisableMicAutoMute, DisableRoomComments, EncryptVoiceChat, LoadScreenLocked, Version, Name, Description, ImageName, WarningMask, CustomWarning, CreatorAccountId, State, Accessibility, SupportsLevelVoting, IsRRO, SupportsScreens, SupportsWalkVR, SupportsTeleportVR, SupportsVRLow, SupportsQuest2, SupportsMobile, SupportsJuniors, MinLevel, CreatedAt, Stats) {
        this.RoomID = RoomId;
        this.IsDorm = IsDorm;
        this.MaxPlayerCalculationMode = MaxPlayerCalculationMode;
        this.MaxPlayers = MaxPlayers;
        this.CloningAllowed = CloningAllowed;
        this.DisableMicAutoMute = DisableMicAutoMute;
        this.DisableRoomComments = DisableRoomComments;
        this.EncryptVoiceChat = EncryptVoiceChat;
        this.LoadScreenLocked = LoadScreenLocked;
        this.Version = Version;
        this.Name = Name;
        this.Description = Description;
        this.ImageName = ImageName;
        this.WarningMask = WarningMask;
        this.CustomWarning = CustomWarning;
        this.CreatorAccountId = CreatorAccountId;
        this.State = State;
        this.Accessibility = Accessibility;
        this.SupportsLevelVoting = SupportsLevelVoting;
        this.IsRRO = IsRRO;
        this.SupportsScreens = SupportsScreens;
        this.SupportsWalkVR = SupportsWalkVR;
        this.SupportsTeleportVR = SupportsTeleportVR;
        this.SupportsVRLow = SupportsVRLow;
        this.SupportsQuest2 = SupportsQuest2;
        this.SupportsMobile = SupportsMobile;
        this.SupportsJuniors = SupportsJuniors;
        this.MinLevel = MinLevel;
        this.CreatedAt = new Date(CreatedAt);
        this.Stats = Stats;
    }

    getCreator() {
        return new Promise (res => {
            axios.get(`https://accounts.rec.net/account/${this.CreatorAccountId}`).then((r)=> {
                res(new Player(r.data.accountId, r.data.username, r.data.displayName, r.data.profileImage, r.data.isJunior, r.data.platforms, r.data.personalPronouns, r.data.identityFlags, r.data.createdAt));
            })
        })
    }
    getImage() {
        return new Promise (res => {
            axios.get(`https://img.rec.net/${this.ImageName}`, {
                responseType: 'arraybuffer'
              }).then((r)=> {
                res(Buffer.from(r.data, 'binary').toString('base64'));
            })
        })
    }
}
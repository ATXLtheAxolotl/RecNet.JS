export class Event {
    PlayerEventId;
    CreatorPlayerId;
    ImageName;
    RoomId;
    SubRoomId;
    ClubId;
    Name;
    Description;
    StartTime;
    EndTime;
    AttendeeCount;
    State;
    Accessibility;
    IsMultiInstance;
    SupportsMultiInstanceRoomChat;
    DefaultBroadcastPremissions;
    CanRequestBroadcastPermissions;

    constructor(PlayerEventId, CreatorPlayerId, ImageName, RoomId, SubRoomId, ClubId, Name, Description, StartTime, EndTime, AttendeeCount, State, Accessibility, IsMultiInstance, SupportsMultiInstanceRoomChat, DefaultBroadcastPremissions, CanRequestBroadcastPermissions) {
        this.PlayerEventId = PlayerEventId;
        this.CreatorPlayerId = CreatorPlayerId;
        this.ImageName = ImageName;
        this. RoomId = RoomId;
        this.SubRoomId = SubRoomId;
        this.ClubId = ClubId;
        this.Name = Name;
        this.Description = Description;
        this.StartTime = new Date(StartTime);
        this.EndTime = new Date(EndTime);
        this.AttendeeCount = AttendeeCount;
        this.State = State;
        this.Accessibility = Accessibility;
        this.IsMultiInstance = IsMultiInstance;
        this.SupportsMultiInstanceRoomChat = SupportsMultiInstanceRoomChat;
        this.DefaultBroadcastPremissions = DefaultBroadcastPremissions;
        this.CanRequestBroadcastPermissions = CanRequestBroadcastPermissions;
    }


}
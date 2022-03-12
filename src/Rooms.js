import { Room } from './Room.js';
import axios from 'axios';

class Rooms {
    getRoomById(id) {
        return new Promise(res => {
            axios.get(`https://rooms.rec.net/rooms/${id}`).then((r)=> {
                res(new Room(r.data.RoomId, r.data.IsDorm, r.data.MaxPlayerCalculationMode, r.data.MaxPlayers, r.data.CloningAllowed, r.data.DisableMicAutoMute, r.data.DisableRoomComments, r.data.EncryptVoiceChat, r.data.LoadScreenLocked, r.data.Version, r.data.Name, r.data.Description, r.data.ImageName, r.data.WarningMask, r.data.CustomWarning, r.data.CreatorAccountId, r.data.State, r.data.Accessibility, r.SupportsLevelVoting, r.data.IsRRO, r.data.SupportsScreens, r.data.SupportsWalkVR, r.data.SupportsTeleportVR, r.data.SupportsVRLow, r.data.SupportsQuest2, r.data.SupportsMobile, r.data.SupportsJuniors, r.data.MinLevel, r.data.CreatedAt, r.data.Stats))
            })
        })
    }
    getRoomByName(name) {
        return new Promise(res => {
            axios.get(`https://rooms.rec.net/rooms?name=${name}`).then((r)=> {
                res(new Room(r.data.RoomId, r.data.IsDorm, r.data.MaxPlayerCalculationMode, r.data.MaxPlayers, r.data.CloningAllowed, r.data.DisableMicAutoMute, r.data.DisableRoomComments, r.data.EncryptVoiceChat, r.data.LoadScreenLocked, r.data.Version, r.data.Name, r.data.Description, r.data.ImageName, r.data.WarningMask, r.data.CustomWarning, r.data.CreatorAccountId, r.data.State, r.data.Accessibility, r.SupportsLevelVoting, r.data.IsRRO, r.data.SupportsScreens, r.data.SupportsWalkVR, r.data.SupportsTeleportVR, r.data.SupportsVRLow, r.data.SupportsQuest2, r.data.SupportsMobile, r.data.SupportsJuniors, r.data.MinLevel, r.data.CreatedAt, r.data.Stats))
            }).catch(() => res(null))
        })
    }
    getRoomsByOwner(OwnerId) {
        return new Promise(res => {
            axios.get(`https://rooms.rec.net/rooms/ownedby/${OwnerId}`).then((r)=> {
                const rooms = [];
                for(var i = 0; i < r.data.length; i++) {
                    rooms.push(new Room(r.data[i].RoomId, r.data[i].IsDorm, r.data[i].MaxPlayerCalculationMode, r.data[i].MaxPlayers, r.data[i].CloningAllowed, r.data[i].DisableMicAutoMute, r.data[i].DisableRoomComments, r.data[i].EncryptVoiceChat, r.data[i].LoadScreenLocked, r.data[i].Version, r.data[i].Name, r.data[i].Description, r.data[i].ImageName, r.data[i].WarningMask, r.data[i].CustomWarning, r.data[i].CreatorAccountId, r.data[i].State, r.data[i].Accessibility, r.SupportsLevelVoting, r.data[i].IsRRO, r.data[i].SupportsScreens, r.data[i].SupportsWalkVR, r.data[i].SupportsTeleportVR, r.data[i].SupportsVRLow, r.data[i].SupportsQuest2, r.data[i].SupportsMobile, r.data[i].SupportsJuniors, r.data[i].MinLevel, r.data[i].CreatedAt, r.data[i].Stats))
                } 
                res(rooms);
            })
        })
    }
    searchRooms(name) {
        return new Promise(res => {
            axios.get(`https://rooms.rec.net/rooms/search?query=${name}`).then((r)=> {
                const rooms = [];
                for(var i = 0; i < r.data.Results.length; i++) {
                    rooms.push(new Room(r.data.Results[i].RoomId, r.data.Results[i].IsDorm, r.data.Results[i].MaxPlayerCalculationMode, r.data.Results[i].MaxPlayers, r.data.Results[i].CloningAllowed, r.data.Results[i].DisableMicAutoMute, r.data.Results[i].DisableRoomComments, r.data.Results[i].EncryptVoiceChat, r.data.Results[i].LoadScreenLocked, r.data.Results[i].Version, r.data.Results[i].Name, r.data.Results[i].Description, r.data.Results[i].ImageName, r.data.Results[i].WarningMask, r.data.Results[i].CustomWarning, r.data.Results[i].CreatorAccountId, r.data.Results[i].State, r.data.Results[i].Accessibility, r.SupportsLevelVoting, r.data.Results[i].IsRRO, r.data.Results[i].SupportsScreens, r.data.Results[i].SupportsWalkVR, r.data.Results[i].SupportsTeleportVR, r.data.Results[i].SupportsVRLow, r.data.Results[i].SupportsQuest2, r.data.Results[i].SupportsMobile, r.data.Results[i].SupportsJuniors, r.data.Results[i].MinLevel, r.data.Results[i].CreatedAt, r.data.Results[i].Stats))
                } 
                res(rooms);
            }).catch(() => res(null))
        })
    }
    searchRooms(name,amount) {
        return new Promise(res => {
            axios.get(`https://rooms.rec.net/rooms/search?query=${name}&take=${amount}`).then((r)=> {
                const rooms = [];
                for(var i = 0; i < r.data.Results.length; i++) {
                    rooms.push(new Room(r.data.Results[i].RoomId, r.data.Results[i].IsDorm, r.data.Results[i].MaxPlayerCalculationMode, r.data.Results[i].MaxPlayers, r.data.Results[i].CloningAllowed, r.data.Results[i].DisableMicAutoMute, r.data.Results[i].DisableRoomComments, r.data.Results[i].EncryptVoiceChat, r.data.Results[i].LoadScreenLocked, r.data.Results[i].Version, r.data.Results[i].Name, r.data.Results[i].Description, r.data.Results[i].ImageName, r.data.Results[i].WarningMask, r.data.Results[i].CustomWarning, r.data.Results[i].CreatorAccountId, r.data.Results[i].State, r.data.Results[i].Accessibility, r.SupportsLevelVoting, r.data.Results[i].IsRRO, r.data.Results[i].SupportsScreens, r.data.Results[i].SupportsWalkVR, r.data.Results[i].SupportsTeleportVR, r.data.Results[i].SupportsVRLow, r.data.Results[i].SupportsQuest2, r.data.Results[i].SupportsMobile, r.data.Results[i].SupportsJuniors, r.data.Results[i].MinLevel, r.data.Results[i].CreatedAt, r.data.Results[i].Stats))
                } 
                res(rooms);
            }).catch(() => res(null))
        })
    }
}

export const rooms = new Rooms();
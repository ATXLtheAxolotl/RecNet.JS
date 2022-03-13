import axios from "axios";
import { Event } from './Event.js'
class Events {
    getRecentEvents() {
        return new Promise((res) => {
            axios.get('https://api.rec.net/api/playerevents/v1').then(res => {
                const events = [];
                res.data.forEach(event => {
                    events.push(new Event(event.PlayerEventId, event.CreatorPlayerId, event.ImageName, event.RoomId, event.SubRoomId, event.ClubId, event.Name, event.Description, event.StartTime, event.EndTime, event.AttendeeCount, event.State, event.Accessibility, event.IsMultiInstance, event.SupportsMultiInstanceRoomChat, event.DefaultBroadcastPremissions, event.CanRequestBroadcastPermissions));
                })
                res(events);
            });
        })
    }
    getEventByID(id) {
        return new Promise((res) => {
            axios.get(`https://api.rec.net/api/playerevents/v1/${id}`).then(res => {

                res(new Event(res.data.Playerres.dataId, res.data.CreatorPlayerId, res.data.ImageName, res.data.RoomId, res.data.SubRoomId, res.data.ClubId, res.data.Name, res.data.Description, res.data.StartTime, res.data.EndTime, res.data.AttendeeCount, res.data.State, res.data.Accessibility, res.data.IsMultiInstance, res.data.SupportsMultiInstanceRoomChat, res.data.DefaultBroadcastPremissions, res.data.CanRequestBroadcastPermissions));
            });
        })
    }
    getEventsInRoom(RoomID) {
        return new Promise((res) => {
            axios.get(`https://api.rec.net/api/playerevents/v1/room/${id}`).then(res => {

                res(new Event(res.data.Playerres.dataId, res.data.CreatorPlayerId, res.data.ImageName, res.data.RoomId, res.data.SubRoomId, res.data.ClubId, res.data.Name, res.data.Description, res.data.StartTime, res.data.EndTime, res.data.AttendeeCount, res.data.State, res.data.Accessibility, res.data.IsMultiInstance, res.data.SupportsMultiInstanceRoomChat, res.data.DefaultBroadcastPremissions, res.data.CanRequestBroadcastPermissions));
            });
        })
    }
}
export const events = new Events();
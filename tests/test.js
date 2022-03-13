import { rooms, players, friends, events } from 'recnetjs'
rooms.getRoomByName('UnknownArmy').then((res) => events.getEventsInRoom(res.RoomID).then(ev => {console.log(ev)}))
//players.getPlayerByID('1').then(async (res) => console.log(await res.getImage()))
//events.getRecentEvents()
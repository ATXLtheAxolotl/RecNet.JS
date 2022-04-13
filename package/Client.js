import { login } from './Other/Authentication.js'
import { PlayerManager } from './Player/PlayerManager.js'
import { FriendManager } from './Player/FriendManager.js'
import { EventManager } from './Room/EventManager.js';
import { RoomManager } from './Room/RoomManager.js';

export class Client {
    //Auth Stuff
    username;
    password;
    token;

    //Player
    players;
    friends;

    //Rooms
    events;
    rooms;

    constructor() {
        this.players = new PlayerManager();
        this.friends = new FriendManager();
        this.events = new EventManager();
        this.rooms = new RoomManager();
    }

    login(email, password) {
        const l = login(email, password);
        this.username = email;
        this.password = password;
        this.token = l;
        return l;
    }


}
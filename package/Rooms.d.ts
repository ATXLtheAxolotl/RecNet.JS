import { Room } from './Room.js';
export const rooms: Rooms;
declare class Rooms {
    getRoomById(id: string): Promise<Room>;
    getRoomByName(name: string): Promise<Room>;
    getRoomsByOwner(OwnerId: string): Promise<Room[]>;
    searchRooms(name: string): Promise<Room[]>;
    searchRooms(name: string, amount: number): Promise<Room[]>;
}
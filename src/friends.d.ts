import { Friend } from './Friend.js'
export const friends: Friends;
declare class Friends {
    getFriends(token: string): Promise<Friend[]>;
    getFriends(token: string, amount: number): Promise<Friend[]>;
}
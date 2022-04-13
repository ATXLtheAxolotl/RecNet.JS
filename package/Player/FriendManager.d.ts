import { Friend } from './Friend.js'
export const friends: FriendManager;
declare class FriendManager {
    getFriends(token: string): Promise<Friend[]>;
    getFriends(token: string, amount: number): Promise<Friend[]>;
}
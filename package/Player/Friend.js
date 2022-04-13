import axios from "axios";
import { Player } from "./Player.js";
export class Friend {
    RelationshipID;
    PlayerID;
    RelationshipType;
    Favorited;
    Muted;
    Ignored;
    constructor(RelationshipID, PlayerID, RelationshipType, Favorited, Muted, Ignored) {
        this.RelationshipID = RelationshipID;
        this.PlayerID = PlayerID;
        this.RelationshipType = RelationshipType;
        this.Favorited = Favorited;
        this.Muted = Muted;
        this.Ignored = Ignored;
    }
    unfriend(token) {
        axios.delete(`https://api.rec.net/api/relationships/v3/${this.pid}`,{
            headers: {
                "Authorization": token,
            }
        })
    }
    sendFriendRequest(token) {
        axios.put(`https://api.rec.net/api/relationships/v3/${this.pid}`,{
            headers: {
                "Authorization": token,
            }
        })
    }
    async getUsername() {
        return (await this.getPlayer()).username
    }
    async getDisplayName() {
        return (await this.getPlayer()).displayName
    }
    async isJunior() {
        return (await this.getPlayer()).isJunior
    }
    async getCreationDate() {
        return new Date((await this.getPlayer()).createdAt)
    }
    async getProfilePictureResourceName() {
        return (await this.getPlayer()).profileImage
    }
    getPlayer() {
        return new Promise (res => {
            axios.get(`https://accounts.rec.net/account/${this.PlayerID}`).then((r)=> {
                res(new Player(r.data.accountId, r.data.username, r.data.displayName, r.data.profileImage, r.data.isJunior, r.data.platforms, r.data.personalPronouns, r.data.identityFlags, r.data.createdAt));
            })
        })
    }
}
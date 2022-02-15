import axios from "axios";
import { Player } from "./Player";
export class Friend {
     rid;
     pid;
     rtype;
     fav;
     m;
     ign;
    constructor(RelationshipID, PlayerID, RelationshipType, Favorited, Muted, Ignored) {
        this.rid = RelationshipID;
        this.pid = PlayerID;
        this.rtype = RelationshipType;
        this.fav = Favorited;
        this.m = Muted;
        this.ign = Ignored;
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
    isIgnored() {
        if(this.ign > 0) return true;
        else return false;
    }
    isMuted() {
        if(this.m > 0) return true;
        else return false;
    }
    getPlayerID() {
        return this.pid
    }
    getRelationshipID() {
        return this.rid
    }
    async getUsername() {
        return (await this.getExtraInfo()).username
    }
    async getDisplayName() {
        return (await this.getExtraInfo()).displayName
    }
    async isJunior() {
        return (await this.getExtraInfo()).isJunior
    }
    async getCreationDate() {
        return new Date((await this.getExtraInfo()).createdAt)
    }
    async getProfilePictureResourceName() {
        return (await this.getExtraInfo()).profileImage
    }
    getExtraInfo() {
        return new Promise (res => {
            axios.get(`https://accounts.rec.net/account/${this.pid}`).then((r)=> {
                res(new Player(r.data.username, r.data.displayName, r.data.profileImage, r.data.isJunior, r.data.platforms, r.data.personalPronouns, r.data.identityFlags, r.data.createdAt));
            })
        })
    }
}
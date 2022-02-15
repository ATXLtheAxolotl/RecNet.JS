import axios from "axios";
import { Player } from './Player.js'
class Players  {
    getPlayerByName(username) {
        return new Promise(res => {
            axios.get(`https://accounts.rec.net/account?username=${username}`).then((r)=> {
                res(new Player(r.data.username, r.data.displayName, r.data.profileImage, r.data.isJunior, r.data.platforms, r.data.personalPronouns, r.data.identityFlags, r.data.createdAt))
            }).catch(()=>{
                res(null);
            })
        })
    }
    getPlayerByID(id) {
        return new Promise(res => {
            axios.get(`https://accounts.rec.net/account/${id}`).then((r)=> {
                res(new Player(r.data.username, r.data.displayName, r.data.profileImage, r.data.isJunior, r.data.platforms, r.data.personalPronouns, r.data.identityFlags, r.data.createdAt))
            }).catch(()=>{
                res(null);
            })
        })
    }
}

export var players = new Players();
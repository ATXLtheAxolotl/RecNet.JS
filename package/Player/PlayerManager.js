import axios from "axios";
import { Player } from './Player.js'
export class PlayerManager  {
    getPlayerByName(username) {
        return new Promise(res => {
            axios.get(`https://accounts.rec.net/account?username=${username}`).then((r)=> {
                res(new Player(r.data.accountId, r.data.username, r.data.displayName, r.data.profileImage, r.data.isJunior, r.data.platforms, r.data.personalPronouns, r.data.identityFlags, r.data.createdAt))
            }).catch(()=>{
                res(null);
            })
        })
    }
    getPlayerByID(id) {
        return new Promise(res => {
            axios.get(`https://accounts.rec.net/account/${id}`).then((r)=> {
                res(new Player(r.data.accountId, r.data.username, r.data.displayName, r.data.profileImage, r.data.isJunior, r.data.platforms, r.data.personalPronouns, r.data.identityFlags, r.data.createdAt))
            }).catch(()=>{
                res(null);
            })
        })
    }
    searchPlayers(name) {
        return new Promise(res => {
            axios.get(`https://accounts.rec.net/account/search?name=${name}`).then((r)=> {
                const players = [];
                for(var i = 0; i < r.data.length; i++) {
                    players.push(new Player(r.data.accountId, r.data[i].username, r.data[i].DisplayName, r.data[i].ProfileImage, r.data[i].isJunior, r.data[i].platforms, r.data[i].personalPronouns, r.data[i].identityFlags, r.data[i].createdAt));                    
                }
                res(players);
            }).catch(()=>{
                res([]);
            })
        })
    }
}
import axios from 'axios';
import { Friend } from'./Friend.js'
async function getFriends(token,amount) {
    return new Promise((res,rej) => {
        axios.get(`https://api.rec.net/api/relationships/v6/current/friends?take=${amount}`, {
            headers: {
                "Authorization": token,
            }
        }).then((rez)=> {
            const friends = [];
            for(var i = 0; i < rez.data.length; i++) {
                friends.push(new Friend(rez.data[i].Id,rez.data[i].PlayerID,rez.data[i].RelationshipType,rez.data[i].Favorited,rez.data[i].Muted,rez.data[i].Ignored))
            } 
            res(friends);
        });
        
    })
}

export default getFriends;

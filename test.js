
import {getToken,getFriends,getPlayerInfo} from './src/index.js'
import { Friend } from './src/classes/Friends.js';
import { email, password} from './config.json'

(await getFriends(await getToken(email, password),5000).then(async (res)=>{
        //for(var i=0; i< res.length; i++) {
            const friend = new Friend(res[0].Id, res[0].PlayerID, res[0].RelationshipType, res[0].Favorited, res[0].Muted, res[0].Ignored)
            console.log(await friend.getCreationDate())
        //}
    })
)
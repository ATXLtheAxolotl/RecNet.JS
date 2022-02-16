
/* import {getToken,getFriends} from './src/index.js'
import json from './config.json';

(await getFriends(await getToken(json.email, json.password),5000).then(async (res)=>{
    
        //for(var i=0; i< res.length; i++) {
             const friend = 
            console.log(await friend.getCreationDate()) 
        //}})) 
*/
import { players } from './src/classes/Players.js'
await players.getPlayerByName('ATXLtheAxlotol').then(async p => {
    console.log(await p.getBio())
})
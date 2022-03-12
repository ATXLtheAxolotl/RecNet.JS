/* 
import {getToken,getFriends} from './src/index.js'
import json from './config.json';

(await getFriends(await getToken(json.email, json.password),5000).then(async (res)=>{
    
        //for(var i=0; i< res.length; i++) {
            console.log(res) 
        //}})) 


})) */
/* import { players } from './src/Players.js'
await players.getPlayerByName('ATXLtheAxlotol').then(async p => {
    console.log(await p.getImage())
})  */

/* import axios from 'axios';

axios.get("https://rooms.rec.net/rooms?name=jailbreak.").then((res) => {
    console.log(res.data);
})  */

import { rooms } from './src/Rooms.js'
rooms.getRoomByName('UnknownArmy').then(res => {
    console.log(res);
    /* res.getImage().then((image) => {console.log(image);}) */
}) 
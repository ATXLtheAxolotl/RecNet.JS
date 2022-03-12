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

import { rooms, players, friends } from './src/index.js'
//rooms.getRoomByName('UknownArmy').then((res) => console.log(res))
players.getPlayerByID('1').then(async (res) => console.log(await res.getImage()))
friends
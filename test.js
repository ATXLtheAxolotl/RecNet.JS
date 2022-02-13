
import {getToken,getFriends,getPlayerInfo} from './src/index.js'

(await getFriends(await getToken("", "")).then((res)=>{getPlayerInfo(res[0].PlayerID).then((res2)=>{console.log(res2)})}))
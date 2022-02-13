
import {getToken,getFriends,getPlayerInfo} from './src/index.js'

(await getFriends(await getToken("", ""),5000).then((res)=>{getPlayerInfo(res[0].PlayerID).then((res2)=>{console.log(res2)})}))
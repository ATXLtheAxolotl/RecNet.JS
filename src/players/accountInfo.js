import axios from 'axios';
async function getPlayerInfo(PlayerID) {
    return new Promise(res => {
        axios.get(`https://accounts.rec.net/account/${PlayerID}`, {}).then(async (rez)=> {
            res(rez.data);
        });
    })
}

export default getPlayerInfo;
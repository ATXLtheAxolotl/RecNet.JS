import axios from 'axios';
async function getFriends(token,amount) {
    return new Promise(res => {
        axios.get(`https://api.rec.net/api/relationships/v6/current/friends?take=${amount}`, {
            headers: {
                "Authorization": token,
            }
        }).then(async (rez)=> {
//was going to be here to get more info about the friends but it took a while to load and you might get banned for API spam (maybe)
/*              for(var i = 0; i < rez.data.length; i++) {
                const friend = (await axios.get(`https://accounts.rec.net/account/${rez.data[i].PlayerID}`)).data
                rez.data[i]['username'] = friend.username
                rez.data[i]['profilePicture'] = friend.profileImage
                rez.data[i]['Junior'] = friend.isJunior
                rez.data[i]['CreationDate'] = friend.createdAt
                if(i == rez.data.length) {
                    res(rez.data);
                }
            }  */
            res(rez.data);
        });
        
    })
}

export default getFriends;

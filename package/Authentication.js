import axios from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

class Authentication {
    login(email, password) {
        return new Promise(async rez => {
            const jar = new CookieJar()
            const instance = wrapper(axios.default.create({
              jar: jar,
              baseURL: 'https://auth.rec.net/',
              headers: {"Content-Type": "application/x-www-form-urlencoded"},
              maxRedirects: 2,
            }));
            
            instance.post('https://auth.rec.net/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Drecnet%26redirect_uri%3Dhttps%253A%252F%252Frec.net%252Fauthenticate%252Fdefault%26response_type%3Did_token%2520token%26scope%3Dopenid%2520rn.api%2520rn.notify%2520rn.match.read%2520rn.chat%2520rn.accounts%2520rn.auth%2520rn.link%2520rn.clubs%2520rn.rooms%26state%3D047dc984ca704c81a7c4492a1c8d9c57%26nonce%3Ddd01b66944934130a2cbe4613a3b0236%20', `Input.Username=${email}&Input.Password=${password}&Input.RememberMe=true&button=login&__RequestVerificationToken=${(await instance.get('Account/Login')).data.split("<input name=\"__RequestVerificationToken\" type=\"hidden\" value=\"")[1].split("\" /><input name=\"Input.RememberMe\"")[0]}&Input.RememberMe=false`, {
            }).then((res) => {
              const access_token = res.request.res.responseUrl.split("access_token=")[1].split("&token_type=")[0];
              rez('Bearer ' + access_token);
            }).catch(async (err) => {console.log('Failed to login:\n'+err);});
        }) 
      }
}
export const auth = new Authentication();
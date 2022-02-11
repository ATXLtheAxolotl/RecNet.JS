import getToken from './auth/index.js'

getToken("email", "password").then((t)=>{console.log(t)})
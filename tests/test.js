import { rooms, auth } from 'recnetjs'
console.log(await auth.login('email', 'password'))
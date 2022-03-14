import path from 'path';
import chalk from 'chalk';
import PythonShell from 'python-shell';

class Authentication {
    login(email, password) {
        return new Promise(res => {
            PythonShell.PythonShell.run(path.resolve('./py')+"\\login.py", {args:[email,password]}, (err, out) => {
                if(err) {
                    if(err.message == '__main__.InvalidCredentials: Rec Room username or password incorrect!') return console.log(chalk.rgb(241, 161, 97).underline('RecNet.JS | Login Error:\n')+chalk.red('Failed To Login: Invalid Username/Password.'))
                    console.log(err);
                    res("Failed");
                }
                else {
                    console.log(chalk.rgb(241, 161, 97).underline('RecNet.JS | Login Successful')+chalk.green(' \u2713'))
                    return res(out[1]);
                }
            })
        }) 
    }
}
export const auth = new Authentication();
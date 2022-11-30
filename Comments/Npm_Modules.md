- Nodemon will helps with automatically restarting the server
- With npm init -y we just initialize an basic npm starter 
- When we will build the project, all our dependencies in our package.json will be installed too.

{
const { format } = require('date-fns');
console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss'));

=> then we will get on the terminal the : 20221130        00:38:31
}

{
npm install nodemon --save-dev
npm i nodemon -D

=> we will get on the package json file a dev dependency module...
}

{ 
    then we will initialize in the script: 

    "scripts": {
    "start": "node index2",
    "dev": "nodemon index2"

    => {
        npm start

> nodejs@1.0.0 start
> node index2

20221130        00:44:59
balogmate@Balogs-MacBook-Pro NodeJs % npm run dev

> nodejs@1.0.0 dev
> nodemon index2

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index2.js`
20221130        00:45:09
[nodemon] clean exit - waiting for changes before restart

    }
}

{ 
    - A production dependencie with npm install uuid ( npm install uuid) then it'll go directly to the dependencies, wich allows us to generate 
    id-s that of course are different for each entry

    const  { v4: uuid } = require('uuid'); in the index2.js

    console.log(uuid()) on the terminal => a1272597-e4f0-43a4-a3c5-97a509d83929
}

- ^ When a node module has to be updated ( the major )
- "infinti symbol" when we have to update a patch 
- * => when the node module will be updated every time when an update will appear

- npm rm nodemon -D => uninstall the dev dependencie














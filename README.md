## art-static-service
for art testing environment publish code service

### start service
1. install global dependencies
  * [install node](https://nodejs.org/en/download/)
  * sudo yarn global add pm2
2. yarn install
3. yarn start
4. it default listen on 9090 port, if you want to change, please write ecosystem.config.js env.PORT, and you can also open more service together.

### upload file
1. url '/upload_static'
2. methods POST PUT
3. params 
  * file: use fs.createReadStream function
  * path: The files will be tied there

### get file
1. url '/', this will map to './static/frontend/'
2. methods GET

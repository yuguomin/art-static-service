## art-static-service
for art testing environment publish code service

### start service
1. yarn install
2. node ./dist/index.js
3. execute this node command will default listen 9090 port, if you want to set, append --prot=xxx to set.

### upload file
1. url '/upload_static'
2. methods POST PUT
3. params 
  * file: use fs.createReadStream function
  * path: The files will be tied there

### get file
1. url '/', it will map to './static/frontend/'
2. methods GET

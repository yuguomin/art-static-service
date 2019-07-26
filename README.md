## art-static-service
For art testing environment publish code service

### Preparation before use
1. download this package on your server.
  * command
  ```shell
  git clone https://github.com/yuguomin/art-static-service.git
  ```
  * or any other way like scp...
2. install global dependencies
  * [install yarn](https://yarn.bootcss.com/docs/install/#mac-stable)
  * [install node](https://nodejs.org/en/download/)
  * command
  ```shell
  sudo yarn global add pm2
  ```
3. install package dependencies
  * use command cd this folder
  * command
  ```shell
  yarn install
  ```
  

### Start service
1. use command cd this folder
2. command
```shell
yarn start
```
  * will start server and listen on 9090 port, if you want to change, please write ecosystem.config.js env.PORT, and you can also open more service together
3. command
```shell
yarn list
```
  * will see pm2 progress management interface

### Stop service
1. command
```shell
yarn close
```
  * will use command => pm2 delete all
  * will stop all pm2 manage process, If you just want to stop one of them, please use pm2 command
  ```shell
  pm2 delete {process id}
  ```

### Upload file
1. url '/upload_static'
2. methods POST PUT
3. params 
  * file: use fs.createReadStream function
  * path: The files will be tied there

### Get file
1. url '/', this will map to './static/frontend/'
2. methods GET

### Error logs
use winston collect logs, path: '/logs/error.log'
at present only collect code >= 400 message to log.

### pm2 commands
1. look pm2 process 
```shell
pm2 list
```
2. delete one process
```shell
pm2 delete <id|name>
```
3. delete all process
```shell
pm2 delete all
```
4. open process
```shell
pm2 start <path>
```

### The related documents
[pm2](https://pm2.io/doc/zh/runtime/quick-start/)
[windston](https://github.com/winstonjs/winston)
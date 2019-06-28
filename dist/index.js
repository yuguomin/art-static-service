"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = require('yargs').argv.port || 9090;
app_1.app.listen(port, function (err) {
    console.log(`Listening on port ${port} success!`);
});

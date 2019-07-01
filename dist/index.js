"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const port = require('yargs').argv.port || 9090;
app_1.default.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Listening on port ${port} success!`);
});

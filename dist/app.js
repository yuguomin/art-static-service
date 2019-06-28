"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // this shim is required
const routing_controllers_1 = require("routing-controllers");
const controller_1 = require("./controller");
// creates express app, registers all controller routes and returns you express app instance
exports.app = routing_controllers_1.createExpressServer({
    controllers: [controller_1.UserController] // we specify controllers we want to use
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // this shim is required
const routing_controllers_1 = require("routing-controllers");
const UploadController_1 = require("./controllers/UploadController");
const compression_1 = __importDefault(require("compression"));
const path_1 = require("path");
const express_1 = __importDefault(require("express"));
var morgan = require('morgan');
const index_js_1 = __importDefault(require("../winston/config/index.js"));
const app = express_1.default();
app.use(morgan('combined', { stream: index_js_1.default.stream }));
const publicPath = path_1.join(__dirname, '../static/frontend');
app.use('/', compression_1.default(), express_1.default.static(publicPath));
routing_controllers_1.useExpressServer(app, {
    controllers: [UploadController_1.UserController]
});
exports.default = app;

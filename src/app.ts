import "reflect-metadata"; // this shim is required
import {useExpressServer} from "routing-controllers";
import {UserController} from "./controllers/UploadController";
import compression from 'compression';
import { join } from 'path';
import express from 'express';
var morgan = require('morgan');
import winston from './winston/config';

const app = express();

app.use(morgan('combined', {
  skip(req, res) { return res.statusCode < 400 },
  stream: winston.stream
}));
const publicPath = join(__dirname, '../static/frontend');
app.use('/', compression(), express.static(publicPath));
useExpressServer(app, {
  controllers: [UserController]
});

export default app;
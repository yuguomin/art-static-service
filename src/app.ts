import "reflect-metadata"; // this shim is required
import {useExpressServer} from "routing-controllers";
import {UserController} from "./controller";
import compression from 'compression';
import { join } from 'path';
import express from 'express';


const app = express();
const publicPath = join(__dirname, '../static/frontend');
app.use('/', compression(), express.static(publicPath));
useExpressServer(app, {
  controllers: [UserController]
});

export default app;
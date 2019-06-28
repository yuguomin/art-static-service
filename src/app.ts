import "reflect-metadata"; // this shim is required
import {createExpressServer} from "routing-controllers";
import {UserController} from "./controller";

// creates express app, registers all controller routes and returns you express app instance
export const app = createExpressServer({
   controllers: [UserController] // we specify controllers we want to use
});
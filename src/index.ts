import app from "./app";
import { DEFAULT_PORT } from "./constant/ApiConstant";

const port = process.env.PORT || DEFAULT_PORT;
// console.log('env',process.env);

app.listen(port, () => {
  // console.log('env', process.env);
  console.log(`Listening on port ${port} success!`);
});
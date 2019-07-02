import app from "./app";
import { DEFAULT_PORT } from "./constant/ApiConstant";

const port = process.env.PORT || DEFAULT_PORT;

app.listen(port, () => {
  console.log(`Listening on port ${port} success!`);
});
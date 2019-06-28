import { app } from "./app";

const port = require('yargs').argv.port || 9090;

app.listen(port, function(err) {
  console.log(`Listening on port ${port} success!`);
});
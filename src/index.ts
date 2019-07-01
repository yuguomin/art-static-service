import app from "./app";

const port = require('yargs').argv.port || 9090;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening on port ${port} success!`);
});
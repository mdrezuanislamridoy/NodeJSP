/*
 * Title : Uptime Monitoring Application
 * Description : A Restful API to monitor up and down time of user defined links
 * Author : MD Ridoy Babu
 * Date : 12/09/24
 */

// Dependencies
const http = require("http");
const { handleRequestRes } = require("./helpers/handleReqRes");

// App object / Module scaffolding
const app = {};

// Configuration
app.config = {
  port: 3330,
};

//Create Server
app.createServer = () => {
  const server = http.createServer(handleRequestRes);
  server.listen(app.config.port, () => {
    console.log("Listening on port", app.config.port);
  });
};

app.createServer();

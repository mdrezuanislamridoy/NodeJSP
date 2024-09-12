//* importing Server
const http = require("http");
const hostName = "127.0.0.1";
const port = 2222;

// ? How to create a new server

const server = http.createServer((req, res) => {
  res.writeHead(202, { "content-type": "text/html" });
  res.write("<h2>hello world</h2>");
  res.end();
});

// ? How to listen server on a specific code

server.listen(port, hostName, () => {
  console.log("server is running successfully");
});

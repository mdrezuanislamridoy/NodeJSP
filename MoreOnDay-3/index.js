const http = require("http");
const ReqRes = require("./ReqRes");

const port = "127.0.0.1";
const host = 2222;

const server = http.createServer(ReqRes);

server.listen(host, port, () => {
  console.log("server is running on port ", port, " and host ", host);
});

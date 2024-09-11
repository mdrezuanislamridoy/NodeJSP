const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Hello Programmers ");
    res.write(" Hello World");
    res.end();
  } else if (req.url == "/about") {
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.write("NotFound");
    res.end();
  }
});

// server.on("connection", () => {
//   console.log("new Connection");
// });

server.listen(4000);
console.log("listening on port 4000");

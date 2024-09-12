const http = require("http");
const fs = require("fs");

const handleLink = (fileName, port) => {
  fs.readFile(fileName, (err, data) => {
    res.writeHead(port, { "content-type": "text/html" });
    res.write(data);
    res.end();
  });
};

const ReqRes = (req, res) => {
  if (req.url === "/") {
    handleLink("index.html", 200);
  } else if (req.url === "/about") {
    handleLink("about.html", 200);
  } else if (req.url === "/contact") {
    handleLink("contact.html", 200);
  } else {
    handleLink("err.html", 400);
  }
};
module.exports = ReqRes;

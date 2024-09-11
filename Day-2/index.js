// Stream && Buffer

// const fs = require("fs");
// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, "utf8");
// ourReadStream.on("data", (chunk) => {
//   console.log(chunk);
// });

// using server

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("<html><head><title>Form</title></head>");
//     res.write(
//       '<body><form method="post" action="/process"><input name="message" /></form></body>'
//     );
//     res.end();
//   } else if (req.url === "/process" && req.method === "POST") {
//     const body = [];
//     req.on("data", (chunk) => {
//       body.push(chunk);
//     });
//     req.on("end", () => {
//       console.log("stream finished");
//       const bufferD = Buffer.concat(body).toString();
//       console.log(bufferD);
//       res.write("thanks for submitting");
//       res.end();
//     });
//   }
// });

server.listen(3000);
console.log("listening the port 3000");

// Write Stream

const fs = require("fs");

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

ourReadStream.on("data", (chunk) => {
  ourWriteStream.write(chunk);
});

ourReadStream.pipe(ourWriteStream);

const server = http.createServer((req, res) => {
  const myReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
  myReadStream.pipe(res);
});

server.listen(3000);
console.log("server is running");

const { StringDecoder } = require("string_decoder");
const url = require("url");

const handler = {};

handler.handleRequestRes = (req, res) => {
  // Get the URL and parse it
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryObject = parseUrl.query;
  const headersObject = req.headers;

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  // Handle incoming data
  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  // Handle the end of the request
  req.on("end", () => {
    realData += decoder.end();

    // Log the real data received
    console.log("Received Data:", realData);

    // // Send a response
    // res.setHeader("Content-Type", "application/json");
    // res.writeHead(200);

    // const responseData = {
    //   path: trimmedPath,
    //   method: method,
    //   query: queryObject,
    //   headers: headersObject,
    //   payload: realData,
    // };

    // res.end(JSON.stringify(responseData)); // Send response with request details
  });
};

module.exports = handler;

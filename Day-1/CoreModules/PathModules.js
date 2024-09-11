const path = require("path");
const myPath =
  "/home/ridoy/Documents/Practice/NodeJS/Day-1/CoreModules/PathModules.js";
console.log(path.basename(myPath));
console.log(path.extname);

// all in one
console.log(path.parse(myPath));

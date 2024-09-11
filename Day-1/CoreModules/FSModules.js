const fs = require("fs");

console.log(fs.writeFileSync("./myfile.txt", "hello writer \n"));
console.log(fs.appendFileSync("./myfile.txt", "hello Programmers"));
console.log(fs.readFileSync("./myfile.txt").toString());

// read in asyncronous way

fs.readFile("./myfile.txt", (err, data) => {
  console.log("\n", data.toString());
});

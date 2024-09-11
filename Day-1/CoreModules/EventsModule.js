const School = require("./School");

// Register a listener for bellRing event

const school = new School();

school.on("bell Ring", ({ period, text }) => {
  console.log("we need to run ", period, text);
});
school.stPer();

const EventEmitter = require("events");
const emirter = new EventEmitter();

class School extends EventEmitter {
  stPer() {
    console.log("period started");

    // raise event when bell rings

    setTimeout(() => {
      this.emit("bell Ring", {
        period: "period 2 ",
        text: "Period Ended",
      });
    }, 1000);
  }
}

module.exports = School;

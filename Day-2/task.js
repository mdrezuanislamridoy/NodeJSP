let waitingTime = (waitingTimeArray, isratSerialNumber) => {
  if (
    typeof waitingTimeArray !== "object" ||
    typeof isratSerialNumber !== "number"
  ) {
    return '"invalid input"';
  } else {
    let roundAvarage =
      waitingTimeArray.reduce((a, b) => a + b) / waitingTimeArray.length;
    let peopleLeftBeforeIsrat = isratSerialNumber - 1;
    let alreadyInterviewed = peopleLeftBeforeIsrat - waitingTimeArray.length;
    let isratShouldWait = roundAvarage * alreadyInterviewed;
    return isratShouldWait;
  }
};

let waitingTimeArray = [3, 5, 2, 1, 9];
let isratSerialNumber = waitingTimeArray.length + 5;

let result = waitingTime(waitingTimeArray, isratSerialNumber);

console.log(result);

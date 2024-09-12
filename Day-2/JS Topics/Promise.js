const { resolve } = require("path");

const EmpIds = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([1, 3, 5, 7, 8]);
  }, 2000);
});

EmpIds.then((data) => {
  console.log(data);

  const bio = new Promise((resolve, reject) => {
    setTimeout(() => {
      let empBio = {
        id: id,
        name: "rrr",
        age: 30,
        email: "rezuanislamridoy@gmail.com",
      };
      resolve(empBio);
    }, 3000);
  });
}).catch((err) => console.log(err));

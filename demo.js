const { red, green, blue } = require("chalk");

function waitFor(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function evilWaitFor(milliseconds) {
  return new Promise((resolve, reject) => setTimeout(reject, milliseconds));
}

function testThings() {
  console.log(green("START"));
  // const waitForPromise = waitFor(4000)
  const startTime = new Date();

  // PARALLEL
  Promise.all([
    waitFor(1000),
    waitFor(1000),
    waitFor(1000),
    5,
    waitFor(1000),
    "weird stuff",
    waitFor(1000),
  ]).then(() => {
    console.log(blue("all the steps are completed!"));
    console.log(`It took ${new Date() - startTime} milliseconds`);
  });

  // SEQUENCE
  // waitForPromise
  // .then(() => {
  //   console.log(blue("Step 1"))
  //   return waitFor(1000)
  // })
  // .then(() => {
  //   console.log(blue("Step 2"))
  //   return waitFor(1000)
  // })
  // .then(() => {
  //   console.log(blue("Step 3"))
  //   return waitFor(1000)
  // })
  // .catch(() => {
  //   console.log("we caught the error 👹")
  // })
  // .then(() => {
  //   console.log(`It took ${new Date() - startTime} milliseconds`);
  // })
}

testThings();

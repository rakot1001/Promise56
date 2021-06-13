"use strict";

const catPromise = new Promise((resolve, reject) => {
  const catDestiny = Math.random();
  if (catDestiny >= 0.5) {
    resolve("Cat is Alive");
  } else {
    reject("Cat is dead");
  }
});

catPromise.then(checkCat).catch(checkCat);

function checkCat(str) {
  console.log("Status", str);
}

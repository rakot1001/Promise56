"use strict";

const p = fetch("./data.json"); // когда загрузишь

p.then((response) => {
  // потом запусти эту функцию
  const ksonPromise = response.json();

  jsonPromise.then((data) => {
    console.log(data);
  });
});

const id = setTimeout(() => {
  console.log("timer ok");
}, 500);

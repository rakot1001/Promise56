"use strict";

const p = fetch("./data.json"); // когда загрузишь

const jsonPromise = p.then((response) => {
  // потом запусти эту функцию
  return response.json();
});


jsonPromise.then((data) => {
  console.table(data);
});

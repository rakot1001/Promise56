// "use strict";

// fetch("./data.json") //подгрузи этот файл
//   .then((response) => response.json()) // когда подгрузится - исполни эту функцию
//   .then((data) => console.table(data)) // когда распарсишь запусти эту функцию
//   .catch((error) => console.log("Error")); // проверь на ошибки

// const firstPromise = new Promise(executor);

// function executor(resolve, reject) {
//   resolve();
// }


function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

delay(1500).then(() => {
  console.log("timer stop");
});

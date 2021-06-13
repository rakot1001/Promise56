"use strict";

// const btn = document.getElementById("btn");

// btn.addEventListener("click", handleBtnClick);

// function handleBtnClick(evet) {
//   for (let i = 0; i < 1000; i++) {}
// }

// setTimeout(() => {
//   console.log("ok");
// }, 1500);

// function sum() {
//   return 2 + 2;
// }

// console.log(sum());



/* Функция последовательно выводит в консоль числа от 1 дл 20 с интервалом в 100мс Померять время исполнения */
console.time('1');
count();
function count() {
  let i = 1;
   const id = setInterval(()=> {
    console.log(i++);
    if(i>20){
      clearInterval(id);
      console.timeEnd('1');
    }
  }, 100);
  }



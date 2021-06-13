"use strict";

fetch("./data.json")//подгрузи этот файл
  .then((response) => response.json())// когда подгрузится - исполни эту функцию
  .then((data) => console.table(data))  // когда распарсишь запусти эту функцию
  .catch((error) => console.log('Error'));

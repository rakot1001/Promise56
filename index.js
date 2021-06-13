"use strict";

function loadImage(src) {
  const img = document.createElement("img");

  img.setAttribute("src", src); // Установка атрибута src инициализирует загрузку картинки
  return new Promise((resolve, reject) => {
    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error("Img isnt Load"));
    });
  });
}

loadImage(
  "https://i.pinimg.com/originals/35/82/21/358221b85dc0c666cbd6bf4961a260db.jpg"
)
  .then((img) => {
    document.body.append(img);
  })
  .catch((err) => {
    alert();
  });

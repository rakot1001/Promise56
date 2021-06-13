"use strict";

function sayH() {
  setTimeout(() => alert("Hello"), 0);
}
clearTimeout(sayH);

console.log(2**3**2);
const user = { name: "Джон", go() { alert(this.name) }, }


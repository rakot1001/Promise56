"use strict";

const user = {
  firstName: "Vlad",
  lastName: "Testovich",
  age: 45,
  getName() {
    return this.firstName;
  },
  isSelected: null,
  isAgree: false,
  isMale: true,
  [Symbol("test")]: {},
  phones: ["111111111111111", "22222222222", "33333333333"],
  friend: {
    firstName: "1",
    lastName: "2",
  },
};

const serializedObject = JSON.stringify(user);
console.log(serializedObject);

const recoveredObject = JSON.parse(serializedObject);
console.log(recoveredObject);

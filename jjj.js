//1

const al = ["1", "2", "3", "4", "5"];
console.log(al.join(","));

//2

const cart = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

console.log(cart);
cart.splice("2");
console.log(cart.indexOf("Карточка-3"));
cart.push("Карточка-4");
console.log(cart);
cart.push("Карточка-5(!Нова!)");

cart.unshift("Карточка-0", "Карточка-00");
console.log(cart);

// console.log(cart.includes()).=

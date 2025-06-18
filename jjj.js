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

cart.splice(2,1);
console.log(cart);
cart.push("Карточка-6");
console.log(cart);
cart.push("Карточка-4(!Нова!)");

cart.unshift("Карточка-0", "Карточка-00");
console.log(cart);

// console.log(cart.includes()).=

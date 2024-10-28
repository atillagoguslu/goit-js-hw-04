<<<<<<< HEAD
// function getUserNames(users) {
//   const newArray = [];
//   let counter = 0;
//   for (const user of users) {
//     counter += 1;
//     console.log(`UserName = ${counter}.`, user.name);
//     newArray.push(user.name);
//   }
//   return newArray;
// }

function getUserNames(users) {
  let newArray = [];
  newArray = users.map((val, ind, arr) => {
    return val.name;
  });
  return newArray;
}

console.log(
  getUserNames([
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      balance: 2811,
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      balance: 3821,
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      balance: 3793,
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      balance: 2278,
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      balance: 3951,
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      balance: 1498,
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      balance: 2764,
    },
  ])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
=======
function isEnoughCapacity(products, containerSize) {
  let totalQuantity = 0;

  for (const quantity of Object.values(products)) {
    totalQuantity += quantity;
  }

  return totalQuantity <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false
>>>>>>> f8f2a79 (init)

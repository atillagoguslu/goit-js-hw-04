<<<<<<< HEAD
function getUsersWithFriend(users, friendName) {
  const findings = users.filter((user) => {
    // console.log("LOG: ",user.friends);
    returned = user.friends.includes(friendName);
    // console.log(returned);
    return returned;
  });
  return findings;
}

// İki parametre alan bir getUsersWithFriend(users, friendName) ok fonksiyonu yazın:

// ilk parametre users - kullanıcı nesnelerinden oluşan bir dizi
// ikinci parametre friendName - aranacak arkadaşın adı.
// Fonksiyon, friendName adında bir arkadaşı olan users dizisindeki tüm kullanıcıların bir dizisini döndürmelidir. Her kullanıcının arkadaşları friends özelliğinde saklanır. Böyle bir arkadaşı olan kullanıcı yoksa, fonksiyon boş bir dizi döndürmelidir.

// İpuçları:

// filter() metodu, belirli bir koşulu sağlayan öğelerle yeni bir dizi oluşturmak için kullanılabilir.
// friends dizisinin friendName içerip içermediğini kontrol etmek için includes() yöntemini kullanın.

const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"],
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"],
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"],
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"],
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"],
  },
];

console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []
=======
function calcAverageCalories(days) {
  if (days.length === 0) return 0;

  const totalCalories = days.reduce((sum, day) => sum + day.calories, 0);

  return totalCalories / days.length;
}

//İkinci Yöntem
function calcAverageCalories(days) {
  let totalCalories = 0;

  if (days.length === 0) {
    return 0;
  }

  for (const day of days) {
    totalCalories += day.calories;
  }

  const averageCalories = totalCalories / days.length;

  return averageCalories;
}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 },
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 },
  ])
); // 2270

console.log(calcAverageCalories([])); // 0
>>>>>>> f8f2a79 (init)

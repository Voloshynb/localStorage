

// задаємо інфу для юзера1

let user1 = {
  LastName: "Andrievskiy",
  FirsName: "Nazar",
  Age: 21,
  TokenId: 453201,
};

// тут сетаю(заношу) об'єкт(предмет) до localStorage
let acc01 = localStorage.setItem("user1", JSON.stringify(user1));

// а дальше дістаю об'єкт з localStorage та виводжу в консоль як об'єкт
let row1 = localStorage.getItem("user1", user1);
let test1 = JSON.parse(row1);
console.log(test1);

// задаємо інфу для юзера2

let user2 = {
  LastName: "Hobarevych",
  FirsName: "Andrii",
  Age: 18,
  TokenId: 661981,
};

// тут сетаю(заношу) об'єкт(предмет) до localStorage
let acc02 = localStorage.setItem("user2", JSON.stringify(user2));

// а дальше дістаю об'єкт з localStorage та виводжу в консоль як об'єкт
let row2 = localStorage.getItem("user2", user2);
let test2 = JSON.parse(row2);
console.log(test2);

// задаємо інфу для юзера3

let user3 = {
  LastName: "Nomarov",
  FirsName: "Alex",
  Age: 34,
  TokenId: 910000,
};

// тут сетаю(заношу) об'єкт(предмет) до localStorage
let acc03 = localStorage.setItem("user3", JSON.stringify(user3));

// а дальше дістаю об'єкт з localStorage та виводжу в консоль як об'єкт
let row3 = localStorage.getItem("user3", user3);
let test3 = JSON.parse(row3);
console.log(test1);

// задаємо інфу для юзера4

let user4 = {
  LastName: "Rivonam",
  FirsName: "Roman",
  Age: 27,
  TokenId: 000001,
};

// тут сетаю(заношу) об'єкт(предмет) до localStorage
let acc04 = localStorage.setItem("user4", JSON.stringify(user4));

// а дальше дістаю об'єкт з localStorage та виводжу в консоль як об'єкт
let row4 = localStorage.getItem("user4", user4);
let test4 = JSON.parse(row4);
console.log(test4);

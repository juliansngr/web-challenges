console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 4;

if (number % 2 === 0) {
  console.log("Zahl ist gerade!");
} else {
  console.log("Zahl ist ungerade!");
}

// Part 3: Hotdogs
const numberOfHotdogs = 1000000;
let totalPrice;

if (numberOfHotdogs < 5) {
  console.log("Preis: 2,00€");
  totalPrice = numberOfHotdogs * 2;
  console.log(totalPrice);
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("Preis: 1,50€");
  totalPrice = numberOfHotdogs * 1.5;
  console.log(totalPrice);
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("Preis: 1,00€");
  totalPrice = numberOfHotdogs * 1;
  console.log(totalPrice);
} else if (numberOfHotdogs >= 1000000) {
  console.log("Preis: 0,10€");
  totalPrice = numberOfHotdogs * 0.1;
  console.log(totalPrice);
}

// Part 4: Daytime
const currentHour = 18;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Wilhelm";

const greeting = "Hello " + (userName === "Felix" ? "Coach" : userName) + "!";

console.log(greeting);

console.clear();

/*
1: Create the data for a book in an online store. Define variables for the following details:
  - The title of the book
  - The author of the book
  - The book's rating
  - The number of copies sold
*/

// --v-- write your code here --v--
const book = {
  title: "Steuerhinterziehung für Dummies",
  author: "Finanzamt",
  rating: "3",
  copies_sold: 12,
};
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120



Then:
- Increase the number of sales.
- Update the book's rating.
- Log all variables to the console again after making these updates.
*/

// --v-- write your code here --v--

logBookData();

// console.log("Title: " + book.title);
// console.log("Author: " + book.author);
// console.log("Rating: " + book.rating);
// console.log("Sales: " + book.copies_sold);

book.rating = "7";
book.copies_sold = book.copies_sold + 12;

// console.log("Title: " + book.title);
// console.log("Author: " + book.author);
// console.log("Rating: " + book.rating);
// console.log("Sales: " + book.copies_sold);

logBookData();

// --^-- write your code here --^--

/*
3: The logging code above is repetitive and hard to maintain.
   Refactor your code by doing the following:

 - Write a function called `logBookData` that logs all the book details to the console.
 - Replace the existing `console.log` statements with calls to this function.
 - Then, increase the number of sales two more times and log the updated details after each increase.
*/

// --v-- write your code here --v--
function logBookData() {
  console.log("Title: " + book.title);
  console.log("Author: " + book.author);
  console.log("Rating: " + book.rating);
  console.log("Sales: " + book.copies_sold);
}

book.copies_sold = book.copies_sold + 12;

logBookData();

book.copies_sold = book.copies_sold + 12;

logBookData();
// --^-- write your code here --^--

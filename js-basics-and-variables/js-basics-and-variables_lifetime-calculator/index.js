console.clear();

/*
Let's calculate some interesting facts based on a user's age! 
The program expects the user to provide their age as a numerical input. 
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days the person has lived.
2. The estimated number of remaining days, assuming an average life span of 80 years.
3. The percentage of life already lived, in relation to the expected life span.
4. The cumulative number of days the person has spent sleeping, assuming an average of 8 hours of sleep per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/

const currentAge = Number(process.argv[2]); // This takes the `<age>` entered in the command `node index.js <age>`.

console.log("Your current age is: " + currentAge);

let daysLived = currentAge * 365;
console.log("Days lived: ", daysLived);

let remainingDays = 80 * 365 - currentAge * 365;
console.log(remainingDays, "days remaining");

let percentageLived = (currentAge / 80) * 100;
console.log(percentageLived, "% of your life wasted");

let daysSlept = Math.round((currentAge * 365 * 8) / 24);
console.log(daysSlept, "(rounded) days spent sleeping");

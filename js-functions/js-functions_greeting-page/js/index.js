console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const currentTime = new Date().getHours();

  if (currentTime > 5 && currentTime < 13) {
    return "Good Morning";
  } else if (currentTime > 12 && currentTime < 19) {
    return "Good Afternoon";
  } else if (currentTime > 18 && currentTime < 23) {
    return "Good Evening";
  } else if (currentTime > 22 && currentTime < 6) {
    return "Good Night";
  }
}

function getDayColor() {
  const currentDay = new Date().getDay();
  console.log(currentDay);

  if (currentDay === 1) {
    return "darkgray";
  } else if (currentDay >= 2 && currentDay <= 5) {
    return "lightblue";
  } else {
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();

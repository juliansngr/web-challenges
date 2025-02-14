console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1: Define the function `calculatePizzaGain` here

function calculateRadius(diameter) {
  return diameter / 2;
}

function calculatePizzaGain(diameter1, diameter2) {
  const area1 =
    Math.PI * (calculateRadius(diameter1) * calculateRadius(diameter1));

  const area2 =
    Math.PI * (calculateRadius(diameter2) * calculateRadius(diameter2));

  const pizzaGain = ((area2 - area1) / area1) * 100;

  output.textContent = Math.round(pizzaGain);
}

// Task 2: Define the function `updatePizzaDisplay` here

function updatePizzaDisplay(pizzaElement, newSize) {
  pizzaElement.style.width = (newSize / 24) * 100 + "px";
}

// Task 3: Define the function `updateOutputColor` here

function updateOutputColor(size1, size2) {
  if (size1 <= size2) {
    outputSection.style.backgroundColor = "var(--green)";
    return;
  }
  if (size1 > size2) {
    outputSection.style.backgroundColor = "var(--red)";
    return;
  }
}

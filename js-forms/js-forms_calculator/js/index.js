console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  if (event.target.elements.operator.value === "addition") {
    result = add(
      Number(event.target.elements.numberA.value),
      Number(event.target.elements.numberB.value)
    );
  }

  if (event.target.elements.operator.value === "subtraction") {
    result = subtract(
      Number(event.target.elements.numberA.value),
      Number(event.target.elements.numberB.value)
    );
  }

  if (event.target.elements.operator.value === "multiplication") {
    result = multiply(
      Number(event.target.elements.numberA.value),
      Number(event.target.elements.numberB.value)
    );
  }

  if (event.target.elements.operator.value === "division") {
    result = divide(
      Number(event.target.elements.numberA.value),
      Number(event.target.elements.numberB.value)
    );
  }

  resultOutput.textContent = result;
});

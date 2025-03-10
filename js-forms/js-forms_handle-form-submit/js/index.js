console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElement = event.target;

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  const ageBadnessSum =
    Number(formElement.elements.badness.value) +
    Number(formElement.elements.age.value);
  console.log("age-badness-sum: ", ageBadnessSum);

  event.target.reset();
  event.target.elements.firstName.focus();
});

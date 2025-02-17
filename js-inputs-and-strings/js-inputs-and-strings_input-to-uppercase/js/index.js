console.clear();

const buttonElement = document.querySelector("[data-js=button-uppercase]");
const inputElement = document.querySelector("[data-js=first-input]");

buttonElement.addEventListener("click", () => {
  //   const lowerCase = inputElement.value;
  //   inputElement.value = lowerCase.toUpperCase();

  inputElement.value = inputElement.value.toUpperCase();
});

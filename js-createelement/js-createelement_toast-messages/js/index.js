console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const newToast = document.createElement("li");
  newToast.classList.add("toast-container__message");
  if (toastContainer.innerHTML === "") {
    newToast.textContent = "I'm a toast message.";
  } else {
    newToast.textContent = "I'm a toast message too.";
  }

  toastContainer.append(newToast);
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
});

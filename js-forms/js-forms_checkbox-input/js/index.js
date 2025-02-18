console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const formSuccess = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSuccess() {
  formSuccess.setAttribute("hidden", "");
}

function showSuccess() {
  formSuccess.removeAttribute("hidden");
}

hideSuccess();
hideTosError();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (tosCheckbox.checked === false) {
    console.log("failed");
    showTosError();
    return;
  }
  console.log("success");
  showSuccess();
  alert("Form submitted");
});

tosCheckbox.addEventListener("change", (event) => {
  event.preventDefault();

  if (tosCheckbox.checked === false) {
    showTosError();
    hideSuccess();
    return;
  }

  hideTosError();
});

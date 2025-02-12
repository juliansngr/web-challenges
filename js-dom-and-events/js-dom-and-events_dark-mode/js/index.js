console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const switchDarkButton = document.querySelector('[data-js="dark-mode-button"]');
const switchLightButton = document.querySelector(
  '[data-js="light-mode-button"]'
);
const toggleModeButton = document.querySelector('[data-js="toggle-button"]');

switchDarkButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

switchLightButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

toggleModeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});

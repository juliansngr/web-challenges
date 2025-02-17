console.clear();

const colorInput = document.querySelector('[data-js="input-color"]');
const borderInput = document.querySelector('[data-js="input-radius"]');
const rotationInput = document.querySelector('[data-js="input-rotation"]');
const boxElement = document.querySelector('[data-js="box"]');

colorInput.addEventListener("input", () => {
  colorValue = Number(colorInput.value);
  boxElement.style.backgroundColor = `hsl(${colorValue} 100% 50%)`;
});

borderInput.addEventListener("input", () => {
  borderValue = Number(borderInput.value);
  boxElement.style.borderRadius = `${borderValue}%`;
});

rotationInput.addEventListener("input", () => {
  rotationValue = Number(rotationInput.value);
  boxElement.style.transform = `rotate(${rotationValue}deg)`;
});

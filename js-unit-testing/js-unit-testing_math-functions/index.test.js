import { add, subtract, multiply, divide } from ".";

// testing add() Function
test("function add() returns <sum1+2> when called with add(<num1>, <num2>)", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("function add() returns a negative value, when the greater argument is negative)", () => {
  const result = add(2, -3);
  expect(result).toBeLessThan(0);
});

test("function add() returns a value close to 0.3 when the function is called with decimals e.g. add(0.1,0.2))", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

// testing subtract() Function
test("function subtract() returns 10, if called with subtract(15,5)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("function subtract() returns a negative value, if the second argument is greater than the first one", () => {
  const result = subtract(5, 15);
  expect(result).toBeLessThan(0);
});

// testing multiply() Function
test("function multiply() returns 8 if called with multiply(2,4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("function multiply() returns a negative value, if first value is negative", () => {
  const result = multiply(-2, 4);
  expect(result).toBeLessThan(0);
});

test("function multiply() returns a negative value, if second value is negative", () => {
  const result = multiply(2, -4);
  expect(result).toBeLessThan(0);
});

test("function multiply() returns a positive value, if called with two negative arguments", () => {
  const result = multiply(-2, -4);
  expect(result).toBeGreaterThan(0);
});

// testing divide() Function
test("function divide() returns 3, if called with divide(9, 3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("function divide() returns a Error, when called with 0 as second argument", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});

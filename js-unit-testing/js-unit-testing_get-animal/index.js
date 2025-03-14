export function getAnimal(animal) {
  console.log(animal);
  if (animal === "cats") {
    return "I totally love cats!";
  }
  if (animal === undefined) {
    return "I do not like animals at all!";
  }

  return `I like ${animal}!`;
}

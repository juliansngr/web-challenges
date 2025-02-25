/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

export const getNameAndCountry = ({ name, country }) => [name, country];

export const getRelocatedCity = (city1, city2) => {
  if (!city1) {
    city1 = { name: "Barcelona", country: "Spain" };
  }

  if (!city2) {
    city2 = { name: "Berlin", country: "Germany" };
  }

  const country = city2.country;

  return {
    name: city1.name,
    country: country,
  };
};

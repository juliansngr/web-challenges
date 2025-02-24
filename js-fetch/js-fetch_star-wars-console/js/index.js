console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log(data.results[1].name);
  console.log("R2-D2 eye-color:", data.results[5].eye_color);
}

fetchData();

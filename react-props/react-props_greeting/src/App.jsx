export default function App() {
  return <Greeting name="Michael" />;
}

function Greeting({ name }) {
  return <p>Hello {name === "Roland" ? "Coach" : name}</p>;
}

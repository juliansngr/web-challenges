import React from "react";
import "./styles.css";

export default function App() {
  console.log("working");
  return (
    <main>
      <Button>Click me</Button>
      <Button>Same as above but better</Button>
      <Button>Nonononon</Button>
      <Button>Im the best</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}

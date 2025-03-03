import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  function plusCount() {
    setCount(count + 1);
  }

  function minusCount() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={minusCount}>
          -
        </button>
        <button type="button" onClick={plusCount}>
          +
        </button>
      </div>
    </div>
  );
}

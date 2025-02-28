export default function App() {
  return <Button color="#00FFFF" text="Button!" onClick={handleClick} />;
}

function handleClick() {
  console.log("You clicked me!");
}

function Button({ color, text, disabled, onClick }) {
  return (
    <button
      style={{ backgroundColor: color, height: "100px" }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

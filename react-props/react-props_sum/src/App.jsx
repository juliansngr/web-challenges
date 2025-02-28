export default function App() {
  return <Sum valueA="16" valueB="4" />;
}

function Sum({ valueA, valueB }) {
  return (
    <h1>
      {Number(valueA)} + {Number(valueB)} = {Number(valueA) + Number(valueB)}
    </h1>
  );
}

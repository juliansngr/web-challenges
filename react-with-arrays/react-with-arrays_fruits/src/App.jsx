import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1447,
      name: "🍇 Grapes",
      color: "purple",
    },
    {
      id: 1557,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 1667,
      name: "🍋‍🟩 Lime",
      color: "green",
    },
    {
      id: 1777,
      name: "🍎 Apple",
      color: "red",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card name={fruit.name} key={fruit.id} color={fruit.color} />;
      })}
    </div>
    // <div className="app">
    //   <Card name="🍌 banana" />
    // </div>
  );
}

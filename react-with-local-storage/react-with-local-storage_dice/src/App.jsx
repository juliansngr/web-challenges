import { D6Button } from "./components/D6Button";
import { getD6Roll } from "./utils";
import History from "./components/History";
import "./styles.css";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("rolls", {
    defaultValue: [],
  });

  const handleRoll = () => {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  };

  const currentRollValue = rolls.length > 0 ? rolls[0].value : null;

  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={currentRollValue} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}

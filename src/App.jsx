import { useEffect, useState } from "react";
import "./App.css";
import Cosmetics from "./Components/Cosmetics/Cosmetics";

function App() {
  const [Cosme, setCosme] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosme(data));
  }, []);
  return (
    <div className="App">
      {Cosme.map((cos) => (
        <Cosmetics key={cos.id} cos={cos}></Cosmetics>
      ))}
    </div>
  );
}

export default App;

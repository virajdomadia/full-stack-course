import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  return (
    <>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <h1>{input}</h1>
    </>
  );
}

export default App;

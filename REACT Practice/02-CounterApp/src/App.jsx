import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function IncrementBtn() {
    setCount(count + 1);
  }
  function DecrementBtn() {
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={IncrementBtn}>Increment +</button>
      <h1>{count}</h1>
      <button onClick={DecrementBtn}>Decrement -</button>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [isToggle, setIsToggle] = useState(0);

  function handleToggle() {
    setIsToggle(!isToggle);
  }

  return (
    <>
      <input type="checkbox" onChange={handleToggle} />
      <h1>{isToggle ? "on" : "off"}</h1>
    </>
  );
}

export default App;

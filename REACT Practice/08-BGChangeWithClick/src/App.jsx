import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  function handleClick() {
    const newColor = backgroundColor === "white" ? "Green" : "white";
    setBackgroundColor(newColor);
  }
  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor,
        width: "200px",
        height: "200px",
        cursor: "pointer",
      }}
    >
      Click me to change the color
    </div>
  );
}

export default App;

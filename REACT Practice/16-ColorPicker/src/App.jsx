import { useState } from "react";
import "./App.css";

function App() {
  const [selectedColor, setSelectedColor] = useState("#000000");
  const handleChange = (e) => {
    setSelectedColor(e.target.value);
  };
  return (
    <>
      <div>
        <input type="color" onChange={handleChange} />
        <div
          style={{
            width: "1000px",
            height: "1000px",
            backgroundColor: selectedColor,
          }}
        ></div>
      </div>
    </>
  );
}

export default App;

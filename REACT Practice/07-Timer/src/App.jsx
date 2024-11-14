import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  return (
    <>
      <h1>Time Left: {time} sec</h1>
    </>
  );
}

export default App;

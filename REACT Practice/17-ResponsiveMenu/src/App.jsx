import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button className="menu-icon" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contacts</li>
      </ul>
    </>
  );
}

export default App;

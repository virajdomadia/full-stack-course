import { useState } from "react";
import "./App.css";

function App() {
  const quotesArray = [
    "Avoid daydreaming about the years to come.",
    "You are the most important person in your whole life.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Only demonstrate your strength when it’s really required.",
    "Subscribe to Drop X Out",
  ];

  const [quote, setQuote] = useState(quotesArray[0]);

  function handleClick() {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    setQuote(quotesArray[randomIndex]);
  }

  return (
    <>
      <h1>{quote}</h1>
      <button onClick={handleClick}>Random Quote</button>
    </>
  );
}

export default App;

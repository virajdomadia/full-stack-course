import "./App.css";

function App() {
  const items = ["Items1", "Items2", "Items3", "Items4", "Items5"];
  return (
    <>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default App;

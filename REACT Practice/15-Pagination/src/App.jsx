import "./App.css";
import Pagination from "./components/Pagination";

function App() {
  const items = [
    "items1",
    "items2",
    "items3",
    "items4",
    "items5",
    "items6",
    "items7",
    "items8",
  ];
  return (
    <>
      <Pagination items={items} itemsPerPage={2} />
    </>
  );
}

export default App;

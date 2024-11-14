import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/3")
      .then((res) => res.json())
      .then((a) => setData(a));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>Title: {data.title}</h1>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default App;

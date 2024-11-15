import { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);

  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  }
  return (
    <>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {file && <img src={URL.createObjectURL(file)} alt="Uploaded" />}
    </>
  );
}

export default App;

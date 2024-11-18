import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f6c513222266ce22e6d6ae7a6570fbf5`
        )
          .then((res) => res.json())
          .then((data) => setWeather(data));
      });
    }
  }, []);
  return (
    <>
      {weather ? (
        <div>
          <h2>Current Weather</h2>
          <p>Temperature: {weather.main.temp}°F</p>
          <p>Conditions: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;

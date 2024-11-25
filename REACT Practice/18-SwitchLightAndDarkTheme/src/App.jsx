import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemedApp from "./ThemedApp";

const App = () => (
  <ThemeProvider>
    <ThemedApp />
  </ThemeProvider>
);

export default App;

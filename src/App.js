import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Notification from "./components/Notification";
import { GlobalProvider } from "./context/GlobalContext";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Navbar />
        <Content />
        <Notification />
      </div>
    </GlobalProvider>
  );
}

export default App;

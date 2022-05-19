import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Chat from "./components/Chat";
function App() {
  return (
    <div className="App">
      <Chat />
      <Home />
    </div>
  );
}

export default App;

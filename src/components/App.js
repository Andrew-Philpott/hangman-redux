import React from "react";
import "./App.css";
import GameControl from "./Game/GameControl";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Header></Header>
      <GameControl />
    </div>
  );
}

export default App;

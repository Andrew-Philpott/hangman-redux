import React from "react";
import "./App.css";
import GameControl from "./Game/GameControl";
import Header from "./Header";

function App() {
  const bodyStyles = {
    marginTop: 150,
    fontSize: "1em",
  };
  return (
    <div className="App">
      <h1>App</h1>
      <Header></Header>
      <div style={bodyStyles}>
        <GameControl />
      </div>
    </div>
  );
}

export default App;

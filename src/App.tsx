import "./App.scss";

import React from "react";

import { Board } from "./board/Board";

function App() {
  return (
    <div className="app">
      <h1 className="title-1">Magic Match</h1>
      <Board />
    </div>
  );
}

export default App;

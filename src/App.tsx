import "./App.scss";
import 'animate.css';

import React, { useState, useEffect } from "react";

import { Board } from "./board/Board";
import { SplashPage } from "./SplashPage";

function App() {

  const [isSplashPageActive, setIsSplashPageActive] = useState<boolean>(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsSplashPageActive(false)
    }, 3000)
  }, [])

  return (
    <>
      {isSplashPageActive 
        ? <SplashPage />
        : (
          <div className="app animate__animated animate__fadeIn">
            <div className="title-content">
              <img className="img-title" src="/img/mental-health.png" />
              <h1 className="titleH1">Memory game</h1>
            </div>
            <Board />
          </div>
          )
        }
    </>
        
  );
}

export default App;

import React, { useState, useEffect, useRef } from "react";
import Instructions from "./Instructions";
import "./styles.scss";

const App = () => {
  const [height, setHeight] = useState(80);
  const [burnt, setBurnt] = useState(false);
  const intervalId = useRef(0);

  // called once on mount
  useEffect(() => {
    burnCandle("mount");
    // clearInterval function will be called on unmount
    //return () => clearInterval(id);
  }, []);

  // called when height changes
  useEffect(() => {
    if (height <= 20) {
      setBurnt(true);
      clearInterval(intervalId.current);
    }
    console.log(`Hello from height change - ${height}`);
  }, [height]);

  // handler for button click event
  function lightCandle() {
    setHeight(90);
    setBurnt(false);
    burnCandle("lightCandle");
  }

  function burnCandle(name) {
    // set interval timer to decrease height
    const id = setInterval(() => {
      // prev keyword: dynamic handle of previous state
      setHeight((prev) => prev - 1);
    }, 2000);
    console.log(`Hello from ${name} with ID: ${id}`);
    intervalId.current = id;
  }

  return (
    <>
      <div className="block">
        <Instructions />
      </div>

      <div className="block">
        {burnt ? (
          <div>
            <button onClick={(e) => lightCandle()}>Light new candle</button>
          </div>
        ) : (
          <div className="block candleContainer">
            <div className="candle" style={{ height: `${height}%` }}>
              <div className="flame">
                <div className="shadows" />
                <div className="top" />
                <div className="middle" />
                <div className="bottom" />
              </div>
              <div className="wick" />
              <div className="wax" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;

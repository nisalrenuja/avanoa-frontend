import React from "react";
import "./AudioSetting.css";
import { useState } from "react";

const AudioSetting = () => {
  const [time, setTime] = useState(0);
  const reset = () => {
    setTime(0);
  };

  
  return (
    <div>
      <br></br>
      <h1 style={{ color: "white" }}>Audio Settings</h1>
      <h2 style={{ color: "white" }}>Gender Select</h2>
      
      <div style={{ color: "white" }}>
        <input
          type="radio"
          value="Male"
          name="gender"
          style={{ color: "white" }}
          checked="checked"
        />{" "}
        Male<br></br>
        <input
          type="radio"
          value="Female"
          name="gender"
          style={{ color: "white" }}
        />{" "}
        Female<br></br>
      </div>
      <br></br>
      <br></br>
      <h2 style={{ color: "white" }}>Azure Volume</h2>
      <div className="count" style={{ color: "white" }}>
        {time}
      </div>
      <button
        onClick={() => {
          setTime(time + 1);
        }}
      >
        +
      </button>
      Volume
      <button
        onClick={() => {
          setTime(time - 1);
        }}
      >
        -
      </button>
      <br></br>
      <br></br>
      <h2 style={{ color: "white" }}>Reset</h2>
      <div className="buttons">
        <button onClick={reset}>Reset </button>
      </div>
    </div>
  );
};

export default AudioSetting;

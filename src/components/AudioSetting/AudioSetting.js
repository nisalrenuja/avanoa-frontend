import React from "react";
import "./AudioSetting.css";

const AudioSetting = () => {
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
      <input type="range" min="1" max="100" class="slider" id="myRange"></input>
      <br></br>
      <br></br>
      <h2 style={{ color: "white" }}>Reset</h2>
      <input type="range" min="1" max="100" class="slider" id="myRange"></input>
    </div>
  );
};

export default AudioSetting;

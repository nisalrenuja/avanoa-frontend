import React from "react";
import "./AudioSetting.css";

const AudioSetting = () => {
  return (
    <div>
      <br></br>
      <h1 style={{ color: "white" }}>Audio Settings</h1>
      <br></br>
      <br></br>
      <h2 style={{ color: "white" }}>Speaker</h2>
      <input type="range" min="1" max="100" class="slider" id="myRange"></input>
      <br></br>
      <br></br>
      <h2 style={{ color: "white" }}>Microphone</h2>
      <input type="range" min="1" max="100" class="slider" id="myRange"></input>
    </div>
  );
};

export default AudioSetting;

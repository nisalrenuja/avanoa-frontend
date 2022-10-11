import React from "react";
import "./AudioSetting.css";
import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Appbar from "../../components/Appbar/Appbar";

const AudioSetting = () => {
  const [time, setTime] = useState(0);
  const reset = () => {
    setTime(0);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Male") {
      localStorage.setItem("vgender", "Male");
      console.log(localStorage.getItem("vgender"));
    } else if (e.target.value === "Female") {
      localStorage.setItem("gender", "Female");
      console.log(localStorage.getItem("vgender"));
    } else {
      console.log("Not Defined");
      console.log(localStorage.getItem("vgender"));
    }
  };

  return (
    <div classname="profilelayout">
      {/* 
<Appbar/>

        <Sidebar />
         */}

      <br></br>
      <div classname="body">
        <h1 style={{ color: "black" }}>Audio Settings</h1>
        <h2 style={{ color: "black" }}>Gender Select</h2>
        <div style={{ color: "black" }} onChange={handleChange}>
          <input
            type="radio"
            value="Male"
            name="gender"
            style={{ color: "black" }}
            checked="checked"
          />{" "}
          Male<br></br>
          <input
            type="radio"
            value="Female"
            name="gender"
            style={{ color: "black" }}
          />{" "}
          Female<br></br>
        </div>
        <br></br>
        <br></br>
        <h2 style={{ color: "black" }}>Azure Volume</h2>
        <div className="count" style={{ color: "black" }}>
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
        <h2 style={{ color: "black" }}>Reset</h2>
        <div className="buttons">
          <button onClick={reset}>Reset </button>
        </div>
      </div>
    </div>
  );
};

export default AudioSetting;

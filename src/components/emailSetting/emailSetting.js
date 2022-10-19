import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Appbar from "../Appbar/Appbar";
import "./emailSetting.css";

const emailSetting = () => {
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
    <div>
      <div classname="profilelayout">
        <Appbar />

        <Sidebar />
        <h1>Email Settings</h1>
        <h1>Enter User Email</h1>
        <input
          type="text"
          placeholder="Enter Email"
          onChange={handleChange}
        ></input>
        <button onChange={handleChange}>Submit</button>
      </div>
    </div>
  );
};

export default emailSetting;

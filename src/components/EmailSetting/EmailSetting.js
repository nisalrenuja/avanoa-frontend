import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Appbar from "../Appbar/Appbar";
import "./emailSetting.css";
import Input from "../Input/Input";

const EmailSetting = () => {
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
      <Appbar />
      <Sidebar />
      <div className="box2">
        <h1>Email Settings</h1>
        <br></br>
        <h1>Update Email Addresses</h1>
        <br></br>
        
        <form className="profile_input">
          <div className="profile_input-form">
          <p>රැකවරණ භාරකරු</p>
            <Input
              type="text"
              text="Email"
              // defaultValue={user.name}
              name="name"
              handleChange={handleChange}
            />
            <p>භාරකරු</p>
            <Input
              type="text"
              text="Email"
              // defaultValue={user.name}
              name="name"
              handleChange={handleChange}
            />
            <p>ඩොක්ටර්</p>
            <Input
              type="text"
              text="Email"
              // defaultValue={user.name}
              name="name"
              handleChange={handleChange}
            />
          </div>
        </form>
        <div className="login_btn">
          <button type="submit">update</button>
        </div>
      </div>
    </div>
  );
};

export default EmailSetting;

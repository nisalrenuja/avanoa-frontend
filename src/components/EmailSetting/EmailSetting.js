import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Appbar from "../Appbar/Appbar";
import "./emailSetting.css";
import Input from "../Input/Input";
import { useContext, useRef, useState } from "react";
import axios from "../../libs/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/AuthContext";

const initialState = {
  email1: "",
  email2: "",
  email3: "",
};
const EmailSetting = () => {
  const [data, setData] = useState(initialState);
  const { email1, email2, email3 } = data;
  const { user, token, dispatch } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.email]: e.target.value });
  };

  const handleClick = () => {
    setVisible(!visible);
  };

  const updateEmail = async () => {
    try {
      const res = await axios.patch(
        "/email/update/:id",
        {
          email1: email1 ? email1 : user.email1,
          email2: email2 ? email2 : user.email2,
          email3: email3 ? email3 : user.email3,
        },
        {
          headers: { Authorization: token },
        }
      );
      const updatedUser = await axios.get("/emails", {
        headers: { Authorization: token },
      });
      dispatch({ type: "GET_USER", payload: updatedUser.data });
      return toast(res.data.msg, {
        className: "toast-success",
        bodyClassName: "toast-success",
      });
    } catch (err) {
      toast(err.response.data.msg, {
        className: "toast-failed",
        bodyClassName: "toast-failed",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email1 || email2 || email3) {
      updateEmail();
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

        <form className="profile_input" onSubmit={handleSubmit}>
          <div className="profile_input-form">
            <p>රැකවරණ භාරකරු</p>
            <Input
              type="text"
              text="Email"
              defaultValue={user.email1}
              name="email1"
              handleChange={handleChange}
              handleClick={handleClick}
            />
            <p>භාරකරු</p>
            <Input
              type="text"
              text="Email"
              defaultValue={user.email2}
              name="email2"
              handleChange={handleChange}
              handleClick={handleClick}
            />
            <p>ඩොක්ටර්</p>
            <Input
              type="text"
              text="Email"
              defaultValue={user.email3}
              name="email3"
              handleChange={handleChange}
              handleClick={handleClick}
            />
            <div className="login_btn">
              <button type="submit">update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailSetting;

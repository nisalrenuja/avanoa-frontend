import axios from "../../libs/axios";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import { useSelector, useDispatch } from 'react-redux'
import { updateIndex } from "../../reducers/navList/navListSlice";
import { setCount } from "../../reducers/counter/counterSlice";

import "./appbar.css";

const Appbar = () => {

  
  const counter = useSelector((state) => state.counter.value)
  const index = useSelector((state) => state.navList.index)

  let navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

   const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/api/auth/signout");
      localStorage.removeItem("_appSignging");
      dispatch({ type: "SIGNOUT" });
    } catch (err) {
      console.log(err);
    }
  };

  const playAudio = () => {
    new Audio("https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3").play();
  }
  const pauseWebgazer = () =>{
    const webgazer = window.webgazer;
    webgazer.pause();
  }
  const resumeWebgazer= ()=> {
    const webgazer = window.webgazer;
    webgazer.resume();
  }

  
  let selS = ''
  let sec1 = 'def'
  let sec2 = 'def'
  let sec3 = 'def'
  let sec4 = 'def'
  let sec5 = 'def'
  
  if(index == 0 && counter == 1){
    //setSel("selectionBoarder");
    selS = "selectionBoarder";
  }
  else{
    //setSel('');
    selS = "";
  }

  if(index == 2){
    if(counter == 0){
      //setSec1("choosing")
      sec1 = "choosing"
    }
    if(counter == 1){
      // setSec2("choosing")
      // setSec1("def")
      sec2 = "choosing"
      sec1 = "def"
    }
    if(counter == 2){
      // setSec3("choosing")
      // setSec2("def")
      sec3 = "choosing"
      sec2 = "def"
    }
    if(counter == 3){
      // setSec4("choosing")
      // setSec3("def")
      sec4 = "choosing"
      sec3 = "def"
    }
    if(counter == 4){
      // setSec4("choosing")
      // setSec3("def")
      sec5 = "choosing"
      sec4 = "def"
    }
  }

  
  useEffect(()=>{
    if(index == 11){
      sec4 = "selectd"
      navigate("/profile");
    }
    if(index == 10){
      sec3 = "selectd"
      playAudio()
      //updateIndex(2)
      //setCount(2)
    }
  });

return (
      <div className="appbar">
        <div className = {`appbar_wrapper ${selS}`}>
          {/* logo */}
          <div className="appbar_logo">
             <img src="./assets/img/logo.png" alt="logo" /> 
          </div>

          <button className=  {sec1} id= 'turnoffbtn' onClick={pauseWebgazer}>Turn Off</button>
          <button className= {sec2} id= 'turnonbtn' onClick={resumeWebgazer}>Turn On</button>
          <div className="siren">
            {/* <button className={this.state.select1}>Siren</button> */}
            <button className={sec3} id= 'sirenbtn' onClick={playAudio}>Siren</button>
          </div>
          {/* avatar */}
          <div className="appbar_avatar">
          <Link to="/profile">
            <Avatar />
              <p className={sec4} >profile</p>
            </Link>
            
          
            {/* <BiMenuAltLeft onClick={handleSidebar} /> */}
          </div>
          <button className=  {sec5}  id= 'logoutbtn' onClick={handleClick}>Logout</button> 
        </div>
      
      </div>
    );
};

export default Appbar;

import { Component } from "react";
import Avatar from "../Avatar/Avatar";

import "./appbar.css";

class Appbar extends Component {
  constructor(props) {
    super(props);
  }

  playAudio = () => {
    new Audio("https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3").play();
  }
  
render() {
return (
      <div className="appbar">
        <div className="appbar_wrapper">
          {/* logo */}
          <div className="appbar_logo">
            {/* <img src="./assets/img/logo.png" alt="logo" /> */}
            <p>Avanoa Hellow</p>
          </div>
          <div className="siren">
            {/* <button className={this.state.select1}>Siren</button> */}
            <button onClick={this.playAudio}>Siren</button>
          </div>
          {/* avatar */}
          <div className="appbar_avatar">
            <Avatar />
            {/* <BiMenuAltLeft onClick={handleSidebar} /> */}
          </div>
        </div>
      </div>
    );
};
};

export default Appbar;

import Profile from "../../components/Profile/Profile";
import Sidebar from "../../components/Sidebar/Sidebar";
import Appbar from "../../components/Appbar/Appbar";
import { Link } from "react-router-dom";
import AudioSetting from "../../components/AudioSetting/AudioSetting";
import "./settingslayout.css";

import { useState } from "react";
// import Speech from "../../components/Speech/Speech";
import { useSelector, useDispatch } from "react-redux";

const ProfileLayout = () => {
  const [sidebar, setSidebar] = useState(false);

  const counter = useSelector((state) => state.counter.value);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="profilelayout">
      {/* <Speech /> */}
      {/* appbar */}
      <Appbar handleSidebar={handleSidebar} />
      {/* sidebar */}
      <div
        className={
          sidebar ? "profilelayout_sidebar open" : "profilelayout_sidebar"
        }
      >
        <Sidebar />
      </div>
      
      {/* content */}
      <div class id="profilelayout_content">
        {/* profile */}
        <div className="profilelayout_content-profile">
        <center>
        <button class id="settingsbtn"><Link to="/profile" > My Personal Profile Settings</Link></button>
          <br></br>
          <button class id="settingsbtn"><Link to="/AudioSetting" > Audio</Link></button>
          <br></br>
          <button class id="settingsbtn"><Link to="/profile" > Sensitivity</Link></button>
          <br></br>
          <button class id="settingsbtn"> <Link to="/profile" > Keyboard</Link> </button>
          <br></br>
          </center>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;

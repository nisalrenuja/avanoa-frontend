import Profile from "../../components/Profile/Profile";
import Sidebar from "../../components/Sidebar/Sidebar";
import Appbar from "../../components/Appbar/Appbar";
import { Link } from "react-router-dom";
import AudioSetting from "../../components/AudioSetting/AudioSetting";

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
      <div className="profilelayout_content">
        {/* profile */}
        <div className="profilelayout_content-profile">
          <Link to="/profile"> My Personal Profile Settings</Link>
          <br></br>
          <Link to="/AudioSetting"> Audio</Link>
          <br></br>
          <Link to="/SensitivitySetting"> Sensitivity</Link>
          <br></br>
          <Link to="/profile"> Keyboard</Link>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;

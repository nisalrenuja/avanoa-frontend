import Profile from "../../components/Profile/Profile";
import Sidebar from "../../components/Sidebar/Sidebar";
import Appbar from "../../components/Appbar/Appbar";
import "./profilelayout.css";
import { useState } from "react";
import Speech from "../../components/Speech/Speech";

const ProfileLayout = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="profilelayout">
      <Speech />
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
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;

import Profile from "../../components/Profile/Profile";
import Feed from "../../components/Feed/Feed";
import Sidebar from "../../components/Sidebar/Sidebar";
import Appbar from "../../components/Appbar/Appbar";
import PhraseBubble from "../../components/PhraseBubble/PhraseBubble";
import { useState } from "react";

const HomeLayout = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  const webgazer=window.webgazer;
  webgazer.setRegression("ridge");
  window.saveDataAcrossSessions = true;
  webgazer.setGazeListener((data, timestamp) => {
    console.log(data, timestamp);
  })
  .begin()

  return (
    <div className="profilelayout">
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
        {/* feed */}
        <div className="profilelayout_content-feed">
          <PhraseBubble />
          
        </div>
        {/* profile */}
     
      </div>
    </div>
  );
};

export default HomeLayout;

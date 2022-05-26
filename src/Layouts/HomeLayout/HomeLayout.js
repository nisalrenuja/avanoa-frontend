import Sidebar from "../../components/Sidebar/Sidebar";
import Appbar from "../../components/Appbar/Appbar";
import PhraseBubble from "../../components/PhraseBubble/PhraseBubble";
import { useState } from "react";
const HomeLayout = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  
  return (
    <div className="profilelayout">
      {/* appbar */}
      {/* <Appbar handleSidebar={handleSidebar} /> */}
      <Appbar/>
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
        {/* <Speech /> */}
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

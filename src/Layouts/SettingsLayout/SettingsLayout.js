import Profile from "../../components/Profile/Profile";
import Sidebar from "../../components/Sidebar/Sidebar";
import Appbar from "../../components/Appbar/Appbar";

import { useState } from "react";
// import Speech from "../../components/Speech/Speech";
import WebGazer from "../../components/WebGazer/WebGazer";
import { useSelector, useDispatch } from "react-redux";

const ProfileLayout = () => {
    const [sidebar, setSidebar] = useState(false);

    const counter = useSelector((state) => state.counter.value);

    const handleSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
        <div className="profilelayout">
            <WebGazer />
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
                    <Profile />
                    {counter}
                </div>
            </div>
        </div>
    );
}

export default ProfileLayout;
import { BiBookContent } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import axios from "../../libs/axios";
import "./sidebar.css";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
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

  return (
    <div className="sidebar">
      <div className="sidebar_menu">
        <ul>
          <li>
            <BiBookContent />
            <Link to="/">
              <p>feed</p>
            </Link>
          </li>
          <li>
            <BiUserCircle />
            <Link to="/profile">
              <p>profile</p>
            </Link>
          </li>
          <li onClick={handleClick}>
            <BiLogOut />
            <p>logout</p>
          </li>
          <li>
            <FiPhoneCall />
            <Link to="/">
              <p>Emergency Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

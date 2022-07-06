import { BiBookContent } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import axios from "../../libs/axios";
import "./sidebar.css";
import { AuthContext } from "../../context/AuthContext";
import { useState, useContext } from "react";
import { Link,useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);

  const counter = useSelector((state) => state.counter.value)
  const index = useSelector((state) => state.navList.index)

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

  const history = useHistory()
  // const [selStyle, setSel] = useState('')

  // const [sec1, setSec1] = useState('')
  // const [sec2, setSec2] = useState('')
  // const [sec3, setSec3] = useState('')
  // const [sec4, setSec4] = useState('')

  let selS = ''
  let sec1 = 'def'
  let sec2 = 'def'
  let sec3 = 'def'
  let sec4 = 'def'
 
  if(index == 0 && counter == 0){
    //setSel("selectionBoarder");
    selS = "selectionBoarder";
  }
  else{
    //setSel('');
    selS = "";
  }
  if(index == 1){
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
  }
  if(index == 3){
    //green selection
    //setSec1("selectd");
    sec1 = "selectd"
  }
  if(index == 4){
    //setSec2("selectd");
    sec2 = "selectd"
    //history.push("/profile");
  }
  if(index == 5){
    //setSec3("selectd");
    sec3 = "selectd"
  }
  if(index == 6){
    //setSec4("selectd");
    sec4 = "selectd"
  }

  return (
    <div className = {`sidebar ${selS}`}>
      <div className="sidebar_menu">
        <ul>
          <li>
            <BiBookContent />
            <Link to="/">
              <p className={sec1}>feed</p>
            </Link>
          </li>
          <li>
            <BiUserCircle />
            <Link to="/profile">
              <p className={sec2}>profile</p>
            </Link>
          </li>
          <li onClick={handleClick}>
            <BiLogOut />
            <p className= {sec3} >logout</p>
          </li>
          <li>
            <FiPhoneCall />
            <Link to="/emergency">
              <p className={sec4}>Emergency Contact</p>
            </Link>
          </li>
          <li>
            <FiPhoneCall />
            <Link to="/Keyboard">
              <p>Keyboard</p>
            </Link>
          </li>
          c: {counter} i: {index}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

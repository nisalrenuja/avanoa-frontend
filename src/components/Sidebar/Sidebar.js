import { BiBookContent } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { BiMessageAltCheck } from "react-icons/bi";
import axios from "../../libs/axios";
import "./sidebar.css";
import { AuthContext } from "../../context/AuthContext";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Sidebar = () => {
	const { dispatch } = useContext(AuthContext);

	const counter = useSelector((state) => state.counter.value);
	const index = useSelector((state) => state.navList.index);

	// const [selStyle, setSel] = useState('')

	// const [sec1, setSec1] = useState('')
	// const [sec2, setSec2] = useState('')
	// const [sec3, setSec3] = useState('')
	// const [sec4, setSec4] = useState('')

	let selS = "";
	let sec1 = "def";
	let sec2 = "def";
	let sec3 = "def";
	let sec4 = "def";
	let sec5 = "def";

	const [cn, setCn] = useState(0);
	const [count, setCount] = useState(0);

	//let cn = 0;
	//let count = 0;

	let navigate = useNavigate();

	if (index == 0 && counter == 0) {
		//setSel("selectionBoarder");
		selS = "selectionBoarder";
	} else {
		//setSel('');
		selS = "";
	}
	if (index == 1) {
		if (counter == 0) {
			//setSec1("choosing")
			sec1 = "choosing";
		}
		if (counter == 1) {
			// setSec2("choosing")
			// setSec1("def")
			sec2 = "choosing";
			sec1 = "def";
		}
		if (counter == 2) {
			// setSec3("choosing")
			// setSec2("def")
			sec3 = "choosing";
			sec2 = "def";
		}
		if (counter == 3) {
			// setSec4("choosing")
			// setSec3("def")
			sec4 = "choosing";
			sec3 = "def";
		}
		if (counter == 4) {
			// setSec4("choosing")
			// setSec3("def")
			sec5 = "choosing";
			sec4 = "def";
		}
	}

	useEffect(() => {
		if (index == 3 && cn == 0) {
			sec1 = "selectd";
			navigate("/");
			setCn(1);
		}
		if (index == 4 && cn == 0) {
			sec2 = "selectd";
			navigate("/Keyboard");
			setCn(1);
		}
		if (index == 5 && cn == 0) {
			sec3 = "selectd";
			navigate("/emergency");
			setCn(1);
		}
		if (index == 6 && cn == 0) {
			sec4 = "selectd";
			navigate("/reminder");
			setCn(1);
		}
		if (index == 7 && cn == 0) {
			sec5 = "selectd";
			navigate("/settings");
			setCn(1);
		}
	});

	return (
		<div className={`sidebar ${selS}`}>
			<div className="sidebar_menu">
				<ul>
					<li> <button class = 'sidebarbtn'>
						<BiBookContent />
						<Link to="/">
							<p className={sec1}>Phrase Bubbles</p>
						</Link>
						</button>
					</li>
					<li>
					<button class = 'sidebarbtn'>
						<FiPhoneCall />
						<Link to="/Keyboard">
							<p className={sec2}>Keyboard</p>
						</Link>
						</button>
					</li>
					<li>
					<button class = 'sidebarbtn1'>
						<BiUserCircle />
						<Link to="/emergency">
							<p className={sec3}>Emergency Contacts</p>
						</Link>
						</button>
					</li>
					<li>
					<button class = 'sidebarbtn'>
						<BiMessageAltCheck />
						<Link to="/reminder">
							<p className={sec4}>Reminder</p>
						</Link>
						</button>
					</li>
					<li>
					<button class = 'sidebarbtn'>
						<FiSettings />
						<Link to="/settings">
							<p className={sec5}>Settings</p>
						</Link>
						</button>
					</li>
					(c: {counter} i: {index}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;

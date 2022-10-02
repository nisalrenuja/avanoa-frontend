import React, { useState, useEffect, useContext } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink, useNavigate } from 'react-router-dom';
import { adddata, deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider';
import { onDelete, setReminders } from '../../reducers/reminders/reminderSlice';
import { mapTimeStr2Num } from './utils';
import "./Edit.css";
import Appbar from '../Appbar/Appbar';
import Sidebar from '../Sidebar/Sidebar';
import axios from "../../libs/axios";
import { Link } from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { useSelector, useDispatch } from 'react-redux'
import { updateReminders } from '../../reducers/navList/navListSlice';

function Home() {
	let navigate = useNavigate();

	const dispatch = useDispatch();
	const [__reminders, _setReminders] = useState([]);
	
	const counter = useSelector((state) => state.counter.value);
  	const index = useSelector((state) => state.navList.index);
	const [cn, setCn] = useState(0);

	let select1 = "notSelected";

	useEffect(() => {
		retrieveReminders();
		setInterval(() => {
			retrieveReminders();
		}, 5000);

		
	}, []);

	const retrieveReminders = () => {
		axios.get("/reminders").then(res => {
			console.log("Hello1");
			if (res.data.success) {
				_setReminders(res.data.existingReminders);
				dispatch(updateReminders(res.data.existingReminders.length + 1));
			}
		})
		console.log("Hello");
	}

	const _onDelete = (id) => {
		axios.delete(`/reminder/delete/${id}`).then((res) => {
			alert("Delete Successfull");
			dispatch(onDelete(id));
		});
		retrieveReminders();
	}

	if (index == 6) {
		if (counter == 0) {
		  //setSec1("choosing")
		  select1 = "selected";
		}
	}
	
	if (index == 500 && cn == 0) {
		select1 = "selection";
		navigate("/Reminder/register");
		//setCount(2)
		setCn(1);
	}

	return (

		

		<div>
			<Appbar />
			<Sidebar />

			<div className="bodybackgrnd">
				<div className="all-hero">
					<div class="bg_image bgimage"></div>
					<div className="content">
						Reminder
					</div>
				</div>
				<div className="the_content">
					<br />

					<h1 >Reminder List</h1>

					<br />
					<button className={`btn-btn-success`}><Link to="/Reminder/register" className={`${select1}`} style={{ textDecoration: "none" }}>Create</Link></button>
					<br />
					<br />
					<br />

					{__reminders.map((_reminders, index) => (
						<li className="mem-gridder-list circles">

							<div className="section">
								<div >
									{/* <img className = "image_area circlesType lazyloaded"  alt ="Adoption" src = 'https://s28164.pcdn.co/files/Asian-Small-clawed-Otter-0072-2545-300x300.jpg'></img> */}
									<h5 className="mem-adpt-contentarea ">{_reminders.Title}</h5><br />


									&nbsp;

									{_reminders.Description}

									{_reminders.Time}

									<br />
									<a className="btn" href="#" onClick={() => _onDelete(_reminders._id)}>
										<i className=""></i>&nbsp;Delete
									</a>

								</div>
								<div >

								</div>
							</div>

						</li>
					))}



					<div className="bottomspace"></div>
				</div>
			</div>
		</div>



	);
}

export default Home;
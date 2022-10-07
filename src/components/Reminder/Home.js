import React, { useState, useEffect, useContext } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink, useNavigate } from 'react-router-dom';
import { adddata, deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider';
import { onDelete, setReminders } from '../../reducers/reminders/reminderSlice';
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
import { updateReminders, updateIndex } from '../../reducers/navList/navListSlice';

function Home() {
	let navigate = useNavigate();

	const dispatch = useDispatch();
	const [__reminders, _setReminders] = useState([]);
	
	const counter = useSelector((state) => state.counter.value);
  	const index = useSelector((state) => state.navList.index);
	const [cn, setCn] = useState(0);

	let select1 = "notSelected";
	let select2 = "notSelected";
	let select3 = "notSelected";
	let select4 = "notSelected";
	let select5 = "notSelected";
	let select6 = "notSelected";
	let select7 = "notSelected";
	let select8 = "notSelected";
	let select9 = "notSelected";
	let select10 = "notSelected";
	let subSelect1,subSelect2, subSelect3, subSelect4, subSelect5, subSelect6, subSelect7, subSelect8, subSelect9 = "notSelected";

	let id1, id2, id3, id4, id5, id6, id7, id8, id9, id10 = 0;
	useEffect(() => {
		retrieveReminders();
		setInterval(() => {
			retrieveReminders();
		}, 5000);
		
	}, []);

	__reminders.map((item, index) => {
		eval("id" + (index + 1) + " = item._id");
	});

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
		  	select1 = "selected";
			select2 = "notSelected";
		}
		if (counter == 1) {
			select1 = "notSelected";
			select2 = "selected";
			select3 = "notSelected";
		}
		if (counter == 2) {
			select2 = "notSelected";
			select3 = "selected";
			select4 = "notSelected";
		}
		if (counter == 3) {
			select3 = "notSelected";
			select4 = "selected";
			select5 = "notSelected";
		}
		if (counter == 4) {
			select4 = "notSelected";
			select5 = "selected";
			select6 = "notSelected";
		}
		if (counter == 5) {
			select5 = "notSelected";
			select6 = "selected";
			select7 = "notSelected";
		}
		if (counter == 6) {
			select6 = "notSelected";
			select7 = "selected";
			select8 = "notSelected";
		}
		if (counter == 7) {
			select7 = "notSelected";
			select8 = "selected";
			select9 = "notSelected";
		}
		if (counter == 8) {
			select8 = "notSelected";
			select9 = "selected";
			select10 = "notSelected";
		}
		if (counter == 9) {
			select9 = "notSelected";
			select10 = "selected";
		}
		
	}
	
	if (index == 500 && cn == 0) {
		select1 = "selection";
		navigate("/Reminder/register");
		//setCount(2)
		setCn(1);
	}
	if (index == 501) {
		select2 = "selection";
		subSelect1 = "selected";
	}
	
	if (index == 502) {
		select3 = "selection";
		subSelect2 = "selected";
	}
	if(index == 503) {
		select4 = "selection";
		subSelect3 = "selected";
	}
	if(index == 504) {
		select5 = "selection";
		subSelect4 = "selected";
	}
	if(index == 505) {
		select6 = "selection";
		subSelect5 = "selected";
	}
	if(index == 506) {
		select7 = "selection";
		subSelect6 = "selected";
	}
	if(index == 507) {
		select8 = "selection";
		subSelect7 = "selected";
	}
	if(index == 508) {
		select9 = "selection";
		subSelect8 = "selected";
	}
	if(index == 509) {
		select10 = "selection";
		subSelect9 = "selected";
	}

	if(index == 585){
		select2 = "selection";
		subSelect1 = "selection";
		//delete1
		_onDelete(id1)
		dispatch(updateIndex(6));
		console.log("inside 585" +id2);
	}
	if(index == 587){
		select3 = "selection";
		subSelect2 = "selection";
		//delete2
		_onDelete(id2)
		dispatch(updateIndex(6));
	}
	if(index == 589){
		select4 = "selection";
		subSelect3 = "selection";
		//delete3
		_onDelete(id3)
		dispatch(updateIndex(6));
	}
	if(index == 591){
		select5 = "selection";
		subSelect4 = "selection";
		//delete4
		_onDelete(id4)
		dispatch(updateIndex(6));
	}
	if(index == 593){
		select6 = "selection";
		subSelect5 = "selection";
		//delete5
		_onDelete(id5)
		dispatch(updateIndex(6));
	}
	if(index == 595){
		select7 = "selection";
		subSelect6 = "selection";
		//delete6
		_onDelete(id6)
		dispatch(updateIndex(6));
	}
	if(index == 597){
		select8 = "selection";
		subSelect7 = "selection";
		//delete7
		_onDelete(id7)
		dispatch(updateIndex(6));
	}
	if(index == 599){
		select9 = "selection";
		subSelect8 = "selection";
		//delete8
		_onDelete(id8)
		dispatch(updateIndex(6));
	}
	if(index == 601){
		select3 = "selection";
		subSelect2 = "selection";
		//delete9
		_onDelete(id9)
		dispatch(updateIndex(6));
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
									<h5 className={`mem-adpt-contentarea ${eval("select"+(index+2))}`}>{_reminders.Title}</h5><br />

									&nbsp;

									{_reminders.Description}

									{_reminders.Time}

									<br />
									<a className={`btn ${eval("subSelect"+(index+1))}`} href="#" onClick={() => _onDelete(_reminders._id)}>
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
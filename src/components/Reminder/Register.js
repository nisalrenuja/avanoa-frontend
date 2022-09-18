import React from "react";
import emailjs from '@emailjs/browser';
import "./EmergencyLayout.css";

import { connect } from "react-redux";
import { updateIndex } from "../../reducers/navList/navListSlice";
import { setCount } from "../../reducers/counter/counterSlice";

import { Title } from "@material-ui/icons";


class Register extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			Title: "Title",
			Time: "Time",
			Description: "Description",
			BTitle: false,
			BTime: false,
			BDescription: false,
			page: 1,
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleBack = this.handleBack.bind(this);
		this.handleBack = this.handleBack.bind(this);
	
	}

	componentDidUpdate(){
		const index = this.props.navList.index;
		// start form index 5 to count 3
		// 1 - 150 ---> chooosing 150 ---> have 4 options (i-150 and 4counts) ---> 1 - 153 2- 154 3-155 4-156 ---> starts from 170 2 options (2counts) 
		//2 - 151
		//3 - 152

		if (index == 150) {
			//150 - first receipient
			//this.handleClick(name, value);
			
		}

	}

	handleBack(event) {
		event.preventDefault();
		if (event.target.name == "messageBack") {
			this.setState({ page: 1 });
		}
		if (event.target.name == "finalMessageBack") {
			this.setState({ page: 2 });
		}
	}

	handleClick(event) {
		event.preventDefault();

		this.setState({ [event.target.name]: event.target.value });

		if (event.target.name == "Title") {
			this.setState({ BTitle: true });

			if (event.target.value == "Meals") {
				this.setState({ email: "nipunchamodya@gmail.com" });
			} else if (event.target.value == "Medicattion") {
				this.setState({ email: "pokirisa@gmail.com" });
			} else if (event.target.value == "Washroom") {
				this.setState({ email: "pokirisa@gmail.com" });
			}

			this.setState({ page: 2 });
		}

		if (event.target.name == "Description") {
			this.setState({ Bmessage: true });
			this.setState({ page: 3 });
			this.setState({ subject: event.target.value });
		}

		if (event.target.name == "Time") {
			this.setState({ BTime: true });
			this.setState({ page: 4 });
			this.setState({ subject: event.target.value });
		}
	}

	sendEmail = (e) => {
	e.preventDefault();

	emailjs
		.send(
	 			"service_s63wkq9",
	 			"template_t7hy137",
	 			this.state,
	 			"zXAlVVivBD7BlgIVm"
	 		)
	 		.then(
	 			(result) => {
	 				console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	render() {

		const index = this.props.navList.index;
		const counter = this.props.counter.value;

		let select1 = "";
		let select2 = "";
		let select3 = "";
		let select4 = "";
		let select5 = "";


		if(index == 5){
			if(counter == 0){
				select1 = "selected"
			}
			if(counter == 1){
				select2 = "selected"
			}
			if(counter == 2){
				select3 = "selected"
			}
		}

		if(index == 150){
			if(counter == 0){
				select1 = "selected"
			}
			if(counter == 1){
				select2 = "selected"
			}
			if(counter == 2){
				select3 = "selected"
			}
			if(counter == 3){
				select4 = "selected"
			}
		}
		if( index == 151 || index == 152){
			if(counter == 0){
				select1 = "selected"
			}
			if(counter == 1){
				select2 = "selected"
			}
			if(counter == 2){
				select4 = "selected"
			}
		}
		
		if( index == 153 || index == 154 || index == 155 || index == 156 || index == 157){
			if(counter == 0){
				select4 = "selected"
			}
			if(counter == 1){
				select5 = "selected"
			}
		
		}

		if(index == 162){
			//send 1111
			this.props.updateIndex(5);
		}

		let comp;

		if (this.state.page === 1) {
			comp = <Title handleClick={this.handleClick} />;
		}
		if (this.state.page === 2) {
			comp = (
				<Description
					Title={this.state.Title}
					handleClick={this.handleClick}
					handleBack={this.handleBack}
				/>
			);
		}
		if (this.state.page === 3) {
			comp = (
				<Time
					Title={this.state.Title}
					handleClick={this.handleClick}
					handleBack={this.handleBack}
				/>
			);
		}
		if (this.state.page === 4) {
			comp = (
				<FinalMessage
					Title={this.state.Title}
					Time={this.state.Time}
					Description={this.state.Description}
					handleBack={this.handleBack}
					
				/>
			);
		}

		function Title(props) {
			return (
				<div>
					
					<div className="app">
					<div className="box">
					<h1>පනිවිදකරු තෝරන්න</h1>

					<button
						className= {`emergencybuttons ${select1}`} onClick={props.handleClick} name="Title" value="Meals">
						Meals
					</button>
					<button className= {`emergencybuttons ${select2}`} onClick={props.handleClick} name="Title" value="Medication">
					Medication
					</button>
					<button className= {`emergencybuttons ${select3}`} onClick={props.handleClick} name="Title" value="washroom">
					Washroom
					</button>
					</div>
					</div>
				</div>
			);
		}

		

		

	
		return (
		<div>
			
			{comp}
		</div>);
	}
}

const mapStateToProps = (state) => ({
	counter: state.counter,
	navList: state.navList,
});

const mapDispatchToProps = () => ({
	setCount,
	updateIndex,
});

export default connect(mapStateToProps, mapDispatchToProps())(Register);

import React from "react";
import emailjs from '@emailjs/browser';
import "./EmergencyLayout.css";
import Sidebar from "../../components/Sidebar/Sidebar";

class EmergencyLayout extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			recepient: "Recepient",
			email: "test@gmail.com",
			subject: "Subject",
			message: "Message",
			Brecepient: false,
			Bmessage: false,
			BFinalMessage: false,
			page: 1,
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleBack = this.handleBack.bind(this);
		this.sendEmail = this.sendEmail.bind(this);
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

		if (event.target.name == "recepient") {
			this.setState({ Brecepient: true });

			if (event.target.value == "Care Taker") {
				this.setState({ email: "nipunchamodya@gmail.com" });
			} else if (event.target.value == "Gurdian") {
				this.setState({ email: "pokirisa@gmail.com" });
			} else if (event.target.value == "Doctor") {
				this.setState({ email: "pokirisa@gmail.com" });
			}

			this.setState({ page: 2 });
		}

		if (event.target.name == "message") {
			this.setState({ Bmessage: true });
			this.setState({ page: 3 });
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
		let comp;

		if (this.state.page === 1) {
			comp = <Recepient handleClick={this.handleClick} />;
		}
		if (this.state.page === 2) {
			comp = (
				<Message
					recepient={this.state.recepient}
					handleClick={this.handleClick}
					handleBack={this.handleBack}
				/>
			);
		}
		if (this.state.page === 3) {
			comp = (
				<FinalMessage
					recepient={this.state.recepient}
					email={this.state.email}
					subject={this.state.subject}
					message={this.state.message}
					handleBack={this.handleBack}
					sendEmail={this.sendEmail}
				/>
			);
		}

		function Recepient(props) {
			return (
				<div>
					<Sidebar />
					<div className="app">
					<div className="box">
					<h1>Select Recepient</h1>

					<button
						class = 'emergencybuttons'
						onClick={props.handleClick}
						name="recepient"
						value="Care Taker"
					>
						Care Taker
					</button>
					<button class = 'emergencybuttons' onClick={props.handleClick} name="recepient" value="Gurdian">
						Gurdian
					</button>
					<button class = 'emergencybuttons'onClick={props.handleClick} name="recepient" value="Doctor">
						Doctor
					</button>
					</div>
					</div>
				</div>
			);
		}

		function Message(props) {
			console.log("Message");
			if (props.recepient == "Care Taker") {
				return (
					<div>
						<h1>Select Message</h1>

						<button
							class = 'emergencybuttons'
							onClick={props.handleClick}
							name="message"
							value="I need Medicine"
						>
							I need Medicine
						</button>
						<button
							class = 'emergencybuttons'
							onClick={props.handleClick}
							name="message"
							value="I need to Eat"
						>
							I need to Eat
						</button>
						<button
							class = 'emergencybuttons'
							onClick={props.handleClick}
							name="message"
							value="I am Thirsty"
						>
							I am Thirsty
						</button>

						<button onClick={props.handleBack} name="messageBack">
							Back
						</button>
					</div>
				);
			} else if (props.recepient == "Gurdian") {
				return (
					<div>
						<h1>Select Message</h1>

						<button
							class = 'emergencybuttons'
							onClick={props.handleClick}
							name="message"
							value="I need to See you"
						>
							I need to See you
						</button>
						<button
							class = 'emergencybuttons'
							onClick={props.handleClick}
							name="message"
							value="The Care Taker is not here"
						>
							The Care Taker is not here
						</button>

						<button class = 'emergencybuttons' onClick={props.handleBack} name="messageBack">
							Back
						</button>
					</div>
				);
			} else if (props.recepient == "Doctor") {
				return (
					<div>
						<h1>Select Message</h1>

						<button
							class = 'emergencybuttons'
							onClick={props.handleClick}
							name="message"
							value="I am not feeling well"
						>
							I am not feeling well
						</button>
						<button
						class = 'emergencybuttons'
							onClick={props.handleClick}
							name="message"
							value="My appointment is coming up"
						>
							My appointment is coming up
						</button>

						<button class = 'emergencybuttons' onClick={props.handleBack} name="messageBack">
							Back
						</button>
					</div>
				);
			}
		}

		function FinalMessage(props) {
			return (
				<div>
					<h1>Final Message</h1>

					<p>Recepient - {props.recepient}</p>
					<p>Email - {props.email}</p>
					<p>Subject - {props.subject}</p>
					<p>Message - {props.message}</p>

					<button class = 'emergencybuttons' onClick={props.handleBack} name="finalMessageBack">
						Back
					</button>
					<button class = 'emergencybuttons' name="finalMessageSend" onClick={props.sendEmail}>
						Send
					</button>
				</div>
			);
		}

		return <div>{comp}</div>;
	}
}

export default EmergencyLayout;

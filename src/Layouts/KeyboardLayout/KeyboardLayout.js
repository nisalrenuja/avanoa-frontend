import {Component} from "react";
import "./KeyboardLayout.css";
import { Row, Col, Form, Input, Button, Space, notification } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Appbar from "../../components/Appbar/Appbar";
import { connect } from "react-redux";
import { updateIndex } from "../../reducers/navList/navListSlice";
import { setCount } from "../../reducers/counter/counterSlice";


class KeyboardLayout extends Component {
	constructor(props){
		super(props);

		this.state = {
			name: [],
			// texty: "පෙළ සිට කථනය භාවිතා කිරීමෙන් සතුටක් ලබන්න",
			input : "",
			text : "",
			texty : "helloS",
			count : 0,
			count2 : 0,
			count3 : 1,
			drpNum : 0,
			drpdownNum: 0,
			drpdown1 : "",
			drpdown2 : "",
		}

		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleKbutton = this.handleKbutton.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleSpace = this.handleSpace.bind(this);
		this.handleDropdownClick = this.handleDropdownClick.bind(this);

	}

	//const [input, SetInput] = React.useState(initialState);

	// const [text, setText] = useState("");
	// const [texty, setTexty] = useState("helloS");

	handleClick(e) {
		console.log(e.target.value);
		e.preventDefault();
		const { value, name } = e.target;
		//this.setState({inpunt : ((values) => ({ ...values, [name]: value })});
	};

	handleSubmit(){
		// console.log(input.texty);
		console.log(this.state.texty);
		console.log("Button clicked");

		// let sdk = require("microsoft-cognitiveservices-speech-sdk");

		// let textyy = input.texty;
		// let textyy = this.state.texty;

		// console.log(textyy);

		// let key = "";
		// let region = "eastus";

		// // The Audio file name
		// let audioFile = "AvanoaVKTTS.wav";

		// const speechConfig = sdk.SpeechConfig.fromSubscription(key, region);

		// const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();

		// // The language of the voice that speaks.
		// speechConfig.speechSynthesisVoiceName = "si-LK-ThiliniNeural";

		// // Create the speech synthesizer.
		// let synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

		// if (textyy != null) {

		// // Start the synthesizer and wait for a result.
		// synthesizer.speakTextAsync(textyy,
		//  function (result) {
		//  if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
		//  console.log("synthesis finished.");
		//  } else {
		//  console.error("Speech synthesis canceled, " + result.errorDetails +
		//      "\nDid you set the speech resource key and region values?");
		//  }
		//  synthesizer.close();
		//  synthesizer = null;
		// },
		//  function (err) {
		//  console.trace("err - " + err);
		//  synthesizer.close();
		//  synthesizer = null;
		// });
		// console.log("Now synthesizing to: " + audioFile);
		// console.log("Audio Narrated Successfully");
		// };

		console.log("END of TTS Narration");

		this.props.updateIndex(4);

	};

	//[form] = Form.useForm();

	// const buttons = document.querySelector('.Kbutton')
	// const textarea = document.querySelector('textarea')

	// const delete_Kbutton = document.queryselector('.delete')
	// const shift_Kbutton = document.querySelector('.shift')
	// const space_Kbutton = document.querySelector('.space')

	componentDidUpdate(){
		const index = this.props.navList.index;
    	const counter = this.props.counter.value;

		if (index == 4 && this.state.count3 == 0 ) {
			this.handleDropdownClick(this.state.drpdownNum);
			//this.setState({drpEn : true})
			this.setState({ count:  0 });
			this.setState({ count3:  1 });
		}
		//Get Azure
		if(index == 200 && this.state.count == 0){
			this.handleSubmit();
			//this.setState({ count:  1 });
			
		}


		//main keys

		if (index == 201 && this.state.count == 0) {
			this.handleDropdownClick("1");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 1});
			this.setState({ count:  1 });
		}
		if (index == 202 && this.state.count == 0) {
			this.handleDropdownClick("2");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 2});
			this.setState({ count: 1 });
		}



		//sub keys

		//අ section
		if (index == 240) {
			this.setState({ count:  0 });
			this.setState({ count3: 1 });
			//this.setState({drpEn : false})
			this.handleKbutton("අ");
		}
		if (index == 241) {
			this.setState({ count:  0 });
			this.setState({ count3: 1 });
			//this.setState({drpEn : false})
			this.handleKbutton("ආ");
		}
		if (index == 242) {
			this.setState({ count:  0 });
			this.setState({ count3: 1 });
			//this.setState({drpEn : false})
			this.handleKbutton("ඇ");
		}
		if (index == 243) {
			this.setState({ count:  0 });
			this.setState({ count3: 1 });
			//this.setState({drpEn : false})
			this.handleKbutton("ඈ");
		}

		//ඉ section
		if (index == 244) {
			this.setState({ count:  0 });
			this.setState({ count3: 1 });
			//this.setState({drpEn : false})
			this.handleKbutton("ඉ");
		}
		if (index == 245) {
			this.setState({ count:  0 });
			this.setState({ count3: 1 });
			//this.setState({drpEn : false})
			this.handleKbutton("ඊ");
		}
	}

	handleKbutton(val) {
		let chars = [];

		this.setState({text : this.state.text + val});
		//console.log(e.target.value)
		chars = this.state.text.split("");
		// this.setState({texty: chars});
		console.log(chars);
		// console.log(this.state.texty);
		this.setState({texty:this.state.text});
		console.log(this.state.texty);
		const str = "drpdown" + this.state.drpNum;
		this.setState({[str]: ""});
		//this.setState({drpEn : false})
		this.props.updateIndex(4)
	}

	handleDelete(e) {
		let str = this.state.text;
		this.setState({text : str.slice(0, -1)});
	}

	handleSpace(e) {
		//chars.push(' ')
		this.setState({text : this.state.text + " "});
		//console.log(chars)

		//setText(chars.join(' '))
	}

	handleDropdownClick(val){
		console.log("drpoinsgdagosagldlgner");
		const str = "drpdown" + val;

		if(this.state[str] !== "dropdownEnable"){
			this.setState({[str]: "dropdownEnable"});
		}
		else{
			this.setState({[str]: ""});
		}
		this.setState({drpNum : val})
	}

	render(){

		const index = this.props.navList.index;
		const counter = this.props.counter.value;

		let select1,select2, select3 = ""
		
		let subSelect1, subSelect2, subSelect3, subSelect4 = ""
		
		//main keys
		if (index == 4) {
			if (counter == 0) {
				select1 = "selected"
			}
			if (counter == 1) {
				select2 = "selected"
			}
			if (counter == 2) {
				select3 = "selected"
			}
		}

		if(index == 200){
			select1 = "selection";
		}

		//sub keys
		//අ section

		if (index == 201) {
			if (counter == 0) {
				subSelect1 = "selected"
			}
			if (counter == 1) {
				subSelect2 = "selected"
			}
			if (counter == 2) {
				subSelect3 = "selected"
			}
			if (counter == 3) {
				subSelect4 = "selected"
			}
		}

		//ඉ section
		if (index == 202) {
			if (counter == 0) {
				subSelect1 = "selected"
			}
			if (counter == 1) {
				subSelect2 = "selected"
			}
		}


		return (
		
			<div>
	
			<Sidebar />
			<Appbar />
				
				<button class={`azure ${select1}`} onClick={this.handleSubmit}>
					Get directly from Azure
				</button>
				<div class="container1">
					<div id="textarea1" class="textarea1">
						<textarea value={this.state.text}></textarea>
					</div>
					<div class="keyboard1">
						<div class="row1">
							<div class="dropdown1">
								<button
									id="Kbutton"
									class={`Kbutton ${select2}`}
									value="අ"
									onClick = {() => this.handleDropdownClick("1")}
								>
									අ
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown1}`} >
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class={`Kbutton ${subSelect1}`}
											value="අ"
											onClick={() => this.handleKbutton("අ")}
										>
											{" "}
											අ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class={`Kbutton ${subSelect2}`}
											value="ආ"
											onClick={() => this.handleKbutton("ආ")}
										>
											{" "}
											ආ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class={`Kbutton ${subSelect3}`}
											value="ඇ"
											onClick={() => this.handleKbutton("ඇ")}
										>
											{" "}
											ඇ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class={`Kbutton ${subSelect4}`}
											value="ඈ"
											onClick={() => this.handleKbutton("ඈ")}
										>
											{" "}
											ඈ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class={`Kbutton ${select3}`}
									value="ඉ"
									onClick = {() => this.handleDropdownClick("2")}
								>
									ඉ
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown2}`}>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class={`Kbutton ${subSelect1}`}
											value="ඉ"
											onClick={this.handleKbutton}
										>
											{" "}
											ඉ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class={`Kbutton ${subSelect2}`}
											value="ඊ"
											onClick={this.handleKbutton}
										>
											{" "}
											ඊ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="උ"
									onClick={this.handleKbutton}
								>
									උ
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="උ"
											onClick={this.handleKbutton}
										>
											{" "}
											උ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ඌ"
											onClick={this.handleKbutton}
										>
											{" "}
											ඌ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="එ"
									onClick={this.handleKbutton}
								>
									එ
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="එ"
											onClick={this.handleKbutton}
										>
											{" "}
											එ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ඒ"
											onClick={this.handleKbutton}
										>
											{" "}
											ඒ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ඔ"
									onClick={this.handleKbutton}
								>
									ඔ
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ඔ"
											onClick={this.handleKbutton}
										>
											{" "}
											ඔ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ඕ"
											onClick={this.handleKbutton}
										>
											{" "}
											ඕ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ක"
									onClick={this.handleKbutton}
								>
									ක
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ක"
											onClick={this.handleKbutton}
										>
											{" "}
											ක{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="කා"
											onClick={this.handleKbutton}
										>
											{" "}
											කා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="කැ"
											onClick={this.handleKbutton}
										>
											{" "}
											කැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="කෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											කෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ක්"
											onClick={this.handleKbutton}
										>
											{" "}
											ක්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="කි"
											onClick={this.handleKbutton}
										>
											{" "}
											කි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="කු"
											onClick={this.handleKbutton}
										>
											{" "}
											කු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="කෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											කෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="කේ"
											onClick={this.handleKbutton}
										>
											{" "}
											කේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="කො"
											onClick={this.handleKbutton}
										>
											{" "}
											කො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="කෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											කෝ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="කෞ"
											onClick={this.handleKbutton}
										>
											{" "}
											කෞ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ග"
									onClick={this.handleKbutton}
								>
									ග
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ග"
											onClick={this.handleKbutton}
										>
											{" "}
											ග{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ගැ"
											onClick={this.handleKbutton}
										>
											{" "}
											ගැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ගා"
											onClick={this.handleKbutton}
										>
											{" "}
											ගා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ගැ"
											onClick={this.handleKbutton}
										>
											{" "}
											ගැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ගෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											ගෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ග්"
											onClick={this.handleKbutton}
										>
											{" "}
											ග්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ගි"
											onClick={this.handleKbutton}
										>
											{" "}
											ගි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ගු"
											onClick={this.handleKbutton}
										>
											{" "}
											ගු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ගෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											ගෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ගේ"
											onClick={this.handleKbutton}
										>
											{" "}
											ගේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ගො"
											onClick={this.handleKbutton}
										>
											{" "}
											ගො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ගෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											ගෝ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ගෞ"
											onClick={this.handleKbutton}
										>
											{" "}
											ගෞ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ච"
									onClick={this.handleKbutton}
								>
									ච
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ච"
											onClick={this.handleKbutton}
										>
											{" "}
											ච{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="චා"
											onClick={this.handleKbutton}
										>
											{" "}
											චා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="චැ"
											onClick={this.handleKbutton}
										>
											{" "}
											චැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="චෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											චෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ච්"
											onClick={this.handleKbutton}
										>
											{" "}
											ච්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="චි"
											onClick={this.handleKbutton}
										>
											{" "}
											චි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="චී"
											onClick={this.handleKbutton}
										>
											{" "}
											චී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="චු"
											onClick={this.handleKbutton}
										>
											{" "}
											චු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="චෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											චෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="චො"
											onClick={this.handleKbutton}
										>
											{" "}
											චො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="චෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											චෝ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="චෞ"
											onClick={this.handleKbutton}
										>
											{" "}
											චෞ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ජ"
									onClick={this.handleKbutton}
								>
									ජ
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ජ"
											onClick={this.handleKbutton}
										>
											{" "}
											ජ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ජා"
											onClick={this.handleKbutton}
										>
											{" "}
											ජා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ජැ"
											onClick={this.handleKbutton}
										>
											{" "}
											ජැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ජෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											ජෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ජ්"
											onClick={this.handleKbutton}
										>
											{" "}
											ජ්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ජි"
											onClick={this.handleKbutton}
										>
											{" "}
											ජි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ජු"
											onClick={this.handleKbutton}
										>
											{" "}
											ජු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ජෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											ජෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ජේ"
											onClick={this.handleKbutton}
										>
											{" "}
											ජේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ජො"
											onClick={this.handleKbutton}
										>
											{" "}
											ජො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ජෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											ජෝ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ට"
									onClick={this.handleKbutton}
								>
									ට
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ට"
											onClick={this.handleKbutton}
										>
											{" "}
											ට{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ටා"
											onClick={this.handleKbutton}
										>
											{" "}
											ටා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ටැ"
											onClick={this.handleKbutton}
										>
											{" "}
											ටැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ටෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											ටෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ටි"
											onClick={this.handleKbutton}
										>
											{" "}
											ටි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ට්"
											onClick={this.handleKbutton}
										>
											{" "}
											ට්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ටී"
											onClick={this.handleKbutton}
										>
											{" "}
											ටී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ටු"
											onClick={this.handleKbutton}
										>
											{" "}
											ටු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ටෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											ටෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ටේ"
											onClick={this.handleKbutton}
										>
											{" "}
											ටේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ටෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											ටෝ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="චෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											චෝ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<button class="Dbutton" onClick={this.handleDelete}>
								Delete
							</button>
						</div>
	
						<div class="row1">
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ඩ"
									onClick={this.handleKbutton}
								>
									ඩ
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ඩ"
											onClick={this.handleKbutton}
										>
											{" "}
											ඩ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ඩා"
											onClick={this.handleKbutton}
										>
											{" "}
											ඩා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ඩැ"
											onClick={this.handleKbutton}
										>
											{" "}
											ඩැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ඩෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											ඩෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ඩ්"
											onClick={this.handleKbutton}
										>
											{" "}
											ඩ්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ඩි"
											onClick={this.handleKbutton}
										>
											{" "}
											ඩි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ඩී"
											onClick={this.handleKbutton}
										>
											{" "}
											ඩී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ඩු"
											onClick={this.handleKbutton}
										>
											{" "}
											ඩු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ඩෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											ඩෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ඩේ"
											onClick={this.handleKbutton}
										>
											{" "}
											ඩේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ඩො"
											onClick={this.handleKbutton}
										>
											{" "}
											ඩො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ඩෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											ඩෝ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ණ"
									onClick={this.handleKbutton}
								>
									ණ
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ණ"
											onClick={this.handleKbutton}
										>
											{" "}
											ණ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ණා"
											onClick={this.handleKbutton}
										>
											{" "}
											ණා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ණැ"
											onClick={this.handleKbutton}
										>
											{" "}
											ණැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ණෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											ණෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ණ්"
											onClick={this.handleKbutton}
										>
											{" "}
											ණ්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ණි"
											onClick={this.handleKbutton}
										>
											{" "}
											ණි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ණී"
											onClick={this.handleKbutton}
										>
											{" "}
											ණී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ණු"
											onClick={this.handleKbutton}
										>
											{" "}
											ණු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ණෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											ණෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ණේ"
											onClick={this.handleKbutton}
										>
											{" "}
											ණේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ණො"
											onClick={this.handleKbutton}
										>
											{" "}
											ණො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ණෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											ණෝ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ත"
									onClick={this.handleKbutton}
								>
									ත
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ත"
											onClick={this.handleKbutton}
										>
											{" "}
											ත{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="තා"
											onClick={this.handleKbutton}
										>
											{" "}
											තා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="තැ"
											onClick={this.handleKbutton}
										>
											{" "}
											තැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="තෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											තෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ත්"
											onClick={this.handleKbutton}
										>
											{" "}
											ත්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ති"
											onClick={this.handleKbutton}
										>
											{" "}
											ති{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="තී"
											onClick={this.handleKbutton}
										>
											{" "}
											තී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="තු"
											onClick={this.handleKbutton}
										>
											{" "}
											තු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="තෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											තෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="තේ"
											onClick={this.handleKbutton}
										>
											{" "}
											තේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="තො"
											onClick={this.handleKbutton}
										>
											{" "}
											තො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="තෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											තෝ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ද"
									onClick={this.handleKbutton}
								>
									ද
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ද"
											onClick={this.handleKbutton}
										>
											{" "}
											ද{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="දා"
											onClick={this.handleKbutton}
										>
											{" "}
											දා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="දැ"
											onClick={this.handleKbutton}
										>
											{" "}
											දැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="දෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											දෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ද්"
											onClick={this.handleKbutton}
										>
											{" "}
											ද්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="දි"
											onClick={this.handleKbutton}
										>
											{" "}
											දි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="දී"
											onClick={this.handleKbutton}
										>
											{" "}
											දී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="දු"
											onClick={this.handleKbutton}
										>
											{" "}
											දු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="දෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											දෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="දේ"
											onClick={this.handleKbutton}
										>
											{" "}
											දේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="දො"
											onClick={this.handleKbutton}
										>
											{" "}
											දො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="දෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											දෝ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="න"
									onClick={this.handleKbutton}
								>
									න
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="න"
											onClick={this.handleKbutton}
										>
											{" "}
											න{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="නා"
											onClick={this.handleKbutton}
										>
											{" "}
											නා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="පැ"
											onClick={this.handleKbutton}
										>
											{" "}
											පැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="නෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											නෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="න්"
											onClick={this.handleKbutton}
										>
											{" "}
											න්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="නි"
											onClick={this.handleKbutton}
										>
											{" "}
											නි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="නී"
											onClick={this.handleKbutton}
										>
											{" "}
											නී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="නු"
											onClick={this.handleKbutton}
										>
											{" "}
											නු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="නෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											නෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="නේ"
											onClick={this.handleKbutton}
										>
											{" "}
											නේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="නො"
											onClick={this.handleKbutton}
										>
											{" "}
											නො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="නෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											නෝ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ප"
									onClick={this.handleKbutton}
								>
									ප
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ප"
											onClick={this.handleKbutton}
										>
											{" "}
											ප{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="පා"
											onClick={this.handleKbutton}
										>
											{" "}
											පා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="පැ"
											onClick={this.handleKbutton}
										>
											{" "}
											පැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="පෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											පෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ප්"
											onClick={this.handleKbutton}
										>
											{" "}
											ප්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="පි"
											onClick={this.handleKbutton}
										>
											{" "}
											පි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="පී"
											onClick={this.handleKbutton}
										>
											{" "}
											පී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="පු"
											onClick={this.handleKbutton}
										>
											{" "}
											පු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="පෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											පෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="පේ"
											onClick={this.handleKbutton}
										>
											{" "}
											පේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="පො"
											onClick={this.handleKbutton}
										>
											{" "}
											පො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="පෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											පෝ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="බ"
									onClick={this.handleKbutton}
								>
									බ
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="බ"
											onClick={this.handleKbutton}
										>
											{" "}
											බ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="බා"
											onClick={this.handleKbutton}
										>
											{" "}
											බා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="බැ"
											onClick={this.handleKbutton}
										>
											{" "}
											බැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="බෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											බෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="බ්"
											onClick={this.handleKbutton}
										>
											{" "}
											බ්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="බි"
											onClick={this.handleKbutton}
										>
											{" "}
											බි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="බී"
											onClick={this.handleKbutton}
										>
											{" "}
											බී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="බු"
											onClick={this.handleKbutton}
										>
											{" "}
											බු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="බෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											බෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="බේ"
											onClick={this.handleKbutton}
										>
											{" "}
											බේ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ම"
									onClick={this.handleKbutton}
								>
									ම
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ම"
											onClick={this.handleKbutton}
										>
											{" "}
											ම{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="මා"
											onClick={this.handleKbutton}
										>
											{" "}
											මා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="මැ"
											onClick={this.handleKbutton}
										>
											{" "}
											මැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="මෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											මෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ම්"
											onClick={this.handleKbutton}
										>
											{" "}
											ම්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="මි"
											onClick={this.handleKbutton}
										>
											{" "}
											මි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="මී"
											onClick={this.handleKbutton}
										>
											{" "}
											මී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="මු"
											onClick={this.handleKbutton}
										>
											{" "}
											මු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="මෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											මෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="මේ"
											onClick={this.handleKbutton}
										>
											{" "}
											මේ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ය"
									onClick={this.handleKbutton}
								>
									ය
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ය"
											onClick={this.handleKbutton}
										>
											{" "}
											ය{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="යා"
											onClick={this.handleKbutton}
										>
											{" "}
											යා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="යැ"
											onClick={this.handleKbutton}
										>
											{" "}
											යැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="යෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											යෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="යි"
											onClick={this.handleKbutton}
										>
											{" "}
											යි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="යී"
											onClick={this.handleKbutton}
										>
											{" "}
											යී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="යු"
											onClick={this.handleKbutton}
										>
											{" "}
											යු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="යූ"
											onClick={this.handleKbutton}
										>
											{" "}
											යූ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="යෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											යෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="යේ"
											onClick={this.handleKbutton}
										>
											{" "}
											යේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="යො"
											onClick={this.handleKbutton}
										>
											{" "}
											යො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="යෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											යෝ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="යෞ"
											onClick={this.handleKbutton}
										>
											{" "}
											යෞ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ර"
									onClick={this.handleKbutton}
								>
									ර
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ර"
											onClick={this.handleKbutton}
										>
											{" "}
											ර{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="රා"
											onClick={this.handleKbutton}
										>
											{" "}
											රා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="රැ"
											onClick={this.handleKbutton}
										>
											{" "}
											රැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="රෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											රෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ර්"
											onClick={this.handleKbutton}
										>
											{" "}
											ර්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="රි"
											onClick={this.handleKbutton}
										>
											{" "}
											රි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="රී"
											onClick={this.handleKbutton}
										>
											{" "}
											රී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="රු"
											onClick={this.handleKbutton}
										>
											{" "}
											රු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="රූ"
											onClick={this.handleKbutton}
										>
											{" "}
											රූ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="රෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											රෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="රේ"
											onClick={this.handleKbutton}
										>
											{" "}
											රේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="රො"
											onClick={this.handleKbutton}
										>
											{" "}
											රො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="රෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											රෝ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="රෞ"
											onClick={this.handleKbutton}
										>
											{" "}
											රෞ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ල"
									onClick={this.handleKbutton}
								>
									ල
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ල"
											onClick={this.handleKbutton}
										>
											{" "}
											ල{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ලා"
											onClick={this.handleKbutton}
										>
											{" "}
											ලා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ලැ"
											onClick={this.handleKbutton}
										>
											{" "}
											ලැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ලෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											ලෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ල්"
											onClick={this.handleKbutton}
										>
											{" "}
											ල්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ලි"
											onClick={this.handleKbutton}
										>
											{" "}
											ලි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ලී"
											onClick={this.handleKbutton}
										>
											{" "}
											ලී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ලු"
											onClick={this.handleKbutton}
										>
											{" "}
											ලු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ලූ"
											onClick={this.handleKbutton}
										>
											{" "}
											ලූ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ලෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											ලෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ලේ"
											onClick={this.handleKbutton}
										>
											{" "}
											ලේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ලො"
											onClick={this.handleKbutton}
										>
											{" "}
											ලො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ලෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											ලෝ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ලෞ"
											onClick={this.handleKbutton}
										>
											{" "}
											ලෞ{" "}
										</button>
									</a>
								</div>
							</div>
						</div>
	
						<div class="row1">
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ව"
									onClick={this.handleKbutton}
								>
									ව
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ව"
											onClick={this.handleKbutton}
										>
											{" "}
											ව{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="වා"
											onClick={this.handleKbutton}
										>
											{" "}
											වා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="වැ"
											onClick={this.handleKbutton}
										>
											{" "}
											වැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="වෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											වෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ව්"
											onClick={this.handleKbutton}
										>
											{" "}
											ව්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="වි"
											onClick={this.handleKbutton}
										>
											{" "}
											වි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="වී"
											onClick={this.handleKbutton}
										>
											{" "}
											වී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="වු"
											onClick={this.handleKbutton}
										>
											{" "}
											වු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="වූ"
											onClick={this.handleKbutton}
										>
											{" "}
											වූ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="වෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											වෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="වේ"
											onClick={this.handleKbutton}
										>
											{" "}
											වේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="වේ"
											onClick={this.handleKbutton}
										>
											{" "}
											වේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="වො"
											onClick={this.handleKbutton}
										>
											{" "}
											වො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="වෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											වෝ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="වෞ"
											onClick={this.handleKbutton}
										>
											{" "}
											වෞ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ශ"
									onClick={this.handleKbutton}
								>
									ශ
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ශ"
											onClick={this.handleKbutton}
										>
											{" "}
											ශ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ශා"
											onClick={this.handleKbutton}
										>
											{" "}
											ශා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ශැ"
											onClick={this.handleKbutton}
										>
											{" "}
											ශැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ශෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											ශෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ශ්"
											onClick={this.handleKbutton}
										>
											{" "}
											ශ්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ශි"
											onClick={this.handleKbutton}
										>
											{" "}
											ශි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ශී"
											onClick={this.handleKbutton}
										>
											{" "}
											ශී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ශු"
											onClick={this.handleKbutton}
										>
											{" "}
											ශු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ශූ"
											onClick={this.handleKbutton}
										>
											{" "}
											ශූ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ශෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											ශෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ශේ"
											onClick={this.handleKbutton}
										>
											{" "}
											ශේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ශො"
											onClick={this.handleKbutton}
										>
											{" "}
											ශො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ශෞ"
											onClick={this.handleKbutton}
										>
											{" "}
											ශෞ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ස"
									onClick={this.handleKbutton}
								>
									ස
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ස"
											onClick={this.handleKbutton}
										>
											{" "}
											ස{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="සා"
											onClick={this.handleKbutton}
										>
											{" "}
											සා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="සැ"
											onClick={this.handleKbutton}
										>
											{" "}
											සැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="සෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											සෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ස්"
											onClick={this.handleKbutton}
										>
											{" "}
											ස්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="සි"
											onClick={this.handleKbutton}
										>
											{" "}
											සි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="සී"
											onClick={this.handleKbutton}
										>
											{" "}
											සී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="සු"
											onClick={this.handleKbutton}
										>
											{" "}
											සු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="සූ"
											onClick={this.handleKbutton}
										>
											{" "}
											සූ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="සෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											සෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="සේ"
											onClick={this.handleKbutton}
										>
											{" "}
											සේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="සො"
											onClick={this.handleKbutton}
										>
											{" "}
											සො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="සෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											සෝ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="සෞ"
											onClick={this.handleKbutton}
										>
											{" "}
											සෞ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="හ"
									onClick={this.handleKbutton}
								>
									හ
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="හ"
											onClick={this.handleKbutton}
										>
											{" "}
											හ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="හා"
											onClick={this.handleKbutton}
										>
											{" "}
											හා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="හැ"
											onClick={this.handleKbutton}
										>
											{" "}
											හැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="හෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											හෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="හ්"
											onClick={this.handleKbutton}
										>
											{" "}
											හ්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="හි"
											onClick={this.handleKbutton}
										>
											{" "}
											හි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="හී"
											onClick={this.handleKbutton}
										>
											{" "}
											හී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="හු"
											onClick={this.handleKbutton}
										>
											{" "}
											හු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="හූ"
											onClick={this.handleKbutton}
										>
											{" "}
											හූ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="හෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											හෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="හේ"
											onClick={this.handleKbutton}
										>
											{" "}
											හේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="හො"
											onClick={this.handleKbutton}
										>
											{" "}
											හො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="හෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											හෝ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="හෞ"
											onClick={this.handleKbutton}
										>
											{" "}
											හෞ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ෆ"
									onClick={this.handleKbutton}
								>
									ෆ
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෆ"
											onClick={this.handleKbutton}
										>
											{" "}
											ෆ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෆා"
											onClick={this.handleKbutton}
										>
											{" "}
											ෆා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෆැ"
											onClick={this.handleKbutton}
										>
											{" "}
											ෆැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෆෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											ෆෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෆ්"
											onClick={this.handleKbutton}
										>
											{" "}
											ෆ්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෆි"
											onClick={this.handleKbutton}
										>
											{" "}
											ෆි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෆී"
											onClick={this.handleKbutton}
										>
											{" "}
											ෆී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෆු"
											onClick={this.handleKbutton}
										>
											{" "}
											ෆු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෆූ"
											onClick={this.handleKbutton}
										>
											{" "}
											ෆූ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෆෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											ෆෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෆේ"
											onClick={this.handleKbutton}
										>
											{" "}
											ෆේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෆො"
											onClick={this.handleKbutton}
										>
											{" "}
											ෆො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෆෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											ෆෝ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෆෞ"
											onClick={this.handleKbutton}
										>
											{" "}
											ෆෞ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ළ"
									onClick={this.handleKbutton}
								>
									ළ
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ළ"
											onClick={this.handleKbutton}
										>
											{" "}
											ළ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ළා"
											onClick={this.handleKbutton}
										>
											{" "}
											ළා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ළැ"
											onClick={this.handleKbutton}
										>
											{" "}
											ළැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ළෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											ළෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ළ්"
											onClick={this.handleKbutton}
										>
											{" "}
											ළ්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ළි"
											onClick={this.handleKbutton}
										>
											{" "}
											ළි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ළී"
											onClick={this.handleKbutton}
										>
											{" "}
											ළී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ළු"
											onClick={this.handleKbutton}
										>
											{" "}
											ළු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ළූ"
											onClick={this.handleKbutton}
										>
											{" "}
											ළූ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ළෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											ළෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ළේ"
											onClick={this.handleKbutton}
										>
											{" "}
											ළේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ළො"
											onClick={this.handleKbutton}
										>
											{" "}
											ළො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ළෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											ළෝ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෆෞ"
											onClick={this.handleKbutton}
										>
											{" "}
											ෆෞ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ථ"
									onClick={this.handleKbutton}
								>
									ථ
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ථ"
											onClick={this.handleKbutton}
										>
											{" "}
											ථ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ථා"
											onClick={this.handleKbutton}
										>
											{" "}
											ථා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ථැ"
											onClick={this.handleKbutton}
										>
											{" "}
											ථැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ථෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											ථෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ථ්"
											onClick={this.handleKbutton}
										>
											{" "}
											ථ්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ථි"
											onClick={this.handleKbutton}
										>
											{" "}
											ථි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ථී"
											onClick={this.handleKbutton}
										>
											{" "}
											ථී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ථු"
											onClick={this.handleKbutton}
										>
											{" "}
											ථු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ථූ"
											onClick={this.handleKbutton}
										>
											{" "}
											ථූ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ථෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											ථෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ථේ"
											onClick={this.handleKbutton}
										>
											{" "}
											ථේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ථො"
											onClick={this.handleKbutton}
										>
											{" "}
											ථො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ථෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											ථෝ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ථෞ"
											onClick={this.handleKbutton}
										>
											{" "}
											ථෞ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="භ"
									onClick={this.handleKbutton}
								>
									භ
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="භ"
											onClick={this.handleKbutton}
										>
											{" "}
											භ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="භා"
											onClick={this.handleKbutton}
										>
											{" "}
											භා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="භැ"
											onClick={this.handleKbutton}
										>
											{" "}
											භැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="භෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											භෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="භ්"
											onClick={this.handleKbutton}
										>
											{" "}
											භ්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="භි"
											onClick={this.handleKbutton}
										>
											{" "}
											භි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="භී"
											onClick={this.handleKbutton}
										>
											{" "}
											භී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="භු"
											onClick={this.handleKbutton}
										>
											{" "}
											භු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="භූ"
											onClick={this.handleKbutton}
										>
											{" "}
											භූ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="භෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											භෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="භේ"
											onClick={this.handleKbutton}
										>
											{" "}
											භේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="භො"
											onClick={this.handleKbutton}
										>
											{" "}
											භො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="භෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											භෝ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="භෞ"
											onClick={this.handleKbutton}
										>
											{" "}
											භෞ{" "}
										</button>
									</a>
								</div>
							</div>
	
							<div class="dropdown1">
								<button
									id="Kbutton"
									class="Kbutton"
									value="ෂ"
									onClick={this.handleKbutton}
								>
									ෂ
								</button>
								<div class="dropdown-content1">
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෂ"
											onClick={this.handleKbutton}
										>
											{" "}
											ෂ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෂා"
											onClick={this.handleKbutton}
										>
											{" "}
											ෂා{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෂැ"
											onClick={this.handleKbutton}
										>
											{" "}
											ෂැ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෂෑ"
											onClick={this.handleKbutton}
										>
											{" "}
											ෂෑ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෂ්"
											onClick={this.handleKbutton}
										>
											{" "}
											ෂ්{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෂි"
											onClick={this.handleKbutton}
										>
											{" "}
											ෂි{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෂී"
											onClick={this.handleKbutton}
										>
											{" "}
											ෂී{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෂු"
											onClick={this.handleKbutton}
										>
											{" "}
											ෂු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෂු"
											onClick={this.handleKbutton}
										>
											{" "}
											ෂු{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෂූ"
											onClick={this.handleKbutton}
										>
											{" "}
											ෂූ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෂෙ"
											onClick={this.handleKbutton}
										>
											{" "}
											ෂෙ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෂේ"
											onClick={this.handleKbutton}
										>
											{" "}
											ෂේ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෂො"
											onClick={this.handleKbutton}
										>
											{" "}
											ෂො{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෂෝ"
											onClick={this.handleKbutton}
										>
											{" "}
											ෂෝ{" "}
										</button>
									</a>
									<a href="#">
										{" "}
										<button
											id="Kbutton"
											class="Kbutton"
											value="ෂෞ"
											onClick={this.handleKbutton}
										>
											{" "}
											ෂෞ{" "}
										</button>
									</a>
								</div>
							</div>
						</div>
	
						<div class="row1">
							<button class="Sbutton" onClick={this.handleSpace}>
								Space
							</button>
						</div>
					</div>
				</div>
			</div>
			);
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

export default connect(mapStateToProps, mapDispatchToProps())(KeyboardLayout);

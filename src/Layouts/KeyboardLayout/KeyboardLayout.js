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
		if(index == 201 && this.state.count == 0){
			this.handleSpace();
			//this.setState({ count:  1 });
			
		}
		if(index == 202 && this.state.count == 0){
			this.handleDelete();
			//this.setState({ count:  1 });
			
		}


		//main keys

		if (index == 203 && this.state.count == 0) {
			this.handleDropdownClick("1");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 1});
			this.setState({ count:  1 });
		}
		if (index == 204 && this.state.count == 0) {
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

	handleDelete() {
		let str = this.state.text;
		this.setState({text : str.slice(0, -1)});
	}

	handleSpace() {
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

		let select1,select2, select3, select4, select5, select6, select7, select8, select9 ,select10 ,select11 ,select12 ,select13 = ""
		
		let subSelect1, subSelect2, subSelect3, subSelect4, subSelect5, subSelect6, subSelect7, subSelect8, subSelect9, subSelect10, subSelect11, subSelect12, subSelect13, subSelect14 = ""
		
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
							<button class={`Sbutton ${select2}`} onClick={this.handleSpace}>
								Space
							</button>

							

							<button class={`Dbutton ${select3}`} onClick={this.handleDelete}>
								Delete
							</button>
							
						</div>
						</div>

						<div class="row1">
							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select4}`} value="අ" onClick = {() => this.handleDropdownClick("1")} >
									අ
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown1}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="අ" onClick={() => this.handleKbutton("අ")} >
											{" "}
											අ{" "} </button>
									</a>
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="ආ" onClick={() => this.handleKbutton("ආ")} >
											{" "}
											ආ{" "} </button>
									</a>
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="ඇ" onClick={() => this.handleKbutton("ඇ")} >
											{" "}
											ඇ{" "} </button>
									</a>
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="ඈ" onClick={() => this.handleKbutton("ඈ")} >
											{" "} ඈ{" "} </button> </a>
								</div>
							</div>

							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select5}`} value="ඉ" onClick = {() => this.handleDropdownClick("2")} >
								ඉ
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown2}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ඉ" onClick={() => this.handleKbutton("ඉ")} >
											{" "}
											ඉ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="ඊ" onClick={() => this.handleKbutton("ඊ")} >
											{" "} ඊ{" "} </button> </a>

								</div>
							</div>

							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select6}`} value="උ" onClick = {() => this.handleDropdownClick("3")} >
								උ
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown3}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="උ" onClick={() => this.handleKbutton("උ")} >
											{" "}
											උ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="ඌ" onClick={() => this.handleKbutton("ඌ")} >
											{" "}
											ඌ{" "} </button> </a>
	
							
								
								</div>
							</div>


							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select7}`} value="එ" onClick = {() => this.handleDropdownClick("4")} >
								එ
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown4}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="එ" onClick={() => this.handleKbutton("එ")} >
											{" "}
											එ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="ඒ" onClick={() => this.handleKbutton("ඒ")} >
											{" "}
											ඒ{" "} </button> </a>


								</div>
							</div>

							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select8}`} value="ඔ" onClick = {() => this.handleDropdownClick("5")} >
								ඔ
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown5}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ඔ" onClick={() => this.handleKbutton("ඔ")} >
											{" "}
											ඔ{" "} </button> </a>

											<div class={`dropdown-content1 ${this.state.drpdown4}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="ඕ" onClick={() => this.handleKbutton("ඕ")} >
											{" "}
											ඕ{" "} </button> </a>
	
							
									
								</div>
							</div>

							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select9}`} value="ක" onClick = {() => this.handleDropdownClick("6")} >
								ක
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown6}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ක" onClick={() => this.handleKbutton("ක")} >
											{" "}
											ක{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="කා" onClick={() => this.handleKbutton("කා")} >
											{" "}
											කා{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="කැ" onClick={() => this.handleKbutton("කැ")} >
											{" "}
											කැ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="කෑ" onClick={() => this.handleKbutton("කෑ")} >
											{" "}
											කෑ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="ක්" onClick={() => this.handleKbutton("ක්")} >
											{" "}
											ක්{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="කි" onClick={() => this.handleKbutton("කි")} >
											{" "}
											කි{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="කු" onClick={() => this.handleKbutton("කු")} >
											{" "}
											කු{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="කෙ" onClick={() => this.handleKbutton("කෙ")} >
											{" "}
											කෙ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="කේ" onClick={() => this.handleKbutton("කේ")} >
											{" "}
											කේ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="කො" onClick={() => this.handleKbutton("කො")} >
											{" "}
											කො{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect11}`} value="කෝ" onClick={() => this.handleKbutton("කෝ")} >
											{" "}
											කෝ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect12}`} value="කෞ" onClick={() => this.handleKbutton("කෞ")} >
											{" "}
											කෞ{" "} </button> </a>

											
									
								</div>
							</div>

							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select10}`} value="ග" onClick = {() => this.handleDropdownClick("7")} >
								ග
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown7}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ග" onClick={() => this.handleKbutton("ග")} >
											{" "}
											ග{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="ගා" onClick={() => this.handleKbutton("ගා")} >
											{" "}
											ගා{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="ගැ" onClick={() => this.handleKbutton("ගැ")} >
											{" "}
											ගැ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="ගෑ" onClick={() => this.handleKbutton("ගෑ")} >
											{" "}
											ගෑ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="ග්" onClick={() => this.handleKbutton("ග්")} >
											{" "}
											ග්{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="ගි" onClick={() => this.handleKbutton("ගි")} >
											{" "}
											ගි{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="ගු" onClick={() => this.handleKbutton("ගු")} >
											{" "}
											ගු{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="ගෙ" onClick={() => this.handleKbutton("ගෙ")} >
											{" "}
											ගෙ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="ගේ" onClick={() => this.handleKbutton("ගේ")} >
											{" "}
											ගේ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect11}`} value="ගො" onClick={() => this.handleKbutton("ගො")} >
											{" "}
											ගො{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect12}`} value="ගෝ" onClick={() => this.handleKbutton("ගෝ")} >
											{" "}
											ගෝ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect13}`} value="ගෞ" onClick={() => this.handleKbutton("ගෞ")} >
											{" "}
											ගෞ{" "} </button> </a>

									
								</div>
							</div>


							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select11}`} value="ච" onClick = {() => this.handleDropdownClick("8")} >
								ච
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown8}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ච" onClick={() => this.handleKbutton("ච")} >
											{" "}
											ච{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="චා" onClick={() => this.handleKbutton("චා")} >
											{" "}
											චා{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="චැ" onClick={() => this.handleKbutton("චැ")} >
											{" "}
											චැ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="චෑ" onClick={() => this.handleKbutton("චෑ")} >
											{" "}
											චෑ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="ච්" onClick={() => this.handleKbutton("ච්")} >
											{" "}
											ච්{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="චී" onClick={() => this.handleKbutton("චී")} >
											{" "}
											චී{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="චු" onClick={() => this.handleKbutton("චු")} >
											{" "}
											චු{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="චෙ" onClick={() => this.handleKbutton("චෙ")} >
											{" "}
											චෙ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="චො" onClick={() => this.handleKbutton("චො")} >
											{" "}
											චො{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="චෝ" onClick={() => this.handleKbutton("චෝ")} >
											{" "}
											චෝ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect11}`} value="චෞ" onClick={() => this.handleKbutton("චෞ")} >
											{" "}
											චෞ{" "} </button> </a>
	
							
									
								</div>
							</div>
	

							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select12}`} value="ජ" onClick = {() => this.handleDropdownClick("9")} >
								ජ
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown9}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ජ" onClick={() => this.handleKbutton("ජ")} >
											{" "}
											ජ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="ජා" onClick={() => this.handleKbutton("ජා")} >
											{" "}
											ජා{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="ජැ" onClick={() => this.handleKbutton("ජැ")} >
											{" "}
											ජැ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="ජෑ" onClick={() => this.handleKbutton("ජෑ")} >
											{" "}
											ජෑ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="ජ්" onClick={() => this.handleKbutton("ජ්")} >
											{" "}
											ජ්{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="ජි" onClick={() => this.handleKbutton("ජි")} >
											{" "}
											ජි{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="ජු" onClick={() => this.handleKbutton("ජු")} >
											{" "}
											ජු{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="ජෙ" onClick={() => this.handleKbutton("ජෙ")} >
											{" "}
											ජෙ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="ජේ" onClick={() => this.handleKbutton("ජේ")} >
											{" "}
											ජේ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="ජො" onClick={() => this.handleKbutton("ජො")} >
											{" "}
											ජො{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect11}`} value="ජෝ" onClick={() => this.handleKbutton("ජෝ")} >
											{" "}
											ජෝ{" "} </button> </a>


								</div>
							</div>

							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select13}`} value="ට" onClick = {() => this.handleDropdownClick("10")} >
								ට
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown10}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ට" onClick={() => this.handleKbutton("ට")} >
											{" "}
											ට{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="ටා" onClick={() => this.handleKbutton("ටා")} >
											{" "}
											ටා{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="ටැ" onClick={() => this.handleKbutton("ටැ")} >
											{" "}
											ටැ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="ටෑ" onClick={() => this.handleKbutton("ටෑ")} >
											{" "}
											ටෑ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="ටි" onClick={() => this.handleKbutton("ටි")} >
											{" "}
											ටි{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="ට්" onClick={() => this.handleKbutton("ට්")} >
											{" "}
											ට්{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="ටී" onClick={() => this.handleKbutton("ටී")} >
											{" "}
											ටී{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="ටු" onClick={() => this.handleKbutton("ටු")} >
											{" "}
											ටු{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="ටෙ" onClick={() => this.handleKbutton("ටෙ")} >
											{" "}
											ටෙ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="ටේ" onClick={() => this.handleKbutton("ටේ")} >
											{" "}
											ටේ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect11}`} value="ටෝ" onClick={() => this.handleKbutton("ටෝ")} >
											{" "}
											ටෝ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect12}`} value="ටෝ" onClick={() => this.handleKbutton("ටෝ")} >
											{" "}
											ටෝ{" "} </button> </a>
											
	
							
									
									
									
									
									
									
									
								
								</div>
							</div>
	
							c
						</div>
	
						<div class="row1">
						<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select14}`} value="ඩ" onClick = {() => this.handleDropdownClick("11")} >
								ඩ
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown11}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ඩ" onClick={() => this.handleKbutton("ඩ")} >
											{" "}
											ඩ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="ඩා" onClick={() => this.handleKbutton("ඩා")} >
											{" "}
											ඩා{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="ඩැ" onClick={() => this.handleKbutton("ඩැ")} >
											{" "}
											ඩැ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="ඩෑ" onClick={() => this.handleKbutton("ඩෑ")} >
											{" "}
											ඩෑ{" "} </button> </a>


							
									
									

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="ඩ්" onClick={() => this.handleKbutton("ඩ්")} >
											{" "}
											ඩ්{" "} </button> </a>



									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="ඩි" onClick={() => this.handleKbutton("ඩි")} >
											{" "}
											ඩි{" "} </button> </a>


									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="ඩි" onClick={() => this.handleKbutton("ඩි")} >
											{" "}
											ඩි{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="ඩු" onClick={() => this.handleKbutton("ඩු")} >
											{" "}
											ඩු{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="ඩෙ" onClick={() => this.handleKbutton("ඩෙ")} >
											{" "}
											ඩෙ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="ඩේ" onClick={() => this.handleKbutton("ඩේ")} >
											{" "}
											ඩේ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect11}`} value="ඩො" onClick={() => this.handleKbutton("ඩො")} >
											{" "}
											ඩො{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect12}`} value="ඩෝ" onClick={() => this.handleKbutton("ඩෝ")} >
											{" "}
											ඩෝ{" "} </button> </a>


								</div>
							</div>

							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select15}`} value="ණ" onClick = {() => this.handleDropdownClick("12")} >
								ණ
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown12}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ණ" onClick={() => this.handleKbutton("ණ")} >
											{" "}
											ණ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="ණා" onClick={() => this.handleKbutton("ණා")} >
											{" "}
											ණා{" "} </button> </a>


									

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="ණැ" onClick={() => this.handleKbutton("ණැ")} >
											{" "}
											ණැ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="ණෑ" onClick={() => this.handleKbutton("ණෑ")} >
											{" "}
											ණෑ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="ණ්" onClick={() => this.handleKbutton("ණ්")} >
											{" "}
											ණ්{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="ණි" onClick={() => this.handleKbutton("ණි")} >
											{" "}
											ණි{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="ණී" onClick={() => this.handleKbutton("ණී")} >
											{" "}
											ණී{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="ණු" onClick={() => this.handleKbutton("ණු")} >
											{" "}
											ණු{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="ණෙ" onClick={() => this.handleKbutton("ණෙ")} >
											{" "}
											ණෙ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="ණෙ" onClick={() => this.handleKbutton("ණෙ")} >
											{" "}
											ණෙ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect11}`} value="ණො" onClick={() => this.handleKbutton("ණො")} >
											{" "}
											ණො{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect12}`} value="ණෝ" onClick={() => this.handleKbutton("ණෝ")} >
											{" "}
											ණෝ{" "} </button> </a>


								</div>
							</div>
	
	
							

									<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select16}`} value="ත" onClick = {() => this.handleDropdownClick("13")} >
								ත
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown13}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ත" onClick={() => this.handleKbutton("ත")} >
											{" "}
											ත{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="තා" onClick={() => this.handleKbutton("තා")} >
											{" "}
											තා{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="තැ" onClick={() => this.handleKbutton("තැ")} >
											{" "}
											තැ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="තෑ" onClick={() => this.handleKbutton("තෑ")} >
											{" "}
											තෑ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="ත්" onClick={() => this.handleKbutton("ත්")} >
											{" "}
											ත්{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="ති" onClick={() => this.handleKbutton("ති")} >
											{" "}
											ති{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="තී" onClick={() => this.handleKbutton("තී")} >
											{" "}
											තී{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="තු" onClick={() => this.handleKbutton("තු")} >
											{" "}
											තු{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="තෙ" onClick={() => this.handleKbutton("තෙ")} >
											{" "}
											තෙ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="තේ" onClick={() => this.handleKbutton("තේ")} >
											{" "}
											තේ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect11}`} value="තො" onClick={() => this.handleKbutton("තො")} >
											{" "}
											තො{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect12}`} value="තෝ" onClick={() => this.handleKbutton("තෝ")} >
											{" "}
											තෝ{" "} </button> </a>


								</div>
							</div>

							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select17}`} value="ද" onClick = {() => this.handleDropdownClick("14")} >
								ද
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown14}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ද" onClick={() => this.handleKbutton("ද")} >
											{" "}
											ද{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="දා" onClick={() => this.handleKbutton("දා")} >
											{" "}
											දා{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="දැ" onClick={() => this.handleKbutton("දැ")} >
											{" "}
											දැ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="දෑ" onClick={() => this.handleKbutton("දෑ")} >
											{" "}
											දෑ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="ද්" onClick={() => this.handleKbutton("ද්")} >
											{" "}
											ද්{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="දි" onClick={() => this.handleKbutton("දි")} >
											{" "}
											දි{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="දී" onClick={() => this.handleKbutton("දී")} >
											{" "}
											දී{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="දු" onClick={() => this.handleKbutton("දු")} >
											{" "}
											දු{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="දෙ" onClick={() => this.handleKbutton("දෙ")} >
											{" "}
											දෙ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="දේ" onClick={() => this.handleKbutton("දේ")} >
											{" "}
											දේ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect11}`} value="දො" onClick={() => this.handleKbutton("දො")} >
											{" "}
											දො{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect12}`} value="දෝ" onClick={() => this.handleKbutton("දෝ")} >
											{" "}
											දෝ{" "} </button> </a>


								</div>
							</div>

							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select18}`} value="න" onClick = {() => this.handleDropdownClick("15")} >
								න
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown15}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="න" onClick={() => this.handleKbutton("න")} >
											{" "}
											න{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="නා" onClick={() => this.handleKbutton("නා")} >
											{" "}
											නා{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="නෑ" onClick={() => this.handleKbutton("නෑ")} >
											{" "}
											නෑ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="න්" onClick={() => this.handleKbutton("න්")} >
											{" "}
											න්{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="නි" onClick={() => this.handleKbutton("නි")} >
											{" "}
											නි{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="නී" onClick={() => this.handleKbutton("නී")} >
											{" "}
											නී{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="නු" onClick={() => this.handleKbutton("නු")} >
											{" "}
											නු{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="නෙ" onClick={() => this.handleKbutton("නෙ")} >
											{" "}
											නෙ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="නේ" onClick={() => this.handleKbutton("නේ")} >
											{" "}
											නේ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="නො" onClick={() => this.handleKbutton("නො")} >
											{" "}
											නො{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect11}`} value="නෝ" onClick={() => this.handleKbutton("නෝ")} >
											{" "}
											නෝ{" "} </button> </a>


								</div>
							</div>

							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select19}`} value="ප" onClick = {() => this.handleDropdownClick("16")} >
								ප
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown16}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ප" onClick={() => this.handleKbutton("ප")} >
											{" "}
											ප{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="පා" onClick={() => this.handleKbutton("පා")} >
											{" "}
											පා{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="පැ" onClick={() => this.handleKbutton("පැ")} >
											{" "}
											පැ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="පෑ" onClick={() => this.handleKbutton("පෑ")} >
											{" "}
											පෑ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="ප්" onClick={() => this.handleKbutton("ප්")} >
											{" "}
											ප්{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="පි" onClick={() => this.handleKbutton("පි")} >
											{" "}
											පි{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="පී" onClick={() => this.handleKbutton("පී")} >
											{" "}
											පී{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="පු" onClick={() => this.handleKbutton("පු")} >
											{" "}
											පු{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="පෙ" onClick={() => this.handleKbutton("පෙ")} >
											{" "}
											පෙ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="පේ" onClick={() => this.handleKbutton("පේ")} >
											{" "}
											පේ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect11}`} value="පො" onClick={() => this.handleKbutton("පො")} >
											{" "}
											පො{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect12}`} value="පෝ" onClick={() => this.handleKbutton("පෝ")} >
											{" "}
											පෝ{" "} </button> </a>


								</div>
							</div>

							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select20}`} value="බ" onClick = {() => this.handleDropdownClick("17")} >
								බ
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown17}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="බ" onClick={() => this.handleKbutton("බ")} >
											{" "}
											බ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="බා" onClick={() => this.handleKbutton("බා")} >
											{" "}
											බා{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="බැ" onClick={() => this.handleKbutton("බැබා")} >
											{" "}
											බැ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="බෑ" onClick={() => this.handleKbutton("බෑ")} >
											{" "}
											බෑ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="බ්" onClick={() => this.handleKbutton("බ්")} >
											{" "}
											බ්{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="බි" onClick={() => this.handleKbutton("බි")} >
											{" "}
											බි{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="බී" onClick={() => this.handleKbutton("බී")} >
											{" "}
											බී{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="බු" onClick={() => this.handleKbutton("බු")} >
											{" "}
											බු{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="බෙ" onClick={() => this.handleKbutton("බෙ")} >
											{" "}
											බෙ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="බේ" onClick={() => this.handleKbutton("බේ")} >
											{" "}
											බේ{" "} </button> </a>


								</div>
							</div>

							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select21}`} value="ම" onClick = {() => this.handleDropdownClick("18")} >
								ම
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown18}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ම" onClick={() => this.handleKbutton("ම")} >
											{" "}
											ම{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="මා" onClick={() => this.handleKbutton("මා")} >
											{" "}
											මා{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="මැ" onClick={() => this.handleKbutton("මැ")} >
											{" "}
											මැ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="මෑ" onClick={() => this.handleKbutton("මෑ")} >
											{" "}
											මෑ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="ම්" onClick={() => this.handleKbutton("ම්")} >
											{" "}
											ම්{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="මි" onClick={() => this.handleKbutton("මි")} >
											{" "}
											මි{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="මී" onClick={() => this.handleKbutton("මී")} >
											{" "}
											මී{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="මු" onClick={() => this.handleKbutton("මු")} >
											{" "}
											මු{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="මෙ" onClick={() => this.handleKbutton("මෙ")} >
											{" "}
											මෙ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="මේ" onClick={() => this.handleKbutton("මේ")} >
											{" "}
											මේ{" "} </button> </a>


								</div>
							</div>
	

							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select22}`} value="ය" onClick = {() => this.handleDropdownClick("19")} >
								ය
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown19}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ය" onClick={() => this.handleKbutton("ය")} >
											{" "}
											ය{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="යා" onClick={() => this.handleKbutton("යා")} >
											{" "}
											යා{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="යැ" onClick={() => this.handleKbutton("යැ")} >
											{" "}
											යැ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="යෑ" onClick={() => this.handleKbutton("යෑ")} >
											{" "}
											යෑ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="යි" onClick={() => this.handleKbutton("යි")} >
											{" "}
											යි{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="යී" onClick={() => this.handleKbutton("යී")} >
											{" "}
											යී{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="යු" onClick={() => this.handleKbutton("යු")} >
											{" "}
											යු{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="යූ" onClick={() => this.handleKbutton("යූ")} >
											{" "}
											යූ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="යෙ" onClick={() => this.handleKbutton("යෙ")} >
											{" "}
											යෙ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="යේ" onClick={() => this.handleKbutton("යේ")} >
											{" "}
											යේ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect11}`} value="යො" onClick={() => this.handleKbutton("යො")} >
											{" "}
											යො{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect12}`} value="යෝ" onClick={() => this.handleKbutton("යෝ")} >
											{" "}
											යෝ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect13}`} value="යෞ" onClick={() => this.handleKbutton("යෞ")} >
											{" "}
											යෞ{" "} </button> </a>


								</div>
							</div>

							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select23}`} value="ර" onClick = {() => this.handleDropdownClick("20")} >
								ර
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown20}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ර" onClick={() => this.handleKbutton("ර")} >
											{" "}
											ර{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="රා" onClick={() => this.handleKbutton("රා")} >
											{" "}
											රා{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="රැ" onClick={() => this.handleKbutton("රැ")} >
											{" "}
											රැ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="රෑ" onClick={() => this.handleKbutton("රෑ")} >
											{" "}
											රෑ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ර්" onClick={() => this.handleKbutton("ර්")} >
											{" "}
											ර්{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="රි" onClick={() => this.handleKbutton("රි")} >
											{" "}
											රි{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="රී" onClick={() => this.handleKbutton("රී")} >
											{" "}
											රී{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="රු" onClick={() => this.handleKbutton("රු")} >
											{" "}
											රු{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="රූ" onClick={() => this.handleKbutton("රූ")} >
											{" "}
											රූ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="රෙ" onClick={() => this.handleKbutton("රෙ")} >
											{" "}
											රෙ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="රේ" onClick={() => this.handleKbutton("රේ")} >
											{" "}
											රේ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="රො" onClick={() => this.handleKbutton("රො")} >
											{" "}
											රො{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="රෝ" onClick={() => this.handleKbutton("රෝ")} >
											{" "}
											රෝ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="රෞ" onClick={() => this.handleKbutton("රෞ")} >
											{" "}
											රෞ{" "} </button> </a>


								</div>
							</div>

							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select24}`} value="ල" onClick = {() => this.handleDropdownClick("21")} >
								ල
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown21}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ල" onClick={() => this.handleKbutton("ල")} >
											{" "}
											ල{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="ලා" onClick={() => this.handleKbutton("ලා")} >
											{" "}
											ලා{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="ලැ" onClick={() => this.handleKbutton("ලැ")} >
											{" "}
											ලැ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="ලෑ" onClick={() => this.handleKbutton("ලෑ")} >
											{" "}
											ලෑ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="ල්" onClick={() => this.handleKbutton("ල්")} >
											{" "}
											ල්{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="ලි" onClick={() => this.handleKbutton("ලි")} >
											{" "}
											ලි{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="ලී" onClick={() => this.handleKbutton("ලී")} >
											{" "}
											ලී{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="ලු" onClick={() => this.handleKbutton("ලු")} >
											{" "}
											ලු{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="ලූ" onClick={() => this.handleKbutton("ලූ")} >
											{" "}
											ලූ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="ලෙ" onClick={() => this.handleKbutton("ලෙ")} >
											{" "}
											ලෙ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect11}`} value="ලේ" onClick={() => this.handleKbutton("ලේ")} >
											{" "}
											ලේ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect12}`} value="ලො" onClick={() => this.handleKbutton("ලො")} >
											{" "}
											ලො{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect13}`} value="ලෝ" onClick={() => this.handleKbutton("ලෝ")} >
											{" "}
											ලෝ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect14}`} value="ලෞ" onClick={() => this.handleKbutton("ලෞ")} >
											{" "}
											ලෞ{" "} </button> </a>


								</div>
							</div>
						</div>
	
						<div class="row1">

						<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select25}`} value="ව" onClick = {() => this.handleDropdownClick("22")} >
								ව
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown22}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ව" onClick={() => this.handleKbutton("ව")} >
											{" "}
											ව{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="වා" onClick={() => this.handleKbutton("වා")} >
											{" "}
											වා{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="වැ" onClick={() => this.handleKbutton("වැ")} >
											{" "}
											වැ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="වෑ" onClick={() => this.handleKbutton("වෑ")} >
											{" "}
											වෑ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="ව්" onClick={() => this.handleKbutton("ව්")} >
											{" "}
											ව්{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="වි" onClick={() => this.handleKbutton("වි")} >
											{" "}
											වි{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="වී" onClick={() => this.handleKbutton("වී")} >
											{" "}
											වී{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="වු" onClick={() => this.handleKbutton("වු")} >
											{" "}
											වු{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="වූ" onClick={() => this.handleKbutton("වූ")} >
											{" "}
											වූ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="වෙ" onClick={() => this.handleKbutton("වෙ")} >
											{" "}
											වෙ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect11}`} value="වේ" onClick={() => this.handleKbutton("වේ")} >
											{" "}
											වේ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect12}`} value="වේ" onClick={() => this.handleKbutton("වේ")} >
											{" "}
											වේ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect13}`} value="වො" onClick={() => this.handleKbutton("වො")} >
											{" "}
											වො{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect14}`} value="වෝ" onClick={() => this.handleKbutton("වෝ")} >
											{" "}
											වෝ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect15}`} value="වෞ" onClick={() => this.handleKbutton("වෞ")} >
											{" "}
											වෞ{" "} </button> </a>

								</div>
							</div>
	
							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select25}`} value="ශ" onClick = {() => this.handleDropdownClick("22")} >
								ශ
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown22}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ශ" onClick={() => this.handleKbutton("ශ")} >
											{" "}
											ශ{" "} </button> </a>

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
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ශ" onClick={() => this.handleKbutton("ශ")} >
											{" "}
											ශ{" "} </button> </a>


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
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ශ" onClick={() => this.handleKbutton("ශ")} >
											{" "}
											ශ{" "} </button> </a>


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
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ශ" onClick={() => this.handleKbutton("ශ")} >
											{" "}
											ශ{" "} </button> </a>


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
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ශ" onClick={() => this.handleKbutton("ශ")} >
											{" "}
											ශ{" "} </button> </a>


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
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ශ" onClick={() => this.handleKbutton("ශ")} >
											{" "}
											ශ{" "} </button> </a>


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
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ශ" onClick={() => this.handleKbutton("ශ")} >
											{" "}
											ශ{" "} </button> </a>


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
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ශ" onClick={() => this.handleKbutton("ශ")} >
											{" "}
											ශ{" "} </button> </a>


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
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ශ" onClick={() => this.handleKbutton("ශ")} >
											{" "}
											ශ{" "} </button> </a>


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
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ශ" onClick={() => this.handleKbutton("ශ")} >
											{" "}
											ශ{" "} </button> </a>


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
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ශ" onClick={() => this.handleKbutton("ශ")} >
											{" "}
											ශ{" "} </button> </a>


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
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ශ" onClick={() => this.handleKbutton("ශ")} >
											{" "}
											ශ{" "} </button> </a>


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

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ශ" onClick={() => this.handleKbutton("ශ")} >
											{" "}
											ශ{" "} </button> </a>

											
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

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
			drpdown1 : "",drpdown2 : "",drpdown3 : "",drpdown4 : "",drpdown5 : "",drpdown6 : "",drpdown7 : "",drpdown8 : "",drpdown9 : "",drpdown10 : "",drpdown11 : "",drpdown12 : "",drpdown13 : "",drpdown14 : "",drpdown15 : "",drpdown16 : "",drpdown17 : "",drpdown18 : "",drpdown19 : "",drpdown20 : "",drpdown21 : "",drpdown22 : "",drpdown23 : "",drpdown24 : "",drpdown25 : "",drpdown26 : "",drpdown27 : "",drpdown28 : "",drpdown29 : "",drpdown30 : "",
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
		if (index == 205 && this.state.count == 0) {
			this.handleDropdownClick("3");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 3});
			this.setState({ count: 1 });
		}
		if (index == 206 && this.state.count == 0) {
			this.handleDropdownClick("4");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 4});
			this.setState({ count: 1 });
		}
		if (index == 207 && this.state.count == 0) {
			this.handleDropdownClick("5");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 5});
			this.setState({ count: 1 });
		}
		if (index == 208 && this.state.count == 0) {
			this.handleDropdownClick("6");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 6});
			this.setState({ count: 1 });
		}
		if (index == 209 && this.state.count == 0) {
			this.handleDropdownClick("7");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 7});
			this.setState({ count: 1 });
		}
		if (index == 210 && this.state.count == 0) {
			this.handleDropdownClick("8");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 8});
			this.setState({ count: 1 });
		}
		if (index == 211 && this.state.count == 0) {
			this.handleDropdownClick("9");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 9});
			this.setState({ count: 1 });
		}
		if (index == 212 && this.state.count == 0) {
			this.handleDropdownClick("10");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 10});
			this.setState({ count: 1 });
		}
		if (index == 213 && this.state.count == 0) {
			this.handleDropdownClick("11");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 11});
			this.setState({ count: 1 });
		}
		if (index == 214 && this.state.count == 0) {
			this.handleDropdownClick("12");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 12});
			this.setState({ count: 1 });
		}
		if (index == 215 && this.state.count == 0) {
			this.handleDropdownClick("13");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 13});
			this.setState({ count: 1 });
		}
		if (index == 216 && this.state.count == 0) {
			this.handleDropdownClick("14");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 14});
			this.setState({ count: 1 });
		}
		if (index == 217 && this.state.count == 0) {
			this.handleDropdownClick("15");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 15});
			this.setState({ count: 1 });
		}
		if (index == 218 && this.state.count == 0) {
			this.handleDropdownClick("16");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 16});
			this.setState({ count: 1 });
		}
		if (index == 219 && this.state.count == 0) {
			this.handleDropdownClick("17");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 17});
			this.setState({ count: 1 });
		}
		if (index == 220 && this.state.count == 0) {
			this.handleDropdownClick("18");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 18});
			this.setState({ count: 1 });
		}
		if (index == 221 && this.state.count == 0) {
			this.handleDropdownClick("19");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 19});
			this.setState({ count: 1 });
		}
		if (index == 222 && this.state.count == 0) {
			this.handleDropdownClick("20");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 20});
			this.setState({ count: 1 });
		}
		if (index == 223 && this.state.count == 0) {
			this.handleDropdownClick("21");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 21});
			this.setState({ count: 1 });
		}
		if (index == 224 && this.state.count == 0) {
			this.handleDropdownClick("22");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 22});
			this.setState({ count: 1 });
		}
		if (index == 225 && this.state.count == 0) {
			this.handleDropdownClick("23");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 23});
			this.setState({ count: 1 });
		}
		if (index == 226 && this.state.count == 0) {
			this.handleDropdownClick("24");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 24});
			this.setState({ count: 1 });
		}
		if (index == 227 && this.state.count == 0) {
			this.handleDropdownClick("25");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 25});
			this.setState({ count: 1 });
		}
		if (index == 228 && this.state.count == 0) {
			this.handleDropdownClick("26");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 26});
			this.setState({ count: 1 });
		}
		if (index == 229 && this.state.count == 0) {
			this.handleDropdownClick("27");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 27});
			this.setState({ count: 1 });
		}
		if (index == 230 && this.state.count == 0) {
			this.handleDropdownClick("28");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 28});
			this.setState({ count: 1 });
		}
		if (index == 231 && this.state.count == 0) {
			this.handleDropdownClick("29");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 29});
			this.setState({ count: 1 });
		}
		if (index == 232 && this.state.count == 0) {
			this.handleDropdownClick("30");
			this.setState({ count3: 0 });
			this.setState({drpdownNum: 30});
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
	

	//උ section
	if (index == 246) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("උ");
	}
	if (index == 247) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ඌ");
	}

	//එ section
	if (index == 248) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("එ");
	}
	if (index == 249) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ඒ");
	}
	if (index == 250) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ඵෙ");
	}

	//ඔ section
	if (index == 251) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ඔ");
	}
	if (index == 252) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ඕ");
	}
	if (index == 253) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ඖ");
	}

	//ක section
	if (index == 254) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ක");
	}
	if (index == 255) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("කා");
	}
	if (index == 256) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("කැ");
	}
	if (index == 257) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("කෑ");
	}
	if (index == 258) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ක්");
	}
	if (index == 259) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("කි");
	}
	if (index == 260) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("කු");
	}
	if (index == 261) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("කෙ");
	}
	if (index == 261) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("කේ");
	}
	if (index == 261) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("කො");
	}
	if (index == 261) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("කෝ");
	}
	if (index == 261) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("කෞ");
	}
	
	//ග section
	if (index == 262) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ග");
	}
	if (index == 263) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ගා");
	}
	if (index == 264) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ගැ");
	}
	if (index == 265) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ගෑ");
	}
	if (index == 266) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ග්");
	}
	if (index == 267) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ගි");
	}
	if (index == 268) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ගු");
	}
	if (index == 269) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ගෙ");
	}
	if (index == 270) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ගේ");
	}
	if (index == 271) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ගො");
	}
	if (index == 272) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ගෝ");
	}
	if (index == 273) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ගෞ");
	}

	//ච section
	if (index == 274) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ච");
	}
	if (index == 275) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("චා");
	}
	if (index == 276) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("චැ");
	}
	if (index == 277) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("චෑ");
	}
	if (index == 278) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ච්");
	}
	if (index == 279) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("චී");
	}
	if (index == 280) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("චු");
	}
	if (index == 281) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("චෙ");
	}
	if (index == 282) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("චො");
	}
	if (index == 283) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("චෝ");
	}
	if (index == 284) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("චෞ");
	}


	//ජ section
	if (index == 285) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ජ");
	}
	if (index == 286) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ජා");
	}
	if (index == 287) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ජැ");
	}
	if (index == 288) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ජෑ");
	}
	if (index == 289) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ජ්");
	}
	if (index == 290) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ජි");
	}
	if (index == 291) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ජු");
	}
	if (index == 292) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ජෙ");
	}
	if (index == 293) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ජේ");
	}
	if (index == 294) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ජො");
	}
	if (index == 295) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ජෝ");
	}

	//ට section
	if (index == 296) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ට");
	}
	if (index == 297) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ටා");
	}
	if (index == 298) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ටැ");
	}
	if (index == 299) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ටෑ");
	}
	if (index == 300) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ටි");
	}
	if (index == 301) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ට්");
	}
	if (index == 302) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ටී");
	}
	if (index == 303) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ටු");
	}
	if (index == 304) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ටෙ");
	}
	if (index == 305) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ටේ");
	}
	if (index == 306) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ටෝ");
	}
	if (index == 307) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ටෝ");
	}

	//ඩ section
	if (index == 308) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ඩ");
	}
	if (index == 309) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ඩා");
	}
	if (index == 310) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ඩැ");
	}
	if (index == 311) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ඩෑ");
	}
	if (index == 312) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ඩ්");
	}
	if (index == 313) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ඩි");
	}
	if (index == 314) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ඩු");
	}
	if (index == 315) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ඩෙ");
	}
	if (index == 316) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ඩේ");
	}
	if (index == 317) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ඩො");
	}
	if (index == 318) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ඩෝ");
	}

	//ණ section
	if (index == 319) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ණ");
	}
	if (index == 320) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ණා");
	}
	if (index == 321) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ණැ");
	}
	if (index == 322) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ණෑ");
	}
	if (index == 323) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ණ්");
	}
	if (index == 324) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ණි");
	}
	if (index == 325) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ණී");
	}
	if (index == 326) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ණු");
	}
	if (index == 327) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ණෙ");
	}
	if (index == 328) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ණො");
	}
	if (index == 329) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ණෝ");
	}


	//ත section
	if (index == 330) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ත");
	}
	if (index == 331) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("තා");
	}
	if (index == 332) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("තැ");
	}
	if (index == 333) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("තෑ");
	}
	if (index == 334) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ත්");
	}
	if (index == 335) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ති");
	}
	if (index == 336) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("තී");
	}
	if (index == 337) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("තු");
	}
	if (index == 338) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("තෙ");
	}
	if (index == 339) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("තේ");
	}
	if (index == 340) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("තො");
	}
	if (index == 341) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("තෝ");
	}

	//ද section
	if (index == 342) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ද");
	}
	if (index == 343) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("දා");
	}
	if (index == 344) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("දැ");
	}
	if (index == 345) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("දෑ");
	}
	if (index == 346) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ද්");
	}
	if (index == 347) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("දි");
	}
	if (index == 348) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("දී");
	}
	if (index == 349) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("දු");
	}
	if (index == 350) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("දෙ");
	}
	if (index == 351) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("දේ");
	}
	if (index == 352) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("දො");
	}
	if (index == 353) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("දෝ");
	}


	//න section
	if (index == 354) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("න");
	}
	if (index == 355) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("නා");
	}
	if (index == 356) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("නෑ");
	}
	if (index == 357) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("න්");
	}
	if (index == 358) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("නි");
	}
	if (index == 359) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("නී");
	}
	if (index == 360) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("නු");
	}
	if (index == 361) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("නෙ");
	}
	if (index == 362) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("නේ");
	}
	if (index == 363) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("නො");
	}
	if (index == 364) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("නෝ");
	}


	//ප section
	if (index == 365) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ප");
	}
	if (index == 366) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("පා");
	}
	if (index == 367) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("පැ");
	}
	if (index == 368) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("පෑ");
	}
	if (index == 369) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ප්");
	}
	if (index == 370) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("පි");
	}
	if (index == 371) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("පී");
	}
	if (index == 372) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("පු");
	}
	if (index == 373) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("පෙ");
	}
	if (index == 374) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("පේ");
	}
	if (index == 375) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("පො");
	}
	if (index == 375) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("පෝ");
	}

	//බ section
	if (index == 376) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("බ");
	}
	if (index == 377) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("බා");
	}
	if (index == 378) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("බැ");
	}
	if (index == 379) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("බෑ");
	}
	if (index == 380) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("බ්");
	}
	if (index == 381) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("බි");
	}
	if (index == 382) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("බී");
	}
	if (index == 383) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("බු");
	}
	if (index == 384) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("බෙ");
	}
	if (index == 385) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("බේ");
	}


	//ම section
	if (index == 386) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ම");
	}
	if (index == 387) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("මා");
	}
	if (index == 388) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("මැ");
	}
	if (index == 389) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("මෑ");
	}
	if (index == 390) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ම්");
	}
	if (index == 391) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("මි");
	}
	if (index == 392) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("මී");
	}
	if (index == 393) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("මු");
	}
	if (index == 394) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("මෙ");
	}
	if (index == 395) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("මේ");
	}


	//ය section
	if (index == 396) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ය");
	}
	if (index == 397) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("යා");
	}
	if (index == 398) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("යැ");
	}
	if (index == 399) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("යෑ");
	}
	if (index == 400) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("යි");
	}
	if (index == 401) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("යී");
	}
	if (index == 402) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("යු");
	}
	if (index == 403) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("යූ");
	}
	if (index == 404) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("යෙ");
	}
	if (index == 405) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("යේ");
	}
	if (index == 406) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("යො");
	}
	if (index == 407) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("යෝ");
	}
	if (index == 408) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("යෞ");
	}


	//ර section
	if (index == 409) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ර");
	}
	if (index == 410) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("රා");
	}
	if (index == 411) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("රැ");
	}
	if (index == 412) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("රෑ");
	}
	if (index == 413) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ර්");
	}
	if (index == 414) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("රි");
	}
	if (index == 415) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("රු");
	}
	if (index == 416) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("රූ");
	}
	if (index == 417) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("රෙ");
	}
	if (index == 418) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("රේ");
	}
	if (index == 419) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("රො");
	}
	if (index == 420) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("රෝ");
	}
	if (index == 421) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("රෞ");
	}

	//ල section
	if (index == 422) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ල");
	}
	if (index == 423) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලා");
	}
	if (index == 424) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලැ");
	}
	if (index == 425) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලෑ");
	}
	if (index == 426) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ල්");
	}
	if (index == 427) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලි");
	}
	if (index == 428) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලී");
	}
	if (index == 429) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලු");
	}
	if (index == 430) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලූ");
	}
	if (index == 431) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලෙ");
	}
	if (index == 432) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලේ");
	}
	if (index == 433) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලො");
	}
	if (index == 434) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලෝ");
	}
	if (index == 435) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලෞ");
	}


	//ල section
	if (index == 436) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ල");
	}
	if (index == 437) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලා");
	}
	if (index == 438) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලැ");
	}
	if (index == 439) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලෑ");
	}
	if (index == 440) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ල්");
	}
	if (index == 441) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලි");
	}
	if (index == 442) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලී");
	}
	if (index == 443) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලු");
	}
	if (index == 444) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලූ");
	}
	if (index == 445) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලෙ");
	}
	if (index == 446) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලේ");
	}
	if (index == 447) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලො");
	}
	if (index == 448) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලෝ");
	}
	if (index == 449) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ලෞ");
	}

	

	//ව section
	if (index == 450) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ව");
	}
	if (index == 451) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("වා");
	}
	if (index == 452) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("වැ");
	}
	if (index == 453) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("වෑ");
	}
	if (index == 454) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ව්");
	}
	if (index == 455) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("වි");
	}
	if (index == 456) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("වී");
	}
	if (index == 457) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("වු");
	}
	if (index == 458) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("වෙ");
	}
	if (index == 459) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("වේ");
	}
	if (index == 460) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("වො");
	}
	if (index == 461) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("වෝ");
	}
	if (index == 462) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("වෞ");
	}

	//ශ section
	if (index == 463) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ශ");
	}
	if (index == 464) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ශා");
	}
	if (index == 465) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ශැ");
	}
	if (index == 466) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ශැ");
	}
	if (index == 467) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ශ්");
	}
	if (index == 468) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ශි");
	}
	if (index == 469) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ශී");
	}
	if (index == 470) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ශු");
	}
	if (index == 471) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ශූ");
	}
	if (index == 472) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ශෙ");
	}
	if (index == 473) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ශේ");
	}
	if (index == 474) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ශො");
	}
	if (index == 475) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ශෞ");
	}

	//ස section
	if (index == 476) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ස");
	}
	if (index == 477) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("සා");
	}
	if (index == 478) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("සැ");
	}
	if (index == 479) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("සෑ");
	}
	if (index == 480) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ස්");
	}
	if (index == 481) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("සි");
	}
	if (index == 482) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("සී");
	}
	if (index == 483) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("සු");
	}
	if (index == 484) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("සූ");
	}
	if (index == 485) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("සෙ");
	}
	if (index == 486) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("සේ");
	}
	if (index == 487) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("සො");
	}
	if (index == 488) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("සෝ");
	}
	if (index == 489) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("සෞ");
	}

	//හ section
	if (index == 490) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("හ");
	}
	if (index == 491) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("හා");
	}
	if (index == 492) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("හැ");
	}
	if (index == 493) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("හෑ");
	}
	if (index == 494) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("හ්");
	}
	if (index == 495) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("හි");
	}
	if (index == 496) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("හී");
	}
	if (index == 497) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("හු");
	}
	if (index == 498) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("හූ");
	}
	if (index == 499) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("හෙ");
	}
	if (index == 500) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("හේ");
	}
	if (index == 501) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("හො");
	}
	if (index == 502) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("හෝ");
	}
	if (index == 503) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("හෞ");
	}

	//ෆ section
	if (index == 504) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ෆ");
	}
	if (index == 505) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ෆා");
	}
	if (index == 506) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ෆැ");
	}
	if (index == 507) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ෆෑ");
	}
	if (index == 508) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ෆ්");
	}
	if (index == 509) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ෆි");
	}
	if (index == 510) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ෆී");
	}
	if (index == 511) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ෆු");
	}
	if (index == 512) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ෆූ");
	}
	if (index == 513) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ෆෙ");
	}
	if (index == 514) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ෆේ");
	}
	if (index == 515) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ෆො");
	}
	if (index == 516) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ෆෝ");
	}
	if (index == 517) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ෆෞ");
	}

	//ළ section
	if (index == 518) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ළ");
	}
	if (index == 519) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ළා");
	}
	if (index == 520) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ළැ");
	}
	if (index == 521) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ළෑ");
	}
	if (index == 522) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ළ්");
	}
	if (index == 523) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ළි");
	}
	if (index == 524) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ළී");
	}
	if (index == 525) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ළෙ");
	}
	if (index == 526) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ළේ");
	}
	if (index == 527) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ළො");
	}
	if (index == 528) {
		this.setState({ count:  0 });
		this.setState({ count3: 1 });
		//this.setState({drpEn : false})
		this.handleKbutton("ළෝ");
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
		this.props.updateIndex(4);
	}

	handleSpace() {
		//chars.push(' ')
		this.setState({text : this.state.text + " "});
		//console.log(chars)

		//setText(chars.join(' '))
		this.props.updateIndex(4);
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

		let select1,select2, select3, select4, select5, select6, select7, select8, select9 ,select10 ,select11 ,select12 ,select13 ,select14 ,select15 ,select16 ,select17 ,select18 ,select19 ,select20 ,select21 ,select22 ,select23 ,select24 ,select25 ,select26 ,select27 ,select28 ,select29 ,select30 ,select31 ,select32 ,select33 ,select34    = ""
		
		let subSelect1, subSelect2, subSelect3, subSelect4, subSelect5, subSelect6, subSelect7, subSelect8, subSelect9, subSelect10, subSelect11, subSelect12, subSelect13, subSelect14, subSelect15, subSelect16, subSelect17= ""
		
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
			if (counter == 3) {
				select4 = "selected"
			}
			if (counter == 4) {
				select5 = "selected"
			}
			if (counter == 5) {
				select6 = "selected"
			}
			if (counter == 6) {
				select7 = "selected"
			}
			if (counter == 7) {
				select8 = "selected"
			}
			if (counter == 8) {
				select9 = "selected"
			}
			if (counter == 9) {
				select10 = "selected"
			}
			if (counter == 10) {
				select11 = "selected"
			}
			if (counter == 11) {
				select12 = "selected"
			}
			if (counter == 12) {
				select13 = "selected"
			}
			if (counter == 13) {
				select14 = "selected"
			}
			if (counter == 14) {
				select15 = "selected"
			}
			if (counter == 15) {
				select16 = "selected"
			}
			if (counter == 16) {
				select17 = "selected"
			}
			if (counter == 17) {
				select18 = "selected"
			}
			if (counter == 18) {
				select19 = "selected"
			}
			if (counter == 19) {
				select20 = "selected"
			}
			if (counter == 20) {
				select21 = "selected"
			}
			if (counter == 21) {
				select22 = "selected"
			}
			if (counter == 22) {
				select23 = "selected"
			}
			if (counter == 23) {
				select24 = "selected"
			}
			if (counter == 24) {
				select25 = "selected"
			}
			if (counter == 25) {
				select26 = "selected"
			}
			if (counter == 26) {
				select27 = "selected"
			}
			if (counter == 27) {
				select28 = "selected"
			}
			if (counter == 28) {
				select29 = "selected"
			}
			if (counter == 29) {
				select30 = "selected"
			}

		}

		if(index == 200){
			select1 = "selection";
		}
		if(index == 201){
			select2 = "selection";
		}
		if(index == 202){
			select3 = "selection";
		}


		//sub keys
		//අ section

		if (index == 203) {
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
		if (index == 204) {
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
											
											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="ඵෙ" onClick={() => this.handleKbutton("ඒ")} >
											{" "}
											ඵෙ{" "} </button> </a>

											
										

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
											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ඖ" onClick={() => this.handleKbutton("ඕ")} >
											{" "}
											ඖ{" "} </button> </a>		
	
							
									
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
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="වී" onClick={() => this.handleKbutton("වී")} >
											{" "}
											වී{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="චු" onClick={() => this.handleKbutton("චු")} >
											{" "}
											චු{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="වූ" onClick={() => this.handleKbutton("වූ")} >
											{" "}
											වූ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="චෙ" onClick={() => this.handleKbutton("චෙ")} >
											{" "}
											චෙ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect11}`} value="වේ" onClick={() => this.handleKbutton("වේ")} >
											{" "}
											වේ{" "} </button> </a>


											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect12}`} value="චො" onClick={() => this.handleKbutton("චො")} >
											{" "}
											චො{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect13}`} value="චෝ" onClick={() => this.handleKbutton("චෝ")} >
											{" "}
											චෝ{" "} </button> </a>

											<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect14}`} value="චෞ" onClick={() => this.handleKbutton("චෞ")} >
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
								<button id="Kbutton" class={`Kbutton ${select26}`} value="ශ" onClick = {() => this.handleDropdownClick("23")} >
								ශ
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown23}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ශ" onClick={() => this.handleKbutton("ශ")} >
											{" "}
											ශ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="ශා" onClick={() => this.handleKbutton("ශා")} >
											{" "}
											ශා{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="ශැ" onClick={() => this.handleKbutton("ශැ")} >
											{" "}
											ශැ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="ශෑ" onClick={() => this.handleKbutton("ශෑ")} >
											{" "}
											ශෑ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="ශ්" onClick={() => this.handleKbutton("ශ්")} >
											{" "}
											ශ්{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="ශි" onClick={() => this.handleKbutton("ශි")} >
											{" "}
											ශි{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="ශී" onClick={() => this.handleKbutton("ශී")} >
											{" "}
											ශී{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="ශු" onClick={() => this.handleKbutton("ශු")} >
											{" "}
											ශු{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="ශූ" onClick={() => this.handleKbutton("ශූ")} >
											{" "}
											ශූ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="ශෙ" onClick={() => this.handleKbutton("ශෙ")} >
											{" "}
											ශෙ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect11}`} value="ශේ" onClick={() => this.handleKbutton("ශේ")} >
											{" "}
											ශේ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect12}`} value="ශො" onClick={() => this.handleKbutton("ශො")} >
											{" "}
											ශො{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect13}`} value="ශෞ" onClick={() => this.handleKbutton("ශෞ")} >
											{" "}
											ශෞ{" "} </button> </a>


								</div>
							</div>


							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select27}`} value="ස" onClick = {() => this.handleDropdownClick("24")} >
								ස
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown24}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ස" onClick={() => this.handleKbutton("ස")} >
											{" "}
											ස{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="සා" onClick={() => this.handleKbutton("සා")} >
											{" "}
											සා{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="සැ" onClick={() => this.handleKbutton("සැ")} >
											{" "}
											සැ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="සෑ" onClick={() => this.handleKbutton("සෑ")} >
											{" "}
											සෑ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="ස්" onClick={() => this.handleKbutton("ස්")} >
											{" "}
											ස්{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="සි" onClick={() => this.handleKbutton("සි")} >
											{" "}
											සි{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="සී" onClick={() => this.handleKbutton("සී")} >
											{" "}
											සී{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="සු" onClick={() => this.handleKbutton("සු")} >
											{" "}
											සු{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="සූ" onClick={() => this.handleKbutton("සූ")} >
											{" "}
											සූ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="සෙ" onClick={() => this.handleKbutton("සෙ")} >
											{" "}
											සෙ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect11}`} value="සේ" onClick={() => this.handleKbutton("සේ")} >
											{" "}
											සේ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect12}`} value="සො" onClick={() => this.handleKbutton("සො")} >
											{" "}
											සො{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect13}`} value="සෝ" onClick={() => this.handleKbutton("සෝ")} >
											{" "}
											සෝ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect14}`} value="සෞ" onClick={() => this.handleKbutton("සෞ")} >
											{" "}
											සෞ{" "} </button> </a>


								</div>
							</div>

							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select28}`} value="හ" onClick = {() => this.handleDropdownClick("25")} >
								හ
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown25}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="හ" onClick={() => this.handleKbutton("හ")} >
											{" "}
											හ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="හා" onClick={() => this.handleKbutton("හා")} >
											{" "}
											හා{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="හැ" onClick={() => this.handleKbutton("හැ")} >
											{" "}
											හැ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="හෑ" onClick={() => this.handleKbutton("හෑ")} >
											{" "}
											හෑ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="හ්" onClick={() => this.handleKbutton("හ්")} >
											{" "}
											හ්{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="හි" onClick={() => this.handleKbutton("හි")} >
											{" "}
											හි{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="හී" onClick={() => this.handleKbutton("හී")} >
											{" "}
											හී{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="හු" onClick={() => this.handleKbutton("හු")} >
											{" "}
											හු{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="හූ" onClick={() => this.handleKbutton("හූ")} >
											{" "}
											හූ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="හෙ" onClick={() => this.handleKbutton("හෙ")} >
											{" "}
											හෙ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="හේ" onClick={() => this.handleKbutton("හේ")} >
											{" "}
											හේ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect11}`} value="හො" onClick={() => this.handleKbutton("හො")} >
											{" "}
											හො{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect12}`} value="හෝ" onClick={() => this.handleKbutton("හෝ")} >
											{" "}
											හෝ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect13}`} value="හෞ" onClick={() => this.handleKbutton("හෞ")} >
											{" "}
											හෞ{" "} </button> </a>


								</div>
							</div>

							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select29}`} value="ෆ" onClick = {() => this.handleDropdownClick("26")} >
								ෆ
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown26}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ෆ" onClick={() => this.handleKbutton("ෆ")} >
											{" "}
											ෆ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ෆා" onClick={() => this.handleKbutton("ෆා")} >
											{" "}
											ෆා{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ෆැ" onClick={() => this.handleKbutton("ෆැ")} >
											{" "}
											ෆැ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ෆෑ" onClick={() => this.handleKbutton("ෆෑ")} >
											{" "}
											ෆෑ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ෆ්" onClick={() => this.handleKbutton("ෆ්")} >
											{" "}
											ෆ්{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ෆි" onClick={() => this.handleKbutton("ෆි")} >
											{" "}
											ෆි{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ෆී" onClick={() => this.handleKbutton("ෆී")} >
											{" "}
											ෆී{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ෆු" onClick={() => this.handleKbutton("ෆු")} >
											{" "}
											ෆු{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ෆූ" onClick={() => this.handleKbutton("ෆූ")} >
											{" "}
											ෆූ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ෆෙ" onClick={() => this.handleKbutton("ෆෙ")} >
											{" "}
											ෆෙ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ෆේ" onClick={() => this.handleKbutton("ෆේ")} >
											{" "}
											ෆේ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ෆො" onClick={() => this.handleKbutton("ෆො")} >
											{" "}
											ෆො{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ෆෝ" onClick={() => this.handleKbutton("ෆෝ")} >
											{" "}
											ෆෝ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ෆෞ" onClick={() => this.handleKbutton("ෆෞ")} >
											{" "}
											ෆෞ{" "} </button> </a>


								</div>
							</div>


							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select30}`} value="ළ" onClick = {() => this.handleDropdownClick("27")} >
								ළ
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown27}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ළ" onClick={() => this.handleKbutton("ළ")} >
											{" "}
											ළ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="ළා" onClick={() => this.handleKbutton("ළා")} >
											{" "}
											ළා{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="ළැ" onClick={() => this.handleKbutton("ළැ")} >
											{" "}
											ළැ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="ළෑ" onClick={() => this.handleKbutton("ළෑ")} >
											{" "}
											ළෑ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="ළ්" onClick={() => this.handleKbutton("ළ්")} >
											{" "}
											ළ්{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="ළි" onClick={() => this.handleKbutton("ළි")} >
											{" "}
											ළි{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="ළී" onClick={() => this.handleKbutton("ළී")} >
											{" "}
											ළී{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="ළෙ" onClick={() => this.handleKbutton("ළෙ")} >
											{" "}
											ළෙ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="ළේ" onClick={() => this.handleKbutton("ළේ")} >
											{" "}
											ළේ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="ළො" onClick={() => this.handleKbutton("ළො")} >
											{" "}
											ළො{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect11}`} value="ළෝ" onClick={() => this.handleKbutton("ළෝ")} >
											{" "}
											ළෝ{" "} </button> </a>


								</div>
							</div>

							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select31}`} value="ථ" onClick = {() => this.handleDropdownClick("28")} >
								ථ
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown28}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ථ" onClick={() => this.handleKbutton("ථ")} >
											{" "}
											ථ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ථා" onClick={() => this.handleKbutton("ථා")} >
											{" "}
											ථා{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ථැ" onClick={() => this.handleKbutton("ථැ")} >
											{" "}
											ථැ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ථෑ" onClick={() => this.handleKbutton("ථෑ")} >
											{" "}
											ථෑ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ථ්" onClick={() => this.handleKbutton("ථ්")} >
											{" "}
											ථ්{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ථි" onClick={() => this.handleKbutton("ථි")} >
											{" "}
											ථි{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ථී" onClick={() => this.handleKbutton("ථී")} >
											{" "}
											ථී{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ථු" onClick={() => this.handleKbutton("ථු")} >
											{" "}
											ථු{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ථූ" onClick={() => this.handleKbutton("ථූ")} >
											{" "}
											ථූ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ථෙ" onClick={() => this.handleKbutton("ථෙ")} >
											{" "}
											ථෙ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ථේ" onClick={() => this.handleKbutton("ථේ")} >
											{" "}
											ථේ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ථො" onClick={() => this.handleKbutton("ථො")} >
											{" "}
											ථො{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ථෝ" onClick={() => this.handleKbutton("ථෝ")} >
											{" "}
											ථෝ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ථෞ" onClick={() => this.handleKbutton("ථෞ")} >
											{" "}
											ථෞ{" "} </button> </a>


								</div>
							</div>

							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select32}`} value="භ" onClick = {() => this.handleDropdownClick("29")} >
								භ
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown29}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="භ" onClick={() => this.handleKbutton("භ")} >
											{" "}
											භ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="භා" onClick={() => this.handleKbutton("භා")} >
											{" "}
											භා{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="භැ" onClick={() => this.handleKbutton("භැ")} >
											{" "}
											භැ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="භෑ" onClick={() => this.handleKbutton("භෑ")} >
											{" "}
											භෑ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="භ්" onClick={() => this.handleKbutton("භ්")} >
											{" "}
											භ්{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="භි" onClick={() => this.handleKbutton("භි")} >
											{" "}
											භි{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="භී" onClick={() => this.handleKbutton("භී")} >
											{" "}
											භී{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="භු" onClick={() => this.handleKbutton("භු")} >
											{" "}
											භු{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="භූ" onClick={() => this.handleKbutton("භූ")} >
											{" "}
											භූ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="භෙ" onClick={() => this.handleKbutton("භෙ")} >
											{" "}
											භෙ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect11}`} value="භේ" onClick={() => this.handleKbutton("භේ")} >
											{" "}
											භේ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect12}`} value="භො" onClick={() => this.handleKbutton("භො")} >
											{" "}
											භො{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect13}`} value="භෝ" onClick={() => this.handleKbutton("භෝ")} >
											{" "}
											භෝ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect14}`} value="භෞ" onClick={() => this.handleKbutton("භෞ")} >
											{" "}
											භෞ{" "} </button> </a>


								</div>
							</div>

							<div class="dropdown1">
								<button id="Kbutton" class={`Kbutton ${select33}`} value="ෂ" onClick = {() => this.handleDropdownClick("30")} >
								ෂ
								</button>
								<div class={`dropdown-content1 ${this.state.drpdown30}`} >
									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect1}`} value="ෂ" onClick={() => this.handleKbutton("ෂ")} >
											{" "}
											ෂ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect2}`} value="ෂා" onClick={() => this.handleKbutton("ෂා")} >
											{" "}
											ෂා{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect3}`} value="ෂැ" onClick={() => this.handleKbutton("ෂැ")} >
											{" "}
											ෂැ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect4}`} value="ෂෑ" onClick={() => this.handleKbutton("ෂෑ")} >
											{" "}
											ෂෑ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect5}`} value="ෂ්" onClick={() => this.handleKbutton("ෂ්")} >
											{" "}
											ෂ්{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect6}`} value="ෂි" onClick={() => this.handleKbutton("ෂි")} >
											{" "}
											ෂි{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect7}`} value="ෂී" onClick={() => this.handleKbutton("ෂී")} >
											{" "}
											ෂී{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect8}`} value="ෂු" onClick={() => this.handleKbutton("ෂු")} >
											{" "}
											ෂු{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect9}`} value="ෂු" onClick={() => this.handleKbutton("ෂු")} >
											{" "}
											ෂු{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect10}`} value="ෂූ" onClick={() => this.handleKbutton("ෂූ")} >
											{" "}
											ෂූ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect11}`} value="ෂෙ" onClick={() => this.handleKbutton("ෂෙ")} >
											{" "}
											ෂෙ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect12}`} value="ෂේ" onClick={() => this.handleKbutton("ෂේ")} >
											{" "}
											ෂේ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect13}`} value="ෂො" onClick={() => this.handleKbutton("ෂො")} >
											{" "}
											ෂො{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect14}`} value="ෂෝ" onClick={() => this.handleKbutton("ෂෝ")} >
											{" "}
											ෂෝ{" "} </button> </a>

									<a href="#">
										{" "}
										<button id="Kbutton" class={`Kbutton ${subSelect15}`} value="ෂෞ" onClick={() => this.handleKbutton("ෂෞ")} >
											{" "}
											ෂෞ{" "} </button> </a>


								</div>
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

import React from "react";
import { useRef, useState } from "react";
import "./KeyboardLayout.css";
import { Row, Col, Form, Input, Button, Space, notification } from "antd";

function KeyboardLayout(props) {
	const initialState = {
		name: "",
		texty: "පෙළ සිට කථනය භාවිතා කිරීමෙන් සතුටක් ලබන්න",
	};
	

	const [input, SetInput] = React.useState(initialState);


	const [text, setText] = useState("");
	

	const handleClick = (e) => {
		e.preventDefault();
		const { value, name } = e.target;
		SetInput((values) => ({ ...values, [name]: value }));
	};
	

	const handleSubmit = (e) => {
		
		console.log(input.texty);
		console.log("Button clicked");

		// let sdk = require("microsoft-cognitiveservices-speech-sdk");
		
		let textyy = input.texty;

		console.log(textyy);

		// let key = "";
		// let region = "";
		
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
		// 	function (result) {
		// 	if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
		// 	console.log("synthesis finished.");
		// 	} else {
		// 	console.error("Speech synthesis canceled, " + result.errorDetails +
		// 		"\nDid you set the speech resource key and region values?");
		// 	}
		// 	synthesizer.close();
		// 	synthesizer = null;
		// },
		// 	function (err) {
		// 	console.trace("err - " + err);
		// 	synthesizer.close();
		// 	synthesizer = null;
		// });
		// console.log("Now synthesizing to: " + audioFile);
		// console.log("Audio Narrated Successfully");
		// };

		console.log("END of TTS Narration");
	};

	const [form] = Form.useForm();
	

	// const buttons = document.querySelector('.btn')
	// const textarea = document.querySelector('textarea')

	// const delete_btn = document.queryselector('.delete')
	// const shift_btn = document.querySelector('.shift')
	// const space_btn = document.querySelector('.space')
	


	let chars = []

	function handleBtn(e){
			setText(text + e.target.value);
			//console.log(e.target.value)
			chars = text.split('')
			console.log(chars)

		}
	

	function handleDelete(e){
		let str = text;
		setText(str.slice(0,-1));		
	}

	function handleSpace(e){
		//chars.push(' ')
		setText(text + " ");
		//console.log(chars)

		//setText(chars.join(' '))
	}

	

	return (
		<div>
			<button class="non"
            onClick= {handleSubmit}
              >Get directly from Azure</button>
 
 <div class="container">
        <div id = "textarea" class="textarea">
            <textarea value={text}></textarea>
        </div>
        <div class="keyboard">
            <div class="row">
                <div class="dropdown">
                    <button id = "btn" class="btn" value="අ" onClick={handleBtn}>අ</button>
                    <div class="dropdown-content">
                      <a href="#"> <button id = "btn" class="btn" value="ආ" onClick={handleBtn}> ආ </button></a>
                      <a href="#"> <button id = "btn" class="btn" value="ඇ" onClick={handleBtn}> ඇ </button></a>
                      <a href="#"> <button id = "btn" class="btn" value="ඈ" onClick={handleBtn}> ඈ </button></a>
                    </div>
                  </div>

				<div class="dropdown">
                    <button id = "btn" class="btn" value="ඉ" onClick={handleBtn}>ඉ</button>
                    <div class="dropdown-content">
                      <a href="#"> <button id = "btn" class="btn" value="ඊ" onClick={handleBtn}> ඊ </button></a>
                    </div>
                </div>

				<div class="dropdown">
				<button id = "btn" class="btn" value="උ" onClick={handleBtn}>උ</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="ඌ" onClick={handleBtn}> ඌ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
				  <button id = "btn" class="btn" value="එ" onClick={handleBtn}>එ</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="ඒ" onClick={handleBtn}> ඒ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
				  <button id = "btn" class="btn" value="ඔ" onClick={handleBtn}>ඔ</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="ඕ" onClick={handleBtn}> ඕ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
				  <button id = "btn" class="btn" value="ක" onClick={handleBtn}>ක</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="කා" onClick={handleBtn}> කා </button></a>
                    <a href="#"> <button id = "btn" class="btn" value="කැ" onClick={handleBtn}> කැ </button></a>
                    <a href="#"> <button id = "btn" class="btn" value="කෑ" onClick={handleBtn}> කෑ </button></a>
                    <a href="#"> <button id = "btn" class="btn" value="ක්" onClick={handleBtn}> ක් </button></a>
					<a href="#"> <button id = "btn" class="btn" value="කි" onClick={handleBtn}> කි </button></a>
                    <a href="#"> <button id = "btn" class="btn" value="කු" onClick={handleBtn}> කු </button></a>
					<a href="#"> <button id = "btn" class="btn" value="කෙ" onClick={handleBtn}> කෙ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="කේ" onClick={handleBtn}> කේ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="කො" onClick={handleBtn}> කො </button></a>
					<a href="#"> <button id = "btn" class="btn" value="කෝ" onClick={handleBtn}> කෝ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="කෞ" onClick={handleBtn}> කෞ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
				  <button id = "btn" class="btn" value="ග" onClick={handleBtn}>ග</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="ගැ" onClick={handleBtn}> ගැ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ගා" onClick={handleBtn}> ගා </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ගැ" onClick={handleBtn}> ගැ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ගෑ" onClick={handleBtn}> ගෑ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ග්" onClick={handleBtn}> ග් </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ගි" onClick={handleBtn}> ගි </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ගු" onClick={handleBtn}> ගු </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ගෙ" onClick={handleBtn}> ගෙ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ගේ" onClick={handleBtn}> ගේ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ගො" onClick={handleBtn}> ගො </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ගෝ" onClick={handleBtn}> ගෝ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ගෞ" onClick={handleBtn}> ගෞ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
				  <button id = "btn" class="btn" value="ච" onClick={handleBtn}>ච</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="චා" onClick={handleBtn}> චා </button></a>
					<a href="#"> <button id = "btn" class="btn" value="චැ" onClick={handleBtn}> චැ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="චෑ" onClick={handleBtn}> චෑ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ච්" onClick={handleBtn}> ච් </button></a>
					<a href="#"> <button id = "btn" class="btn" value="චි" onClick={handleBtn}> චි </button></a>
					<a href="#"> <button id = "btn" class="btn" value="චී" onClick={handleBtn}>චී </button></a>
					<a href="#"> <button id = "btn" class="btn" value="චු" onClick={handleBtn}> චු </button></a>
					<a href="#"> <button id = "btn" class="btn" value="චෙ" onClick={handleBtn}> චෙ </button></a>
චේ					<a href="#"> <button id = "btn" class="btn" value="චො" onClick={handleBtn}> චො </button></a>
					<a href="#"> <button id = "btn" class="btn" value="චෝ" onClick={handleBtn}> චෝ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="චෞ" onClick={handleBtn}> චෞ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
				  <button id = "btn" class="btn" value="ජ" onClick={handleBtn}>ජ</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="ජා" onClick={handleBtn}> ජා </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ජැ" onClick={handleBtn}> ජැ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ජෑ" onClick={handleBtn}> ජෑ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ජ්" onClick={handleBtn}> ජ් </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ජි" onClick={handleBtn}> ජි </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ජු" onClick={handleBtn}> ජු </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ජෙ" onClick={handleBtn}> ජෙ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ජේ" onClick={handleBtn}> ජේ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ජො" onClick={handleBtn}> ජො </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ජෝ" onClick={handleBtn}> ජෝ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
				  <button id = "btn" class="btn" value="ට" onClick={handleBtn}>ට</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="ටා" onClick={handleBtn}> ටා </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ටැ" onClick={handleBtn}> ටැ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ටෑ" onClick={handleBtn}> ටෑ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ටි" onClick={handleBtn}> ටි </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ට්" onClick={handleBtn}> ට් </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ටී" onClick={handleBtn}> ටී </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ටු" onClick={handleBtn}> ටු </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ටෙ" onClick={handleBtn}> ටෙ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ටේ" onClick={handleBtn}> ටේ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ටෝ" onClick={handleBtn}> ටෝ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="චෝ" onClick={handleBtn}> චෝ </button></a>
                    </div>
                  </div>

				  <button class="delete" onClick={handleDelete}>Delete</button>
				</div>

				<div class="row">

				<div class="dropdown">
				<button id = "btn" class="btn" value="ඩ" onClick={handleBtn}>ඩ</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="ඩා" onClick={handleBtn}> ඩා </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ඩැ" onClick={handleBtn}> ඩැ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ඩෑ" onClick={handleBtn}> ඩෑ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ඩ්" onClick={handleBtn}> ඩ් </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ඩි" onClick={handleBtn}> ඩි </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ඩී" onClick={handleBtn}> ඩී </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ඩු" onClick={handleBtn}> ඩු </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ඩෙ" onClick={handleBtn}> ඩෙ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ඩේ" onClick={handleBtn}> ඩේ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ඩො" onClick={handleBtn}> ඩො </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ඩෝ" onClick={handleBtn}> ඩෝ </button></a>
                    </div>
                  </div>

				  <div class="dropdown">
				<button id = "btn" class="btn" value="ණ" onClick={handleBtn}>ණ</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="ණා" onClick={handleBtn}> ණා </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ණැ" onClick={handleBtn}> ණැ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ණෑ" onClick={handleBtn}> ණෑ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ණ්" onClick={handleBtn}> ණ් </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ණි" onClick={handleBtn}> ණි </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ණී" onClick={handleBtn}> ණී </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ණු" onClick={handleBtn}> ණු </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ණෙ" onClick={handleBtn}> ණෙ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ණේ" onClick={handleBtn}> ණේ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ණො" onClick={handleBtn}> ණො </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ණෝ" onClick={handleBtn}> ණෝ </button></a>
                    </div>
                  </div>


				  <div class="dropdown">
				<button id = "btn" class="btn" value="ත" onClick={handleBtn}>ත</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="තා" onClick={handleBtn}> තා </button></a>
					<a href="#"> <button id = "btn" class="btn" value="තැ" onClick={handleBtn}> තැ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="තෑ" onClick={handleBtn}> තෑ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ත්" onClick={handleBtn}> ත් </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ති" onClick={handleBtn}> ති </button></a>
					<a href="#"> <button id = "btn" class="btn" value="තී" onClick={handleBtn}> තී </button></a>
					<a href="#"> <button id = "btn" class="btn" value="තු" onClick={handleBtn}> තු </button></a>
					<a href="#"> <button id = "btn" class="btn" value="තෙ" onClick={handleBtn}> තෙ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="තේ" onClick={handleBtn}> තේ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="තො" onClick={handleBtn}> තො </button></a>
					<a href="#"> <button id = "btn" class="btn" value="තෝ" onClick={handleBtn}> තෝ </button></a>
                    </div>
                  </div>

				  <div class="dropdown">
				<button id = "btn" class="btn" value="ද" onClick={handleBtn}>ද</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="දා" onClick={handleBtn}> දා </button></a>
					<a href="#"> <button id = "btn" class="btn" value="දැ" onClick={handleBtn}> දැ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="දෑ" onClick={handleBtn}> දෑ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ද්" onClick={handleBtn}> ද් </button></a>
					<a href="#"> <button id = "btn" class="btn" value="දි" onClick={handleBtn}> දි </button></a>
					<a href="#"> <button id = "btn" class="btn" value="දී" onClick={handleBtn}> දී </button></a>
					<a href="#"> <button id = "btn" class="btn" value="දු" onClick={handleBtn}> දු </button></a>
					<a href="#"> <button id = "btn" class="btn" value="දෙ" onClick={handleBtn}> දෙ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="දේ" onClick={handleBtn}> දේ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="දො" onClick={handleBtn}> දො </button></a>
					<a href="#"> <button id = "btn" class="btn" value="දෝ" onClick={handleBtn}> දෝ </button></a>
                    </div>
                  </div>

				  <div class="dropdown">
				<button id = "btn" class="btn" value="ප" onClick={handleBtn}>ප</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="පා" onClick={handleBtn}> පා </button></a>
					<a href="#"> <button id = "btn" class="btn" value="පැ" onClick={handleBtn}> පැ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="පෑ" onClick={handleBtn}> පෑ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ප්" onClick={handleBtn}> ප් </button></a>
					<a href="#"> <button id = "btn" class="btn" value="පි" onClick={handleBtn}> පි </button></a>
					<a href="#"> <button id = "btn" class="btn" value="පී" onClick={handleBtn}> පී </button></a>
					<a href="#"> <button id = "btn" class="btn" value="පු" onClick={handleBtn}> පු </button></a>
					<a href="#"> <button id = "btn" class="btn" value="පෙ" onClick={handleBtn}> පෙ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="පේ" onClick={handleBtn}> පේ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="පො" onClick={handleBtn}> පො </button></a>
					<a href="#"> <button id = "btn" class="btn" value="පෝ" onClick={handleBtn}> පෝ </button></a>
                    </div>
                  </div>

				  <div class="dropdown">
				<button id = "btn" class="btn" value="බ" onClick={handleBtn}>බ</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="බා" onClick={handleBtn}> බා </button></a>
					<a href="#"> <button id = "btn" class="btn" value="බැ" onClick={handleBtn}> බැ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="බෑ" onClick={handleBtn}> බෑ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="බ්" onClick={handleBtn}> බ් </button></a>
					<a href="#"> <button id = "btn" class="btn" value="බි" onClick={handleBtn}> බි </button></a>
					<a href="#"> <button id = "btn" class="btn" value="බී" onClick={handleBtn}> බී </button></a>
					<a href="#"> <button id = "btn" class="btn" value="බු" onClick={handleBtn}> බු </button></a>
					<a href="#"> <button id = "btn" class="btn" value="බෙ" onClick={handleBtn}> බෙ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="බේ" onClick={handleBtn}> බේ </button></a>
                    </div>
                  </div>

				  <div class="dropdown">
				<button id = "btn" class="btn" value="ම" onClick={handleBtn}>ම</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="මා" onClick={handleBtn}> මා </button></a>
					<a href="#"> <button id = "btn" class="btn" value="මැ" onClick={handleBtn}> මැ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="මෑ" onClick={handleBtn}> මෑ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ම්" onClick={handleBtn}> ම් </button></a>
					<a href="#"> <button id = "btn" class="btn" value="මි" onClick={handleBtn}> මි </button></a>
					<a href="#"> <button id = "btn" class="btn" value="මී" onClick={handleBtn}> මී </button></a>
					<a href="#"> <button id = "btn" class="btn" value="මු" onClick={handleBtn}> මු </button></a>
					<a href="#"> <button id = "btn" class="btn" value="මෙ" onClick={handleBtn}> මෙ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="මේ" onClick={handleBtn}> මේ </button></a>
                    </div>
                  </div>

                <div class="dropdown">
				<button id = "btn" class="btn" value="ය" onClick={handleBtn}>ය</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="යා" onClick={handleBtn}> යා </button></a>
					<a href="#"> <button id = "btn" class="btn" value="යැ" onClick={handleBtn}> යැ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="යෑ" onClick={handleBtn}> යෑ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="යි" onClick={handleBtn}> යි </button></a>
					<a href="#"> <button id = "btn" class="btn" value="යී" onClick={handleBtn}> යී </button></a>
					<a href="#"> <button id = "btn" class="btn" value="යු" onClick={handleBtn}> යු </button></a>
					<a href="#"> <button id = "btn" class="btn" value="යූ" onClick={handleBtn}> යූ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="යෙ" onClick={handleBtn}> යෙ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="යේ" onClick={handleBtn}> යේ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="යො" onClick={handleBtn}> යො </button></a>
					<a href="#"> <button id = "btn" class="btn" value="යෝ" onClick={handleBtn}> යෝ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="යෞ" onClick={handleBtn}> යෞ </button></a>
                    </div>
                  </div>

				  <div class="dropdown">
				<button id = "btn" class="btn" value="ර" onClick={handleBtn}>ර</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="රා" onClick={handleBtn}> රා </button></a>
					<a href="#"> <button id = "btn" class="btn" value="රැ" onClick={handleBtn}> රැ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="රෑ" onClick={handleBtn}> රෑ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ර්" onClick={handleBtn}> ර් </button></a>
					<a href="#"> <button id = "btn" class="btn" value="රි" onClick={handleBtn}> රි </button></a>
					<a href="#"> <button id = "btn" class="btn" value="රී" onClick={handleBtn}> රී </button></a>
					<a href="#"> <button id = "btn" class="btn" value="රු" onClick={handleBtn}> රු </button></a>
					<a href="#"> <button id = "btn" class="btn" value="රූ" onClick={handleBtn}> රූ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="රෙ" onClick={handleBtn}> රෙ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="රේ" onClick={handleBtn}> රේ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="රො" onClick={handleBtn}> රො </button></a>
					<a href="#"> <button id = "btn" class="btn" value="රෝ" onClick={handleBtn}> රෝ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="රෞ" onClick={handleBtn}> රෞ </button></a>
                    </div>
                  </div>

				  <div class="dropdown">
				<button id = "btn" class="btn" value="ල" onClick={handleBtn}>ල</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="ලා" onClick={handleBtn}> ලා </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ලැ" onClick={handleBtn}> ලැ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ලෑ" onClick={handleBtn}> ලෑ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ල්" onClick={handleBtn}> ල් </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ලි" onClick={handleBtn}> ලි </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ලී" onClick={handleBtn}> ලී </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ලු" onClick={handleBtn}> ලු </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ලූ" onClick={handleBtn}> ලූ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ලෙ" onClick={handleBtn}> ලෙ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ලේ" onClick={handleBtn}> ලේ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ලො" onClick={handleBtn}> ලො </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ලෝ" onClick={handleBtn}> ලෝ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ලෞ" onClick={handleBtn}> ලෞ </button></a>
                    </div>
                  </div>
            </div>

				
			<div class="row">
			<div class="dropdown">
				<button id = "btn" class="btn" value="ව" onClick={handleBtn}>ව</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="වා" onClick={handleBtn}> වා </button></a>
					<a href="#"> <button id = "btn" class="btn" value="වැ" onClick={handleBtn}> වැ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="වෑ" onClick={handleBtn}> වෑ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ව්" onClick={handleBtn}> ව් </button></a>
					<a href="#"> <button id = "btn" class="btn" value="වි" onClick={handleBtn}> වි </button></a>
					<a href="#"> <button id = "btn" class="btn" value="වී" onClick={handleBtn}> වී </button></a>
					<a href="#"> <button id = "btn" class="btn" value="වු" onClick={handleBtn}> වු </button></a>
					<a href="#"> <button id = "btn" class="btn" value="වූ" onClick={handleBtn}> වූ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="වෙ" onClick={handleBtn}> වෙ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="වේ" onClick={handleBtn}> වේ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="වේ" onClick={handleBtn}> වේ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="වො" onClick={handleBtn}> වො </button></a>
					<a href="#"> <button id = "btn" class="btn" value="වෝ" onClick={handleBtn}> වෝ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="වෞ" onClick={handleBtn}> වෞ </button></a>
                    </div>
                  </div>

				  <div class="dropdown">
				<button id = "btn" class="btn" value="ශ" onClick={handleBtn}>ශ</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="ශා" onClick={handleBtn}> ශා </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ශැ" onClick={handleBtn}> ශැ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ශෑ" onClick={handleBtn}> ශෑ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ශ්" onClick={handleBtn}> ශ් </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ශි" onClick={handleBtn}> ශි </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ශී" onClick={handleBtn}> ශී </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ශු" onClick={handleBtn}> ශු </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ශූ" onClick={handleBtn}> ශූ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ශෙ" onClick={handleBtn}> ශෙ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ශේ" onClick={handleBtn}> ශේ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ශො" onClick={handleBtn}> ශො </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ශෞ" onClick={handleBtn}> ශෞ </button></a>
                    </div>
                  </div>


				  <div class="dropdown">
				<button id = "btn" class="btn" value="ස" onClick={handleBtn}>ස</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="සා" onClick={handleBtn}> සා </button></a>
					<a href="#"> <button id = "btn" class="btn" value="සැ" onClick={handleBtn}> සැ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="සෑ" onClick={handleBtn}> සෑ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ස්" onClick={handleBtn}> ස් </button></a>
					<a href="#"> <button id = "btn" class="btn" value="සි" onClick={handleBtn}> සි </button></a>
					<a href="#"> <button id = "btn" class="btn" value="සී" onClick={handleBtn}> සී </button></a>
					<a href="#"> <button id = "btn" class="btn" value="සු" onClick={handleBtn}> සු </button></a>
					<a href="#"> <button id = "btn" class="btn" value="සූ" onClick={handleBtn}> සූ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="සෙ" onClick={handleBtn}> සෙ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="සේ" onClick={handleBtn}> සේ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="සො" onClick={handleBtn}> සො </button></a>
					<a href="#"> <button id = "btn" class="btn" value="සෝ" onClick={handleBtn}> සෝ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="සෞ" onClick={handleBtn}> සෞ </button></a>
                    </div>
                  </div>

				  <div class="dropdown">
				<button id = "btn" class="btn" value="හ" onClick={handleBtn}>හ</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="හා" onClick={handleBtn}> හා </button></a>
					<a href="#"> <button id = "btn" class="btn" value="යැ" onClick={handleBtn}> යැ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="හෑ" onClick={handleBtn}> හෑ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="හ්" onClick={handleBtn}> හ් </button></a>
					<a href="#"> <button id = "btn" class="btn" value="හි" onClick={handleBtn}> හි </button></a>
					<a href="#"> <button id = "btn" class="btn" value="හී" onClick={handleBtn}> හී </button></a>
					<a href="#"> <button id = "btn" class="btn" value="හු" onClick={handleBtn}> හු </button></a>
					<a href="#"> <button id = "btn" class="btn" value="හූ" onClick={handleBtn}> හූ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="හෙ" onClick={handleBtn}> හෙ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="හේ" onClick={handleBtn}> හේ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="හො" onClick={handleBtn}> හො </button></a>
					<a href="#"> <button id = "btn" class="btn" value="හෝ" onClick={handleBtn}> හෝ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="හෞ" onClick={handleBtn}> හෞ </button></a>
                    </div>
                  </div>

				  <div class="dropdown">
				<button id = "btn" class="btn" value="ෆ" onClick={handleBtn}>ෆ</button>
                    <div class="dropdown-content">
					<a href="#"> <button id = "btn" class="btn" value="ෆා" onClick={handleBtn}> ෆා </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ෆැ" onClick={handleBtn}> ෆැ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ෆෑ" onClick={handleBtn}> ෆෑ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ෆ්" onClick={handleBtn}> ෆ් </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ෆි" onClick={handleBtn}> ෆි </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ෆී" onClick={handleBtn}> ෆී </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ෆු" onClick={handleBtn}> ෆු </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ෆූ" onClick={handleBtn}> ෆූ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ෆෙ" onClick={handleBtn}> ෆෙ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ෆේ" onClick={handleBtn}> ෆේ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ෆො" onClick={handleBtn}> ෆො </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ෆෝ" onClick={handleBtn}> ෆෝ </button></a>
					<a href="#"> <button id = "btn" class="btn" value="ෆෞ" onClick={handleBtn}> ෆෞ </button></a>
                    </div>
                  </div>

				  <div class="dropdown">
				<button id = "btn" class="btn" value="ළ" onClick={handleBtn}>ළ</button>
                    <div class="dropdown-content">
                    </div>
                  </div>

				  <div class="dropdown">
				<button id = "btn" class="btn" value="ථ" onClick={handleBtn}>ථ</button>
                    <div class="dropdown-content">
                    </div>
                  </div>

				  <div class="dropdown">
				<button id = "btn" class="btn" value="භ" onClick={handleBtn}>භ</button>
                    <div class="dropdown-content">
                    </div>
                  </div>

				  <div class="dropdown">
				<button id = "btn" class="btn" value="ෂ" onClick={handleBtn}>ෂ</button>
                    <div class="dropdown-content">
                    </div>
                  </div>

            </div>	  

				  

				  <div class="row">
                <button class="space" onClick={handleSpace}>Space</button>
            </div>

                 </div>
        </div>
		</div>
	);
}

export default KeyboardLayout;
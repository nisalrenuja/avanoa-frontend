import React from "react";
import { useRef, useState } from "react";
import "./KeyboardLayout.css";
import { Row, Col, Form, Input, Button, Space, notification } from "antd";

function KeyboardLayout(props) {
    const initialState = {
        name: [],
        // texty: "පෙළ සිට කථනය භාවිතා කිරීමෙන් සතුටක් ලබන්න",
    };
    

    const [input, SetInput] = React.useState(initialState);

    const [text, setText] = useState("");
	const [texty, setTexty] = useState("helloS");
    

    const handleClick = (e) => {
        console.log(e.target.value);
        e.preventDefault();
        const { value, name } = e.target;
        SetInput((values) => ({ ...values, [name]: value }));
    };
    

    const handleSubmit = (e) => {
        // console.log(input.texty);
		    console.log(texty);
        console.log("Button clicked");

        // let sdk = require("microsoft-cognitiveservices-speech-sdk");

        // let textyy = input.texty;
		    // let textyy = texty;

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
    };

    const [form] = Form.useForm();
    

    // const buttons = document.querySelector('.Kbutton')
    // const textarea = document.querySelector('textarea')

    // const delete_Kbutton = document.queryselector('.delete')
    // const shift_Kbutton = document.querySelector('.shift')
    // const space_Kbutton = document.querySelector('.space')
    

    let chars = []

    function handleKbutton(e){
            setText(text + e.target.value);
            //console.log(e.target.value)
            chars = text.split('');
			// this.setState({texty: chars});			
            console.log(chars)
			// console.log(this.state.texty);
			setTexty(text);
			console.log(texty);

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
                    <button id = "Kbutton" class="Kbutton" value="අ" onClick={handleKbutton}>අ</button>
                    <div class="dropdown-content">
                      <a href="#"> <button id = "Kbutton" class="Kbutton" value="ආ" onClick={handleKbutton}> ආ </button></a>
                      <a href="#"> <button id = "Kbutton" class="Kbutton" value="ඇ" onClick={handleKbutton}> ඇ </button></a>
                      <a href="#"> <button id = "Kbutton" class="Kbutton" value="ඈ" onClick={handleKbutton}> ඈ </button></a>
                    </div>
                  </div>

                <div class="dropdown">
                    <button id = "Kbutton" class="Kbutton" value="ඉ" onClick={handleKbutton}>ඉ</button>
                    <div class="dropdown-content">
                      <a href="#"> <button id = "Kbutton" class="Kbutton" value="ඊ" onClick={handleKbutton}> ඊ </button></a>
                    </div>
                </div>

                <div class="dropdown">
                <button id = "Kbutton" class="Kbutton" value="උ" onClick={handleKbutton}>උ</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ඌ" onClick={handleKbutton}> ඌ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                  <button id = "Kbutton" class="Kbutton" value="එ" onClick={handleKbutton}>එ</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ඒ" onClick={handleKbutton}> ඒ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                  <button id = "Kbutton" class="Kbutton" value="ඔ" onClick={handleKbutton}>ඔ</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ඕ" onClick={handleKbutton}> ඕ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                  <button id = "Kbutton" class="Kbutton" value="ක" onClick={handleKbutton}>ක</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="කා" onClick={handleKbutton}> කා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="කැ" onClick={handleKbutton}> කැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="කෑ" onClick={handleKbutton}> කෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ක්" onClick={handleKbutton}> ක් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="කි" onClick={handleKbutton}> කි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="කු" onClick={handleKbutton}> කු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="කෙ" onClick={handleKbutton}> කෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="කේ" onClick={handleKbutton}> කේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="කො" onClick={handleKbutton}> කො </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="කෝ" onClick={handleKbutton}> කෝ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="කෞ" onClick={handleKbutton}> කෞ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                  <button id = "Kbutton" class="Kbutton" value="ග" onClick={handleKbutton}>ග</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ගැ" onClick={handleKbutton}> ගැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ගා" onClick={handleKbutton}> ගා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ගැ" onClick={handleKbutton}> ගැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ගෑ" onClick={handleKbutton}> ගෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ග්" onClick={handleKbutton}> ග් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ගි" onClick={handleKbutton}> ගි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ගු" onClick={handleKbutton}> ගු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ගෙ" onClick={handleKbutton}> ගෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ගේ" onClick={handleKbutton}> ගේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ගො" onClick={handleKbutton}> ගො </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ගෝ" onClick={handleKbutton}> ගෝ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ගෞ" onClick={handleKbutton}> ගෞ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                  <button id = "Kbutton" class="Kbutton" value="ච" onClick={handleKbutton}>ච</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="චා" onClick={handleKbutton}> චා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="චැ" onClick={handleKbutton}> චැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="චෑ" onClick={handleKbutton}> චෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ච්" onClick={handleKbutton}> ච් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="චි" onClick={handleKbutton}> චි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="චී" onClick={handleKbutton}> චී </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="චු" onClick={handleKbutton}> චු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="චෙ" onClick={handleKbutton}> චෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="චො" onClick={handleKbutton}> චො </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="චෝ" onClick={handleKbutton}> චෝ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="චෞ" onClick={handleKbutton}> චෞ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                  <button id = "Kbutton" class="Kbutton" value="ජ" onClick={handleKbutton}>ජ</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ජා" onClick={handleKbutton}> ජා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ජැ" onClick={handleKbutton}> ජැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ජෑ" onClick={handleKbutton}> ජෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ජ්" onClick={handleKbutton}> ජ් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ජි" onClick={handleKbutton}> ජි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ජු" onClick={handleKbutton}> ජු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ජෙ" onClick={handleKbutton}> ජෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ජේ" onClick={handleKbutton}> ජේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ජො" onClick={handleKbutton}> ජො </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ජෝ" onClick={handleKbutton}> ජෝ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                  <button id = "Kbutton" class="Kbutton" value="ට" onClick={handleKbutton}>ට</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ටා" onClick={handleKbutton}> ටා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ටැ" onClick={handleKbutton}> ටැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ටෑ" onClick={handleKbutton}> ටෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ටි" onClick={handleKbutton}> ටි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ට්" onClick={handleKbutton}> ට් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ටී" onClick={handleKbutton}> ටී </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ටු" onClick={handleKbutton}> ටු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ටෙ" onClick={handleKbutton}> ටෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ටේ" onClick={handleKbutton}> ටේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ටෝ" onClick={handleKbutton}> ටෝ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="චෝ" onClick={handleKbutton}> චෝ </button></a>
                    </div>
                  </div>

                  <button class="Dbutton" onClick={handleDelete}>Delete</button>
                </div>

                <div class="row">

                <div class="dropdown">
                <button id = "Kbutton" class="Kbutton" value="ඩ" onClick={handleKbutton}>ඩ</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ඩා" onClick={handleKbutton}> ඩා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ඩැ" onClick={handleKbutton}> ඩැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ඩෑ" onClick={handleKbutton}> ඩෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ඩ්" onClick={handleKbutton}> ඩ් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ඩි" onClick={handleKbutton}> ඩි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ඩී" onClick={handleKbutton}> ඩී </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ඩු" onClick={handleKbutton}> ඩු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ඩෙ" onClick={handleKbutton}> ඩෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ඩේ" onClick={handleKbutton}> ඩේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ඩො" onClick={handleKbutton}> ඩො </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ඩෝ" onClick={handleKbutton}> ඩෝ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                <button id = "Kbutton" class="Kbutton" value="ණ" onClick={handleKbutton}>ණ</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ණා" onClick={handleKbutton}> ණා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ණැ" onClick={handleKbutton}> ණැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ණෑ" onClick={handleKbutton}> ණෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ණ්" onClick={handleKbutton}> ණ් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ණි" onClick={handleKbutton}> ණි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ණී" onClick={handleKbutton}> ණී </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ණු" onClick={handleKbutton}> ණු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ණෙ" onClick={handleKbutton}> ණෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ණේ" onClick={handleKbutton}> ණේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ණො" onClick={handleKbutton}> ණො </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ණෝ" onClick={handleKbutton}> ණෝ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                <button id = "Kbutton" class="Kbutton" value="ත" onClick={handleKbutton}>ත</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="තා" onClick={handleKbutton}> තා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="තැ" onClick={handleKbutton}> තැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="තෑ" onClick={handleKbutton}> තෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ත්" onClick={handleKbutton}> ත් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ති" onClick={handleKbutton}> ති </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="තී" onClick={handleKbutton}> තී </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="තු" onClick={handleKbutton}> තු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="තෙ" onClick={handleKbutton}> තෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="තේ" onClick={handleKbutton}> තේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="තො" onClick={handleKbutton}> තො </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="තෝ" onClick={handleKbutton}> තෝ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                <button id = "Kbutton" class="Kbutton" value="ද" onClick={handleKbutton}>ද</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="දා" onClick={handleKbutton}> දා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="දැ" onClick={handleKbutton}> දැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="දෑ" onClick={handleKbutton}> දෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ද්" onClick={handleKbutton}> ද් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="දි" onClick={handleKbutton}> දි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="දී" onClick={handleKbutton}> දී </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="දු" onClick={handleKbutton}> දු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="දෙ" onClick={handleKbutton}> දෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="දේ" onClick={handleKbutton}> දේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="දො" onClick={handleKbutton}> දො </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="දෝ" onClick={handleKbutton}> දෝ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                <button id = "Kbutton" class="Kbutton" value="ප" onClick={handleKbutton}>ප</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="පා" onClick={handleKbutton}> පා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="පැ" onClick={handleKbutton}> පැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="පෑ" onClick={handleKbutton}> පෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ප්" onClick={handleKbutton}> ප් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="පි" onClick={handleKbutton}> පි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="පී" onClick={handleKbutton}> පී </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="පු" onClick={handleKbutton}> පු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="පෙ" onClick={handleKbutton}> පෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="පේ" onClick={handleKbutton}> පේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="පො" onClick={handleKbutton}> පො </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="පෝ" onClick={handleKbutton}> පෝ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                <button id = "Kbutton" class="Kbutton" value="බ" onClick={handleKbutton}>බ</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="බා" onClick={handleKbutton}> බා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="බැ" onClick={handleKbutton}> බැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="බෑ" onClick={handleKbutton}> බෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="බ්" onClick={handleKbutton}> බ් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="බි" onClick={handleKbutton}> බි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="බී" onClick={handleKbutton}> බී </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="බු" onClick={handleKbutton}> බු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="බෙ" onClick={handleKbutton}> බෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="බේ" onClick={handleKbutton}> බේ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                <button id = "Kbutton" class="Kbutton" value="ම" onClick={handleKbutton}>ම</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="මා" onClick={handleKbutton}> මා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="මැ" onClick={handleKbutton}> මැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="මෑ" onClick={handleKbutton}> මෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ම්" onClick={handleKbutton}> ම් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="මි" onClick={handleKbutton}> මි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="මී" onClick={handleKbutton}> මී </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="මු" onClick={handleKbutton}> මු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="මෙ" onClick={handleKbutton}> මෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="මේ" onClick={handleKbutton}> මේ </button></a>
                    </div>
                  </div>

                <div class="dropdown">
                <button id = "Kbutton" class="Kbutton" value="ය" onClick={handleKbutton}>ය</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="යා" onClick={handleKbutton}> යා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="යැ" onClick={handleKbutton}> යැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="යෑ" onClick={handleKbutton}> යෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="යි" onClick={handleKbutton}> යි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="යී" onClick={handleKbutton}> යී </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="යු" onClick={handleKbutton}> යු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="යූ" onClick={handleKbutton}> යූ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="යෙ" onClick={handleKbutton}> යෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="යේ" onClick={handleKbutton}> යේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="යො" onClick={handleKbutton}> යො </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="යෝ" onClick={handleKbutton}> යෝ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="යෞ" onClick={handleKbutton}> යෞ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                <button id = "Kbutton" class="Kbutton" value="ර" onClick={handleKbutton}>ර</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="රා" onClick={handleKbutton}> රා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="රැ" onClick={handleKbutton}> රැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="රෑ" onClick={handleKbutton}> රෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ර්" onClick={handleKbutton}> ර් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="රි" onClick={handleKbutton}> රි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="රී" onClick={handleKbutton}> රී </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="රු" onClick={handleKbutton}> රු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="රූ" onClick={handleKbutton}> රූ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="රෙ" onClick={handleKbutton}> රෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="රේ" onClick={handleKbutton}> රේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="රො" onClick={handleKbutton}> රො </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="රෝ" onClick={handleKbutton}> රෝ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="රෞ" onClick={handleKbutton}> රෞ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                <button id = "Kbutton" class="Kbutton" value="ල" onClick={handleKbutton}>ල</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ලා" onClick={handleKbutton}> ලා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ලැ" onClick={handleKbutton}> ලැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ලෑ" onClick={handleKbutton}> ලෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ල්" onClick={handleKbutton}> ල් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ලි" onClick={handleKbutton}> ලි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ලී" onClick={handleKbutton}> ලී </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ලු" onClick={handleKbutton}> ලු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ලූ" onClick={handleKbutton}> ලූ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ලෙ" onClick={handleKbutton}> ලෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ලේ" onClick={handleKbutton}> ලේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ලො" onClick={handleKbutton}> ලො </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ලෝ" onClick={handleKbutton}> ලෝ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ලෞ" onClick={handleKbutton}> ලෞ </button></a>
                    </div>
                  </div>
            </div>

                
            <div class="row">
            <div class="dropdown">
                <button id = "Kbutton" class="Kbutton" value="ව" onClick={handleKbutton}>ව</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="වා" onClick={handleKbutton}> වා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="වැ" onClick={handleKbutton}> වැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="වෑ" onClick={handleKbutton}> වෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ව්" onClick={handleKbutton}> ව් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="වි" onClick={handleKbutton}> වි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="වී" onClick={handleKbutton}> වී </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="වු" onClick={handleKbutton}> වු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="වූ" onClick={handleKbutton}> වූ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="වෙ" onClick={handleKbutton}> වෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="වේ" onClick={handleKbutton}> වේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="වේ" onClick={handleKbutton}> වේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="වො" onClick={handleKbutton}> වො </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="වෝ" onClick={handleKbutton}> වෝ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="වෞ" onClick={handleKbutton}> වෞ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                <button id = "Kbutton" class="Kbutton" value="ශ" onClick={handleKbutton}>ශ</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ශා" onClick={handleKbutton}> ශා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ශැ" onClick={handleKbutton}> ශැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ශෑ" onClick={handleKbutton}> ශෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ශ්" onClick={handleKbutton}> ශ් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ශි" onClick={handleKbutton}> ශි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ශී" onClick={handleKbutton}> ශී </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ශු" onClick={handleKbutton}> ශු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ශූ" onClick={handleKbutton}> ශූ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ශෙ" onClick={handleKbutton}> ශෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ශේ" onClick={handleKbutton}> ශේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ශො" onClick={handleKbutton}> ශො </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ශෞ" onClick={handleKbutton}> ශෞ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                <button id = "Kbutton" class="Kbutton" value="ස" onClick={handleKbutton}>ස</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="සා" onClick={handleKbutton}> සා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="සැ" onClick={handleKbutton}> සැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="සෑ" onClick={handleKbutton}> සෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ස්" onClick={handleKbutton}> ස් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="සි" onClick={handleKbutton}> සි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="සී" onClick={handleKbutton}> සී </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="සු" onClick={handleKbutton}> සු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="සූ" onClick={handleKbutton}> සූ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="සෙ" onClick={handleKbutton}> සෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="සේ" onClick={handleKbutton}> සේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="සො" onClick={handleKbutton}> සො </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="සෝ" onClick={handleKbutton}> සෝ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="සෞ" onClick={handleKbutton}> සෞ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                <button id = "Kbutton" class="Kbutton" value="හ" onClick={handleKbutton}>හ</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="හා" onClick={handleKbutton}> හා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="යැ" onClick={handleKbutton}> යැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="හෑ" onClick={handleKbutton}> හෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="හ්" onClick={handleKbutton}> හ් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="හි" onClick={handleKbutton}> හි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="හී" onClick={handleKbutton}> හී </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="හු" onClick={handleKbutton}> හු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="හූ" onClick={handleKbutton}> හූ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="හෙ" onClick={handleKbutton}> හෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="හේ" onClick={handleKbutton}> හේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="හො" onClick={handleKbutton}> හො </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="හෝ" onClick={handleKbutton}> හෝ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="හෞ" onClick={handleKbutton}> හෞ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                <button id = "Kbutton" class="Kbutton" value="ෆ" onClick={handleKbutton}>ෆ</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෆා" onClick={handleKbutton}> ෆා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෆැ" onClick={handleKbutton}> ෆැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෆෑ" onClick={handleKbutton}> ෆෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෆ්" onClick={handleKbutton}> ෆ් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෆි" onClick={handleKbutton}> ෆි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෆී" onClick={handleKbutton}> ෆී </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෆු" onClick={handleKbutton}> ෆු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෆූ" onClick={handleKbutton}> ෆූ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෆෙ" onClick={handleKbutton}> ෆෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෆේ" onClick={handleKbutton}> ෆේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෆො" onClick={handleKbutton}> ෆො </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෆෝ" onClick={handleKbutton}> ෆෝ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෆෞ" onClick={handleKbutton}> ෆෞ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                <button id = "Kbutton" class="Kbutton" value="ළ" onClick={handleKbutton}>ළ</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ළා" onClick={handleKbutton}> ළා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ළැ" onClick={handleKbutton}> ළැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ළෑ" onClick={handleKbutton}> ළෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ළ්" onClick={handleKbutton}> ළ් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ළි" onClick={handleKbutton}> ළි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ළී" onClick={handleKbutton}> ළී </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ළු" onClick={handleKbutton}> ළු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ළූ" onClick={handleKbutton}> ළූ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ළෙ" onClick={handleKbutton}> ළෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ළේ" onClick={handleKbutton}> ළේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ළො" onClick={handleKbutton}> ළො </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ළෝ" onClick={handleKbutton}> ළෝ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෆෞ" onClick={handleKbutton}> ෆෞ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                <button id = "Kbutton" class="Kbutton" value="ථ" onClick={handleKbutton}>ථ</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ථා" onClick={handleKbutton}> ථා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ථැ" onClick={handleKbutton}> ථැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ථෑ" onClick={handleKbutton}> ථෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ථ්" onClick={handleKbutton}> ථ් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ථි" onClick={handleKbutton}> ථි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ථී" onClick={handleKbutton}> ථී </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ථු" onClick={handleKbutton}> ථු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ථූ" onClick={handleKbutton}> ථූ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ථෙ" onClick={handleKbutton}> ථෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ථේ" onClick={handleKbutton}> ථේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ථො" onClick={handleKbutton}> ථො </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ථෝ" onClick={handleKbutton}> ථෝ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ථෞ" onClick={handleKbutton}> ථෞ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                <button id = "Kbutton" class="Kbutton" value="භ" onClick={handleKbutton}>භ</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="භා" onClick={handleKbutton}> භා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="භැ" onClick={handleKbutton}> භැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="භෑ" onClick={handleKbutton}> භෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="භ්" onClick={handleKbutton}> භ් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="භි" onClick={handleKbutton}> භි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="භී" onClick={handleKbutton}> භී </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="භු" onClick={handleKbutton}> භු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="භූ" onClick={handleKbutton}> භූ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="භෙ" onClick={handleKbutton}> භෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="භේ" onClick={handleKbutton}> භේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="භො" onClick={handleKbutton}> භො </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="භෝ" onClick={handleKbutton}> භෝ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="භෞ" onClick={handleKbutton}> භෞ </button></a>
                    </div>
                  </div>

                  <div class="dropdown">
                <button id = "Kbutton" class="Kbutton" value="ෂ" onClick={handleKbutton}>ෂ</button>
                    <div class="dropdown-content">
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෂා" onClick={handleKbutton}> ෂා </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෂැ" onClick={handleKbutton}> ෂැ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෂෑ" onClick={handleKbutton}> ෂෑ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෂ්" onClick={handleKbutton}> ෂ් </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෂි" onClick={handleKbutton}> ෂි </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෂී" onClick={handleKbutton}> ෂී </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෂු" onClick={handleKbutton}> ෂු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෂු" onClick={handleKbutton}> ෂු </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෂූ" onClick={handleKbutton}> ෂූ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෂෙ" onClick={handleKbutton}> ෂෙ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෂේ" onClick={handleKbutton}> ෂේ </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෂො" onClick={handleKbutton}> ෂො </button></a>
                    <a href="#"> <button id = "Kbutton" class="Kbutton" value="ෂෝ" onClick={handleKbutton}> ෂෝ </button></a>
                 
                    </div>
                  </div>

            </div>    

                  

                  <div class="row">
                <button class="Sbutton"  onClick={handleSpace}>Space</button>
            </div>

                 </div>
        </div>
        </div>
    );
}

export default KeyboardLayout;


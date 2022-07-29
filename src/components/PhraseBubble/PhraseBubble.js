import { Component } from "react";
import "./phraseBubble.css";
import { Howl } from "howler";
import { connect } from "react-redux";
import { updateIndex } from "../../reducers/navList/navListSlice";
import { setCount } from "../../reducers/counter/counterSlice";

const audioClips = [
	// Siren - need to add
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
		label: "ආයුබෝවන්",
	},

	// Slide 1 Audio
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1658513448/oyata_kohomda_itqlve.m4a",
		label: "ඔයාට කොහොමද ?",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1658513448/Watson_Peiris_Mavatha_2_nq9hor.m4a",
		label: "මට උදවු කරනවද ?",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1658513448/aaith_kiyanna_daexip.m4a",
		label: "ආයෙත් කියන්න",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482089/2022-05-02_14-30-09_y5ilia.mp3",
		label: "සුබ උදෑසනක්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482230/2022-05-02_14-32-00_zdbvbg.mp3",
		label: "සුබ රාත්‍රියක්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482322/2022-05-02_14-34-35_q2x4aw.mp3",
		label: "නිදිමතයි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482461/2022-05-02_14-36-44_r5dtsf.mp3",
		label: "තිබහයි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482528/2022-05-02_14-38-12_o4oslm.mp3",
		label: "බඩිගිනි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482600/2022-05-02_14-39-21_vxrmj1.mp3",
		label: "කොහොමද?",
	},

	// Slide 2 Audio
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
		label: "ආයුබෝවන්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
		label: "ඔව්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651481915/2022-05-02_14-27-37_bugyqg.mp3",
		label: "නැහැ",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482089/2022-05-02_14-30-09_y5ilia.mp3",
		label: "සුබ උදෑසනක්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482230/2022-05-02_14-32-00_zdbvbg.mp3",
		label: "සුබ රාත්‍රියක්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482322/2022-05-02_14-34-35_q2x4aw.mp3",
		label: " නිදිමතයි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482461/2022-05-02_14-36-44_r5dtsf.mp3",
		label: "තිබහයි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482528/2022-05-02_14-38-12_o4oslm.mp3",
		label: "බඩිගිනි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482600/2022-05-02_14-39-21_vxrmj1.mp3",
		label: " ඔයාට කොහොමද?",
	},

	// Slide 3 Audio
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
		label: "ආයුබෝවන්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
		label: "ඔව්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651481915/2022-05-02_14-27-37_bugyqg.mp3",
		label: "නැහැ",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482089/2022-05-02_14-30-09_y5ilia.mp3",
		label: "සුබ උදෑසනක්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482230/2022-05-02_14-32-00_zdbvbg.mp3",
		label: "සුබ රාත්‍රියක්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482322/2022-05-02_14-34-35_q2x4aw.mp3",
		label: "නිදිමතයි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482461/2022-05-02_14-36-44_r5dtsf.mp3",
		label: "තිබහයි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482528/2022-05-02_14-38-12_o4oslm.mp3",
		label: "බඩිගිනි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482600/2022-05-02_14-39-21_vxrmj1.mp3",
		label: "ඔයාට කොහොමද?",
	},

	// Slide 4 Audio
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
		label: "ආයුබෝවන්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
		label: "ඔව්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651481915/2022-05-02_14-27-37_bugyqg.mp3",
		label: "නැහැ",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482089/2022-05-02_14-30-09_y5ilia.mp3",
		label: "සුබ උදෑසනක්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482230/2022-05-02_14-32-00_zdbvbg.mp3",
		label: "සුබ රාත්‍රියක්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482322/2022-05-02_14-34-35_q2x4aw.mp3",
		label: "නිදිමතයි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482461/2022-05-02_14-36-44_r5dtsf.mp3",
		label: "තිබහයි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482528/2022-05-02_14-38-12_o4oslm.mp3",
		label: "බඩිගිනි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482600/2022-05-02_14-39-21_vxrmj1.mp3",
		label: "කොහොමද?",
	},

	// Slide 5 Audio
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
		label: "ආයුබෝවන්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
		label: "ඔව්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651481915/2022-05-02_14-27-37_bugyqg.mp3",
		label: "නැහැ",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482089/2022-05-02_14-30-09_y5ilia.mp3",
		label: "සුබ උදෑසනක්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482230/2022-05-02_14-32-00_zdbvbg.mp3",
		label: "සුබ රාත්‍රියක්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482322/2022-05-02_14-34-35_q2x4aw.mp3",
		label: "නිදිමතයි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482461/2022-05-02_14-36-44_r5dtsf.mp3",
		label: "තිබහයි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482528/2022-05-02_14-38-12_o4oslm.mp3",
		label: "බඩිගිනි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482600/2022-05-02_14-39-21_vxrmj1.mp3",
		label: "කොහොමද?",
	},

	// Slide 6 Audio
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
		label: "ආයුබෝවන්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
		label: "ඔව්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651481915/2022-05-02_14-27-37_bugyqg.mp3",
		label: "නැහැ",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482089/2022-05-02_14-30-09_y5ilia.mp3",
		label: "සුබ උදෑසනක්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482230/2022-05-02_14-32-00_zdbvbg.mp3",
		label: "සුබ රාත්‍රියක්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482322/2022-05-02_14-34-35_q2x4aw.mp3",
		label: "නිදිමතයි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482461/2022-05-02_14-36-44_r5dtsf.mp3",
		label: "තිබහයි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482528/2022-05-02_14-38-12_o4oslm.mp3",
		label: "බඩිගිනි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482600/2022-05-02_14-39-21_vxrmj1.mp3",
		label: "කොහොමද?",
	},

	// Slide 7 Audio
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
		label: "ආයුබෝවන්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
		label: "ඔව්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651481915/2022-05-02_14-27-37_bugyqg.mp3",
		label: "නැහැ",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482089/2022-05-02_14-30-09_y5ilia.mp3",
		label: "සුබ උදෑසනක්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482230/2022-05-02_14-32-00_zdbvbg.mp3",
		label: "සුබ රාත්‍රියක්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482322/2022-05-02_14-34-35_q2x4aw.mp3",
		label: "නිදිමතයි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482461/2022-05-02_14-36-44_r5dtsf.mp3",
		label: "තිබහයි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482528/2022-05-02_14-38-12_o4oslm.mp3",
		label: "බඩිගිනි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482600/2022-05-02_14-39-21_vxrmj1.mp3",
		label: "කොහොමද?",
	},

	// Slide 8 Audio
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
		label: "ආයුබෝවන්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
		label: "ඔව්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651481915/2022-05-02_14-27-37_bugyqg.mp3",
		label: "නැහැ",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482089/2022-05-02_14-30-09_y5ilia.mp3",
		label: "සුබ උදෑසනක්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482230/2022-05-02_14-32-00_zdbvbg.mp3",
		label: "සුබ රාත්‍රියක්",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482322/2022-05-02_14-34-35_q2x4aw.mp3",
		label: "නිදිමතයි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482461/2022-05-02_14-36-44_r5dtsf.mp3",
		label: "තිබහයි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482528/2022-05-02_14-38-12_o4oslm.mp3",
		label: "බඩිගිනි",
	},
	{
		sound:
			"https://res.cloudinary.com/avanoa/video/upload/v1651482600/2022-05-02_14-39-21_vxrmj1.mp3",
		label: "කොහොමද?",
	},
];

class phraseBubble extends Component {
	constructor(props) {
		super(props);
		this.selectBubble = this.selectBubble.bind(this);
	}

	soundPlay = (src) => {
		const sound = new Howl({
			src,
			html5: true,
		});
		sound.play();
	};
	// RenderButtonSound = () => {
	//   return audioClips.map((audioClip) => (
	//     <button onClick={() => this.soundPlay(audioClip.sound)}>
	//       {audioClip.label}
	//     </button>
	//   ));
	// };
	state = {
		cn: 0,
		count: 0,
		select1: "notSelected",
		select2: "notSelected",
		select3: "notSelected",
		select4: "notSelected",
		select5: "notSelected",
		select6: "notSelected",
		select7: "notSelected",
		select8: "notSelected",
		select9: "notSelected",
		slide1: "notSelected",
		slide2: "notSelected",
		slide3: "notSelected",
		phrases: [
			"ආයුබෝවන්",
			"ඔව්",
			"නැහැ",
			"සුබ උදෑසනක්",
			"සුබ රාත්‍රියක්",
			"නිදිමතයි",
			"තිබහයි",
			"මට බඩිගිනි",
			"කොහොමද?",
		],
		ph1: "ඔයාට කොහොමද ?",
		ph2: "මට උදවු කරනවද ?",
		ph3: "ආයෙත් කියන්න",
		ph4: "මට තේරුනේ නෑ",
		ph5: "ඒක හරි නෑ",
		ph6: "මට එපා",
		ph7: "මට ඕනෙ",
		ph8: "මට අද මහන්සියි",
		ph9: "නියමයි/ කැමතියි",
	};

	selectBubble(selNum) {
		//const sel = "select" + [selNum + 1];
		//this.setState({ [sel]: "selection" });
		this.selectionFunc(selNum);
		//this.props.updateIndex(7);
		//this.props.setCount(selNum);
	}

	selectionFunc(phNum) {
		console.log(this.state.phrases[phNum]);
		this.soundPlay(audioClips[phNum].sound);
	}

	componentDidUpdate() {
		const index = this.props.navList.index;
		const counter = this.props.counter.value;

		//21 - 30 slide 1 phrases
		if (index == 21) {
			//this.selectBubble(0);
			//select1="selection"
			this.selectBubble(1);
			this.props.setCount(0);
		}
		if (index == 22) {
			this.selectBubble(2);
		}
		if (index == 23) {
			this.selectBubble(3);
		}
		if (index == 24) {
			this.selectBubble(4);
		}
		if (index == 25) {
			this.selectBubble(5);
		}
		if (index == 26) {
			this.selectBubble(6);
		}
		if (index == 27) {
			this.selectBubble(7);
		}
		if (index == 28) {
			this.selectBubble(8);
		}
		if (index == 29) {
			this.selectBubble(9);
		}

		//31-40 slide 2
		if (index == 31) {
			//this.selectBubble(0);
			//select1="selection"
			this.selectBubble(10);
			this.props.setCount(0);
		}
		if (index == 32) {
			this.selectBubble(11);
		}
		if (index == 33) {
			this.selectBubble(12);
		}
		if (index == 34) {
			this.selectBubble(13);
		}
		if (index == 35) {
			this.selectBubble(14);
		}
		if (index == 36) {
			this.selectBubble(15);
		}
		if (index == 37) {
			this.selectBubble(16);
		}
		if (index == 38) {
			this.selectBubble(17);
		}
		if (index == 39) {
			this.selectBubble(18);
		}

		//41-50 slide 3
		if (index == 41) {
			//this.selectBubble(0);
			//select1="selection"
			this.selectBubble(19);
			this.props.setCount(0);
		}
		if (index == 42) {
			this.selectBubble(20);
		}
		if (index == 43) {
			this.selectBubble(21);
		}
		if (index == 44) {
			this.selectBubble(22);
		}
		if (index == 45) {
			this.selectBubble(23);
		}
		if (index == 46) {
			this.selectBubble(24);
		}
		if (index == 47) {
			this.selectBubble(25);
		}
		if (index == 48) {
			this.selectBubble(26);
		}
		if (index == 49) {
			this.selectBubble(27);
		}

		//51-60 slide 4
		if (index == 51) {
			//this.selectBubble(0);
			//select1="selection"
			this.selectBubble(28);
			this.props.setCount(0);
		}
		if (index == 52) {
			this.selectBubble(29);
		}
		if (index == 53) {
			this.selectBubble(30);
		}
		if (index == 54) {
			this.selectBubble(31);
		}
		if (index == 55) {
			this.selectBubble(32);
		}
		if (index == 56) {
			this.selectBubble(33);
		}
		if (index == 57) {
			this.selectBubble(34);
		}
		if (index == 58) {
			this.selectBubble(35);
		}
		if (index == 59) {
			this.selectBubble(36);
		}

		//61-670 slide 5
		if (index == 61) {
			//this.selectBubble(0);
			//select1="selection"
			this.selectBubble(37);
			this.props.setCount(0);
		}
		if (index == 62) {
			this.selectBubble(38);
		}
		if (index == 63) {
			this.selectBubble(39);
		}
		if (index == 64) {
			this.selectBubble(40);
		}
		if (index == 65) {
			this.selectBubble(41);
		}
		if (index == 66) {
			this.selectBubble(42);
		}
		if (index == 67) {
			this.selectBubble(43);
		}
		if (index == 68) {
			this.selectBubble(44);
		}
		if (index == 69) {
			this.selectBubble(45);
		}

		//71-80 slide 6
		if (index == 71) {
			//this.selectBubble(0);
			//select1="selection"
			this.selectBubble(46);
			this.props.setCount(0);
		}
		if (index == 72) {
			this.selectBubble(47);
		}
		if (index == 73) {
			this.selectBubble(48);
		}
		if (index == 74) {
			this.selectBubble(49);
		}
		if (index == 75) {
			this.selectBubble(50);
		}
		if (index == 76) {
			this.selectBubble(51);
		}
		if (index == 77) {
			this.selectBubble(52);
		}
		if (index == 78) {
			this.selectBubble(53);
		}
		if (index == 79) {
			this.selectBubble(54);
		}

		//81-90 slide 7
		if (index == 81) {
			//this.selectBubble(0);
			//select1="selection"
			this.selectBubble(55);
			this.props.setCount(0);
		}
		if (index == 82) {
			this.selectBubble(56);
		}
		if (index == 83) {
			this.selectBubble(57);
		}
		if (index == 84) {
			this.selectBubble(58);
		}
		if (index == 85) {
			this.selectBubble(59);
		}
		if (index == 86) {
			this.selectBubble(60);
		}
		if (index == 87) {
			this.selectBubble(61);
		}
		if (index == 88) {
			this.selectBubble(62);
		}
		if (index == 89) {
			this.selectBubble(63);
		}

		//91 - 100 slide 8
		if (index == 91) {
			//this.selectBubble(0);
			//select1="selection"
			this.selectBubble(64);
			this.props.setCount(0);
		}
		if (index == 92) {
			this.selectBubble(65);
		}
		if (index == 93) {
			this.selectBubble(66);
		}
		if (index == 94) {
			this.selectBubble(67);
		}
		if (index == 95) {
			this.selectBubble(68);
		}
		if (index == 86) {
			this.selectBubble(69);
		}
		if (index == 97) {
			this.selectBubble(70);
		}
		if (index == 98) {
			this.selectBubble(71);
		}
		if (index == 99) {
			this.selectBubble(72);
		}
	}

	render() {
		const index = this.props.navList.index;
		const counter = this.props.counter.value;

		let slide1 = "";
		let slide2 = "";
		let slide3 = "";
		let slide4 = "";
		let slide5 = "";
		let slide6 = "";
		let slide7 = "";
		let slide8 = "";

		let select1 = "";
		let select2 = "";
		let select3 = "";
		let select4 = "";
		let select5 = "";
		let select6 = "";
		let select7 = "";
		let select8 = "";
		let select9 = "";

		let ph1 = "ඔයාට කොහොමද? ";
		let ph2 = "මට උදවු කරනවද ?";
		let ph3 = "ආයෙත් කියන්න";
		let ph4 = "මට තේරුනේ නෑ";
		let ph5 = "ඒක හරි නෑ";
		let ph6 = "මට එපා";
		let ph7 = "මට ඕනෙ";
		let ph8 = "මට අද මහන්සියි";
		let ph9 = "නියමයි/ කැමතියි";

		if (index == 3 && counter == 0) {
			//setSel("selectionBoarder");
			//this.setState({ slide1 : "selected"});
			slide1 = "selected";
		} else if (index == 3 && counter == 1) {
			//setSel("selectionBoarder");
			//this.setState({ slide2 : "selected"});
			//this.setState({ slide1 : "notSelected"});
			slide2 = "selected";
			slide1 = "notSelected";

			ph1 = "බත්";
			ph2 = "පාන් ";
			ph3 = "රොටී";
			ph4 = "ආප්ප";
			ph5 = "එලවලු";
			ph6 = "පලතුරු";
			ph7 = "තේ";
			ph8 = "බිස්කට්";
			ph9 = "සුප්";
		} else if (index == 3 && counter == 2) {
			//setSel("selectionBoarder");
			// this.setState({ slide3 : "selected"});
			// this.setState({ slide2 : "notSelected"});
			slide3 = "selected";
			slide2 = "notSelected";

			ph1 = "ආයුබෝවන්";
			ph2 = "සුභ උදෑසනක්";
			ph3 = "ඔබට ස්තුතියි";
			ph4 = "ඔබව පිළිගන්නවා";
			ph5 = "මට සමාවන්න";
			ph6 = "මම සමුගන්නවා";
			ph7 = "මට සමාවෙන්න";
			ph8 = "ඔබට සුබපැතුම්";
			ph9 = "ඉක්මනට සනිප වෙන්න";
		} else if (index == 3 && counter == 3) {
			//setSel("selectionBoarder");
			// this.setState({ slide3 : "selected"});
			// this.setState({ slide2 : "notSelected"});
			slide4 = "selected";
			slide3 = "notSelected";

			ph1 = "මට බඩගිනියි";
			ph2 = "මට පිපාසය";
			ph3 = "මට මහන්සියි";
			ph4 = "මට වැසිකිළියට යනවා";
			ph5 = "මට නානවා";
			ph6 = "මට නිදිමත";
			ph7 = "මම අඳිනවා ";
			ph8 = "නැරඹීම / සවන් දීම ";
			ph9 = "මට උදව්වක් ඕන";
		} else if (index == 3 && counter == 4) {
			//setSel("selectionBoarder");
			// this.setState({ slide3 : "selected"});
			// this.setState({ slide2 : "notSelected"});
			slide5 = "selected";
			slide4 = "notSelected";

			ph1 = "මට සනීප නෑ";
			ph2 = "බෙහෙත් ඉවරයි";
			ph3 = "මට බෙහෙත් ඕනේ ";
			ph4 = "කෝ මගේ රිපෝට්ස්";
			ph5 = "මට කලන්තේ වගේ ";
			ph6 = "මට රිදෙනවා ";
			ph7 = "මට දැන් සනීපයි ";
			ph8 = "බෙහෙත් ගන්න යමු";
			ph9 = "මට කණ්නාඩිය / hearing aid එක දෙන්න";
		} else if (index == 3 && counter == 5) {
			//setSel("selectionBoarder");
			// this.setState({ slide3 : "selected"});
			// this.setState({ slide2 : "notSelected"});
			slide6 = "selected";
			slide5 = "notSelected";

			ph1 = "මම පුවත්පත් කියවනවා";
			ph2 = "මම රුපවාහිනිය නරබමින් ";
			ph3 = "මම සංගීතයට සවන් දීම";
			ph4 = "මම නානවා";
			ph5 = "මම නිදාගන්නවා";
			ph6 = "මම ව්‍යායාම කරනවා";
			ph7 = "මම සමාජ මාධ්‍ය භාවිතා කරනවා";
			ph8 = "මම ඇවිදින්න යන්න ";
			ph9 = "මම කෙනෙකුට කතා කරන්න";
		} else if (index == 3 && counter == 6) {
			//setSel("selectionBoarder");
			// this.setState({ slide3 : "selected"});
			// this.setState({ slide2 : "notSelected"});
			slide7 = "selected";
			slide6 = "notSelected";

			ph1 = "ඔව් ";
			ph2 = "නෑ ";
			ph3 = "ඔයාට කොහොමද ";
			ph4 = "ඔයා කවුද ";
			ph5 = "මොකක්ද ";
			ph6 = "ඔයා කොහෙද ";
			ph7 = "මට බැහැ ";
			ph8 = "කීයටද ";
			ph9 = "මට පුළුවන්";
		} else if (index == 3 && counter == 7) {
			//setSel("selectionBoarder");
			// this.setState({ slide3 : "selected"});
			// this.setState({ slide2 : "notSelected"});
			slide8 = "selected";
			slide7 = "notSelected";

			ph1 = "වැසිකිළිය ";
			ph2 = "විසිත්ත කාමරය";
			ph3 = "කුස්සිය ";
			ph4 = "වත්ත ";
			ph5 = "නිදන කාමරය ";
			ph6 = "ආගමික ස්ථානය";
			ph7 = "උද්යානය";
			ph8 = "අසල්වැසි";
			ph9 = "සබඳතා";
		}

		if (index == 13) {
			slide1 = "selection";

			if (counter == 0) {
				select1 = "selected";
			}
			if (counter == 1) {
				select2 = "selected";
				select1 = "notSelected";
			}
			if (counter == 2) {
				select3 = "selected";
				select2 = "notSelected";
			}
			if (counter == 3) {
				select4 = "selected";
				select3 = "notSelected";
			}
			if (counter == 4) {
				select5 = "selected";
				select4 = "notSelected";
			}
			if (counter == 5) {
				select6 = "selected";
				select5 = "notSelected";
			}
			if (counter == 6) {
				select7 = "selected";
				select6 = "notSelected";
			}
			if (counter == 7) {
				select8 = "selected";
				select7 = "notSelected";
			}
			if (counter == 8) {
				select9 = "selected";
				select8 = "notSelected";
			}
		}

		if (index == 14) {
			slide2 = "selection";
			ph1 = "බත්";
			ph2 = "පාන් ";
			ph3 = "රොටී";
			ph4 = "ආප්ප";
			ph5 = "එලවලු";
			ph6 = "පලතුරු";
			ph7 = "තේ";
			ph8 = "බිස්කට්";
			ph9 = "සුප්";

			if (counter == 0) {
				select1 = "selected";
			}
			if (counter == 1) {
				select2 = "selected";
				select1 = "notSelected";
			}
			if (counter == 2) {
				select3 = "selected";
				select2 = "notSelected";
			}
			if (counter == 3) {
				select4 = "selected";
				select3 = "notSelected";
			}
			if (counter == 4) {
				select5 = "selected";
				select4 = "notSelected";
			}
			if (counter == 5) {
				select6 = "selected";
				select5 = "notSelected";
			}
			if (counter == 6) {
				select7 = "selected";
				select6 = "notSelected";
			}
			if (counter == 7) {
				select8 = "selected";
				select7 = "notSelected";
			}
			if (counter == 8) {
				select9 = "selected";
				select8 = "notSelected";
			}
		}

		if (index == 15) {
			slide3 = "selection";

			ph1 = "ආයුබෝවන්";
			ph2 = "සුභ උදෑසනක්";
			ph3 = "ඔබට ස්තුතියි";
			ph4 = "ඔබව පිළිගන්නවා";
			ph5 = "සමාවන්න";
			ph6 = "සමුගන්නවා";
			ph7 = "මට සමාවෙන්න";
			ph8 = "වාසනාව";
			ph9 = "ඉක්මනට සනිප වෙන්න";

			if (counter == 0) {
				select1 = "selected";
			}
			if (counter == 1) {
				select2 = "selected";
				select1 = "notSelected";
			}
			if (counter == 2) {
				select3 = "selected";
				select2 = "notSelected";
			}
			if (counter == 3) {
				select4 = "selected";
				select3 = "notSelected";
			}
			if (counter == 4) {
				select5 = "selected";
				select4 = "notSelected";
			}
			if (counter == 5) {
				select6 = "selected";
				select5 = "notSelected";
			}
			if (counter == 6) {
				select7 = "selected";
				select6 = "notSelected";
			}
			if (counter == 7) {
				select8 = "selected";
				select7 = "notSelected";
			}
			if (counter == 8) {
				select9 = "selected";
				select8 = "notSelected";
			}
		}

		if (index == 16) {
			slide4 = "selection";

			ph1 = "මට බඩගිනියි";
			ph2 = "මට පිපාසයයි";
			ph3 = "මට මහන්සියි";
			ph4 = "වැසිකිළියට යනවා";
			ph5 = "මම නානවා";
			ph6 = "මම නිදිමතයි";
			ph7 = "මම අඳිනවා  ";
			ph8 = "නැරඹීම / සවන් දීම ";
			ph9 = "මට උදව්වක් ඕන";

			if (counter == 0) {
				select1 = "selected";
			}
			if (counter == 1) {
				select2 = "selected";
				select1 = "notSelected";
			}
			if (counter == 2) {
				select3 = "selected";
				select2 = "notSelected";
			}
			if (counter == 3) {
				select4 = "selected";
				select3 = "notSelected";
			}
			if (counter == 4) {
				select5 = "selected";
				select4 = "notSelected";
			}
			if (counter == 5) {
				select6 = "selected";
				select5 = "notSelected";
			}
			if (counter == 6) {
				select7 = "selected";
				select6 = "notSelected";
			}
			if (counter == 7) {
				select8 = "selected";
				select7 = "notSelected";
			}
			if (counter == 8) {
				select9 = "selected";
				select8 = "notSelected";
			}
		}

		if (index == 17) {
			slide5 = "selection";

			ph1 = "මට සනීප නෑ";
			ph2 = "බෙහෙත් ඉවරයි";
			ph3 = "බෙහෙත් ඕනේ ";
			ph4 = "කෝ මගේ රිපෝට්ස්";
			ph5 = "මට කලන්තේ වගේ ";
			ph6 = "මට රිදෙනවා ";
			ph7 = "දැන් සනීපයි ";
			ph8 = "බෙහෙත් ගන්න යමු";
			ph9 = "මට කණ්නාඩිය / hearing aid එක දෙන්න";

			if (counter == 0) {
				select1 = "selected";
			}
			if (counter == 1) {
				select2 = "selected";
				select1 = "notSelected";
			}
			if (counter == 2) {
				select3 = "selected";
				select2 = "notSelected";
			}
			if (counter == 3) {
				select4 = "selected";
				select3 = "notSelected";
			}
			if (counter == 4) {
				select5 = "selected";
				select4 = "notSelected";
			}
			if (counter == 5) {
				select6 = "selected";
				select5 = "notSelected";
			}
			if (counter == 6) {
				select7 = "selected";
				select6 = "notSelected";
			}
			if (counter == 7) {
				select8 = "selected";
				select7 = "notSelected";
			}
			if (counter == 8) {
				select9 = "selected";
				select8 = "notSelected";
			}
		}

		if (index == 18) {
			slide6 = "selection";

			ph1 = "මම පුවත්පත් කියවනවා";
			ph2 = "මම රුපවාහිනිය නරබමින් ";
			ph3 = "මම සංගීතයට සවන් දීම";
			ph4 = "මම නානවා";
			ph5 = "මම නිදාගන්නවා";
			ph6 = "මම ව්‍යායාම කරනවා";
			ph7 = "මම සමාජ මාධ්‍ය භාවිතා කරනවා";
			ph8 = "මම ඇවිදින්න යන්න ";
			ph9 = "මම කෙනෙකුට කතා කරන්න";

			if (counter == 0) {
				select1 = "selected";
			}
			if (counter == 1) {
				select2 = "selected";
				select1 = "notSelected";
			}
			if (counter == 2) {
				select3 = "selected";
				select2 = "notSelected";
			}
			if (counter == 3) {
				select4 = "selected";
				select3 = "notSelected";
			}
			if (counter == 4) {
				select5 = "selected";
				select4 = "notSelected";
			}
			if (counter == 5) {
				select6 = "selected";
				select5 = "notSelected";
			}
			if (counter == 6) {
				select7 = "selected";
				select6 = "notSelected";
			}
			if (counter == 7) {
				select8 = "selected";
				select7 = "notSelected";
			}
			if (counter == 8) {
				select9 = "selected";
				select8 = "notSelected";
			}
		}

		if (index == 19) {
			slide7 = "selection";

			ph1 = "ඔව් ";
			ph2 = "නෑ ";
			ph3 = "ඔයාට කොහොමද ";
			ph4 = "ඔයා කවුද ";
			ph5 = "මොකක්ද ";
			ph6 = "ඔයා කොහෙද ";
			ph7 = "මට බැහැ ";
			ph8 = "කීයටද ";
			ph9 = "මට පුළුවන්";

			if (counter == 0) {
				select1 = "selected";
			}
			if (counter == 1) {
				select2 = "selected";
				select1 = "notSelected";
			}
			if (counter == 2) {
				select3 = "selected";
				select2 = "notSelected";
			}
			if (counter == 3) {
				select4 = "selected";
				select3 = "notSelected";
			}
			if (counter == 4) {
				select5 = "selected";
				select4 = "notSelected";
			}
			if (counter == 5) {
				select6 = "selected";
				select5 = "notSelected";
			}
			if (counter == 6) {
				select7 = "selected";
				select6 = "notSelected";
			}
			if (counter == 7) {
				select8 = "selected";
				select7 = "notSelected";
			}
			if (counter == 8) {
				select9 = "selected";
				select8 = "notSelected";
			}
		}

		if (index == 20) {
			slide8 = "selection";

			ph1 = "වැසිකිළිය ";
			ph2 = "විසිත්ත කාමරය";
			ph3 = "කුස්සිය ";
			ph4 = "වත්ත ";
			ph5 = "නිදන කාමරය ";
			ph6 = "ආගමික ස්ථානය";
			ph7 = "උද්යානය";
			ph8 = "අසල්වැසි";
			ph9 = "සබඳතා";

			if (counter == 0) {
				select1 = "selected";
			}
			if (counter == 1) {
				select2 = "selected";
				select1 = "notSelected";
			}
			if (counter == 2) {
				select3 = "selected";
				select2 = "notSelected";
			}
			if (counter == 3) {
				select4 = "selected";
				select3 = "notSelected";
			}
			if (counter == 4) {
				select5 = "selected";
				select4 = "notSelected";
			}
			if (counter == 5) {
				select6 = "selected";
				select5 = "notSelected";
			}
			if (counter == 6) {
				select7 = "selected";
				select6 = "notSelected";
			}
			if (counter == 7) {
				select8 = "selected";
				select7 = "notSelected";
			}
			if (counter == 8) {
				select9 = "selected";
				select8 = "notSelected";
			}
		}

		return (
			<div>
				{" "}
				<center>
					{/* {this.RenderButtonSound()} */}

					<button className={slide1} class id="headerbutton1">
						Most frequently used Phrases
					</button>
					<button className={slide2} class id="headerbutton2">
						කෑම
					</button>
					<button className={slide3} class id="headerbutton3">
						සුභ පැතුම්
					</button>
					<button className={slide4} class id="headerbutton4">
						සාමාන්ය අවශ්යතා
					</button>
					<button className={slide5} class id="headerbutton5">
						වෛද්ය අවශ්යතා
					</button>
					<button className={slide6} class id="headerbutton6">
						කටයුතු
					</button>
					<button className={slide7} class id="headerbutton7">
						සංවාද
					</button>
					<button className={slide8} class id="headerbutton8">
						සංචාරය කිරීමට ස්ථාන
					</button>

					<div class="flex-container">
						<div className={select1}>{ph1}</div>
						<div className={select2}>{ph2}</div>
						<div className={select3}>{ph3}</div>
						<div className={select4}>{ph4}</div>
						<div className={select5}>{ph5}</div>
						<div className={select6}>{ph6}</div>
						<div className={select7}>{ph7}</div>
						<div className={select8}>{ph8}</div>
						<div className={select9}>{ph9}</div>
					</div>

					{this.props.navList.index}
				</center>
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

export default connect(mapStateToProps, mapDispatchToProps())(phraseBubble);

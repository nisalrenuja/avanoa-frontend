import { Component } from "react";
import "./phraseBubble.css";
import { Howl } from "howler";
import { connect } from 'react-redux'
import { updateIndex } from "../../reducers/navList/navListSlice";
import { setCount } from "../../reducers/counter/counterSlice";

const audioClips = [
  // Siren - need to add
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
    label: "ආයුබෝවන්",
  },
  // Slide 1 Audio
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
    label: "ආයුබෝවන්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
    label: "ඔව්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651481915/2022-05-02_14-27-37_bugyqg.mp3",
    label: "නැහැ",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482089/2022-05-02_14-30-09_y5ilia.mp3",
    label: "සුබ උදෑසනක්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482230/2022-05-02_14-32-00_zdbvbg.mp3",
    label: "සුබ රාත්‍රියක්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482322/2022-05-02_14-34-35_q2x4aw.mp3",
    label: "නිදිමතයි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482461/2022-05-02_14-36-44_r5dtsf.mp3",
    label: "තිබහයි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482528/2022-05-02_14-38-12_o4oslm.mp3",
    label: "බඩිගිනි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482600/2022-05-02_14-39-21_vxrmj1.mp3",
    label: "කොහොමද?",
  },

  // Slide 2 Audio
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
    label: "ආයුබෝවන්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
    label: "ඔව්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651481915/2022-05-02_14-27-37_bugyqg.mp3",
    label: "නැහැ",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482089/2022-05-02_14-30-09_y5ilia.mp3",
    label: "සුබ උදෑසනක්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482230/2022-05-02_14-32-00_zdbvbg.mp3",
    label: "සුබ රාත්‍රියක්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482322/2022-05-02_14-34-35_q2x4aw.mp3",
    label: "නිදිමතයි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482461/2022-05-02_14-36-44_r5dtsf.mp3",
    label: "තිබහයි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482528/2022-05-02_14-38-12_o4oslm.mp3",
    label: "බඩිගිනි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482600/2022-05-02_14-39-21_vxrmj1.mp3",
    label: "කොහොමද?",
  },

  // Slide 3 Audio
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
    label: "ආයුබෝවන්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
    label: "ඔව්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651481915/2022-05-02_14-27-37_bugyqg.mp3",
    label: "නැහැ",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482089/2022-05-02_14-30-09_y5ilia.mp3",
    label: "සුබ උදෑසනක්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482230/2022-05-02_14-32-00_zdbvbg.mp3",
    label: "සුබ රාත්‍රියක්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482322/2022-05-02_14-34-35_q2x4aw.mp3",
    label: "නිදිමතයි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482461/2022-05-02_14-36-44_r5dtsf.mp3",
    label: "තිබහයි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482528/2022-05-02_14-38-12_o4oslm.mp3",
    label: "බඩිගිනි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482600/2022-05-02_14-39-21_vxrmj1.mp3",
    label: "කොහොමද?",
  },

  // Slide 4 Audio
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
    label: "ආයුබෝවන්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
    label: "ඔව්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651481915/2022-05-02_14-27-37_bugyqg.mp3",
    label: "නැහැ",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482089/2022-05-02_14-30-09_y5ilia.mp3",
    label: "සුබ උදෑසනක්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482230/2022-05-02_14-32-00_zdbvbg.mp3",
    label: "සුබ රාත්‍රියක්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482322/2022-05-02_14-34-35_q2x4aw.mp3",
    label: "නිදිමතයි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482461/2022-05-02_14-36-44_r5dtsf.mp3",
    label: "තිබහයි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482528/2022-05-02_14-38-12_o4oslm.mp3",
    label: "බඩිගිනි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482600/2022-05-02_14-39-21_vxrmj1.mp3",
    label: "කොහොමද?",
  },

  // Slide 5 Audio
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
    label: "ආයුබෝවන්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
    label: "ඔව්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651481915/2022-05-02_14-27-37_bugyqg.mp3",
    label: "නැහැ",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482089/2022-05-02_14-30-09_y5ilia.mp3",
    label: "සුබ උදෑසනක්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482230/2022-05-02_14-32-00_zdbvbg.mp3",
    label: "සුබ රාත්‍රියක්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482322/2022-05-02_14-34-35_q2x4aw.mp3",
    label: "නිදිමතයි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482461/2022-05-02_14-36-44_r5dtsf.mp3",
    label: "තිබහයි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482528/2022-05-02_14-38-12_o4oslm.mp3",
    label: "බඩිගිනි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482600/2022-05-02_14-39-21_vxrmj1.mp3",
    label: "කොහොමද?",
  },

  // Slide 6 Audio
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
    label: "ආයුබෝවන්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
    label: "ඔව්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651481915/2022-05-02_14-27-37_bugyqg.mp3",
    label: "නැහැ",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482089/2022-05-02_14-30-09_y5ilia.mp3",
    label: "සුබ උදෑසනක්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482230/2022-05-02_14-32-00_zdbvbg.mp3",
    label: "සුබ රාත්‍රියක්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482322/2022-05-02_14-34-35_q2x4aw.mp3",
    label: "නිදිමතයි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482461/2022-05-02_14-36-44_r5dtsf.mp3",
    label: "තිබහයි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482528/2022-05-02_14-38-12_o4oslm.mp3",
    label: "බඩිගිනි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482600/2022-05-02_14-39-21_vxrmj1.mp3",
    label: "කොහොමද?",
  },
  // Slide 7 Audio
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
    label: "ආයුබෝවන්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
    label: "ඔව්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651481915/2022-05-02_14-27-37_bugyqg.mp3",
    label: "නැහැ",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482089/2022-05-02_14-30-09_y5ilia.mp3",
    label: "සුබ උදෑසනක්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482230/2022-05-02_14-32-00_zdbvbg.mp3",
    label: "සුබ රාත්‍රියක්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482322/2022-05-02_14-34-35_q2x4aw.mp3",
    label: "නිදිමතයි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482461/2022-05-02_14-36-44_r5dtsf.mp3",
    label: "තිබහයි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482528/2022-05-02_14-38-12_o4oslm.mp3",
    label: "බඩිගිනි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482600/2022-05-02_14-39-21_vxrmj1.mp3",
    label: "කොහොමද?",
  },

  // Slide 8 Audio
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
    label: "ආයුබෝවන්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651477331/2022-05-02_13-11-14_wqvdvs.mp3",
    label: "ඔව්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651481915/2022-05-02_14-27-37_bugyqg.mp3",
    label: "නැහැ",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482089/2022-05-02_14-30-09_y5ilia.mp3",
    label: "සුබ උදෑසනක්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482230/2022-05-02_14-32-00_zdbvbg.mp3",
    label: "සුබ රාත්‍රියක්",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482322/2022-05-02_14-34-35_q2x4aw.mp3",
    label: "නිදිමතයි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482461/2022-05-02_14-36-44_r5dtsf.mp3",
    label: "තිබහයි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482528/2022-05-02_14-38-12_o4oslm.mp3",
    label: "බඩිගිනි",
  },
  {
    sound: "https://res.cloudinary.com/avanoa/video/upload/v1651482600/2022-05-02_14-39-21_vxrmj1.mp3",
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
    slide1:"notSelected",
    slide2:"notSelected",
    slide3:"notSelected",
    phrases: [
      "ආයුබෝවන්",
      "ඔව්",
      "නැහැ",
      "සුබ උදෑසනක්",
      "සුබ රාත්‍රියක්",
      "නිදිමතයි",
      "තිබහයි",
      "බඩිගිනි",
      "කොහොමද?",
    ],
    ph1:"ආයුබෝවන්",
    ph2:"ඔව්",
    ph3:"නැහැ",
    ph4:"සුබ උදෑසනක්",
    ph5:"සුබ රාත්‍රියක්",
    ph6:"නිදිමතයි",
    ph7:"තිබහයි",
    ph8:"බඩිගිනි",
    ph9:"කොහොමද?",

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
    this.soundPlay(audioClips[phNum].sound)
  } 

  
  componentDidUpdate() {
    const index = this.props.navList.index;
    const counter = this.props.counter.value;
    //21 - 30 slide 1 phrases
    if(index == 21){
      //this.selectBubble(0);
      //select1="selection"
      this.selectBubble(1);
      this.props.setCount(0);
    }
    if(index == 22){
      this.selectBubble(2);
    }
    if(index == 23){
      this.selectBubble(3);

    }
    if(index == 24){
        this.selectBubble(4);
    }
    if(index == 25){
      //select5 = "selection"
      this.selectBubble(5);
    }
    if(index == 26){
      //select6 = "selection"
      this.selectBubble(6);
    }

    if(index == 27){
      //select7 = "selection"
      this.selectBubble(7);

    }if(index == 28){
      //select8 = "selection"
      this.selectBubble(8);

    }if(index == 29){
      //select9 = "selection"
      this.selectBubble(9);
    }

    //31-40 slide 2

    
    if(index == 31){
      //this.selectBubble(0);
      //select1="selection"
      this.selectBubble(10);
      this.props.setCount(0);
    }
    if(index == 32){
      this.selectBubble(11);
    }
    if(index == 33){
      this.selectBubble(12);

    }
    if(index == 34){
        this.selectBubble(13);
    }
    if(index == 35){
      //select5 = "selection"
      this.selectBubble(14);
    }
    if(index == 36){
      //select6 = "selection"
      this.selectBubble(15);
    }

    if(index == 37){
      //select7 = "selection"
      this.selectBubble(16);

    }if(index == 38){
      //select8 = "selection"
      this.selectBubble(17);

    }if(index == 39){
      //select9 = "selection"
      this.selectBubble(18);
    }

    //41-50 slide 3

    if(index == 41){
      //this.selectBubble(0);
      //select1="selection"
      this.selectBubble(19);
      this.props.setCount(0);
    }
    if(index == 42){
      this.selectBubble(20);
    }
    if(index == 43){
      this.selectBubble(21);

    }
    if(index == 44){
        this.selectBubble(22);
    }
    if(index == 45){
      //select5 = "selection"
      this.selectBubble(23);
    }
    if(index == 46){
      //select6 = "selection"
      this.selectBubble(24);
    }

    if(index == 47){
      //select7 = "selection"
      this.selectBubble(25);

    }if(index == 48){
      //select8 = "selection"
      this.selectBubble(26);

    }if(index == 49){
      //select9 = "selection"
      this.selectBubble(27);
    }

    //51-60 slide 4

    if(index == 51){
      //this.selectBubble(0);
      //select1="selection"
      this.selectBubble(28);
      this.props.setCount(0);
    }
    if(index == 52){
      this.selectBubble(29);
    }
    if(index == 53){
      this.selectBubble(30);

    }
    if(index == 54){
        this.selectBubble(31);
    }
    if(index == 55){
      //select5 = "selection"
      this.selectBubble(32);
    }
    if(index == 56){
      //select6 = "selection"
      this.selectBubble(33);
    }

    if(index == 57){
      //select7 = "selection"
      this.selectBubble(34);

    }if(index == 58){
      //select8 = "selection"
      this.selectBubble(35);

    }if(index == 59){
      //select9 = "selection"
      this.selectBubble(36);
    }

    //61-670 slide 5

    if(index == 61){
      //this.selectBubble(0);
      //select1="selection"
      this.selectBubble(37);
      this.props.setCount(0);
    }
    if(index == 62){
      this.selectBubble(38);
    }
    if(index == 63){
      this.selectBubble(39);

    }
    if(index == 64){
        this.selectBubble(40);
    }
    if(index == 65){
      //select5 = "selection"
      this.selectBubble(41);
    }
    if(index == 66){
      //select6 = "selection"
      this.selectBubble(42);
    }

    if(index == 67){
      //select7 = "selection"
      this.selectBubble(43);

    }if(index == 68){
      //select8 = "selection"
      this.selectBubble(44);

    }if(index == 69){
      //select9 = "selection"
      this.selectBubble(45);
    }

    //61-670 slide 5

    if(index == 61){
      //this.selectBubble(0);
      //select1="selection"
      this.selectBubble(46);
      this.props.setCount(0);
    }
    if(index == 62){
      this.selectBubble(47);
    }
    if(index == 63){
      this.selectBubble(48);

    }
    if(index == 64){
        this.selectBubble(49);
    }
    if(index == 65){
      //select5 = "selection"
      this.selectBubble(50);
    }
    if(index == 66){
      //select6 = "selection"
      this.selectBubble(51);
    }

    if(index == 67){
      //select7 = "selection"
      this.selectBubble(52);

    }if(index == 68){
      //select8 = "selection"
      this.selectBubble(53);

    }if(index == 69){
      //select9 = "selection"
      this.selectBubble(54);
    }

    //71-80 slide 6

    if(index == 71){
      //this.selectBubble(0);
      //select1="selection"
      this.selectBubble(55);
      this.props.setCount(0);
    }
    if(index == 72){
      this.selectBubble(56);
    }
    if(index == 73){
      this.selectBubble(57);

    }
    if(index == 74){
        this.selectBubble(58);
    }
    if(index == 75){
      //select5 = "selection"
      this.selectBubble(59);
    }
    if(index == 76){
      //select6 = "selection"
      this.selectBubble(60);
    }

    if(index == 77){
      //select7 = "selection"
      this.selectBubble(61);

    }if(index == 78){
      //select8 = "selection"
      this.selectBubble(62);

    }if(index == 79){
      //select9 = "selection"
      this.selectBubble(63);
    }
    
    //81-90 slide 7

    if(index == 81){
      //this.selectBubble(0);
      //select1="selection"
      this.selectBubble(64);
      this.props.setCount(0);
    }
    if(index == 82){
      this.selectBubble(65);
    }
    if(index == 83){
      this.selectBubble(66);
    }
    if(index == 84){
        this.selectBubble(67);
    }
    if(index == 85){
      //select5 = "selection"
      this.selectBubble(68);
    }
    if(index == 86){
      //select6 = "selection"
      this.selectBubble(69);
    }
    if(index == 87){
      //select7 = "selection"
      this.selectBubble(70);

    }if(index == 88){
      //select8 = "selection"
      this.selectBubble(71);

    }if(index == 89){
      //select9 = "selection"
      this.selectBubble(72);
    }

    //91 - 100 slide 8
    if(index == 91){
      //this.selectBubble(0);
      //select1="selection"
      this.selectBubble(73);
      this.props.setCount(0);
    }
    if(index == 92){
      this.selectBubble(74);
    }
    if(index == 93){
      this.selectBubble(75);
    }
    if(index == 94){
        this.selectBubble(76);
    }
    if(index == 95){
      //select5 = "selection"
      this.selectBubble(77);
    }
    if(index == 86){
      //select6 = "selection"
      this.selectBubble(78);
    }

    if(index == 97){
      //select7 = "selection"
      this.selectBubble(79);

    }if(index == 98){
      //select8 = "selection"
      this.selectBubble(80);

    }
    if(index == 99){
      //select9 = "selection"
      this.selectBubble(81);
    }   
  }

  render() {
    const index = this.props.navList.index;
    const counter = this.props.counter.value;

    let slide1 = ""
    let slide2 = ""
    let slide3 = ""
    let slide4 = ""
    let slide5 = ""
    let slide6 = ""
    let slide7 = ""
    let slide8 = ""


    let select1 = ""
    let select2 = ""
    let select3 = ""
    let select4 = ""
    let select5 = ""
    let select6 = ""
    let select7 = ""
    let select8 = ""
    let select9 = ""

    let ph1 = "ආයුබෝවන්"
    let ph2 = "ඔව්"
    let ph3 = "නැහැ"
    let ph4 = "සුබ උදෑසනක්"
    let ph5 = "සුබ උදෑසනක්"
    let ph6 = "සුබ උදෑසනක්"
    let ph7 = "සුබ උදෑසනක්"
    let ph8 = "සුබ උදෑසනක්"
    let ph9 = "සුබ උදෑසනක්"

    
    if(index == 3 && counter == 0){
      //setSel("selectionBoarder");
      //this.setState({ slide1 : "selected"});
      slide1 = "selected"

    }
    else if(index == 3 && counter == 1){
      //setSel("selectionBoarder");
      //this.setState({ slide2 : "selected"});
      //this.setState({ slide1 : "notSelected"});
      slide2 = "selected";
      slide1 = "notSelected"


      ph1 = "new slide 2"
      ph2 = "new"
      ph3 = "new"
      ph4 = "new"
      ph5 = "new"
      ph6 = "new"
      ph7 = "new"
      ph8 = "new"
      ph9 = "new"

    }
    else if(index == 3 && counter == 2){
      //setSel("selectionBoarder");
      // this.setState({ slide3 : "selected"});
      // this.setState({ slide2 : "notSelected"});
      slide3 = "selected";
      slide2 = "notSelected"

      ph1 = "new slide 3"
      ph2 = "new"
      ph3 = "new"
      ph4 = "new"
      ph5 = "new"
      ph6 = "new"
      ph7 = "new"
      ph8 = "new"
      ph9 = "new"
    }
    else if(index == 3 && counter == 3){
      //setSel("selectionBoarder");
      // this.setState({ slide3 : "selected"});
      // this.setState({ slide2 : "notSelected"});
      slide4 = "selected";
      slide3 = "notSelected"
    }
    else if(index == 3 && counter == 4){
      //setSel("selectionBoarder");
      // this.setState({ slide3 : "selected"});
      // this.setState({ slide2 : "notSelected"});
      slide5 = "selected";
      slide4 = "notSelected"
    }
    else if(index == 3 && counter == 5){
      //setSel("selectionBoarder");
      // this.setState({ slide3 : "selected"});
      // this.setState({ slide2 : "notSelected"});
      slide6 = "selected";
      slide5 = "notSelected"
    }
    else if(index == 3 && counter == 6){
      //setSel("selectionBoarder");
      // this.setState({ slide3 : "selected"});
      // this.setState({ slide2 : "notSelected"});
      slide7 = "selected";
      slide6 = "notSelected"
    }
    else if(index == 3 && counter == 7){
      //setSel("selectionBoarder");
      // this.setState({ slide3 : "selected"});
      // this.setState({ slide2 : "notSelected"});
      slide8 = "selected";
      slide7 = "notSelected"
    }

    if(index == 13){
      slide1 = "selection"
      
      if(counter == 0){
        select1 = "selected"
      }
      if(counter == 1){
        select2 = "selected"
        select1 = "notSelected"
      }
      if(counter == 2){
        select3 = "selected"
        select2 = "notSelected"
      }
      if(counter == 3){
        select4 = "selected"
        select3 = "notSelected"
      }
      if(counter == 4){
        select5 = "selected"
        select4 = "notSelected"
      }
      if(counter == 5){
        select6 = "selected"
        select5 = "notSelected"
      }
      if(counter == 6){
        select7 = "selected"
        select6 = "notSelected"
      }
      if(counter == 7){
        select8 = "selected"
        select7 = "notSelected"
      }
      if(counter == 8){
        select9 = "selected"
        select8 = "notSelected"
      }
    }

    
    

    return (
      <div>
        
        {/* {this.RenderButtonSound()} */}
        <button className={slide1}>Slide 1</button>
        <button className={slide2}>Slide 2</button>
        <button className={slide3}>Slide 3</button>
        <button className={slide4}>Slide 4</button>
        <button className={slide5}>Slide 5</button>
        <button className={slide6}>Slide 6</button>
        <button className={slide7}>Slide 7</button>
        <button className={slide8}>Slide 8</button>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
  navList: state.navList,
});

const mapDispatchToProps = () => ({ 
  setCount,
  updateIndex,
});

export default connect (mapStateToProps, mapDispatchToProps()) (phraseBubble);

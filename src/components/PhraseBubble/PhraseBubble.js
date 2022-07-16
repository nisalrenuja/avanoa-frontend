import { Component } from "react";
import "./phraseBubble.css";
import { Howl } from "howler";
import { connect } from 'react-redux'
import { updateIndex } from "../../reducers/navList/navListSlice";
import { setCount } from "../../reducers/counter/counterSlice";

const audioClips = [
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
      this.selectBubble(0);
      this.props.setCount(0);
    }
    if(index == 22){
      this.selectBubble(1);
    }
    if(index == 23){
      this.selectBubble(2);

    }
    if(index == 24){
        this.selectBubble(3);
    }
    if(index == 25){
      //select5 = "selection"
      this.selectBubble(4);
    }
    if(index == 26){
      //select6 = "selection"
      this.selectBubble(5);
    }

    if(index == 27){
      //select7 = "selection"
      this.selectBubble(6);

    }if(index == 28){
      //select8 = "selection"
      this.selectBubble(7);

    }if(index == 29){
      //select9 = "selection"
      this.selectBubble(8);
    }

    //31-40 slide 2
    
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

    
    if(index == 14){
      slide2 = "selection"
      ph1 = "new slide 2"
      ph2 = "new"
      ph3 = "new"
      ph4 = "new"
      ph5 = "new"
      ph6 = "new"
      ph7 = "new"
      ph8 = "new"
      ph9 = "new"

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



    if (index == 15){
      slide3 = "selection"
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
    if (index ==16){
      slide4 = "selection"
    }
    if (index ==17){
      slide5 = "selection"
    
    }
    if (index ==18){
      slide6 = "selection"
    }
    if (index ==19){
      slide7 = "selection"
    }
    if (index ==20){
      slide8 = "selection"
    }
    

    return (
      <div>
        
        {/* {this.RenderButtonSound()} */}
        <button className={slide1} >Slide 1</button><button className={slide2}>Slide 2</button><button className={slide3}>Slide 3</button><button className={slide4} >Slide 4</button>
        <button className={slide5} >Slide 5</button><button className={slide6} >Slide 6</button><button className={slide7} >Slide 7</button><button className={slide8} >Slide 8</button>
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

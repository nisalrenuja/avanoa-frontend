import { Component } from "react";
import "./phraseBubble.css";
import { Howl } from "howler";

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
    select1: "selected",
    select2: "notSelected",
    select3: "notSelected",
    select4: "notSelected",
    select5: "notSelected",
    select6: "notSelected",
    select7: "notSelected",
    select8: "notSelected",
    select9: "notSelected",
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
  };

  selectBubble(selNum) {
    const sel = "select" + [selNum + 1];
    console.log(sel);
    this.setState({ [sel]: "selection" });
    this.selectionFunc(selNum, sel);
  }

  selectionFunc(phNum, stateName) {
    console.log(this.state.phrases[phNum]);
    this.soundPlay(audioClips[phNum].sound)
  }

  pauseWebgazer() {
    const webgazer = window.webgazer;
    webgazer.pause();
  }
  resumeWebgazer() {
    const webgazer = window.webgazer;
    webgazer.resume();
  }

  componentDidUpdate() {
    if (this.state.count == 0 && this.state.select1 === "notSelected") {
      this.setState({ select1: "selected" });
      this.setState({ select2: "notSelected" });
    } else if (this.state.count == 1 && this.state.select2 === "notSelected") {
      this.setState({ select2: "selected" });
      this.setState({ select1: "notSelected" });
      this.setState({ select3: "notSelected" });
    } else if (this.state.count == 2 && this.state.select3 === "notSelected") {
      this.setState({ select3: "selected" });
      this.setState({ select2: "notSelected" });
      this.setState({ select4: "notSelected" });
    } else if (this.state.count == 3 && this.state.select4 === "notSelected") {
      this.setState({ select4: "selected" });
      this.setState({ select3: "notSelected" });
      this.setState({ select5: "notSelected" });
    } else if (this.state.count == 4 && this.state.select5 === "notSelected") {
      this.setState({ select5: "selected" });
      this.setState({ select4: "notSelected" });
      this.setState({ select6: "notSelected" });
    } else if (this.state.count == 5 && this.state.select6 === "notSelected") {
      this.setState({ select6: "selected" });
      this.setState({ select5: "notSelected" });
      this.setState({ select7: "notSelected" });
    } else if (this.state.count == 6 && this.state.select7 === "notSelected") {
      this.setState({ select7: "selected" });
      this.setState({ select6: "notSelected" });
      this.setState({ select8: "notSelected" });
    } else if (this.state.count == 7 && this.state.select8 === "notSelected") {
      this.setState({ select8: "selected" });
      this.setState({ select7: "notSelected" });
      this.setState({ select9: "notSelected" });
    } else if (this.state.count == 8 && this.state.select9 === "notSelected") {
      this.setState({ select9: "selected" });
      this.setState({ select8: "notSelected" });
    }
  }

  componentDidMount() {
    const LOOK_DELAY = 10; // 1 second
    const LEFT_CUTOFF = window.innerWidth / 6;
    const RIGHT_CUTOFF = window.innerWidth - window.innerWidth / 6;
    const TOP_CUTOFF = window.innerHeight / 10;

    let startLookTime = Number.POSITIVE_INFINITY;
    let lookDirection = null;

    const webgazer = window.webgazer;
    webgazer.setRegression("ridge");
    webgazer.showVideoPreview(false);
    //const blink = new webgazer.BlinkDetector;

    console.log(webgazer.getTracker());

    window.saveDataAcrossSessions = true;
    webgazer
      .setGazeListener((data, timestamp) => {
        //console.log(data, timestamp);
        if (data == null || lookDirection === "STOP") return;

        if (
          data.x < LEFT_CUTOFF &&
          lookDirection !== "LEFT" &&
          lookDirection !== "RESET"
        ) {
          startLookTime = timestamp;
          lookDirection = "LEFT";
        } else if (
          data.x > RIGHT_CUTOFF &&
          lookDirection !== "RIGHT" &&
          lookDirection !== "RESET"
        ) {
          startLookTime = timestamp;
          lookDirection = "RIGHT";
        }

        if (data.y < TOP_CUTOFF && lookDirection !== "RESET") {
          //console.log('looking top')
          startLookTime = timestamp;
          lookDirection = "TOP";

          if (this.state.cn === this.state.count) {
            this.selectBubble(this.state.count);
            this.setState({ cn: this.state.cn + 1 });
          }
        } else if (data.x >= LEFT_CUTOFF && data.x <= RIGHT_CUTOFF) {
          startLookTime = Number.POSITIVE_INFINITY;
          lookDirection = null;
        }

        if (startLookTime + LOOK_DELAY < timestamp) {
          if (lookDirection === "TOP") {
            console.log("looking top" + this.state.count);
          } else if (lookDirection === "LEFT") {
            if (this.state.count > 0) {
              this.setState({ count: this.state.count - 1 });
              this.setState({ cn: this.state.count });
            }
            //console.log("looking left"+ this.state.count);
          } else {
            if (this.state.count < 8) {
              this.setState({ count: this.state.count + 1 });
              this.setState({ cn: this.state.count });
            }
            //console.log("looking right" + this.state.count);
          }

          startLookTime = Number.POSITIVE_INFINITY;
          lookDirection = "STOP";
          setTimeout(() => {
            console.log("time reset");
            lookDirection = "RESET";
          }, 200);
        }
      })
      .begin();
  }

  render() {
    return (
      <div>
        <button onClick={this.pauseWebgazer}>Turn Off</button>
        <button onClick={this.resumeWebgazer}>Turn On</button>
        {/* {this.RenderButtonSound()} */}
        <div class="flex-container">
          <div className={this.state.select1}>ආයුබෝවන්</div>
          <div className={this.state.select2}>ඔව්</div>
          <div className={this.state.select3}>නැහැ</div>
          <div className={this.state.select4}>සුබ උදෑසනක්</div>
          <div className={this.state.select5}>සුබ රාත්‍රියක්</div>
          <div className={this.state.select6}>නිදිමතයි</div>
          <div className={this.state.select7}>තිබහයි</div>
          <div className={this.state.select8}>බඩිගිනි</div>
          <div className={this.state.select9}>කොහොමද?</div>
        </div>
      </div>
    );
  }
}

export default phraseBubble;

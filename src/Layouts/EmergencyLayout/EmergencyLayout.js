import React from "react";
import emailjs from "@emailjs/browser";
import "./EmergencyLayout.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { connect } from "react-redux";
import { updateIndex } from "../../reducers/navList/navListSlice";
import { setCount } from "../../reducers/counter/counterSlice";
import Appbar from "../../components/Appbar/Appbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.RhandleClick = this.RhandleClick.bind(this);
    this.MhandleClick = this.MhandleClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.MhandleBack = this.MhandleBack.bind(this);
    this.FhandleBack = this.FhandleBack.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  componentDidUpdate() {
    const index = this.props.navList.index;
    // start form index 5 to count 3
    // 1 - 150 ---> chooosing 150 ---> have 4 options (i-150 and 4counts) ---> 1 - 153 2- 154 3-155 4-156 ---> starts from 170 2 options (2counts)
    //2 - 151
    //3 - 152
    if (index == 5 && this.state.count == 0) {
      this.setState({ page: 1 });
      this.setState({ count: this.state.count + 1 });
    }

    if (index == 150 && this.state.count == 1) {
      this.RhandleClick("රැකවරණ භාරකරු");
      this.setState({ count: 0 });
    }
    if (index == 151 && this.state.count == 1) {
      this.RhandleClick("භාරකරු");
      this.setState({ count: 0 });
    }
    if (index == 152 && this.state.count == 1) {
      this.RhandleClick("ඩොක්ටර්");
      this.setState({ count: 0 });
    }

    if (index == 153 && this.state.count == 0) {
      this.MhandleClick("මට බෙහෙත් අවශ්‍යයි");
      this.setState({ count: this.state.count + 1 });
    }
    if (index == 154 && this.state.count == 0) {
      this.MhandleClick("මට තිබහයි");
      this.setState({ count: this.state.count + 1 });
    }
    if (index == 155 && this.state.count == 0) {
      this.MhandleClick("මට කන්න ඕන");
      this.setState({ count: this.state.count + 1 });
    }
    if (index == 153 && this.state.count == 0) {
      this.MhandleClick("මට ඔයාව හමුවෙන්න අවශ්යයි");
      this.setState({ count: this.state.count + 1 });
    }
    if (index == 153 && this.state.count == 0) {
      this.MhandleClick("රැකවරණ නිලධාරියා මෙහි නොමැත");
      this.setState({ count: this.state.count + 1 });
    }
    if (index == 153 && this.state.count == 0) {
      this.MhandleClick("මට සනීප නෑ");
      this.setState({ count: this.state.count + 1 });
    }
    if (index == 153 && this.state.count == 0) {
      this.MhandleClick("මගේ පත්වීම ළඟයි");
      this.setState({ count: this.state.count + 1 });
    }    

    if (index == 163) {
      //back button
      this.props.updateIndex(150);
    }
    if (index == 164 && this.state.count == 1) {
      this.sendEmail();
      this.setState({ count: 0 });
      this.props.updateIndex(5);
    }
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

  MhandleBack() {
    this.setState({ page: 1 });
  }

  FhandleBack() {
    this.setState({ page: 2 });
  }

  handleClick(event) {
    event.preventDefault();

    this.setState({ [event.target.name]: event.target.value });

    if (event.target.name == "recepient") {
      this.setState({ Brecepient: true });

      if (event.target.value == "Care Taker") {
        this.setState({ email: "nipunchamodya@gmail.com" });
      } else if (event.target.value == "Gurdian") {
        this.setState({ email: "nrenuja@gmail.com" });
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

  RhandleClick(Tvar) {
    // event.preventDefault();

    this.setState({ recepient: Tvar });

    console.log("hello");
    console.log(Tvar);
    console.log(this.state.recepient);

    // if (this.state.recepient == "recepient") {
    this.setState({ Brecepient: true });

    if (Tvar == "රැකවරණ භාරකරු") {
      this.setState({ email: "nipunchamodya@gmail.com" });
    } else if (Tvar == "භාරකරු") {
      this.setState({ email: "nrenuja@gmail.com" });
    } else if (Tvar == "රැකවරණ භාරකරු") {
      this.setState({ email: "pokirisa@gmail.com" });
    }

    this.setState({ page: 2 });
    // }
  }
  MhandleClick(Tvar) {
    this.setState({ message: Tvar });
    this.setState({ Bmessage: true });
    this.setState({ page: 3 });
    this.setState({ subject: Tvar });
    console.log(Tvar);
    console.log(this.state.message);
  }

  sendEmail = () => {
    // e.preventDefault();

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
          return toast("Email Sent Successfully 🤗", {
            className: "toast-success",
            bodyClassName: "toast-success",
          });
        },
        (error) => {
          console.log(error.text);
          return toast("Please check network connectivity", {
            className: "toast-success",
            bodyClassName: "toast-success",
          });
        }
      );
  };

  render() {
    const index = this.props.navList.index;
    const counter = this.props.counter.value;

    let select1 = "";
    let select2 = "";
    let select3 = "";
    let select4 = "";
    let select5 = "";

    if (index == 5) {
      if (counter == 0) {
        select1 = "selected";
      }
      if (counter == 1) {
        select2 = "selected";
      }
      if (counter == 2) {
        select3 = "selected";
      }
    }

    if (index == 150) {
      if (counter == 0) {
        select1 = "selected";
      }
      if (counter == 1) {
        select2 = "selected";
      }
      if (counter == 2) {
        select3 = "selected";
      }
      if (counter == 3) {
        select4 = "selected";
      }
    }
    if (index == 151 || index == 152) {
      if (counter == 0) {
        select1 = "selected";
      }
      if (counter == 1) {
        select2 = "selected";
      }
      if (counter == 2) {
        select4 = "selected";
      }
    }

    if (
      index == 153 ||
      index == 154 ||
      index == 155 ||
      index == 156 ||
      index == 157
    ) {
      if (counter == 0) {
        select4 = "selected";
      }
      if (counter == 1) {
        select5 = "selected";
      }
    }

    let comp;

    if (this.state.page === 1) {
      comp = <Recepient RhandleClick={this.RhandleClick} />;
    }
    if (this.state.page === 2) {
      comp = (
        <Message
          recepient={this.state.recepient}
          MhandleClick={this.MhandleClick}
          MhandleBack={this.MhandleBack}
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
          FhandleBack={this.FhandleBack}
          sendEmail={this.sendEmail}
        />
      );
    }

    function Recepient(props) {
      return (
        <div>
          <ToastContainer />
          <div className="app">
            <div className="box">
              <h1 classname="h1tag">පණිවිඩය තෝරන්න</h1>

              <button
                className={`emergencybuttons ${select1}`}
                onClick={() => props.RhandleClick("රැකවරණ භාරකරු")}
                name="recepient"
                value="රැකවරණ භාරකරු"
              >
                රැකවරණ භාරකරු
              </button>
              <button
                className={`emergencybuttons ${select2}`}
                onClick={() => props.RhandleClick("භාරකරු")}
                name="recepient"
                value="භාරකරු"
              >
                භාරකරු
              </button>
              <button
                className={`emergencybuttons ${select3}`}
                onClick={() => props.RhandleClick("ඩොක්ටර්")}
                name="recepient"
                value="ඩොක්ටර්"
              >
                ඩොක්ටර්
              </button>
            </div>
          </div>
        </div>
      );
    }

    function Message(props) {
      console.log("Message");
      if (props.recepient == "රැකවරණ භාරකරු") {
        return (
          <div>
            <div className="app">
              <div className="box">
                <h1 classname="h1tag">පණිවිඩය තෝරන්න</h1>
                <button
                  className={`emergencybuttons ${select1}`}
                  onClick={() => props.MhandleClick("මට බෙහෙත් අවශ්‍යයි")}
                  name="message"
                  value="මට බෙහෙත් අවශ්‍යයි"
                >
                  මට බෙහෙත් අවශ්‍යයි
                </button>
                <button
                  className={`emergencybuttons ${select2}`}
                  onClick={() => props.MhandleClick("මට කන්න ඕන")}
                  name="message"
                  value="මට කන්න ඕන"
                >
                  මට කන්න ඕන
                </button>
                <button
                  className={`emergencybuttons ${select3}`}
                  onClick={() => props.MhandleClick("මට තිබහයි")}
                  name="message"
                  value="මට තිබහයි"
                >
                  මට තිබහයි
                </button>

                <button
                  className={`emergencybuttons ${select4}`}
                  onClick={props.MhandleBack}
                  name="messageBack"
                >
                  පෙර පිටුව
                </button>
              </div>
            </div>
          </div>
        );
      } else if (props.recepient == "භාරකරු") {
        return (
          <div>
            <div className="app">
              <div className="box">
                <h1 classname="h1tag">පණිවිඩය තෝරන්න</h1>

                <button
                  className={`emergencybuttons ${select1}`}
                  onClick={() => props.MhandleClick("මට ඔයාව හමුවෙන්න අවශ්යයි")}
                  name="message"
                  value="මට ඔයාව හමුවෙන්න අවශ්යයි"
                >
                  මට ඔයාව හමුවෙන්න අවශ්යයි
                </button>
                <button
                  className={`emergencybuttons ${select2}`}
                  onClick={() =>
                    props.MhandleClick("රැකවරණ නිලධාරියා මෙහි නොමැත")
                  }
                  name="message"
                  value="රැකවරණ නිලධාරියා මෙහි නොමැත"
                >
                  රැකවරණ නිලධාරියා මෙහි නොමැත
                </button>

                <button
                  className={`emergencybuttons ${select4}`}
                  onClick={props.MhandleBack}
                  name="messageBack"
                >
                  පෙර පිටුව
                </button>
              </div>
            </div>
          </div>
        );
      } else if (props.recepient == "ඩොක්ටර්") {
        return (
          <div>
            <div className="app">
              <div className="box">
                <h1 classname="h1tag">පණිවිඩය තෝරන්න</h1>

                <button
                  className={`emergencybuttons ${select1}`}
                  onClick={() => props.MhandleClick("මට සනීප නෑ")}
                  name="message"
                  value="මට සනීප නෑ"
                >
                  මට සනීප නෑ
                </button>
                <button
                  className={`emergencybuttons ${select2}`}
                  onClick={() => props.MhandleClick("මගේ පත්වීම ළඟයි")}
                  name="message"
                  value="මගේ පත්වීම ළඟයි"
                >
                  මගේ පත්වීම ළඟයි
                </button>

                <button
                  className={`emergencybuttons ${select4}`}
                  onClick={props.MhandleBack}
                  name="messageBack"
                >
                  පෙර පිටුව
                </button>
              </div>
            </div>
          </div>
        );
      }
    }

    function FinalMessage(props) {
      return (
        <div>
          <div className="app">
            <div className="box">
              <h1 classname="h1tag">අවසාන පණිවිඩය</h1>

              <h2>
                <p>ලබන්නා - {props.recepient}</p>
                <p>විද්යුත් තැපෑල - {props.email}</p>
                <p>විෂය - {props.subject}</p>
                <p>පණිවුඩය - {props.message}</p>
              </h2>

              <button
                className={`emergencybuttons ${select4}`}
                onClick={props.FhandleBack}
                name="finalMessageBack"
              >
                පෙර පිටුව
              </button>
              <button
                className={`emergencybuttons ${select5}`}
                name="finalMessageSend"
                onClick={props.sendEmail}
              >
                යවන්න
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Sidebar />
        <Appbar />
        {comp}
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

export default connect(mapStateToProps, mapDispatchToProps())(EmergencyLayout);

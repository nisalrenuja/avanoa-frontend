import React from "react";
import emailjs from "@emailjs/browser";
import "./EmergencyLayout.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { connect } from "react-redux";
import { updateIndex } from "../../reducers/navList/navListSlice";
import { setCount } from "../../reducers/counter/counterSlice";
import Appbar from "../../components/Appbar/Appbar";
import { Title } from "@material-ui/icons";
import axios from "../../libs/axios";
import { addReminder } from "../../reducers/reminders/reminderSlice";
import { mapTimeStr2Timestamp } from "./utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Title: "Title",
      Time: "Time",
      Description: "Description",
      BTitle: false,
      BTime: false,
      BDescription: false,
      page: 1,
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.saveReminder = this.saveReminder.bind(this);
  }

  componentDidUpdate() {
    const index = this.props.navList.index;
    // start form index 5 to count 3
    // 1 - 150 ---> chooosing 150 ---> have 4 options (i-150 and 4counts) ---> 1 - 153 2- 154 3-155 4-156 ---> starts from 170 2 options (2counts)
    //2 - 151
    //3 - 152

    if (index == 500 && this.state.count == 0) {
      this.setState({ page: 1 });
      this.setState({ count: this.state.count + 1 });
    }

    if (index == 750 && this.state.count == 1) {
      this.handleClick("Title", "ආහාර");
      this.setState({ count: 0 });
    }
    if (index == 751 && this.state.count == 1) {
      this.handleClick("Title", "ඖෂධ");
      this.setState({ count: 0 });
    }
    if (index == 752 && this.state.count == 1) {
      this.handleClick("Title", "සනීපාරක්ෂක කටයුතු");
      this.setState({ count: 0 });
    }
    if (index == 755 && this.state.count == 0) {
      this.handleClick("Description", "මට  උදෑසන ආහාර ඕනෙ");
      this.setState({ count: this.state.count + 1 });
    }
    if (index == 756 && this.state.count == 0) {
      this.handleClick("Description", "මට  දහවල් ආහාර ඕනෙ");
      this.setState({ count: this.state.count + 1 });
    }
    if (index == 757 && this.state.count == 0) {
      this.handleClick("Description", "මට  රාත්‍රී ආහාර ඕනෙ");
      this.setState({ count: this.state.count + 1 });
    }
    if (index == 758 && this.state.count == 0) {
      //back button
      this.props.updateIndex(500);
    }
    if (index == 760 && this.state.count == 0) {
      this.handleClick("Description", "මට  උදෑසන ඖෂධ ඕනෙ");
      this.setState({ count: this.state.count + 1 });
    }
    if (index == 761 && this.state.count == 0) {
      this.handleClick("Description", "මට  දහවල් ඖෂධ ඕනෙ");
      this.setState({ count: this.state.count + 1 });
    }
    if (index == 762 && this.state.count == 0) {
      this.handleClick("Description", "මට රාත්‍රී ඖෂධ ඕනෙ");
      this.setState({ count: this.state.count + 1 });
    }
    if (index == 763 && this.state.count == 0) {
      //back button
      this.props.updateIndex(500);
    }
    if (index == 765 && this.state.count == 0) {
      this.handleClick("Description", "මට  මුත්‍රා  කරන්න ඕනෙ");
      this.setState({ count: this.state.count + 1 });
    }
    if (index == 766 && this.state.count == 0) {
      this.handleClick("Description", "මට  මලපහ  කරන්න ඕනෙ");
      this.setState({ count: this.state.count + 1 });
    }
    if (index == 767 && this.state.count == 0) {
      //back button
      this.props.updateIndex(500);
    }
    if (
      (index == 770 && this.state.count == 1) ||
      (index == 775 && this.state.count == 1) ||
      (index == 780 && this.state.count == 1) ||
      (index == 785 && this.state.count == 1) ||
      (index == 790 && this.state.count == 1) ||
      (index == 795 && this.state.count == 1) ||
      (index == 800 && this.state.count == 1) ||
      (index == 805 && this.state.count == 1) ||
      (index == 810 && this.state.count == 1) ||
      (index == 815 && this.state.count == 1)
    ) {
      this.handleClick("Time", "උදෑසන 8.00");
      this.setState({ count: 0 });
    }
    if (
      (index == 771 && this.state.count == 1) ||
      (index == 776 && this.state.count == 1) ||
      (index == 781 && this.state.count == 1) ||
      (index == 786 && this.state.count == 1) ||
      (index == 791 && this.state.count == 1) ||
      (index == 796 && this.state.count == 1) ||
      (index == 801 && this.state.count == 1) ||
      (index == 806 && this.state.count == 1) ||
      (index == 811 && this.state.count == 1) ||
      (index == 816 && this.state.count == 1)
    ) {
      this.handleClick("Time", "දහවල් 1.00");
      this.setState({ count: 0 });
    }
    if (
      (index == 772 && this.state.count == 1) ||
      (index == 777 && this.state.count == 1) ||
      (index == 782 && this.state.count == 1) ||
      (index == 787 && this.state.count == 1) ||
      (index == 792 && this.state.count == 1) ||
      (index == 797 && this.state.count == 1) ||
      (index == 802 && this.state.count == 1) ||
      (index == 807 && this.state.count == 1) ||
      (index == 812 && this.state.count == 1) ||
      (index == 817 && this.state.count == 1)
    ) {
      this.handleClick("Time", "රාත්‍රී 8.00");
      this.setState({ count: 0 });
    }
    if (
      (index == 773 && this.state.count == 1) ||
      (index == 778 && this.state.count == 1) ||
      (index == 783 && this.state.count == 1) ||
      (index == 788 && this.state.count == 1) ||
      (index == 793 && this.state.count == 1) ||
      (index == 798 && this.state.count == 1) ||
      (index == 803 && this.state.count == 1) ||
      (index == 808 && this.state.count == 1) ||
      (index == 813 && this.state.count == 1) ||
      (index == 818 && this.state.count == 1)
    ) {
      this.handleClick("Time", "රාත්‍රී 10.00");
      this.setState({ count: 0 });
    }

    if (index == 830 || index == 832 || index == 834 || index == 836) {
      //back button
      this.props.updateIndex(755);
    }
    if (index == 838 || index == 840 || index == 842 || index == 844) {
      //back button
      this.props.updateIndex(756);
    }
    if (index == 846 || index == 848 || index == 850 || index == 852) {
      //back button
      this.props.updateIndex(757);
    }

    if (index == 862 || index == 864 || index == 866 || index == 868) {
      //back button
      this.props.updateIndex(760);
    }
    if (index == 870 || index == 872 || index == 874 || index == 876) {
      //back button
      this.props.updateIndex(761);
    }

    if (index == 878 || index == 880 || index == 882 || index == 884) {
      //back button
      this.props.updateIndex(762);
    }

    if (index == 894 || index == 896 || index == 898 || index == 900) {
      //back button
      this.props.updateIndex(765);
    }
    if (index == 902 || index == 904 || index == 906 || index == 908) {
      //back button
      this.props.updateIndex(766);
    }

    if (
      index == 831 ||
      index == 833 ||
      index == 835 ||
      index == 837 ||
      index == 839 ||
      index == 841 ||
      index == 843 ||
      index == 845 ||
      index == 847 ||
      index == 849 ||
      index == 851 ||
      index == 853 ||
      index == 855 ||
      index == 857 ||
      index == 859 ||
      index == 861 ||
      index == 863 ||
      index == 865 ||
      index == 867 ||
      index == 869 ||
      index == 871 ||
      index == 873 ||
      index == 875 ||
      index == 877 ||
      index == 879 ||
      index == 881 ||
      index == 883 ||
      index == 885 ||
      index == 887 ||
      index == 889 ||
      index == 891 ||
      index == 893 ||
      index == 895 ||
      index == 897 ||
      index == 899 ||
      index == 901 ||
      index == 903 ||
      index == 905 ||
      index == 907 ||
      index == 909
    ) {
      this.saveReminder();
      this.props.updateIndex(6);
    }
  }

  handleBack(handBack) {
    //event.preventDefault();
    if (handBack == "messageBack") {
      this.setState({ page: 1 });
    }
    if (handBack == "finalMessageBack") {
      this.setState({ page: 2 });
    }
  }

  handleClick(handName, hanValue) {
    //event.preventDefault();
    console.log("handName", handName, "hanValue", hanValue);
    this.setState({ [handName]: hanValue });

    if (handName == "Title") {
      this.setState({ BTitle: true });

      if (hanValue == "Meals") {
        this.setState({ email: "nipunchamodya@gmail.com" });
      } else if (hanValue == "Medicattion") {
        this.setState({ email: "pokirisa@gmail.com" });
      } else if (hanValue == "Washroom") {
        this.setState({ email: "pokirisa@gmail.com" });
      }

      this.setState({ page: 2 });
    }

    if (handName == "Description") {
      this.setState({ Bmessage: true });
      this.setState({ page: 3 });
      this.setState({ subject: hanValue });
    }

    if (handName == "Time") {
      this.setState({ BTime: true });
      this.setState({ page: 4 });
      this.setState({ subject: hanValue });
    }
  }

  saveReminder() {
    // console.log('Reminder data', this.state);

    // const reminder = {
    //     Title : this.state.Title,
    //     Description: this.state.Description,
    //     Time: this.state.Time
    // }
    const { Title, Description, Time } = this.state;

    const reminderss = {
      Title: Title,
      Description: Description,
      Time: Time,
      Timestamp: mapTimeStr2Timestamp(Time),
    };

    console.log(reminderss);
    // const reminder = {
    //     setState({ Title : this.state.Title });
    // setState({ Description: this.state.Description });
    // setState({ Time: this.state.Time });
    // }

    // this.setState({ Title : this.state.Title });
    // this.setState({ Description: this.state.Description });
    // this.setState({ Time: this.state.Time });

    axios.post("/reminder/save", reminderss).then(
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
  }

  render() {
    const index = this.props.navList.index;
    const counter = this.props.counter.value;

    let select1 = "";
    let select2 = "";
    let select3 = "";
    let select4 = "";
    let select5 = "";

    if (
      index == 500 ||
      index == 750 ||
      index == 751 ||
      index == 752 ||
      index == 755 ||
      index == 756 ||
      index == 757 ||
      index == 758 ||
      index == 760 ||
      index == 761 ||
      index == 762 ||
      index == 763 ||
      index == 765 ||
      index == 766 ||
      index == 770 ||
      index == 771 ||
      index == 772 ||
      index == 773
    ) {
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
      if (counter == 4) {
        select5 = "selected";
      }
    }

    if (index == 162) {
      //send 1111
      this.props.updateIndex(5);
    }

    let comp;

    if (this.state.page === 1) {
      comp = <Title handleClick={this.handleClick} />;
    }
    if (this.state.page === 2) {
      comp = (
        <Description
          Title={this.state.Title}
          handleClick={this.handleClick}
          handleBack={this.handleBack}
        />
      );
    }
    if (this.state.page === 3) {
      comp = (
        <Time
          Title={this.state.Title}
          handleClick={this.handleClick}
          handleBack={this.handleBack}
        />
      );
    }
    if (this.state.page === 4) {
      comp = (
        <FinalMessage
          Title={this.state.Title}
          Time={this.state.Time}
          Description={this.state.Description}
          handleBack={this.handleBack}
          saveReminder={this.saveReminder}
        />
      );
    }

    function Title(props) {
      return (
        <div>
          <ToastContainer />
          <div className="app">
            <div className="box">
              <h1>අවශ්‍යතාවය තෝරන්න</h1>

              <button
                className={`emergencybuttons ${select1}`}
                onClick={() => props.handleClick("Title", "ආහාර")}
                name="Title"
                value="ආහාර"
              >
                ආහාර
              </button>
              <button
                className={`emergencybuttons ${select2}`}
                onClick={() => props.handleClick("Title", "ඖෂධ")}
                name="Title"
                value="ඖෂධ"
              >
                ඖෂධ
              </button>
              <button
                className={`emergencybuttons ${select3}`}
                onClick={() => props.handleClick("Title", "සනීපාරක්ෂක කටයුතු")}
                name="Title"
                value="සනීපාරක්ෂක කටයුතු"
              >
                සනීපාරක්ෂක කටයුතු
              </button>
            </div>
          </div>
        </div>
      );
    }

    function Description(props) {
      console.log("Description");
      if (props.Title == "ආහාර") {
        return (
          <div>
            <div className="app">
              <div className="box">
                <h1 classname="h1tag">පණිවිඩය තෝරන්න</h1>
                <button
                  className={`emergencybuttons ${select1}`}
                  onClick={() =>
                    props.handleClick("Description", "මට  උදෑසන ආහාර ඕනෙ")
                  }
                  name="Description"
                  value="මට  උදෑසන ආහාර ඕනෙ "
                >
                  මට උදෑසන ආහාර ඕනෙ
                </button>
                <button
                  className={`emergencybuttons ${select2}`}
                  onClick={() => props.handleClick("Description", "දහවල් ආහාර")}
                  name="Description"
                  value="දහවල් ආහාර"
                >
                  මට දහවල් ආහාර ඕනෙ
                </button>
                <button
                  className={`emergencybuttons ${select3}`}
                  onClick={() =>
                    props.handleClick("Description", "මට  රාත්‍රී ආහාර ඕනෙ")
                  }
                  name="Description"
                  value="මට  රාත්‍රී ආහාර ඕනෙ"
                >
                  මට රාත්‍රී ආහාර ඕනෙ
                </button>

                <button
                  className={`emergencybuttons ${select4}`}
                  onClick={() => props.handleBack("messageBack")}
                  name="messageBack"
                >
                  පෙර පිටුව
                </button>
              </div>
            </div>
          </div>
        );
      } else if (props.Title == "ඖෂධ") {
        return (
          <div>
            <div className="app">
              <div className="box">
                <h1>පණිවිඩය තෝරන්න</h1>

                <button
                  className={`emergencybuttons ${select1}`}
                  onClick={() =>
                    props.handleClick("Description", "මට උදෑසන ඖෂධ ඕනෙ")
                  }
                  name="Description"
                  value=" මට  උදෑසන ඖෂධ ඕනෙ"
                >
                  මට උදෑසන ඖෂධ ඕනෙ
                </button>

                <button
                  className={`emergencybuttons ${select2}`}
                  onClick={() =>
                    props.handleClick("Description", "මට දහවල් ඖෂධ ඕනෙ")
                  }
                  name="Description"
                  value="  මට  දහවල් ඖෂධ ඕනෙ"
                >
                  මට දහවල් ඖෂධ ඕනෙ
                </button>
                <button
                  className={`emergencybuttons ${select3}`}
                  onClick={() =>
                    props.handleClick("Description", "මට රාත්‍රී ඖෂධ ඕනෙ")
                  }
                  name="Description"
                  value=" මට රාත්‍රී ඖෂධ ඕනෙ"
                >
                  මට රාත්‍රී ඖෂධ ඕනෙ
                </button>

                <button
                  className={`emergencybuttons ${select4}`}
                  onClick={() => props.handleBack("messageBack")}
                  name="messageBack"
                >
                  පෙර පිටුව
                </button>
              </div>
            </div>
          </div>
        );
      } else if (props.Title == "සනීපාරක්ෂක කටයුතු") {
        return (
          <div>
            <div className="app">
              <div className="box">
                <h1>පණිවිඩය තෝරන්න</h1>

                <button
                  className={`emergencybuttons ${select1}`}
                  onClick={() =>
                    props.handleClick("Description", "මට මුත්‍රා කරන්න ඕනෙ")
                  }
                  name="Description"
                  value=" මට  මුත්‍රා  කරන්න ඕනෙ"
                >
                  මට මුත්‍රා කරන්න ඕනෙ
                </button>

                <button
                  className={`emergencybuttons ${select2}`}
                  onClick={() =>
                    props.handleClick("Description", "මට මලපහ කරන්න ඕනෙ")
                  }
                  name="Description"
                  value="මට  මලපහ  කරන්න ඕනෙ"
                >
                  මට මලපහ කරන්න ඕනෙ
                </button>

                <button
                  className={`emergencybuttons ${select3}`}
                  onClick={() => props.handleBack("messageBack")}
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

    function Time(props) {
      return (
        <div>
          <div className="app">
            <div className="box">
              <h1>කාලය තෝරන්න</h1>

              <button
                className={`emergencybuttons ${select1}`}
                onClick={() => props.handleClick("Time", "උදෑසන 8.00")}
                name="Time"
                value=" උදෑසන 8.00 "
              >
                උදෑසන 8.00
              </button>
              <button
                className={`emergencybuttons ${select2}`}
                onClick={() => props.handleClick("Time", "දහවල් 1.00")}
                name="Time"
                value="දහවල් 1.00"
              >
                දහවල් 1.00
              </button>
              <button
                className={`emergencybuttons ${select3}`}
                onClick={() => props.handleClick("Time", "රාත්‍රී 8.00")}
                name="Time"
                value="රාත්‍රී 8.00"
              >
                රාත්‍රී 8.00
              </button>
              <button
                className={`emergencybuttons ${select4}`}
                onClick={() => props.handleClick("Time", "රාත්‍රී 10.00")}
                name="Time"
                value="රාත්‍රී 10.00"
              >
                රාත්‍රී 10.00
              </button>
            </div>
          </div>
        </div>
      );
    }

    function FinalMessage(props) {
      return (
        <div>
          <div className="app">
            <div className="box">
              <h1>අවසාන පණිවිඩය</h1>

              <h2>
                <p>ලබන්නා - {props.Title}</p>

                <p>පණිවුඩය - {props.Description}</p>
              </h2>

              <button
                className={`emergencybuttons ${select1}`}
                onClick={() => props.handleBack("finalMessageBack")}
                name="finalMessageBack"
              >
                පෙර පිටුව
              </button>
              <button
                className={`emergencybuttons ${select2}`}
                name="finalMessageSend"
                onClick={props.saveReminder}
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
  reminder: state.reminder,
});

const mapDispatchToProps = () => ({
  setCount,
  updateIndex,
  addReminder,
});

export default connect(mapStateToProps, mapDispatchToProps())(Register);

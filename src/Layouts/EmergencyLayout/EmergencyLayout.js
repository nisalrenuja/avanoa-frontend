import React from "react";


class EmergencyLayout extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      recepient: 'Recepient',
      email: "test@gmail.com",
      subject: 'Subject',
      message: 'Message',
      Brecepient: false,
      Bmessage: false,
      BFinalMessage: false,
      page: 1
    };
    
     
  }

  handleClick(event) {
    event.preventDefault();
    console.log("event" + event.target.value);
    // this.setState({[event.target.name]: event.target.value});
    
    this.setState({[event.target.name]: event.target.value});

    if (event.target.name == "recepient"){
      this.setState({Brecepient: true});

      if (event.target.value == "Care Taker"){
        this.setState({email: "pokirisa@gmail.com"});
      }

      else if (event.target.value == "Gurdian"){
        this.setState({email: "pokirisa@gmail.com"});
      }

      else if (event.target.value == "Doctor"){
        this.setState({email: "pokirisa@gmail.com"});
      }

      this.setState({page: 2});      
    }

    if (event.target.name == "message"){
      this.setState({Bmessage: true});
      this.setState({page: 3});
      this.setState({subject: event.target.value});
    }

    console.log("Brecepient" + this.state.Brecepient);
    console.log("recepient" + this.state.recepient);
    // console.log("Bmessage" + this.state.Bmessage);
    // console.log("message" + this.state.message);   
    // console.log("subject" + this.state.subject);    
  }

      

  render() {

	let comp;

	if(this.state.page === 1){
		comp = <Recepient handleClick={this.handleClick}/>;
	  }
	  if (this.state.page === 2) {
		comp = <Message recepient={this.state.recepient} handleClick={this.handleClick}/>;
	  }
	  if (this.state.page === 3){
		comp = <FinalMessage  recepient={this.state.recepient} email={this.state.email} subject={this.state.subject} message={this.state.message} />;
	  }
    
  
  

    function Recepient(props) {
      return (
      <div>
        <h1>Select Recepient</h1>
        <button onClick={props.handleClick} name="recepient" value="Care Taker">Care Taker</button>
        <button onClick={props.handleClick} name="recepient" value="Gurdian">Gurdian</button>
        <button onClick={props.handleClick} name="recepient" value="Doctor">Doctor</button>
      </div>);
    }

    

    

    function Message (props) {
      console.log("Message");      
        return (
          <div>
            <h1>Select Message</h1>
            <button onClick={props.handleClick} name="message" value="I need Medicine">I need Medicine</button>
            <button onClick={props.handleClick} name="message" value="I need to Eat">I need to Eat</button>
            <button onClick={props.handleClick} name="message" value="I am Thirsty">I am Thirsty</button>

            <button name="messageBack">Back</button>
          </div>);
        
      

    }

    function FinalMessage(props) {
      return (
      <div>
        <h1>Final Message</h1>
        <p >Recepient - {props.recepient}</p>
        <p >Email - {props.email}</p>
        <p >Subject - {props.subject}</p>
        <p >Message - {props.message}</p>
        <button  name="finalMessageBack">Back</button>
        <button name="finalMessageSend">Send</button>
      </div>);
    }

    
    return (
      <div>
         {comp}
        
      </div>
    );
  };
}

export default EmergencyLayout;


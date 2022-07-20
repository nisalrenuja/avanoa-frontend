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

      

  render() {
  

    function Recepient(props) {
      return (
      <div>
        <h1>Select Recepient</h1>
        <button name="recepient" value="Care Taker">Care Taker</button>
        <button name="recepient" value="Gurdian">Gurdian</button>
        <button name="recepient" value="Doctor">Doctor</button>
      </div>);
    }

    

    

    function Message (props) {
      console.log("Message");      
        return (
          <div>
            <h1>Select Message</h1>
            <button name="message" value="I need Medicine">I need Medicine</button>
            <button name="message" value="I need to Eat">I need to Eat</button>
            <button name="message" value="I am Thirsty">I am Thirsty</button>

            <button name="messageBack">Back</button>
          </div>);
        
      

    }

    function FinalMessage(props) {
      return (
      <div>
        <h1>Final Message</h1>
        <p >Recepient </p>
        <p >Email</p>
        <p >Subject</p>
        <p >Message </p>
        <button  name="finalMessageBack">Back</button>
        <button name="finalMessageSend">Send</button>
      </div>);
    }

    
    return (
      <div>
         <Recepient />
		 <Message />
		 <FinalMessage />
        
      </div>
    );
  };
}

export default EmergencyLayout;


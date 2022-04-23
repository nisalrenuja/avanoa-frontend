import { Component } from "react";
import "./phraseBubble.css";

class phraseBubble extends Component {
  constructor(props) {
    super(props);
  }
  state = { 
    count : 0,
    select1 : 'selected',
    select2 : 'notSelected',
    select3 : 'notSelected',
    select4 : 'notSelected',
    select5 : 'notSelected',
    select6 : 'notSelected',
    select7 : 'notSelected',
    select8 : 'notSelected',
    select9 : 'notSelected',}
  
  
  componentDidUpdate(){
    if((this.state.count == 0) && this.state.select1 ==='notSelected'){
      this.setState({select1:'selected'})
      this.setState({select2:'notSelected'})
     
    }
    else if((this.state.count == 1) && this.state.select2 ==='notSelected'){
      this.setState({select2:'selected'})
      this.setState({select1:'notSelected'})
      this.setState({select3:'notSelected'})
    }
    else if((this.state.count == 2) && this.state.select3 ==='notSelected'){
      this.setState({select3:'selected'})
      this.setState({select2:'notSelected'})
      this.setState({select4:'notSelected'})
    }
    else if((this.state.count == 3) && this.state.select4 ==='notSelected'){
      this.setState({select4:'selected'})
      this.setState({select3:'notSelected'})
      this.setState({select5:'notSelected'})
    }
    else if((this.state.count == 4) && this.state.select5 ==='notSelected'){
      this.setState({select5:'selected'})
      this.setState({select4:'notSelected'})
      this.setState({select6:'notSelected'})
    }
    else if((this.state.count == 5) && this.state.select6 ==='notSelected'){
      this.setState({select6:'selected'})
      this.setState({select5:'notSelected'})
      this.setState({select7:'notSelected'})
    }
    else if((this.state.count == 6) && this.state.select7 ==='notSelected'){
      this.setState({select7:'selected'})
      this.setState({select6:'notSelected'})
      this.setState({select8:'notSelected'})
    }
    else if((this.state.count == 7) && this.state.select8 ==='notSelected'){
      this.setState({select8:'selected'})
      this.setState({select7:'notSelected'})
      this.setState({select9:'notSelected'})
    }
    else if((this.state.count == 8) && this.state.select9 ==='notSelected'){
      this.setState({select9:'selected'})
      this.setState({select8:'notSelected'})
    }
  }

  componentDidMount(){
    const LOOK_DELAY = 10 // 1 second
    const LEFT_CUTOFF = window.innerWidth / 6
    const RIGHT_CUTOFF = window.innerWidth - window.innerWidth / 6
    const TOP_CUTOFF = window.innerHeight/100


      
    let startLookTime = Number.POSITIVE_INFINITY
    let lookDirection = null


    const webgazer = window.webgazer;
    webgazer.setRegression("ridge");
    webgazer.showVideoPreview(false);
    //const blink = new webgazer.BlinkDetector;
    

    console.log(webgazer.getTracker());

    window.saveDataAcrossSessions = true;
    webgazer
      .setGazeListener((data, timestamp) => {
        //console.log(data, timestamp);
        if (data == null || lookDirection === "STOP") return

        

        if (
          data.x < LEFT_CUTOFF &&
          lookDirection !== "LEFT" &&
          lookDirection !== "RESET"
        ) {
          startLookTime = timestamp
          lookDirection = "LEFT"
        } else if (
          data.x > RIGHT_CUTOFF &&
          lookDirection !== "RIGHT" &&
          lookDirection !== "RESET"
        ) {
          startLookTime = timestamp
          lookDirection = "RIGHT"
        }
        
        if (
          data.y < TOP_CUTOFF  &&
          lookDirection !== "RESET") {
            console.log('looking top')
            startLookTime = timestamp
            lookDirection = "TOP"
        }  
        else if (data.x >= LEFT_CUTOFF && data.x <= RIGHT_CUTOFF) {
          startLookTime = Number.POSITIVE_INFINITY
          lookDirection = null
        }
        
        if (startLookTime + LOOK_DELAY < timestamp) {
          if(lookDirection === "TOP"){
              
              console.log("looking top" + this.state.count)
          }
          else if (lookDirection === "LEFT") {
          
            if(this.state.count > 0){
              this.setState({count : this.state.count-1});
            }
            //console.log("looking left"+ this.state.count);
          } else {
            
            if(this.state.count < 8){
              this.setState({count : this.state.count + 1});
            }
            //console.log("looking right" + this.state.count);
          }
    
          startLookTime = Number.POSITIVE_INFINITY
          lookDirection = "STOP"
          setTimeout(() => {
            console.log("time reset");
            lookDirection = "RESET"
          }, 200)
        }
      })
      .begin();

  }

  


  render() { 
    return (   
    
    <div>
      <div class="flex-container">
        <div className={this.state.select1}>1</div>
        <div className={this.state.select2}>2</div>
        <div className={this.state.select3}>3</div>
        <div className={this.state.select4}>4</div>
        <div className={this.state.select5}>5</div>
        <div className={this.state.select6}>6</div>  
        <div className={this.state.select7}>7</div>
        <div className={this.state.select8}>8</div>
        <div className={this.state.select9}>9</div>  
         
</div>

        <p>phrases</p>

    </div>
     );
  }
}
 
export default phraseBubble;


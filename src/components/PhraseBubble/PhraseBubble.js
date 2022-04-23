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
    select3 : 'notSelected'}
  
  
  componentDidUpdate(){
    if((this.state.count == 0) && this.state.select1 ==='notSelected'){
      this.setState({select1:'selected'})
      this.setState({select2:'notSelected'})
    }
    else if((this.state.count == 1) && this.state.select2 ==='notSelected'){
      this.setState({select2:'selected'})
      this.setState({select1:'notSelected'})
    }
    else if((this.state.count == 2) && this.state.select3 ==='notSelected'){
      this.setState({select3:'selected'})
      this.setState({select2:'notSelected'})
    }
  }

  componentDidMount(){
    const LOOK_DELAY = 1000 // 1 second
    const LEFT_CUTOFF = window.innerWidth / 4
    const RIGHT_CUTOFF = window.innerWidth - window.innerWidth / 4

      
    let startLookTime = Number.POSITIVE_INFINITY
    let lookDirection = null


    const webgazer = window.webgazer;
    webgazer.setRegression("ridge");
    webgazer.showVideoPreview(false);
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
        } else if (data.x >= LEFT_CUTOFF && data.x <= RIGHT_CUTOFF) {
          startLookTime = Number.POSITIVE_INFINITY
          lookDirection = null
        }
    
        if (startLookTime + LOOK_DELAY < timestamp) {
          if (lookDirection === "LEFT") {
          
            if(this.state.count > 0){
              this.setState({count : this.state.count-1});
            }
            console.log("looking left"+ this.state.count);
          } else {
            
            if(this.state.count < 8){
              this.setState({count : this.state.count + 1});
            }
            console.log("looking right" + this.state.count);
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
        <div>4</div>
        <div>5</div>
        <div>6</div>  
        <div>7</div>
        <div>8</div>
        <div>9</div>  
        <div>10</div>
        <div>11</div>
        <div>12</div>  
</div>

        <p>phrases</p>

    </div>
     );
  }
}
 
export default phraseBubble;


// import { Link } from "react-router-dom";
// import React, { useState } from 'react';




// const PhraseBubble = () => {









// };

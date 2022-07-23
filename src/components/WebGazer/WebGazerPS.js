import { Component } from "react";

class WebGazerPS extends Component {
    constructor(props){
        super(props);
        this.clickfunc = this.clickfunc.bind(this);
    }
    state = {  } 

    clickfunc (){
        alert("button clicked")
    }

    render() { 
        //document.elementFromPoint(10, 200).click();
        return (
         <></>
        // <div>
        //     <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>adhfff
        //     <button onClick={this.clickfunc}>sdgjndf</button>
        // </div>
        );
    }
}
 
export default WebGazerPS;
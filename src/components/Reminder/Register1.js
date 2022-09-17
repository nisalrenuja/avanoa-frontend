import React, { useContext, useState } from 'react'

import "./Edit.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "../../libs/axios";
import Appbar from "../Appbar/Appbar";
import Sidebar from "../Sidebar/Sidebar";


class Register extends React.Component {

    constructor(props){
        super(props);
        this.setTitle = this.setTitle.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.setTime = this.setTime.bind(this);
        this.saveReminder = this.saveReminder.bind(this);
        
        this.state = {
            Title: "",
            Description: "",
            Time: "",         

        }
        
    }

    componentDidMount () {
        console.log("Register loaded");
    }


    setTitle(e){
        this.setState({Title: e.target.value});
        console.log(this.state.Title);
    }
    setDescription(e){
        this.setState({Description : e.target.value});
    }
    setTime(e){
        this.setState({Time : e.target.value});
    }

    saveReminder(e){
        e.preventDefault();
        
        // console.log('Reminder data', this.state);
        
        // const reminder = {
        //     Title : this.state.Title,
        //     Description: this.state.Description,
        //     Time: this.state.Time
        // }
        const{
            Title,
            Description,
            Time
        } = this.state;

        const reminderss={
            Title:Title,
            Description:Description,
            Time:Time
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

        axios.post("/reminder/save", reminderss).then(() => {
            alert('Reminder added');
        })
        .catch(error => {
            alert (error.message);
        });
    }

   
    render() {
        return (
            <div>
            <Appbar />
            <Sidebar />
      

            <div className = 'bckgrnd'>
            <form className="mt-4">
                <div className = "add-hero">
                <div className="col-md-8 mt-4 mx-auto" id="edit-booking-body">
                    <div class="add-bg_image add-bgimage"></div>
                    <div id = "addcontent" className = "add-content">
                        
                        <h1 id="edit-header">   Add a Reminder </h1>
                  </div>
                </div>
                <Card sx={{ maxWidth: 900 }}>
                <div className="edit-form">
                <div className = "add-contentdiv">
                    <br/>
                  
                <div className = "add-formdiv container">
                <div className="form-group"  style={{marginBottom:'15px'} }>
                    Title
                    <input type="text" className="form-control" id="name" placeholder="Enter Title" value = {this.state.Title} onChange = {this.setTitle}/>
                    
                </div>
                
                <div className="form-group"  style={{marginBottom:'15px'} }>
               
                    Description
                    <input type="text" className="form-control" id="name" placeholder="Enter Description" value = {this.state.Description} onChange = {this.setDescription}/>
                    
                
                </div>
                
                <div className="form-group"  style={{marginBottom:'15px'} }>
                
                    Time
                    <input type="text" className="form-control" id="name" placeholder="Enter Time" value = {this.state.Time} onChange = {this.setTime}/>
                    
             
                </div>
                <div className="form-group"  style={{marginBottom:'15px'} }>
                  <button className="btn btn-primary" onClick = {this.saveReminder}>Submit</button>
                    
                </div>
                </div>
                <br/>
                </div>
                </div>
                </Card>
                </div>
                </form>
                </div>
                
            </div>
        );
    }
}

export default Register;
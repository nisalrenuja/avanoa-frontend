import React, { useState, useEffect, useContext } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { adddata, deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider'
import "./Edit.css";

import axios from "../../libs/axios";
import {Link} from 'react-router-dom';



class Home extends React.Component {
    constructor(props){
      super(props);
  
      this.state={
        reminders:[]
      };
    }
  
    componentDidMount(){
      this.retrieveReminders();
      console.log("love");
    }
  
    retrieveReminders(){
      axios.get("/reminders").then(res =>{
        console.log("Hello1");
        if(res.data.success){
          this.setState({
            reminders:res.data.existingReminders
          });
          
  
          console.log(this.state.reminders)
        }
      })
      console.log("Hello");
    }
  
    onDelete = (id) => {
        axios.delete(`/reminder/delete/${id}`).then((res) => {
            alert("Delete Successfull");
            this.retrieveReminders();
        })
    }  
  
    render() {
      return (
        <div>
        
          
            <div className = "bodybackgrnd">
              <div className = "all-hero">
                <div class="bg_image bgimage"></div>
                <div className = "content">
                  Reminder Details
                </div>
              </div>
              <div className = "the_content">
              <br/>
              
              <div className ="searchbar">
                <input className="form-control-mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange = {this.handleSearchArea}></input>
              </div>
              <br/>
              
              
              
              <div className = "bottomspace"></div>
              </div>
            </div>
            </div>
          
          
        
      );
    }
  }

export default Home
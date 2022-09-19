import React, { useState, useEffect, useContext } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { adddata, deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider'
import "./Edit.css";
import Appbar from '../Appbar/Appbar';
import Sidebar from '../Sidebar/Sidebar';
import axios from "../../libs/axios";
import {Link} from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";



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
        <Appbar />
        <Sidebar />
          
            <div className = "bodybackgrnd">
              <div className = "all-hero">
                <div class="bg_image bgimage"></div>
                <div className = "content">
                  Reminder 
                </div>
              </div>
              <div className = "the_content">
              <br/>
              
              <h1 >Reminder List</h1>
              
              <br/>
              <button className = "btn-btn-success"><Link to = "/Reminder/register" style = {{textDecoration:"none", color:"white"}}>Create</Link></button>
              <br/>
              <br/>
              <br/>
              
                  {this.state.reminders.map((reminders, index) => (
                   <li className = "mem-gridder-list circles">
            
                   <div className = "section">
                       <div >
                       {/* <img className = "image_area circlesType lazyloaded"  alt ="Adoption" src = 'https://s28164.pcdn.co/files/Asian-Small-clawed-Otter-0072-2545-300x300.jpg'></img> */}
                       <h5 className = "mem-adpt-contentarea ">{reminders.Title}</h5><br/>
                      
                        
                             &nbsp;

                             {reminders.Description}

                             {reminders.Time}

                             <br/>
                             <a className = "btn" href = "#" onClick = {() => this.onDelete(reminders._id)}>
                               <i className= ""></i>&nbsp;Delete
                               </a>
                       
                       </div>
                       <div >
                               
                       </div>
                   </div>
                   
               </li>
                    ))}
  
              
              
              <div className = "bottomspace"></div>
              </div>
            </div>
            </div>
          
          
        
      );
    }
  }

export default Home
import React, { useContext, useEffect, useState } from 'react'

import "./Edit.css";
import axios from "../../libs/axios";

class Edit extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            Title: "",
            Description: "",
            Time: "",         
        }

    }
    handleInputChange = (e) =>{
        const {name,value} =e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onsubmit =(e)=>{
        const id = this.props.match.params.id;
        e.preventDefault();
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
        console.log("reminderss");
        console.log(reminderss);

        axios.put(`/reminder/update/${id}`,reminderss).then((res)=>{
            if(res.reminderss.success){
                    alert("Reminder updated successfully")
                this.setState(
                {
                    Title:Title,
            Description:Description,
            Time:Time

                });
            }
        });
    }
    
    componentDidMount(){
        console.log("hellowwwwww");
        // const id = this.props.match.params.id;
        

        // axios.get(`/reminder/${id}`).then((res)=>{
        //     console.log("hellow");
        //     console.log(res.data.reminder);     
        // if(res.data.success){
        //     console.log("helloww");
        //         console.log(res.data);
        //         this.setState({
        //             Title:res.reminderss.Title,
        //             Description:res.reminderss.Description,
        //             Time:res.reminderss.Time


        //         });

        //         // console.log(this.state.booking);
        //     }
           
        // });
     
                
    }

    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto" id="edit-booking-body">

            <h1 id="edit-header">   Edit Reminder Details  </h1>
            <br/>
                   <br/>
                <div className="edit-form">
                   <form className="needs-validation" noValidate>
                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <label for="Title" style={{marginBottom:'5px'}} id="label-form">Title</label>
                       <input type="text" 
                       className="form-control" 
                        name="CustomerEmail" 
                     placeholder="Enter your Title " 
                     defaultValue={this.state.Title}
                    onChange={this.handleInputChange} />
                   </div>

                   <br/>
                   <div className="form-group">
                   <label for="cName" style={{marginBottom:'5px'}} id="label-form">Description</label>
                       <input type="text" 
                       className="form-control" 
                       id="Description" name="Description" 
                       placeholder="Enter your Description" 
                       defaultValue= {this.state.Description}  
                       onChange={this.handleInputChange}/>
                       
                   </div>
                   <br/>
                   <div className="form-group">
                   <label for="Time" style={{marginBottom:'5px'}} id="label-form">Time</label>
                       <input type="time" 
                       className="form-control" 
                       id="Time"name="Time" 
                       placeholder="Enter your Time"
                       defaultValue={this.state.Time}  
                       onChange={this.handleInputChange} />
                       
                   </div>
                   <br/>
                   
                   <button className="btn btn-success" type="submit" style={{marginBottom:'15px'}} onClick={this.onsubmit}>
                       <i className="far fa-check-square"></i>
                       &nbsp; Update Reminder
                   </button> <br/>
                   <button className ="btn btn-success"><a href="/TourGuideDashboard" style={{textDecoration:'none' ,color:'white' }}> Dashboard </a></button>
                  
                   </form>
                   </div>
                   <br/>
                   &nbsp;
                
                  
                    
                                                



           </div>
           
        )
    }
}

export default Edit
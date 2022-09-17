import React, { useEffect, useState } from 'react'

import "./Edit.css";
import axios from "../../libs/axios";
import { useParams } from 'react-router-dom';
// import { useState } from "react/cjs/react.development";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


function Details() {
    const { id } = useParams();
    console.log("id is here");
    console.log(id);

    // const [formInputData, setformInputData] = useState(
    //     {
    //     Title:'',
    //     Description:'',
    //     Time:''
    //    }
    // );   

    const [RTitle, setTitle] = useState('');
  const [RDescription, setDescription] = useState('');
  const [RTime, setTime] = useState('');


    const handleChange=(evnt)=>{  
    //     const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
    //    setformInputData(newInput)
    }
    

            console.log("hellowwwwww");
       
        

        axios.get(`/reminder/${id}`).then((res)=>{
            console.log("hellow");
            console.log(res.data.reminder);     
        if(res.data.success){
            console.log("helloww");
            // console.log(res.data.reminder);   
            // console.log(res.data.reminder.Title);
                // console.log(res.data);
                // this.setState({
                //     Title:res.reminderss.Title,
                //     Description:res.reminderss.Description,
                //     Time:res.reminderss.Time


                // });

                // console.log(this.state.booking);

                // setformInputData(res.data.reminder.Title, res.data.reminder.Description, res.data.reminder.Time);
                // console.log("forminput");
                // console.log(formInputData);

                // var {Title} = res.data.reminder.Title;
                // const {Description} = res.data.reminder.Description;
                // const {Time} = res.data.reminder.Time;
                // console.log({Title});


                setTitle(res.data.reminder.Title);
                setDescription(res.data.reminder.Description);
                setTime(res.data.reminder.Time);


            }
           
        });
        const {Title} = "Hello"











    return (
        <div>
      
        <div className = 'bckgrnd'>
        <div className="row">
        <div>
           <div className="col-md-8 mt-4 mx-auto" id="edit-booking-body">
           <div className="form-group"  style={{marginBottom:'25px'}}>
             <h1 id="edit-header">   Edit Reminder Details  </h1>
             </div>
            <br/>
                    <br/>
                    <div class="card">
                        
                <div className="edit-form">
                    <form className="needs-validation" noValidate>
                   <div className="form-group" style={{marginBottom:'15px'}}>
                        <label for="emailC" style={{marginBottom:'5px'}} id="label-form">Title</label>
                        <input type="text" 
                       className="form-control" 
                        name="CustomerEmail" 
                     placeholder="Enter your Title " 
                     defaultValue={RTitle}
                    //  onChange={this.handleChange} 
                    />
                   </div>

                   <br/>
                   <div className="form-group"  style={{marginBottom:'15px'} }>
                   <label for="cName" style={{marginBottom:'5px'}} id="label-form">Description</label>
                       <input type="text" 
                       className="form-control" 
                       id="cName" name="CustomerName" 
                       placeholder="Enter your Description" 
                        defaultValue= {RTitle}
                        // onChange={this.handleChange}
                       />
                       
                   </div>
                   <br/>
                   <div className="form-group">
                   <label for="MobileNo" style={{marginBottom:'5px'}} id="label-form">Time</label>
                       <input type="time" 
                       className="form-control" 
                       id="MobileNo"name="MobileNumber" 
                       placeholder="Enter your Time"
                        defaultValue={RTitle}
                        // onChange={this.handleChange} 
                       />
                       
                   </div>
                   <br/>
                   
                   {/* <button className="btn btn-success" type="submit" style={{marginBottom:'15px'}} onClick={this.onsubmit}>
                       <i className="far fa-check-square"></i>
                       &nbsp; Update Reminder
                   </button> <br/>
                   <button className ="btn btn-success"><a href="/TourGuideDashboard" style={{textDecoration:'none' ,color:'white' }}> Dashboard </a></button>
                   */}
                   
                   </form>
                   
                   </div>
                   </div>
                   <br/>
                   &nbsp;
                
                  
                    
                                                

                   </div>

           </div>
           </div>
                </div>
        </div>
    );
}

// class Details extends React.Component {
//     constructor(props) {
//         super(props);

//         this.onsubmit = this.onsubmit.bind(this);
//         this.state = {
//             Title: "",
//             Description: "",
//             Time: "",  
//             // id : this.props.match.params.id      

//         }

//     }
//     handleInputChange = (e) =>{
//         const {name,value} =e.target;

//         this.setState({
//             ...this.state,
//             [name]:value
//         })
//     }

//     // onsubmit =(e)=>{
//     //     // var id = this.state.id
//     //     // console.log(id);
//     //     e.preventDefault();
//     //     const{
//     //         Title,
//     //         Description,
//     //         Time
//     //     } = this.state;

//     //     const reminderss={
//     //         Title:Title,
//     //         Description:Description,
//     //         Time:Time
//     //     };
//     //     console.log("reminderss");
//     //     console.log(reminderss);

//     //     axios.put(`/reminder/update/${id}`,reminderss).then((res)=>{
//     //         if(res.reminderss.success){
//     //                 alert("Reminder updated successfully")
//     //             this.setState(
//     //             {
//     //                 Title:Title,
//     //         Description:Description,
//     //         Time:Time

//     //             });
//     //         }
//     //     });
//     // }
    
//     componentDidMount(){
//         console.log("hellowwwwww");
//         // const id = this.props.match.params.id;
//         // console.log(id);
//         // var id = this.state.id
//         // console.log(id);
        

//         axios.get(`/reminder/${id}`).then((res)=>{
//             console.log("hellow");
//             console.log(res.data.reminder);     
//         if(res.data.success){
//             console.log("helloww");
//                 console.log(res.data);
//                 this.setState({
//                     Title:res.reminderss.Title,
//                     Description:res.reminderss.Description,
//                     Time:res.reminderss.Time


//                 });

//                 // console.log(this.state.booking);
//             }
           
//         });
     
                
//     }

//     render() {
//         return (
//             <div className="col-md-8 mt-4 mx-auto" id="edit-booking-body">

//             <h1 id="edit-header">   Edit Reminder Details  </h1>
//             <br/>
//                    <br/>
//                 <div className="edit-form">
//                    <form className="needs-validation" noValidate>
//                    <div className="form-group" style={{marginBottom:'15px'}}>
//                        <label for="emailC" style={{marginBottom:'5px'}} id="label-form">Title</label>
//                        <input type="email" 
//                        className="form-control" 
//                         name="CustomerEmail" 
//                      placeholder="Enter your email " 
//                      defaultValue={this.state.Title}
//                     onChange={this.handleInputChange} />
//                    </div>

//                    <br/>
//                    <div className="form-group">
//                    <label for="cName" style={{marginBottom:'5px'}} id="label-form">Description</label>
//                        <input type="text" 
//                        className="form-control" 
//                        id="cName" name="CustomerName" 
//                        placeholder="Enter your Name" 
//                        defaultValue= {this.state.Description}  
//                        onChange={this.handleInputChange}/>
                       
//                    </div>
//                    <br/>
//                    <div className="form-group">
//                    <label for="MobileNo" style={{marginBottom:'5px'}} id="label-form">Time</label>
//                        <input type="tel" 
//                        className="form-control" 
//                        id="MobileNo"name="MobileNumber" 
//                        placeholder="Enter your mobile number"
//                        defaultValue={this.state.Time}  
//                        onChange={this.handleInputChange} />
                       
//                    </div>
//                    <br/>
                   
//                    {/* <button className="btn btn-success" type="submit" style={{marginBottom:'15px'}} onClick={this.onsubmit}>
//                        <i className="far fa-check-square"></i>
//                        &nbsp; Update Reminder
//                    </button> <br/>
//                    <button className ="btn btn-success"><a href="/TourGuideDashboard" style={{textDecoration:'none' ,color:'white' }}> Dashboard </a></button>
//                    */}
//                    </form>
//                    </div>
//                    <br/>
//                    &nbsp;
                
                  
                    
                                                



//            </div>
           
//         )
//     }
// }

export default Details
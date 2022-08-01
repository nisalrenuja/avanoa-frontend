import React, { useContext, useState } from 'react'
import { NavLink, useNavigate  } from 'react-router-dom'
import { adddata } from './context/ContextProvider';
import "./Edit.css";
import Appbar from '../Appbar/Appbar';
import Sidebar from '../Sidebar/Sidebar';

const Register = () => {

    const { udata, setUdata } = useContext(adddata);

    const navigate = useNavigate();
    

    const [inpval, setINP] = useState({
        title: "",
        description: "",
        date: "",
        time: ""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const addinpdata = async (e) => {
        e.preventDefault();

        const { title, description, date, time} = inpval;

        const res = await fetch("https://crudappreactjs.herokuapp.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title, description, date, time
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
            alert("error");

        } else {
            navigate('/Reminder');
            setUdata(data)
            console.log("data added");

        }
    }

    return (

        <div>
            <Appbar/>
            <Sidebar/>

        <div className="container">
            <NavLink to="/">home</NavLink>
            <form className="mt-4">
                <div className="row">
                    <div class="mb-3col-lg-6col-md-6col-12">
                        <label for="exampleInputEmail1" class="form-label">Title</label>
                        <input type="text" value={inpval.title} onChange={setdata} name="title" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3col-lg-12col-md-12col-12">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <input type="text" value={inpval.description} onChange={setdata} name="description" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3col-lg-6col-md-6col-12">
                        <label for="exampleInputPassword1" class="form-label">Date</label>
                        <input type="Date" value={inpval.date} onChange={setdata} name="date" class="form-control" id="exampleInputPassword1" />
                    </div>


                    <div class="mb-3col-lg-6col-md-6col-12">
                        <label for="exampleInputPassword1" class="form-label">Time</label>
                        <input type="Time" value={inpval.time} onChange={setdata} name="time" class="form-control" id="exampleInputPassword1" />
                    </div>
                    

                    <button type="submit" onClick={addinpdata} class="btnbtn-primary">Done</button>
                </div>
            </form>
        </div>
        </div>
    )
}
export default Register;

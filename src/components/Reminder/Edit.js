import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams,useNavigate  } from 'react-router-dom'
import { updatedata } from './context/ContextProvider'
import "./Edit.css";
import Appbar from '../Appbar/Appbar';
import Sidebar from '../Sidebar/Sidebar';



const Edit = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

   const {updata, setUPdata} = useContext(updatedata)

    const navigate = useNavigate();
    

    const [inpval, setINP] = useState({
        title: "",
        description: "",
        age: "",
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


    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`https://crudappreactjs.herokuapp.com/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, []);


    const updateuser = async(e)=>{
        e.preventDefault();

        const {name,email,work,add,mobile,desc,age} = inpval;

        const res2 = await fetch(`https://crudappreactjs.herokuapp.com/updateuser/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name,email,work,add,mobile,desc,age
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            navigate('/Reminder');
            setUPdata(data2);
        }

    }
    

    return (
        <div>
            <Appbar/>
            <Sidebar/>
      
        

        <div className="container" ><h2>Edit</h2>

            <NavLink to="/">home2</NavLink>
            <form className="mt-4">
                <div className="row">
                    <div class="mb-3col-lg-6col-md-6col-12">
                        <label for="exampleInputEmail1" class="form-label">Title </label>
                        <input type="text" value={inpval.title} onChange={setdata} name="title" class="form-control" id="exampleInputPassword1" />
                         </div>
                    <div class="mb-3col-lg-12col-md-12col-12">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <input type="text" value={inpval.description} onChange={setdata} name="description" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3col-lg-6col-md-6col-12">
                        <label for="exampleInputPassword1" class="form-label">Date</label>
                        <input type="Date" value={inpval.date} onChange={setdata} name="date" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3col-lg-6col-md-6col-12">
                        <label for="exampleInputPassword1" class="form-label">Time</label>
                        <input type="Time" value={inpval.time} onChange={setdata} name="time" class="form-control" id="exampleInputPassword1" />
                    </div>
                    
                    <button type="submit" onClick={updateuser} class="btnbtn-primary">Submit</button>
                </div>
            </form>
        </div>
        </div>
    )
    
}

export default Edit;






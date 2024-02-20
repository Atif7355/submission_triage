import React from 'react'
import Navbar from './Navbar.js'

import './Navbar.css'

import './editlist.css'

import Form from 'react-bootstrap/Form';
import { useState , useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';



import { BrowserRouter, Route , Routes , Link , useNavigate} from "react-router-dom";

import Dropdown from 'react-bootstrap/Dropdown';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import { Doughnut} from "react-chartjs-2";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {useRef} from 'react';

import {useLocation } from 'react-router-dom';

import { Bar } from "react-chartjs-2";

import {Input} from 'reactstrap'

import Moment from 'moment';

import faker from 'faker';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function Editlist() 
{

  var idi;

  const [overdata , setOverData] = useState([]);

overdata.map(data=>
  {
    idi = data.id;
  });

  const [users, setUsers] = useState([]);

  const [show, setShow] = useState(false);

  const [ formvalue , setFormValue ] = useState({ name:""  , datem:"", empid:"" , mapto:"" , type:""});

  const [message , setMessage] = useState();

  const navigate = useNavigate();


  const handleInput = (e) =>
  {
         const { name , value } = e.target;
         setFormValue({...formvalue , [name]:value });
  }

  const handleSubmit = async(e)=>
  {
     e.preventDefault();
     const allInputvalue={ name: formvalue.name , datem: formvalue.datem  , empid: formvalue.empid , mapto:formvalue.mapto , type:formvalue.type };

     let res = await fetch(`http://localhost:5001/api/addEntrycur` , {
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(allInputvalue)
     });

         let resjson = await res.json();
         if( res.status === 200 )
         {
            setMessage(resjson.success);

            toast.success("Added!!!!");
            
            setShow(true);

            setTimeout(()=>
            {
              setShow(false);
              navigate("/editlist");
            } , 2000);
         }

  }

  useEffect (()=>{

    const getUserData = async() =>{
      const reqData = await fetch(`http://localhost:5001/api/curlist`);
      const resData= await reqData.json();
      setOverData(resData);
      console.log(resData);
    }
    getUserData();      
  
  } , [message]);


  const handleDelete = async(id) =>
  {
    let res = await fetch(`http://localhost:5001/api/deleteEntrycur/`+id , {
      method:"DELETE",
      headers:{ 'content-type':'application-json'}
    });

    let resjson = await res.json();
    if(res.status === 200 )
    {
         setMessage(resjson.success);

         toast.success("Deleted!!!!");

         setTimeout(()=>
         {
             navigate('/editlist');  
             setMessage('');  
         } , 2000);
    }
    else
    {
      setMessage(" Some Error Occured ");
    }
  }

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");

  const [isValid, setValid] = useState(false);

  const validate = () => {

    if( document.getElementById("type").value == "UW" )
    {
       return true;
    }
    else
    {
      return false;
    }
  };
  useEffect(() => {
    const isValid = validate();
    setValid(isValid);
  }, [ isValid , formvalue.name , formvalue.datem , formvalue.empid , formvalue.mapto, formvalue.import , formvalue.type ]);


  return (
    <div>
        <Navbar/>

        <ToastContainer/>

        <div style={{border:"1px solid rgba(0,0,0,0.15)"}}>
      <p style={{height:"2.5vw",marginLeft:"35vw" , paddingTop:"0.2vw"  , fontStyle: "normal", fontWeight: "bold" ,fontSize: "1.5vw"  , fontStyle: "normal", fontWeight: "bold"  , color: "#FB4E0B" , width:"40vw"}}>Access Manager</p>
      </div>
      <Form onSubmit={handleSubmit}>
      <div style={{border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"20vw" , marginTop:"1vw" , width:"73vw" , marginTop:"7vw" , color:"#FB4E0B" , fontWeight:"bold" , padding:"0.3vw"}}>Add New Employee</div>
      <table style={{border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"20vw" , width:"73vw" , height:"1vw" , overflow:"scroll"}}>
        <thead style={{position:"sticky" , overflow:"scroll"}}>
            <tr style={{borderBottom:"1px solid rgba(0,0,0,0.15)" , borderBottom:"1px solid rgba(0,0,0,0.15)" , height:'3vw'}}>
                <td style={{fontWeight:"bold" , color:"#535353" , marginLeft:"0.5vw"}}> &nbsp;&nbsp;&nbsp;S.No.</td>
                <td style={{fontWeight:"bold" , color:"#535353"}}>Name</td>
                <td style={{fontWeight:"bold" , color:"#535353"}}>Date Mapped</td>
                <td style={{fontWeight:"bold" , color:"#535353"}}>Employee ID</td>
                <td style={{fontWeight:"bold" , color:"#535353"}}>Mapped To(For Underwriters)</td>
                <td style={{fontWeight:"bold" , color:"#535353"}}>Type</td>
                <td style={{fontWeight:"bold" , color:"#535353"}}>Action</td>
            </tr>
        </thead>
        <tbody style={{overflowY:"scroll" , height:"1vw"}}>

            
                            <tr style={{ borderBottom:"1px solid rgba(0,0,0,0.15)"}}>
                            <td style={{width:"5vw"}} id="id"  disabled={true}>{idi+1}</td>
                            <td><Form.Control name="name" value={formvalue.name}  onChange={handleInput} id="name"  type="text" placeholder="     ✎ Type Here" style={{border:"1px solid white"}} className="in" /></td>
                            <td><Form.Control name="datem" value={formvalue.datem}  onChange={handleInput} id="datem"  type="text" placeholder="      ✎ Type Here" style={{border:"1px solid white"}} className="in"/></td>
                            <td><Form.Control name="empid" value={formvalue.empid}  id="empid" onChange={handleInput} type="text" placeholder="       ✎ Type Here" style={{border:"1px solid white"}} className="in"/></td>
                            <td><Form.Control type="text"  value={formvalue.mapto}  disabled={!isValid}  id="mapto"onChange={handleInput} name="mapto" placeholder="       ✎ Type Here" style={{border:"1px solid white"}} className="in"/></td>
                            <td><Form.Select name="type" id="type"  value={formvalue.type} onChange={handleInput} style={{border:"1px solid white",marginLeft:"0.5vw"}} type="text" placeholder="Type Here..."><option default value="TL">TL</option><option value="SU">SU</option><option value="AD">AD</option><option value="UW">UW</option><option value="SE">SE</option></Form.Select></td>
                            <td><Button type="submit"id="submit" name="submit"   className="btn btn-outline-light" style={{border:"1px solid #535353" , backgroundColor:"white" , color:"black" , marginBottom:"0.5vw" , marginRight:"0.5vw" , marginLeft:"1vw"}}>✎ Add</Button></td>
                        </tr>

        </tbody>
      </table>
      </Form>

      <div style={{border:"1px solid rgba(0,0,0,0.15)" , width:"73vw" , marginLeft:"20vw" , marginTop:"5vw",height:"22vw" , overflowY:"scroll"}}>

      <div style={{border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"1vw" , marginTop:"1vw" , width:"71vw" , marginTop:"1vw" , color:"#FB4E0B" , fontWeight:"bold" , padding:"0.3vw"}}>Remove Existing Employee</div>
      <table style={{border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"1vw" , width:"71vw" , height:"30vw" , overflow:"scroll"}}>
        <thead style={{position:"sticky" , overflow:"scroll"}}>
            <tr style={{borderBottom:"1px solid rgba(0,0,0,0.15)" , borderBottom:"1px solid rgba(0,0,0,0.15)" , height:'3vw'}}>
                <td style={{fontWeight:"bold" , color:"#535353"}}>S.No.</td>
                <td style={{fontWeight:"bold" , color:"#535353"}}>Name</td>
                <td style={{fontWeight:"bold" , color:"#535353"}}>Date Mapped</td>
                <td style={{fontWeight:"bold" , color:"#535353"}}>Employee ID</td>
                <td style={{fontWeight:"bold" , color:"#535353"}}>Mapped To(For Underwriters)</td>
                <td style={{fontWeight:"bold" , color:"#535353"}}>Import Mapping</td>
                <td style={{fontWeight:"bold" , color:"#535353"}}>Type</td>
                <td style={{fontWeight:"bold" , color:"#535353"}}>Action</td>
            </tr>
        </thead>
        <tbody style={{overflowY:"scroll" , height:"10vw"}}>

            { overdata.map(data=>(
                            <tr style={{ borderBottom:"1px solid rgba(0,0,0,0.15)"}}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.datem}</td>
                            <td>{data.empid}</td>
                            <td><Form.Control type="button" name="mapto" value={"✎ "+data.mapto} /></td>
                            <td>{ data.mapto && data.mapto.length > 0 ? (<i class="fa fa-cloud-download" aria-hidden="true"></i>) : (<i class="fa fa-cloud" aria-hidden="true"></i>)}</td>
                            <td>{data.type}</td>
                            <td><Link onClick={()=>handleDelete(data.id)} className="btn btn-outline-light" style={{border:"1px solid #535353" , backgroundColor:"white" , color:"black" }}>✎ Remove</Link></td>
                        </tr>
            ))}

        </tbody>
      </table>
      
    </div>

    </div>
  )
}

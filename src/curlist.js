import React from 'react'
import Navbar from './Navbar.js'
import Form from 'react-bootstrap/Form';

import './Navbar.css'

import { useState , useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';



import { BrowserRouter, Route , Routes , Link} from "react-router-dom";

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

export default function Curlist() 
{

const [overdata , setOverData] = useState([]);

useEffect (()=>{

  const getUserData = async() =>{
    const reqData = await fetch(`http://localhost:5001/api/curlist`);
    const resData= await reqData.json();
    setOverData(resData);
    console.log(resData);
  }
  getUserData();      

} , []);

  return (
    <div>
      <Navbar/>
      <div style={{border:"1px solid rgba(0,0,0,0.15)"}}>
      <p style={{height:"2.5vw",marginLeft:"35vw" , paddingTop:"0.2vw"  , fontStyle: "normal", fontWeight: "bold" ,fontSize: "1.5vw"  , fontStyle: "normal", fontWeight: "bold"  , color: "#FB4E0B" , width:"40vw"}}>Access Manager</p>
      </div>

      <div style={{height:"37vw" , border:"1px solid rgba(0,0,0,0.15)" , width:"75vw" , marginLeft:"20vw" , marginTop:"4vw" , overflowY:"scroll" , overflowX:"hidden" , paddingBottom:"1vw"}}>
      <div style={{border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"1vw" , marginTop:"1vw" , width:"73vw" , marginTop:"1vw" , color:"#FB4E0B" , fontWeight:"bold" , padding:"0.3vw"}}>Employee List</div>
      <table style={{border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"1vw" , width:"73vw" , height:"30vw" , overflow:"scroll"}}>
        <thead style={{position:"sticky" , overflow:"scroll"}}>
            <tr style={{borderBottom:"1px solid rgba(0,0,0,0.15)" , borderBottom:"1px solid rgba(0,0,0,0.15)" , height:'3vw'}}>
                <td style={{fontWeight:"bold" , color:"#535353"}}>S.No.</td>
                <td style={{fontWeight:"bold" , color:"#535353"}}>Name</td>
                <td style={{fontWeight:"bold" , color:"#535353"}}>Date Mapped</td>
                <td style={{fontWeight:"bold" , color:"#535353"}}>Employee ID</td>
                <td style={{fontWeight:"bold" , color:"#535353"}}>Mapped To(For Underwriters)</td>
                <td style={{fontWeight:"bold" , color:"#535353"}}>Imported Mapping</td>
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
                            <td><Form.Control type="button" name="mapto" value={"✎"+data.mapto} /></td>
                            <td>{ data.mapto && data.mapto.length > 0 ? (<i class="fa fa-cloud-download" aria-hidden="true"></i>) : (<i class="fa fa-cloud" aria-hidden="true"></i>)}</td>
                            <td>{data.type}</td>
                            <td><Link to={"/editlist12/"+data.id} className="btn btn-outline-light" style={{border:"1px solid #535353" , backgroundColor:"white" , color:"black" }}>✎ Replace</Link></td>
                        </tr>
            ))}

        </tbody>
      </table>
    </div>
    </div>
  )
}

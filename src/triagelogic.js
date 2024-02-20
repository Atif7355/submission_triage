import React from 'react'
import Navbar from './Navbar.js'

import './Navbar.css'

import './triagelogic.css'

import { useState , useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';



import { BrowserRouter, Route , Routes , Link , useNavigate } from "react-router-dom";

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

export default function Triagelogic() 
{
    const [ row , setRow ] = useState([]);
    
    useEffect (()=>{
      
        const getUserData1 = async() =>{
          const reqData = await fetch("http://localhost:5001/api/triage");
          const resData= await reqData.json();
          setRow(resData);
          console.log(resData);
        }
    
        getUserData1();
        
    
      } , []);

  return (
    <div>
      <Navbar/>

      <div style={{border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"14.7vw" , height:"2.7vw" , width:"85.2vw"}}>

      <p style={{height:"2.5vw",marginLeft:"20vw" , paddingTop:"0.2vw"  , fontStyle: "normal", fontWeight: "bold" ,fontSize: "1.5vw"  , fontStyle: "normal", fontWeight: "bold"  , color: "#FB4E0B" , width:"40vw"}}>Triage Logic List</p>

            
      <div style={{display:"flex"}}>
        <Card style={{border:"1px solid rgba(0,0,0,0.15)" , width:"60vw" , marginLeft:"5vw" , height:"34vw" , marginTop:"3vw" , paddingRight:"1vw" , paddingLeft:"1vw"}}>
        <p style={{width:"58vw",fontWeight: "bold"  , color: "#FB4E0B",paddingLeft:"1vw", fontStyle: "normal", fontWeight: "bold" ,paddingTop:"0.3vw",marginLeft:"0vw" , border:"1px solid rgba(0,0,0,0.15)" , marginTop:"1vw" , marginRight:"1vw" , height:"2vw" , textAlign:"left"}}>Triage Logic List</p>
            <table style={{border:"1px solid rgba(0,0,0,0.15)" , marginTop:"-1vw"}}>
                <thead >
                    <tr>
                        <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" , fontWeight:"bold"}}>▢</td>
                        <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" , fontWeight:"bold"}}>Rules</td>
                        <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" , fontWeight:"bold"}}>Relation1</td>
                        <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" , fontWeight:"bold"}}>Relation2</td>
                        <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" , fontWeight:"bold"}}>Current Priority</td>
                    </tr>
                </thead>
                <tbody>
                { row.map(data=>
                (
                    <tr style={{borderTop:"1px solid rgba(0,0,0,0.15)"}}>
                    <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>▢</td>
                    <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{data.rules}</td>
                    <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{data.rel1}</td>
                    <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{data.rel2}</td>
                    <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" , marginRight:"1vw"}}>{data.cur}</td>
                    </tr>
                ))
                }
                </tbody>
            </table>
        </Card>

        <Link to="/triagelogicupdate" id="amend" style={{color:"black" , marginLeft:"30vw"}}>Amend Rules</Link>
        

        </div>
                            
      </div>

    </div>
  )
}

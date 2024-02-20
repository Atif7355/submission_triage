import React from 'react'
import Navbar from './Navbar.js'


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

import {useLocation  , useParams , useNavigate} from 'react-router-dom';

import { Bar } from "react-chartjs-2";

import {Input} from 'reactstrap'

import Moment from 'moment';

import faker from 'faker';
import Form from 'react-bootstrap/Form';

export default function Updat() 
{

    const {id} = useParams();

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);


    const [ eu , setEu ] = useState({ new1:"" });

    const [message , setMessage] = useState("");


    const handleInput = (e) =>
    {
        setEu({ eu , [e.target.name]:e.target.value});
    }

    const navigate = useNavigate();
    
    const handleUpdate = async(e) =>
    {
        e.preventDefault();
        const editinval = { new1:eu.new1 }
        console.log(editinval);


        let res = await fetch(`http://localhost:5001/api/updateEntrymodel/`+id , {
          method:"PUT" ,
          headers:{"content-type":"application/json"},
          body:  JSON.stringify(editinval)
        });


        let responsejson = await res.json();
        
        if( res.status === 200 )
        {
            setShow(true);

            setMessage(responsejson.success);
            setTimeout(()=>
            {
                navigate("/model2");
                setShow(false);
            } , 2000)
            
        }
        else
        {
            setShow1(true);
            setMessage(" Some Error Occured ");

            setTimeout(()=>
            {
                setShow1(false);
            } , 2000)
        }

    }
    
  return (
    <div>
      <Navbar />
      <Card style={{border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"30vw" , marginTop:"15vw", width:"50vw" , height:"10vw"}}>
      <Form onSubmit={handleUpdate}>
      <div style={{display:"flex" , marginTop:"2vw" , marginLeft:"5vw"}}><Form.Label>New Weight:</Form.Label><Form.Control type="text" placeholder="Type Here..." style={{width:"30vw" , marginLeft:"3vw"  , marginTop:"-0.5vw"}} className="input"  name="new1" value={ eu.new1 } onChange={handleInput}/></div>
      <div style={{display:"flex" , marginTop:"1vw" , marginLeft:"1vw"}}><Button  type="submit" value="Update"  style={{paddingTop:"0.5vw" , width:"44.5vw" , marginLeft:"2vw" , backgroundColor:"#FB4E0B" , border:"0px" , color:"white" }} className="input" name="submit">Update</Button></div>    
      </Form>
      </Card>

    </div>
  )
}

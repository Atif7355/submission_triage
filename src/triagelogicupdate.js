import React from 'react'

import Navbar from './Navbar.js'

import './Navbar.css'

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

export default function Triagelogicupdate() 
{

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);


    const [ eu1 , setEu1 ] = useState({ cur:"" });
    const [ eu2 , setEu2 ] = useState({ cur:"" });
    const [ eu3 , setEu3 ] = useState({ cur:"" });

    const [message , setMessage] = useState("");
    
    console.log(eu1);


    const handleInput1 = (e) =>
    {
        setEu1({...eu1 , [e.target.name]:e.target.value});
    }

    const handleInput2 = (e) =>
    {
        setEu2({...eu2 , [e.target.name]:e.target.value});
    }

    const handleInput3 = (e) =>
    {
        setEu3({...eu3 , [e.target.name]:e.target.value});
    }

    const navigate = useNavigate();
    
    const handleUpdate1 = async(e) =>
    {
        e.preventDefault();
        const editinval = { cur:eu1.cur }
        console.log(editinval);


        let res = await fetch(`http://localhost:5001/api/updatetriage1` , {
          method:"PUT" ,
          headers:{"content-type":"application/json"},
          body:  JSON.stringify(editinval)
        });


        let responsejson = await res.json();
        
        if( res.status === 200 )
        {
            setShow(true);

            setMessage(responsejson.success);

            toast.success("Updated!");
            
            setTimeout(()=>
            {
                navigate("/triagelogic");
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
    
    const handleUpdate2 = async(e) =>
    {
        e.preventDefault();
        const editinval = { cur:eu2.cur }
        console.log(editinval);


        let res = await fetch(`http://localhost:5001/api/updatetriage2` , {
          method:"PUT" ,
          headers:{"content-type":"application/json"},
          body:  JSON.stringify(editinval)
        });


        let responsejson = await res.json();
        
        if( res.status === 200 )
        {
            toast.success("Updated!");

            setShow(true);

            setMessage(responsejson.success);
            
            setTimeout(()=>
            {
                navigate("/triagelogic");
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

    const handleUpdate3 = async(e) =>
    {
        e.preventDefault();
        const editinval = { cur:eu3.cur }
        console.log(editinval);


        let res = await fetch(`http://localhost:5001/api/updatetriage3` , {
          method:"PUT" ,
          headers:{"content-type":"application/json"},
          body:  JSON.stringify(editinval)
        });


        let responsejson = await res.json();
        
        if( res.status === 200 )
        {
            setShow(true);

            toast.success("Updated!");

            setMessage(responsejson.success);
            
            setTimeout(()=>
            {
                navigate("/triagelogic");
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

    const [ row1 , setRow1 ] = useState([]);
    const [ row2 , setRow2 ] = useState([]);
    const [ row3 , setRow3 ] = useState([]);
    
    useEffect (()=>{
      
        const getUserData1 = async() =>{
          const reqData = await fetch("http://localhost:5001/api/distriage1");
          const resData= await reqData.json();
          setRow1(resData);
          console.log(resData);
        }
    
        const getUserData2 = async() =>{
            const reqData = await fetch("http://localhost:5001/api/distriage2");
            const resData= await reqData.json();
            setRow2(resData);
            console.log(resData);
          }
      
        const getUserData3 = async() =>{
        const reqData = await fetch("http://localhost:5001/api/distriage3");
        const resData= await reqData.json();
        setRow3(resData);
        console.log(resData);
        }
      
        getUserData1();
        getUserData2();
        getUserData3();
    
      } , []);


      const [users, setUsers] = useState([]);

      const [ formvalue , setFormValue ] = useState({ rule:""  , rel1:"", rel2:"" , cur:0 });
  
      const handleInput = (e) =>
      {
             const { name , value } = e.target;
             setFormValue({...formvalue , [name]:value });
      }
  
      const handleSubmit = async(e)=>
      {
         e.preventDefault();
         const allInputvalue={ rule:formvalue.rule , rel1:formvalue.rel1  ,  rel2: formvalue.rel2  , cur:formvalue.cur };
  
         let res = await fetch(`http://localhost:5001/api/addEntry` , {
          method:"POST",
          headers:{'content-type':'application/json'},
          body:JSON.stringify(allInputvalue)
         });
  
             let resjson = await res.json();
             if( res.status === 200 )
             {
                setMessage(resjson.success);

                toast.success("Added!");
                
                setShow(true);
  
                setTimeout(()=>
                {
                  setShow(false);
                  navigate("/triagelogic");
                } , 2000);
             }
  
      }

      const handleDelete1 = async() =>
      {
        let res = await fetch(`http://localhost:5001/api/deleteEntry1` , {
          method:"DELETE",
          headers:{ 'content-type':'application-json'}
        });
  
        let resjson = await res.json();
        if(res.status === 200 )
        {
             setShow(true);
             setMessage(resjson.success);

             toast.success("Deleted!");
  
             setTimeout(()=>
             {
                 navigate('/triagelogic');  
                 setShow(false); 
                 setMessage('');  
             } , 2000);
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

      const handleDelete2 = async() =>
      {
        let res = await fetch(`http://localhost:5001/api/deleteEntry2` , {
          method:"DELETE",
          headers:{ 'content-type':'application-json'}
        });
  
        let resjson = await res.json();
        if(res.status === 200 )
        {
             setShow(true);
             setMessage(resjson.success);

             toast.success("Deleted!");
  
             setTimeout(()=>
             {
                 navigate('/triagelogic');  
                 setShow(false); 
                 
                 setMessage('');  
             } , 2000);
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

      const handleDelete3 = async() =>
      {
        let res = await fetch(`http://localhost:5001/api/deleteEntry3` , {
          method:"DELETE",
          headers:{ 'content-type':'application-json'}
        });
  
        let resjson = await res.json();
        if(res.status === 200 )
        {
             setShow(true);

             toast.success("Deleted!");

             setMessage(resjson.success);
  
             setTimeout(()=>
             {
                 navigate('/triagelogic');  
                 setShow(false); 
                 setMessage('');  
             } , 2000);
        }
        else
        {
          setShow1(true);
          setMessage(" Some Error Occured ");
          console.log(message);
  
          setTimeout(()=>
          {
              setShow1(false);
          } , 2000)
        }
      }




  return (
    <div>
      <Navbar/>

      <ToastContainer />

      <div style={{border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"14.7vw" , height:"2.7vw" , width:"84.7vw"}}>

<p style={{height:"2.5vw",marginLeft:"22vw" , paddingTop:"0.2vw"  , fontStyle: "normal", fontWeight: "bold" ,fontSize: "1.5vw"  , fontStyle: "normal", fontWeight: "bold"  , color: "#FB4E0B" , width:"40vw"}}>Triage Logic List - Update Portal</p>

      
<div style={{display:"flex"}}>
  <Card style={{border:"1px solid rgba(0,0,0,0.15)" , width:"75vw" , marginLeft:"5vw" , height:"20vw" , marginTop:"3vw" , paddingRight:"1vw" , paddingLeft:"1vw"}}>

    <p style={{width:"71vw",fontWeight: "bold"  , color: "#FB4E0B",paddingLeft:"1vw", fontStyle: "normal", fontWeight: "bold" ,paddingTop:"0.3vw",marginLeft:"1vw" , border:"1px solid rgba(0,0,0,0.15)" , marginTop:"1vw" , marginRight:"1vw" , height:"2vw" , textAlign:"left"}}>Update Priority Order by Rule Type</p>
      <table style={{border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"1vw" , marginTop:"-0.9vw" , width:"71vw" , height:"5vw"}}>
          <thead >
              <tr>
                  <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold"}}>▢</td>
                  <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold"}}>Rule Type</td>
                  <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold"}}>Current Priority</td>
                  <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold"}}>New Priority</td>
              </tr>
          </thead>
          <tbody style={{ height:"7vw"}}>
          { row1.map(data=>
          (
              <tr style={{borderTop:"1px solid rgba(0,0,0,0.15)" , height:"0.5vw"}}>
              <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" , fontSize:""}}>▢</td>
              <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>{data.rules}</td>
              <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>{data.cur}</td>
              <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" , marginRight:"1vw" , paddingRight:"1vw" , paddingBottom:"0.2vw"}}><Form onSubmit={handleUpdate1} style={{display:"flex"  , height:"3vw"}}><Form.Control type="number" placeholder="✎ Type Here..." value={ eu1.cur } name="cur" onChange={handleInput1} /><Form.Control style={{marginLeft:"1vw" , marginTop:"0.2vw"}} id="submit" type="submit" name="submit" /></Form></td>
              </tr>
          ))
          }

         { row2.map(data=>
          (
              <tr style={{borderTop:"1px solid rgba(0,0,0,0.15)" , height:"0.5vw"}}>
              <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>▢</td>
              <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{data.rules}</td>
              <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{data.cur}</td>
              <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" , marginRight:"1vw" , paddingRight:"1vw" , paddingBottom:"0.2vw"}}><Form onSubmit={handleUpdate2} style={{display:"flex" , height:"3vw"}}><Form.Control type="number" placeholder="✎ Type Here..." value={ eu2.cur } name="cur" onChange={handleInput2} /><Form.Control style={{marginLeft:"1vw" , marginTop:"0.2vw"}} id="submit" type="submit" name="submit" /></Form></td>
              </tr>
          ))
          }

        { row3.map(data=>
          (
              <tr style={{borderTop:"1px solid rgba(0,0,0,0.15)" , height:"0.5vw"}}>
              <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>▢</td>
              <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{data.rules}</td>
              <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{data.cur}</td>
              <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" , marginRight:"1vw", paddingRight:"1vw" , paddingBottom:"0.2vw"}}><Form onSubmit={handleUpdate3} style={{display:"flex" , height:"3vw"}}><Form.Control type="number" placeholder="✎ Type Here..." value={ eu3.cur } onChange={handleInput3} name="cur"/><Form.Control style={{marginLeft:"1vw" , marginTop:"0.2vw"}} id="submit" type="submit" name="submit" /></Form></td>
              </tr>
          ))
          }

          </tbody>
      </table>
  </Card>
  </div>

<Card style={{border:"1px solid rgba(0,0,0,0.15)" , width:"75vw" , marginLeft:"5vw" , height:"12vw" , marginTop:"1vw" , paddingRight:"1vw" , paddingLeft:"1vw"}}>

<p style={{width:"71vw",fontWeight: "bold"  , color: "#FB4E0B",paddingLeft:"1vw", fontStyle: "normal", fontWeight: "bold" ,paddingTop:"0.3vw",marginLeft:"1vw" , border:"1px solid rgba(0,0,0,0.15)" , marginTop:"1vw" , marginRight:"1vw" , height:"2vw" , textAlign:"left"}}>Add New Rule</p>

<Form onSubmit={handleSubmit}>
  <table style={{border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"1vw" , marginTop:"-0.9vw" , width:"71vw" , height:"1vw" , paddingLeft:"1vw"}}>
      <thead >
          <tr>
              <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold" , paddingLeft:"1vw"}}>▢</td>
              <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold"}}>Rule Type</td>
              <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold"}}>Relation 1</td>
              <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold"}}>Relation 2</td>
              <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold"}}>Priority</td>
              <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold"}}>Submit</td>
          </tr>
      </thead>
      <tbody style={{ height:"5vw", border:"1px solid rgba(0,0,0,0.15)"}}>

          <tr style={{borderTop:"1px solid rgba(0,0,0,0.15)" , height:"0.5vw"}}>
          <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold" , paddingLeft:"1vw"}}>▢</td>
          <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold" , paddingRight:"0.5vw"}}><Form.Control type="text" placeholder="✎ Type Here..." style={{marginLeft:"0.5vw"}} value={formvalue.rule} name="rule" onChange={handleInput} /></td>
          <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold" , paddingRight:"0.5vw"}}><Form.Control type="text" placeholder="✎ Type Here..." style={{marginLeft:"0.5vw"}} name="rel1" value={formvalue.rel1} onChange={handleInput} /></td>
          <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold", paddingRight:"0.5vw"}}><Form.Control type="text" placeholder="✎ Type Here..." style={{marginLeft:"0.5vw"}} name="rel2" value={formvalue.rel2} onChange={handleInput}/></td>
          <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold", paddingRight:"0.5vw"}}><Form.Control type="number" placeholder="✎ Type Here..." style={{marginLeft:"0.5vw"}} name="cur" value={formvalue.cur} onChange={handleInput}/></td>
          <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold", paddingRight:"0vw"}}><Form.Control id="submit" type="submit" style={{marginLeft:"1vw"}} name="submit" /></td>
          </tr>
      </tbody>
  </table>
  </Form>
</Card>


<Card style={{border:"1px solid rgba(0,0,0,0.15)" , width:"75vw" , marginLeft:"5vw" , height:"19vw" , marginTop:"1vw" , paddingRight:"1vw" , paddingLeft:"1vw"}}>

<p style={{width:"71vw",fontWeight: "bold"  , color: "#FB4E0B",paddingLeft:"1vw", fontStyle: "normal", fontWeight: "bold" ,paddingTop:"0.3vw",marginLeft:"1vw" , border:"1px solid rgba(0,0,0,0.15)" , marginTop:"1vw" , marginRight:"1vw" , height:"2vw" , textAlign:"left"}}>Remove A Rule</p>
  <table style={{border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"1vw" , marginTop:"-0.9vw" , width:"71vw" , height:"7vw"}}>
      <thead >
          <tr>
              <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold"}}>▢</td>
              <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold"}}>Rule Type</td>
              <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold"}}>Relation 1</td>
              <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold"}}>Relation 2</td>
              <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold"}}>Current Priority</td>
              <td style={{paddingTop:"1vw"  , color:"grey" , fontWeight:"bold"}}></td>
          </tr>
      </thead>
      <tbody style={{ height:"10vw"}}>
      { row1.map(data=>
      (
          <tr style={{borderTop:"1px solid rgba(0,0,0,0.15)" , height:"0.5vw"}}>
          <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>▢</td>
          <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>{data.rules}</td>
          <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>{data.rel1}</td>
          <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>{data.rel2}</td>
          <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>{data.cur}</td>
          <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" , marginRight:"1vw" , paddingRight:"1vw" , paddingBottom:"0.2vw"}}><Link id="submit" style={{color:"black"}} onClick={()=>handleDelete1()}>Remove</Link></td>
          </tr>
      ))
      }

     { row2.map(data=>
      (
          <tr style={{borderTop:"1px solid rgba(0,0,0,0.15)" , height:"0.5vw"}}>
          <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>▢</td>
          <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{data.rules}</td>
          <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>{data.rel1}</td>
          <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>{data.rel2}</td>
          <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{data.cur}</td>
          <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" , marginRight:"1vw" , paddingRight:"1vw" , paddingBottom:"0.2vw"}}><Link id="submit" style={{color:"black"}}  onClick={()=>handleDelete2()}>Remove</Link></td>
          </tr>
      ))
      }

    { row3.map(data=>
      (
          <tr style={{borderTop:"1px solid rgba(0,0,0,0.15)" , height:"0.5vw"}}>
          <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>▢</td>
          <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{data.rules}</td>
          <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>{data.rel1}</td>
          <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>{data.rel2}</td>
          <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{data.cur}</td>
          <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" , marginRight:"1vw", paddingRight:"1vw" , paddingBottom:"0.2vw"}}><Link id="submit" style={{color:"black"}}  onClick={()=>handleDelete3()}>Remove</Link></td>
          </tr>
      ))
      }

      </tbody>
  </table>
</Card>
                      
</div>


    </div>
  )
}

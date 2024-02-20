import React from 'react'
import { useState , useEffect } from "react";
import ReactDOM from "react-dom/client";
import Navbar from './Navbar.js'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { Link, Navigate, useNavigate , useParams } from "react-router-dom";
import axios from "axios"

import Papa from "papaparse";
 
// Allowed extensions for input file
const allowedExtensions = ["csv"];

export default function Updatecur()
{
    const {id} = useParams();

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);


    const [ eu , setEu ] = useState({ mapto:''});

    const [message , setMessage] = useState("");

    useEffect (()=>{

        const getM = async() =>{
          const reqData = await fetch(`http://localhost:5000/api/editEntrya/${id}`);
          const resData= await reqData.json();
          setEu(resData);
          console.log(resData);

        }
        getM();
    } , [id])

        console.log(eu);


    const handleInput = (e) =>
    {
        setEu({...eu , [e.target.name]:e.target.value});
    }

    const navigate = useNavigate();
    
    const handleUpdate = async(e) =>
    {
        e.preventDefault();
        const editinval = { mapto:eu.mapto  }
        console.log(editinval);


        let res = await fetch(`http://localhost:5001/api/updateEntrycur/`+id , {
          method:"PUT" ,
          headers:{"content-type":"application/json"},
          body:  JSON.stringify(editinval)
        });


        let responsejson = await res.json();
        
        if( res.status === 200 )
        {
            setShow(true);

            toast.success("Updated!!!!");

            setMessage(responsejson.success);
            setTimeout(()=>
            {
                navigate("/currentlist");
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


    const [file12, setFile12] = useState('');



    const uploadDocu1 = async() =>{
        const formData = new FormData();
        formData.append('mapto' , data12);
       

        const response = await axios.post("http://localhost/react_sub_php/api/filecur.php",formData,{ headers:{'Content-Type':"multipart/form-data"},
        
     })

    setMessage("Successfull");

    }

    console.log(message);




    const handleSubmit1 = async(e) =>
    { 
           e.preventDefault();
           await uploadDocu1();

           setShow(true);
                        
           setTimeout(()=>
           {
            navigate("/curlist");
            setShow(false); 
           }, 3000);

           
    }
    

      const [data, setData] = useState([]);
     
      // It state will contain the error when
      // correct file extension is not used
      const [error, setError] = useState("");
       
      // It will store the file uploaded by the user
      const [file, setFile] = useState("");
   
      // This function will be called when
      // the file input changes
      const handleFileChange = (e) => {
          
        setError("");
           
          // Check if user has entered the file
          if (e.target.files.length) {
              const inputFile = e.target.files[0];
               
              // Check the file extensions, if it not
              // included in the allowed extensions
              // we show the error
              const fileExtension = inputFile?.type.split("/")[1];
              if (!allowedExtensions.includes(fileExtension)) {
                  setError("Please input a csv file");
                  return;
              }
   
              // If input type is correct set the state
              setFile(inputFile);

                // If user clicks the parse button without
                // a file we show a error
                if (!inputFile) return setError("Enter a valid file");
        
                // Initialize a reader which allows user
                // to read any file or blob.
                const reader = new FileReader();
                
                // Event listener on reader when the file
                // loads, we parse it and set the data.
                reader.onload = async ({ target }) => {
                    const csv = Papa.parse(target.result, { header: true });
                    const parsedData = csv?.data;
                    console.log(parsedData[0].mapto);
                    const columns = Object.keys(parsedData[0]);
                    setData(columns);
                };
                reader.readAsText(inputFile);

          }
      };

      var data12;

      data.map( col =>{
        data12 = col;
      })
    
      console.log(data12);


      const handleUpdate2 = async(e) =>
      {
          e.preventDefault();
          const editinval = { mapto:data12  }
          console.log(editinval);
  
  
          let res = await fetch(`http://localhost:5001/api/updateEntrycurup/`+id , {
            method:"PUT" ,
            headers:{"content-type":"application/json"},
            body:  JSON.stringify(editinval)
          });
  
  
          let responsejson = await res.json();
          
          if( res.status === 200 )
          {
              setShow(true);

              toast.success("Updated!!!!");
  
              setMessage(responsejson.success);
              setTimeout(()=>
              {
                  navigate("/currentlist");
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

    <ToastContainer/>

    <p style={{height:"5vw",marginLeft:"42vw" , paddingTop:"1vw"  , fontStyle: "normal", fontWeight: "bold" ,fontSize: "2vw"  , fontStyle: "normal", fontWeight: "bold"  , color: "#FB4E0B" , width:"25vw"}}>Edit Entry</p>

    <p style={{marginLeft:"34.5vw" , paddingTop:"0vw"  , fontStyle: "normal",fontSize: "1vw" , fontStyle: "normal"  , color:"#A1AEB7" , width:"40vw" , marginTop:"-2vw" , marginBottom:"1vw"}} >Edit your entries here.</p>

    <p style={{ textAlign:"center", height:"2vw",marginLeft:"21vw" , paddingTop:"0.5vw"  , fontStyle: "normal", fontWeight: "bold" ,fontSize: "1vw"  , fontStyle: "normal", fontWeight: "bold"  , color: "#FB4E0B" , width:"25vw" , marginTop:"5vw" , textAlign:"left"}}>Enter Name Manually</p>

    <Card style={{height:"10vw" , width:"70vw" , border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"20.5vw" , marginTop:"1vw"}}>
    <Form onSubmit={handleUpdate}>
     <div style={{display:"flex" , marginTop:"2vw" , marginLeft:"14.35vw"}}><Form.Label>Map To :</Form.Label><Form.Control type="text" placeholder="Type Here..." style={{width:"34.7vw" , marginLeft:"3vw"  , marginTop:"-0.5vw"}} className="input"  name="mapto" value={ eu.mapto } onChange={handleInput}/></div> 
     <div style={{display:"flex" , marginTop:"1vw" , marginLeft:"6.2vw"}}><Button  type="submit" value="Update"  style={{paddingTop:"0.5vw" , width:"41.5vw" , marginLeft:"8.2vw" , backgroundColor:"#FB4E0B" , border:"0px" , color:"white" }} className="input" name="submit">Update</Button></div>    
     </Form>
    </Card>

    <p style={{ textAlign:"center", height:"2vw",marginLeft:"21vw" , paddingTop:"0.5vw"  , fontStyle: "normal", fontWeight: "bold" ,fontSize: "1vw"  , fontStyle: "normal", fontWeight: "bold"  , color: "#FB4E0B" , width:"25vw" , marginTop:"1vw" , textAlign:"left"}}>Upload File</p>

    <Card style={{height:"10vw" , width:"70vw" , border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"20.5vw" , marginTop:"1vw"}}>
    <Form onSubmit={handleUpdate2}>
     <div style={{display:"flex" , marginTop:"2vw" , marginLeft:"14.35vw"}}><Form.Label>Map To :</Form.Label> <Form.Control onChange={handleFileChange} style={{width:"34.7vw" , marginLeft:"3vw"  , marginTop:"-0.5vw"}} className="input"  id="csvInput" name="file12" type="File"/></div> 
     <div style={{display:"flex" , marginTop:"1vw" , marginLeft:"6.2vw"}}><Button  type="submit" value="Update"  style={{paddingTop:"0.5vw" , width:"41.5vw" , marginLeft:"8.2vw" , backgroundColor:"#FB4E0B" , border:"0px" , color:"white" }} className="input" name="submit">Upload</Button></div>    
     </Form>
    </Card>
   
    </div>
  )
}

import React from 'react';
import {useState , useEffect} from 'react';
import Navbar from './Navbar.js';
import './docu.css';
import axios from 'axios';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import {useParams} from "react-router-dom";

import { useNavigate , Link } from 'react-router-dom';

export default function Docu() 
{

    const navigate = useNavigate();

    const [description, setDescription] = useState('');
    const [spoc, setSpoc] = useState('');
    const [file, setFile] = useState('');
    const [ids, setIds] = useState('');

    const [message , setMessage] = useState('');

    const uploadDocu = async() =>{
        const formData = new FormData();
        formData.append('desci' , description);
        formData.append('spoc' , spoc);
        formData.append('file' , file);
        formData.append('ids' , ids);

        const response = await axios.post("http://localhost/react_php/api/file.php",formData,{ headers:{'Content-Type':"multipart/form-data"},
     });

     
    setMessage("SUCESSFull");
    setTimeout(()=>{
        navigate('/');
    }, 2000);


    }

    console.log(message);
 
    const handleSubmit = async(e) =>
    { 
           e.preventDefault();
           await uploadDocu();
    }


    const [filedata , setFileData] = useState([]);

    useEffect(()=>{
        const getUserD = async() =>
        {
            const reqData = await fetch("http://localhost/react_php/api/file.php");
            const resData = await reqData.json();
            console.log(resData);
            setFileData(resData);
        }

        getUserD();
    } , []);

    var em = localStorage.getItem("Email");
    console.log(em);

    const file1 = filedata.filter(filedata => filedata.ids == localStorage.getItem("Email"))    /* filter available people */       /* map each person to name */ 

    console.log(file1);

    filedata.map(data  => {

      if( localStorage.getItem("Email") == data.ids)
      {
            console.log(localStorage.getItem('Email'));
      }

    });

    var filename;

    const onButtonClick = (event) => {
      const theValue = event.currentTarget.value;
      // using Java Script method to get PDF file
      console.log("the value:", theValue);


      filedata.map(udata => {

        if( udata.id ==  theValue )
        {
            console.log(udata.file);
            filename = udata.file;
            
        }
        });
         console.log(filename);
      fetch( `./${filename}` ).then(response => {
          response.blob().then(blob => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = `./${filename}`;
              alink.click();
          })
      })
  }

  return (
    <div>
      <Navbar />
      <p style={{height:"3.5vw",marginLeft:"43vw" , paddingTop:"2vw"  , fontStyle: "normal", fontWeight: "bold" ,fontSize: "2vw"  , fontStyle: "normal", fontWeight: "bold"  , color: "#FB4E0B" , width:"25vw"}}>Documentation</p>
      
      <p style={{ textAlign:"center", height:"5vw",marginLeft:"40vw" , paddingTop:"0.5vw"  , fontStyle: "normal", fontWeight: "bold" ,fontSize: "1vw"  , fontStyle: "normal", fontWeight: "bold"  , color: "#FB4E0B" , width:"25vw"}}>File Sharing</p>

      

      <Card style={{height:"9vw" , width:"70vw" , border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"20.5vw"}}>

        <div style={{width:"51vw",fontWeight: "bold"  , color: "#FB4E0B",paddingLeft:"1vw", fontStyle: "normal", fontWeight: "bold" ,paddingTop:"0.3vw",marginLeft:"1vw" , border:"1px solid rgba(0,0,0,0.15)" , marginTop:"1vw" , marginRight:"1vw" , height:"2vw"}}>
            Document Upload
        </div>

        
        <form onSubmit={handleSubmit}>
        
        <div style={{display:"flex"}}>

        <div style={{paddingLeft:"0vw", fontStyle: "normal" ,paddingTop:"0vw",marginLeft:"1vw" , border:"1px solid rgba(0,0,0,0.15)",borderRight:"1px solid rgba(0,0,0,0.15)",borderLeft:"1px solid rgba(0,0,0,0.15)" , marginTop:"0vw" , marginRight:"1vw" , height:"5vw" ,width:"51vw"}}>
         <div style={{display:"flex"}}><div style={{border:"1px solid rgba(0,0,0,0.15)" , paddingLeft:"1vw" , paddingRight:"1vw" , marginLeft:"0.5vw" , marginTop:"0.5vw" , textAlign:"center"}}>Document Description</div><div style={{marginLeft:"0vw" , textAlign:"center", border:"1px solid rgba(0,0,0,0.15)" , marginTop:"0.5vw", paddingLeft:"1vw" , paddingRight:"1vw", width:"12.5vw"}}>SPOC Name</div><div style={{marginLeft:"0vw", textAlign:"center", marginTop:"0.5vw" , width:"12.5vw", border:"1px solid rgba(0,0,0,0.15)" , paddingLeft:"1vw" , paddingRight:"1vw"}}>Attachment</div><div style={{ textAlign:"center",width:"12vw", marginTop:"0.5vw" ,marginLeft:"0vw" , border:"1px solid rgba(0,0,0,0.15)" , paddingLeft:"1vw" , paddingRight:"1vw"}}>IDs to Share </div></div>
         <div style={{display:"flex"}}><input required onChange={(e) => setDescription(e.target.value)} style={{border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"0.5vw" , width:"12.5vw" , textAlign:"center" , color:"#898C81" , height:"2vw"}} type="text" placeholder="Type in Here..." className="myinput" ></input><input onChange={(e) => setSpoc(e.target.value)} style={{border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"0vw" , width:"12.5vw" , textAlign:"center" , color:"#898C81", height:"2vw"}} type="email" placeholder="Type in Here..." className="myinput" required ></input><Form.Control  onChange={(e) => setFile(e.target.files[0])} required style={{paddingTop:"-0.2vw",border:"1px solid rgba(0,0,0,0.15)" , height:"2vw", marginLeft:"0vw" , width:"12.5vw" , textAlign:"center" , color:"#898C81" , borderRadius:"0px"}} type="file" placeholder="Type in Here..." className="myinput" /><input required onChange={(e) => setIds(e.target.value)} style={{border:"1px solid rgba(0,0,0,0.15)", height:"2vw" , marginLeft:"0vw" , width:"12vw" , textAlign:"center" , color:"#898C81"}} type="email" placeholder="Type in Here..." className="myinput" ></input></div>    

        </div>

        <input type="submit" style={{marginTop:"0.2vw" ,marginLeft:"4vw",justifyContent: 'center',alignItems: 'center' ,paddingRight: '2vw'  ,paddingLeft: '2vw' ,paddingTop: '0.2vw' ,gap: '10px' ,width: '12vw',height: '3vw', background: 'rgba(251, 78, 11, 0.3)',border: '1px solid rgba(0, 0, 0, 0.5)',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' ,borderRadius: '10px' ,flex: '0px' ,order: 1,flexGrow: 0}} value="Upload" />

        </div>

       
        </form> 

      </Card>

      <Card style={{marginLeft:"20.5vw" , border:"1px solid rgba(0,0,0,0.15)"  , width:"70vw" , marginTop:"1vw" , paddingBottom:"1vw"}}>

      <div style={{width:"68vw",fontWeight: "bold"  , color: "#FB4E0B",paddingLeft:"1vw", fontStyle: "normal", fontWeight: "bold" ,paddingTop:"0.3vw",marginLeft:"1vw" , border:"1px solid rgba(0,0,0,0.15)" , marginTop:"1vw" , marginRight:"1vw" , height:"2vw"}}>
         Existing Document
        </div>

      <div style={{paddingLeft:"0vw", fontStyle: "normal" ,paddingTop:"0vw",marginLeft:"1vw" , border:"1px solid rgba(0,0,0,0.15)",borderRight:"1px solid rgba(0,0,0,0.15)",borderLeft:"1px solid rgba(0,0,0,0.15)" , marginTop:"0vw" , marginRight:"1vw"  ,width:"68vw"}}>

        <table>
        <thead style={{fontStyle: "normal"}}>
        <tr style={{fontStyle: "normal"}}>
        <td style={{width:"20vw",fontStyle: "normal" ,fontSize: "1vw"  , fontStyle: "normal",fontStyle: "normal",borderBottom:"1px solid rgba(0,0,0,0.15)" , borderRight:"1px solid rgba(0,0,0,0.15)" , paddingLeft:"1vw" , paddingRight:"1vw" , marginLeft:"0.5vw" , marginTop:"0.5vw" , textAlign:"left" , fontSize:"1.15vw" , fontStyle:"normal" , fontFamily:"Calibri"}} >Document Description</td>  
        <td style={{width:"20vw",fontStyle: "normal" ,fontSize: "1vw"  , fontStyle: "normal",fontStyle: "normal",borderBottom:"1px solid rgba(0,0,0,0.15)" , borderRight:"1px solid rgba(0,0,0,0.15)", paddingLeft:"1vw" , paddingRight:"1vw" , marginLeft:"0.5vw" , marginTop:"0.5vw" , textAlign:"left" , fontSize:"1.15vw" , fontStyle:"normal" , fontFamily:"Calibri"}} >SPOC Name</td>  
        <td style={{width:"20vw",fontStyle: "normal" ,fontSize: "1vw"  , fontStyle: "normal",fontStyle: "normal",borderBottom:"1px solid rgba(0,0,0,0.15)" , borderRight:"1px solid rgba(0,0,0,0.15)", paddingLeft:"1vw" , paddingRight:"1vw" , marginLeft:"0.5vw" , marginTop:"0.5vw" , textAlign:"left" , fontSize:"1.15vw" , fontStyle:"normal" , fontFamily:"Calibri"}}>Attachment</td>  
        <td style={{width:"20vw",fontStyle: "normal" ,fontSize: "1vw"  , fontStyle: "normal",fontStyle: "normal",borderBottom:"1px solid rgba(0,0,0,0.15)" , borderRight:"1px solid rgba(0,0,0,0.15)", paddingLeft:"1vw" , paddingRight:"1vw" , marginLeft:"0.5vw" , marginTop:"0.5vw" , textAlign:"left" , fontSize:"1.15vw" , fontStyle:"normal" , fontFamily:"Calibri"}}>Action</td>    
        </tr>        
        </thead>
        <tbody>

            {
                file1.map((data , index) => (
                    <tr key ={index} >
                    <td style={{width:"20vw",fontStyle: "normal" ,fontSize: "1vw"  , fontStyle: "normal",fontStyle: "normal",borderBottom:"1px solid rgba(0,0,0,0.15)" , borderRight:"1px solid rgba(0,0,0,0.15)" , paddingLeft:"1vw" , paddingRight:"1vw" , marginLeft:"0.5vw" , marginTop:"0.5vw" , textAlign:"left" , fontSize:"1.15vw" , fontStyle:"normal" , fontFamily:"Calibri"}}>{data.desci}</td>  
                    <td style={{width:"20vw",fontStyle: "normal" ,fontSize: "1vw"  , fontStyle: "normal",fontStyle: "normal",borderBottom:"1px solid rgba(0,0,0,0.15)" , borderRight:"1px solid rgba(0,0,0,0.15)" , paddingLeft:"1vw" , paddingRight:"1vw" , marginLeft:"0.5vw" , marginTop:"0.5vw" , textAlign:"left" , fontSize:"1.15vw" , fontStyle:"normal" , fontFamily:"Calibri"}}>{data.spoc}</td>  
                    <td style={{width:"20vw",fontStyle: "normal" ,fontSize: "1vw"  , fontStyle: "normal",fontStyle: "normal",borderBottom:"1px solid rgba(0,0,0,0.15)" , borderRight:"1px solid rgba(0,0,0,0.15)" , paddingLeft:"1vw" , paddingRight:"1vw" , marginLeft:"0.5vw" , marginTop:"0.5vw" , textAlign:"left" , fontSize:"1.15vw" , fontStyle:"normal" , fontFamily:"Calibri"}}>{data.file}</td>  
                    <td style={{width:"20vw",fontStyle: "normal" ,fontSize: "1vw"  , fontStyle: "normal",fontStyle: "normal",borderBottom:"1px solid rgba(0,0,0,0.15)" , borderRight:"1px solid rgba(0,0,0,0.15)" , paddingLeft:"1vw" , paddingRight:"1vw" , marginLeft:"0.5vw" , marginTop:"0.5vw" , textAlign:"left" , fontSize:"1.15vw" , fontStyle:"normal" , fontFamily:"Calibri"}}><button onClick={onButtonClick} value={data.id} style={{color:"#6F6F6F" , fontSize:"1vw" , textDecoration:"0px",padding:"0vw",marginTop:"0.2vw" ,marginLeft:"3.5vw",justifyContent: 'center',alignItems: 'center' ,paddingRight: '2vw'  ,paddingLeft: '2vw' ,paddingTop: '0.2vwvw' ,gap: '10px' ,width: '10vw',height: '1.8vw', background: 'rgba(251, 78, 11, 0.3)',border: '1px solid rgba(0, 0, 0, 0.5)',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' ,borderRadius: '10px' ,flex: '0px' ,order: 1,flexGrow: 0  , color:"black"}}>Open</button></td>      
                    </tr>      

                ))
            }
        
        </tbody>            
        </table>    

      </div>

      </Card>  

    </div>
  )
}

import './Navbar.css';
import cs from './Vectorst.png';

import Dropdown from 'react-bootstrap/Dropdown';

import { BrowserRouter, Route , Routes , Link} from "react-router-dom";

import React, { useState , useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';



function Navbar() 
{

  const [userdata, setUserData] = useState([]);

  function rem()
{
  localStorage.removeItem("Email");
  localStorage.removeItem("Name");
}


  useEffect (()=>{

    const getUserData = async() =>{
      const reqData = await fetch("http://localhost:5001/api/users");
      const resData= await reqData.json();
      setUserData(resData);
      console.log(resData);
    }

    getUserData();
    

  } , []);

  userdata.map(udata => {

    if( udata.name == localStorage.getItem("Name") )
    {

      document.getElementById("myImg").src = `./images/${localStorage.getItem("Name")}.jpeg` ;

    }

    });

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);





  return (
    <>
    <div className="wrapper">
    <div className="sidebar">
        <ul>
          <div className="top-section" style={{height: "45px" , fontSize:"16px" }}>
            <li style={{height:"1vw"}}>
                <h2 style={{color: "rgba(251, 78, 11, 0.8)" , fontSize:"15px" ,  marginTop:"12px", marginLeft:"50px" , textDecoration:"none" ,width:"150px" }}>Submission Triage</h2>
                <img src={cs} style={{marginTop:"-35px" , marginLeft:"-8vw" }} />
            </li>
           </div>

           <div className="middle1" style={{paddingTop:"0vw"}}>
            <li  style={{fontWeight:"lighter", width:"10vw" , marginLeft:"2.1vw" }}><Link id="over" to="/overview" style={{ paddingRight:"-1vw",fontWeight:"lighter" , marginLeft:"-0vw",color: "#898C81" , paddingLeft:"2px" , textDecoration:"none" , fontSize:"15px" , fontWeight:"lighter" , textAlign:"left"}} ><i className="fa fa-file-code-o"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Overview Report</Link></li>
            

            <li style={{paddingLeft:"0vw" ,fontWeight:"lighter", width:"9vw" , marginLeft:"2.1vw", marginTop:"0.5vw"}}>
            <Button
            id="btn1"
            variant="white"
            onClick={() => setOpen1(!open1)}
            aria-controls="example-collapse-text1"
            aria-expanded={open1}
            style={{ paddingLeft:"-20vw" , width:"13vw" , fontSize:"0.9vw" , marginLeft:"0vw" , textAlign:"left" , color:"#898C81" }}
            >
            <i className="fa fa-bandcamp"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Triage
            </Button>
            </li>
            <Collapse in={open1} style={{paddingTop:"0.5vw" , width:"12vw" , marginLeft:"2vw" , borderRadius:"0.5vw" , textAlign:"left"}}>
            <div id="example-collapse-text1" style={{color: "#898C81" , fontSize:"13px" }}>
            <Link to="/triagelogic" style={{paddingTop:"1vw",color: "#898C81" , fontSize:"13px" , height:"0.5vw" , fontWeight:"lighter" , textDecoration:"0px" , marginBottom:"1vw" , marginLeft:"3.3vw"}}>Business Rules</Link><br />
            <Link to="/triagelogicupdate" style={{color: "#898C81" , fontSize:"13px" , height:"0.5vw" , marginTop:"1vw", fontWeight:"lighter" , textDecoration:"0px" , marginLeft:"3.3vw"}}>Update or Add Rules</Link>
            </div>
            </Collapse>

            <br />
            

            <br />
            <li style={{fontWeight:"lighter", width:"10vw" , marginLeft:"1.1vw" , marginTop:"-1.7vw" , textAlign:"left"}} ><Button
            id="btn3"
            variant="white"
            onClick={() => setOpen3(!open3)}
            aria-controls="example-collapse-text1"
            aria-expanded={open3}
            style={{width:"13vw" , fontSize:"0.9vw" , marginLeft:"1.3vw"  , color:"#898C81" , border:"0px" , paddingLeft:"0.5vw" , textAlign:"left"}}
            >
            <i className="fa fa-user-o"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manage Access
            </Button></li>
            <Collapse in={open3} style={{paddingTop:"0.5vw" , width:"10vw" , marginLeft:"3.1vw" , borderRadius:"0.5vw" , textAlign:"left"}}>
            <div id="example-collapse-text1" style={{color: "#898C81" , fontSize:"13px" }}>
            <Link to="/currentlist" style={{paddingTop:"1vw",color: "#898C81" , fontSize:"13px" , height:"0.5vw" , fontWeight:"lighter" , textDecoration:"0px" , marginBottom:"1vw" , marginLeft:"2.3vw"}}>Current List</Link><br />
            <Link to="/editlist" style={{color: "#898C81" , fontSize:"13px" , height:"0.5vw" , marginTop:"1vw", fontWeight:"lighter" , textDecoration:"0px" , marginLeft:"2.4vw"}}>Edit List</Link>
            </div>
            </Collapse>




            <br/>



            <li style={{fontWeight:"lighter", width:"10vw" , marginLeft:"0vw" , marginTop:"-0.5vw"}} ><Button
            id="btn3"
            variant="white"
            onClick={() => setOpen2(!open2)}
            aria-controls="example-collapse-text1"
            aria-expanded={open2}
            style={{width:"13vw" , fontSize:"0.9vw" , marginLeft:"2.2vw"  , color:"#898C81" , border:"0px" , textAlign:"left"}}
            >
            <i className="fa fa-arrows-h"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Daily Run Reports
            </Button></li>
            <Collapse in={open2} style={{paddingTop:"0.5vw" , width:"10vw" , marginLeft:"3.3vw" , borderRadius:"0.5vw" , textAlign:"left"}}>
            <div id="example-collapse-text1" style={{color: "#898C81" , fontSize:"13px" }}>
            <Link to="/model" style={{paddingTop:"1vw",color: "#898C81" , fontSize:"13px" , height:"0.5vw" , fontWeight:"lighter" , textDecoration:"0px" , marginBottom:"1vw" , marginLeft:"2.3vw"}}>Model Run Report</Link><br />
            <Link to="/model2" style={{color: "#898C81" , fontSize:"13px" , height:"0.5vw" , marginTop:"1vw", fontWeight:"lighter" , textDecoration:"0px" , marginLeft:"2.3vw"}}>Extraction Report</Link>
            </div>
            </Collapse>


            <li style={{paddingLeft:"-5vw" ,fontWeight:"lighter", width:"9vw" , marginLeft:"1.2vw"  , marginTop:"0.7vw" }}>
            <Link
            to="/support"
            id="btn1"
            variant="white"
            aria-controls="example-collapse-text1"
            aria-expanded={open1}
            style={{ paddingLeft:"-6vw" , width:"13vw" , fontSize:"0.9vw" , marginLeft:"0vw"  , color:"#898C81" , border:"0px" , textAlign:"left"}}
            >
            <i className="fa fa-arrows-alt"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Support
            </Link>
            </li>


            <li style={{paddingLeft:"-5vw" ,fontWeight:"lighter", width:"12vw" , marginLeft:"1.2vw" , marginTop:"0.7vw"  }}>
            <Link
            to="/documentation"
            id="btn1"
            variant="white"
            aria-controls="example-collapse-text1"
            aria-expanded={open1}
            style={{ paddingLeft:"-5vw" , width:"13vw" , fontSize:"0.9vw" , marginLeft:"0vw"  , color:"#898C81" , border:"0px", textAlign:"left"}}
            >
            <i className="fa fa-paperclip"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Documentation
            </Link>
            </li>
          

            </div>

            <div className="account">
            <li>
            <div style={{border:"1px solid rgba(0,0,0,0.15)" , height:"2vw" , width:"2vw" , marginTop:"0.7vw" , marginLeft:"0.2vw" , borderRadius:"50%" , backgroundColor:"lightgrey"}} ><img className="ac" id="myImg" style={{marginTop:"-0.05vw",marginLeft:"-0.1vw",height:"2vw" , width:"2vw" , borderRadius:"50%"}}/></div>  
            <div style={{color:"#36434D" , marginTop:"-1.8vw" , marginLeft:"1vw" , fontWeight:"bold"}}>
               <p>{localStorage.getItem("Name")}</p>
            </div><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div style={{color:"#36434D" , marginTop:"-3.3vw" , marginLeft:"2.5vw" , fontSize:"0.75vw"}}>
              <p>{localStorage.getItem("Email")}</p>
            </div>
            </li>
            </div>
        </ul>
    </div>
    </div>
    </>
  );
}

export default Navbar;
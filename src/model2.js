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

export default function Model2() 
{

const sbdata=
{
  labels:["Sage Group" , "Shell" , "HSBC" ],
  datasets:[
    
    {
      label:"Dataset 1",
      data: [ 1 , 2 ,3 ],
      backgroundColor:" #EE6002",
      barThickness:11,
      barPercentage:10,
      categoryPercentage:1,
    },

    {
      label:"Dataset 2",
      data:[ 2 , 3 , 4],
      backgroundColor:"#26A69A",
      barThickness:10,
      barPercentage:10,
    },

  ],

};


const sbdata1=
{
  labels:["Sage Group" , "Shell" , "HSBC" , "Shell" , "HSBC" , "Sage Group" , "Shell" , "HSBC" , "Shell" , "HSBC" ],
  datasets:[
    
    {
      label:"Dataset 1",
      data: [ 1 , 2 ,3 , 4, 5 , 6 , 7 , 8 , 9 , 10],
      backgroundColor:" #EE6002",
      barThickness:11,
      barPercentage:10,
      categoryPercentage:1,
    },

    {
      label:"Dataset 2",
      data:[ 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11],
      backgroundColor:"#26A69A",
      barThickness:10,
      barPercentage:10,
    },

  ],

};



const sboptions = {

  scales:{
    x:{
      grid:{
        display:false,
      },

      ticks:{
        font:{
          size:6,
        }
      }
    },

    y:{

      display:false,
      grid:{
        display:false,
      },

      ticks:{
        font:{
          size:6,
        }
      }
    },

    y1:{

      display:true,
      position: 'right',

      grid:{
        display:false,
      },

      ticks:{
        font:{
          size:6,
        }
      }
    }
  },

  responsive: true,
  plugins:{
    legend:{
      display:false,
    },
    title:{
      display:false,
    },
  },
};


const doudata={
  labels:["1","2","3"],
  datasets:[{
    label:"Poll",
    data:[1 ,2 ,3],
    backgroundColor:["#7E3EE2" , "#0000ff" , "#9A7B4F" ],
  }]
  
  };

  
  const douoptions ={
    plugins:{
      legend:{
        display:false,
        position:"right",
        labels:{
          useBorderRadius:true,
          color:"#363740",
          usePointStyle:true,
          pointStyle:"circle",
          boxWidth:3,
          boxHeight:3,
        },
      },
    
      title:{
        display:true,
        text:'',
      },
    },
    
    };


    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

     const ldata = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          borderColor: '#EE6002',
          backgroundColor: '#EE6002',
          borderWidth:1,
        },
        {
          label: 'Dataset 2',
          data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          borderColor: '#26A69A',
          backgroundColor: '#26A69A',
          borderWidth:1,
        },

      ],
    };


    const options = {

      elements: {
        point:{
            radius: 0
        }
     },

      scales:{
        x:{

          grid:{
            display:false,
          },
    
          ticks:{
            callback: function(val, index) {  return index + "%"; },
            font:{
              size:6,
            }
          }
        },
    
        y:{
    
          display:false,
          grid:{
            display:false,
          },
    
          ticks:{
            font:{
              size:6,
            }
          }
        },
    
        y1:{
    
          display:true,
          position: 'right',
    
          grid:{
            display:true,
          },
    
          ticks:{
            font:{
              size:6,
            }
          }
        }
      },

      responsive: true,
      plugins: {
        legend: {
          display:false,
        },
        title: {
          display: false,
        },
      },
    };




    const doudata1={
      labels:["1","2","3"],
      datasets:[{
        label:"Poll",
        data:[1 ,2 ,3],
        backgroundColor:[ "#007F00" , "#FD956D" , " #F90000" ],
        borderColor:[ "#007F00" , "#FD956D" , " #F90000" ],
      }]
      
      };


      const textCenter = { id:'textCenter' , beforeDatasetsDraw( chart , args , pluginOptions)
      {
        const {ctx , data} = chart;

        ctx.save();
        ctx.font='bolder 10px sans-serif';
        ctx.fillStyle = 'red';
        ctx.textAlign = 'center';
        ctx.fillText(' R:A:G' , chart.getDatasetMeta(0).data[0].x , chart.getDatasetMeta(0).data[0].y-5 );
        ctx.fillText(' 190:286:90' , chart.getDatasetMeta(0).data[0].x , chart.getDatasetMeta(0).data[0].y+10 );
      }}

      const douoptions1 ={

        percentageInnerCutout: 1000,
        cutout:35,
      
        plugins:{
          legend:{
            display:false,
            position:"right",
            labels:{
              useBorderRadius:true,
              color:"#363740",
              usePointStyle:true,
              pointStyle:"circle",
              boxWidth:5,
              boxHeight:3,
            },
          },

          
        
          title:{
            display:true,
            text:'',
          },
        },
        
        };


        var startdate;
        var enddate;


        const [inputValue1, setInputValue1] = useState('')
        const [inputValue2, setInputValue2] = useState('')
        const [model1, setModel1] = useState([])
        const [model2, setModel2] = useState([])
        const [model3, setModel3] = useState([])
        const [model4, setModel4] = useState([])
        const [model5, setModel5] = useState([])
        const [model6, setModel6] = useState([])
        const [model7, setModel7] = useState([])


        
        const [ eu , setEu ] = useState({ new1:"" , new2:"" , new3:"" , new4:"" , new5:"" , new6:"" ,new7:"" });

        const [message , setMessage] = useState("");

        const id =0;
        const navigate = useNavigate();
    
    


        useEffect (()=>{
      
          const getUserData1 = async() =>{
            const reqData = await fetch("http://localhost:5001/api/model");
            const resData= await reqData.json();
            setModel1(resData[0]);
            setModel2(resData[1]);
            setModel3(resData[2]);
            setModel4(resData[3]);
            setModel5(resData[4]);
            setModel6(resData[5]);
            setModel7(resData[6]);
            console.log(resData[0]);
          }
      
          getUserData1();
          
      
        } , [message]);


        
        const [ green1 , setGreen1] = useState(false)
        const [ amber1 , setAmber1] = useState(false)
        const [ red1 , setRed1] = useState(false)

        const [ new1 , setNew1] = useState(false)

        const [ renewal1 , setRenewal1] = useState(false)

        const [ br1 , setBr1] = useState(false)
        const [ br2 , setBr2] = useState(false)
        const [ uw1 , setUw1] = useState(false)
        const [ uw2 , setUw2] = useState(false)

        const handleInput = value => setInputValue1(value)

        console.log(inputValue1);
        console.log(inputValue2);


        startdate = Moment(inputValue1).format("DD MMM YY");
        enddate = Moment(inputValue2).format("DD MMM YY");

        console.log(startdate);

        if( inputValue1 < "2023-03-31" && inputValue2 > "2023-03-01" )
        {
          document.getElementById("mydiv1").innerHTML = "2000";
        }

        function green()
        {
          setGreen1(true);
          if( green1 == true )
          {
            document.getElementById("green").className = "fa fa-square-o";
            document.getElementById("mydiv1").innerHTML = "200";
            setGreen1(false);
          }
          else
          {
              document.getElementById("green").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = "2,900"; 
          }

          
        }

        function amber()
        {

          setAmber1(true);
          if( amber1 == true )
          {
            document.getElementById("amber").className = "fa fa-square-o";
            document.getElementById("mydiv1").innerHTML = "2005";
            setAmber1(false);
          }
          else
          {
              document.getElementById("amber").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = "2,900"; 
          }

        }

        function red()
        {
          setRed1(true);
          if( red1 == true )
          {
            document.getElementById("red").className = "fa fa-square-o";
            document.getElementById("mydiv1").innerHTML = "170";
            setRed1(false);
          }
          else
          {
              document.getElementById("red").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = "2,900"; 
          }
        }


        function new11()
        {
          setNew1(true);
          if( new1 == true )
          {
            document.getElementById("new").className = "fa fa-square-o";
            document.getElementById("mydiv1").innerHTML = "170";
            setNew1(false);
          }
          else
          {
              document.getElementById("new").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = "2,900"; 
          }
        }


        function renewal11()
        {
          setRenewal1(true);
          if( renewal1 == true )
          {
            document.getElementById("renewal").className = "fa fa-square-o";
            document.getElementById("mydiv1").innerHTML = "170";
            setRenewal1(false);
          }
          else
          {
              document.getElementById("renewal").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = "2,900"; 
          }
        }

        function br11()
        {
          setBr1(true);
          if( br1 == true )
          {
            document.getElementById("br1").className = "fa fa-square-o";
            document.getElementById("mydiv1").innerHTML = "1170";
            setBr1(false);
          }
          else
          {
              document.getElementById("br1").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = "2,900"; 
          }
        }

        function br21()
        {
          setBr2(true);
          if( br2 == true )
          {
            document.getElementById("br2").className = "fa fa-square-o";
            document.getElementById("mydiv1").innerHTML = "11702";
            setBr2(false);
          }
          else
          {
              document.getElementById("br2").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = "2,900"; 
          }
        }


        function uw11()
        {
          setUw1(true);
          if( uw1 == true )
          {
            document.getElementById("uw1").className = "fa fa-square-o";
            document.getElementById("mydiv1").innerHTML = "1770";
            setUw1(false);
          }
          else
          {
              document.getElementById("uw1").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = "2,900"; 
          }
        }

        function uw21()
        {
          setUw2(true);
          if( uw2 == true )
          {
            document.getElementById("uw2").className = "fa fa-square-o";
            document.getElementById("mydiv1").innerHTML = "112";
            setUw2(false);
          }
          else
          {
              document.getElementById("uw2").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = "2,900"; 
          }
        }

        function loc()
        {
          document.getElementById("mydiv1").innerHTML = "112";
        }


        const queue2 = [
          {"id":1,"name":"Yogayata V","email":"Admin@thapar.com","password":"12345","mobile":7986258542,"product":"Cross-Sell","role":"Admin"},
          {"id":2,"name":"Rajni Verma","email":"Head_UW@thapar.com","password":"12345","mobile":8591223240,"product":"Cross-Sell","role":"Head_UW"},
          {"id":3,"name":"Davinder Verma","email":"UW@thapar.com","password":"12345","mobile":7986258542,"product":"Sub-Tri","role":"UW"},
          {"id":4,"name":"Varinder Singh","email":"Broker@thapar.com","password":"12345","mobile":7986258542,"product":"Cross-Sell","role":"Broker"},
          {"id":5,"name":"Gurdeep Singh","email":"Developer@thapar.com","password":"12345","mobile":7986258542,"product":"Bod","role":"Developer"}];

        const [name, setName] = useState('');


        const [open1, setOpen1] = useState(false);
        const [open2, setOpen2] = useState(false);
        const [open3, setOpen3] = useState(false);
        const [open4, setOpen4] = useState(false);
        const [open5, setOpen5] = useState(false);

        const [foundUsers, setFoundUsers] = useState(queue2);
    
    
        const filter = (e) => {
          const keyword = e.target.value;
      
          if (keyword !== '') {
            const results = queue2.filter((user) => {
              return user.name.toLowerCase().startsWith(keyword.toLowerCase());
              // Use the toLowerCase() method to make it case-insensitive
            });
            setFoundUsers(results);
          } else {
            setFoundUsers(queue2);
            // If the text field is empty, show all users
          }
      
          setName(keyword);
        };


        const [name1, setName1] = useState("");
        const [name2, setName2] = useState("");
        const [name3, setName3] = useState("");
        const [name4, setName4] = useState("");
        const [name5, setName5] = useState("");
        const [name6, setName6] = useState("");
        const [name7, setName7] = useState("");


        const handleSubmit = (event) => {
          event.preventDefault();
          alert(`The name you entered was: ${name}`)
        }


        var variable1 = model1.variable;
        var desci1 = model1.desci;
        var cur1 = model1.cur;
        var new2 = model1.new1;


        var variable2 = model2.variable;
        var desci2 = model2.desci;
        var cur2 = model2.cur;
        var new3 = model2.new1;

        var variable3 = model3.variable;
        var desci3 = model3.desci;
        var cur3 = model3.cur;
        var new4 = model3.new1;

        var variable4 = model4.variable;
        var desci4 = model4.desci;
        var cur4 = model4.cur;
        var new5 = model4.new1;

        var variable5 = model5.variable;
        var desci5 = model5.desci;
        var cur5 = model5.cur;
        var new6 = model5.new1;

        var variable6 = model6.variable;
        var desci6 = model6.desci;
        var cur6 = model6.cur;
        var new7 = model6.new1;

        var variable7 = model7.variable;
        var desci7 = model7.desci;
        var cur7 = model7.cur;
        var new8 = model7.new1;

        const [values,set_values] = useState({ new1:"" , new2:"" , new3:"" , new4:"" , new5:"" , new6:"" ,new7:"" })

        const [total1,set_total1]=useState(0);

        const calc_total = (newValues) => {
        const { new1 , new2 , new3 , new4 , new5 , new6 , new7 } = newValues;
        const newTotal = parseInt(new1) + parseInt(new2) + parseInt(new3) + parseInt(new4) + parseInt(new5) + parseInt(new6) + parseInt(new7)
        set_total1(newTotal)
        }


        console.log(total1);

        const handleInput1 = (e) =>
        {
            setEu({ ...eu , [e.target.name]:e.target.value});
            const newValues = { ...eu , [e.target.name]:e.target.value } 
            set_values(newValues)
            calc_total(newValues) 
        }

        const total = eu.new1 + eu.new2 + eu.new3 + eu.new4 + eu.new5 + eu.new6 + eu.new7;
        console.log(total);

        const handleUpdate = async(e) =>
        {
            e.preventDefault();
            const editinval = { new1:eu.new1 , new2:eu.new2 , new3:eu.new3 , new4:eu.new4 , new5:eu.new5 , new6:eu.new6 , new7:eu.new7 }
            console.log(editinval);
    
    
            let res = await fetch(`http://localhost:5001/api/updateEntrymodel` , {
              method:"PUT" ,
              headers:{"content-type":"application/json"},
              body:  JSON.stringify(editinval)
            });
    
    
            let responsejson = await res.json();

            toast.success("Updated!!!!");
            
            if( res.status === 200 )
            {
    
                setMessage(responsejson.success);
                setTimeout(()=>
                {
                    navigate("/model2");
                } , 2000)
                
            }
            else
            {
                setMessage(" Some Error Occured ");
            }
    
        }

        const [isValid, setValid] = useState(true);

        const validate = () => {
      
          if( total1 == 100 )
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
        }, [ isValid , total1 ]);


  return (
    <div>
      <Navbar />

      <ToastContainer/>


      <div style={{display:"flex"}}>
      <Form onSubmit={handleUpdate}>
        
        <div style={{border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"14.6vw" , height:"2.7vw" , width:"85.3vw"}}>

        <p style={{height:"2.5vw",marginLeft:"20vw" , paddingTop:"0.2vw"  , fontStyle: "normal", fontWeight: "bold" ,fontSize: "1.5vw"  , fontStyle: "normal", fontWeight: "bold"  , color: "#FB4E0B" , width:"40vw"}}>Model Logic and Turning</p>

        
        <div style={{display:"flex"}}>
        <Card style={{border:"1px solid rgba(0,0,0,0.15)" , width:"75vw" , marginLeft:"5vw" , height:"33vw" , marginTop:"3vw" , paddingRight:"1vw" , paddingLeft:"1vw"}}>
        <p style={{width:"73vw",fontWeight: "bold"  , color: "#FB4E0B",paddingLeft:"1vw", fontStyle: "normal", fontWeight: "bold" ,paddingTop:"0.3vw",marginLeft:"0vw" , border:"1px solid rgba(0,0,0,0.15)" , marginTop:"1vw" , marginRight:"1vw" , height:"2vw" , textAlign:"left"}}>Update Priority Order by Rule Type</p>
            <table style={{border:"1px solid rgba(0,0,0,0.15)" , marginTop:"-1vw" ,paddingBottom:"1vw"}}>
                <thead >
                    <tr>
                        <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" , fontWeight:"bold"}}>▢</td>
                        <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" , fontWeight:"bold"}}>Variables and Features</td>
                        <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" , fontWeight:"bold"}}>Description</td>
                        <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" , fontWeight:"bold"}}>Current Weight</td>
                        <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" , fontWeight:"bold"}}>New Weights</td>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>▢</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{variable1}</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{desci1}</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{cur1}%</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" , marginRight:"1vw"}}>< Form.Control name="new1" value={ eu.new1 } onChange={handleInput1} type="text" placeholder="xx%" style={{marginRight:"1vw"}} /></td>
                  </tr>

                  <tr>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>▢</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{variable2}</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{desci2}</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{cur2}%</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" , marginRight:"1vw"}}>< Form.Control  name="new2" value={ eu.new2 } onChange={handleInput1}  type="text" placeholder="xx%" style={{marginRight:"1vw"}} /></td>
                  </tr>

                  <tr>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>▢</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{variable3}</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{desci3}</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{cur3}%</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" , marginRight:"1vw"}}>< Form.Control  name="new3" value={ eu.new3 } onChange={handleInput1}  type="text" placeholder="xx%" style={{marginRight:"1vw"}} /></td>
                  </tr>


                  <tr>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>▢</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{variable4}</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{desci4}</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{cur4}%</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" , marginRight:"1vw"}}>< Form.Control  name="new4" value={ eu.new4 } onChange={handleInput1}  type="text" placeholder="xx%" style={{marginRight:"1vw"}} /></td>
                  </tr>

                  <tr>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>▢</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{variable5}</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{desci5}</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{cur5}%</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" , marginRight:"1vw"}}>< Form.Control  name="new5" value={ eu.new5 } onChange={handleInput1}  type="text" placeholder="xx%" style={{marginRight:"1vw"}} /></td>
                  </tr>

                  <tr>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>▢</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{variable6}</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{desci6}</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{cur6}%</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" , marginRight:"1vw"}}>< Form.Control  name="new6" value={ eu.new6 } onChange={handleInput1}  type="text" placeholder="xx%" style={{marginRight:"1vw"}} /></td>
                  </tr>

                  <tr>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>▢</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{variable7}</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{desci7}</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>{cur7}%</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" , marginRight:"1vw"}}>< Form.Control name="new7" value={ eu.new7 } onChange={handleInput1} type="text" placeholder="xx%" style={{marginRight:"1vw"}} /></td>
                  </tr>

                  <tr>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw"  , color:"grey" }}>▢</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>Total</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}>Total</td>
                  <td style={{paddingTop:"1vw" , paddingLeft:"0.5vw" , color:"grey" }}></td>
                  <td style={{paddingTop:"1vw" , color:"grey" }}><Button variant="white" style={{ marginBottom:"1vw" , color: total1 == 100 ? "green" : "red" , borderColor:"rgba(0 , 0 , 0 , 0.15)" , height:"2vw" , width:"14vw" }} id="total">{total1}</Button></td>
                  </tr>
                </tbody>
            </table>
        </Card>

        {/* <Card style={{border:"1px solid rgba(0,0,0,0.15)" , height:"11vw" , marginLeft:"3vw" , marginTop:"10vw" , width:"15vw"}}> 

        <Button style={{marginTop:"1vw" , marginLeft:"1vw" , marginRight:"1vw" , backgroundColor:"rgba(255 , 0 , 0 , 0.15)" , color:"grey" , border:"0px"}}>Save as Weightage 1</Button>
        <Button style={{marginTop:"1vw" , marginLeft:"1vw" , marginRight:"1vw" , backgroundColor:"rgba(255 , 0 , 0 , 0.15)" , color:"grey" , border:"0px"}}>Save as Weightage 2</Button>
        <Button style={{marginTop:"1vw" , marginLeft:"1vw" , marginRight:"1vw" , backgroundColor:"rgba(0 , 255 , 0 , 0.15)" , color:"grey" , border:"0px"}}>Current Weightage </Button>      
        </Card> */}

        </div>

        <div style={{display:"flex"}}><Button type="submit"  disabled={!isValid}  style={{marginTop:"3vw" , marginLeft:"40vw" , marginRight:"1vw" , backgroundColor:"rgba(255 , 0 , 0 , 0.15)" , color:"grey" , border:"0px"}} id="update1" >Update with Weightage</Button></div>
                            
      </div>

      </Form>



      </div>

      
    </div>
  )
}

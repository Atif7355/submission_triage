import React from 'react'
import Navbar from './Navbar.js'

import './Navbar.css'

import { useState , useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from 'react-bootstrap/Card';
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

export default function Model() 
{

const [overdata , setOverData] = useState([]);

const [filterg , setFilterg] = useState([]);


useEffect (()=>{

  const getUserData = async() =>{
    const reqData = await fetch(`http://localhost:5001/api/modelf`);
    const resData= await reqData.json();
    setOverData(resData);
    console.log(resData);
  }

  const getFilterGData = async() =>{
    const reqData = await fetch(`http://localhost:5001/api/filter2`);
    const resData= await reqData.json();
    setFilterg(resData);
    console.log(resData);
  }

  getFilterGData(); 
  getUserData();      

} , []);

function rem()
{
  localStorage.removeItem("Email");
  localStorage.removeItem("Name");
}

let history = useNavigate();

function gob()
{
  history(-1);
}



var no_sum;
var closed;
var no_bind;
var quote_rate1;
var quote_rate2;
var review_rate1;
var review_rate2;
var review_rateg1;
var review_rateg2;
var review_rater1;
var review_rater2;
var g1;
var g2;
var g3;
var g4;

var arrow1;
var arrow2;
var arrow3;
var arrow4;

var h1;
var h2;
var h3;
var h4;
var h5;
var h6;
var h7;
var h8;
var h9;
var h10;
var h11;
var h12;
var h13;
var h14;
var h15;
var h16;
var h17;
var h18;
var h19;
var h20;

var l1;
var l2;
var l3;
var l4;
var l5;
var l6;
var l7;
var l8;
var l9;
var l10;
var l11;
var l12;

var l13;
var l14;
var l15;
var l16;
var l17;
var l18;
var l19;
var l20;
var l21;
var l22;
var l23;
var l24;



  overdata.map(data=>
  {

    no_sum = data.no_sum;
    closed = data.closed;
    no_bind = data.no_bind;
    quote_rate1 =  data.quote_rate1;
    quote_rate2 =  data.quote_rate2;
    review_rate1 =  data.review_rate1;
    review_rate2 =  data.review_rate2;
    review_rateg1 =  data.review_rateg1;
    review_rateg2 =  data.review_rateg2;
    review_rater1 =  data.review_rater1;
    review_rater2 =  data.review_rater2;
    g1 =  data.g1;
    g2 =  data.g2;
    g3 =  data.g3;
    g4 =  data.g4;

    h1 =  data.h1;
    h2 =  data.h2;
    h3 =  data.h3;
    h4 =  data.h4;
    h5 =  data.h5;
    h6 =  data.h6;
    h7 =  data.h7;
    h8 =  data.h8;
    h9 =  data.h9;
    h10 =  data.h10;
    h11 =  data.h11;
    h12 =  data.h12;
    h13 =  data.h13;
    h14 =  data.h14;
    h15 =  data.h15;
    h16 =  data.h16;
    h17 =  data.h17;
    h18 =  data.h18;
    h19 =  data.h19;
    h20 =  data.h20;

    l1 = data.l1;
    l2 = data.l2;
    l3 = data.l3;
    l4 = data.l4;
    l5 = data.l5;
    l6 = data.l6;
    l7 = data.l7;
    l8 = data.l8;
    l9 = data.l9;
    l10 = data.l10;
    l11 = data.l11;
    l12 = data.l12;

    l13 = data.l13;
    l14 = data.l14;
    l15 = data.l15;
    l16 = data.l16;
    l17 = data.l17;
    l18 = data.l18;
    l19 = data.l19;
    l20 = data.l20;
    l21 = data.l21;
    l22 = data.l22;
    l23 = data.l23;
    l24 = data.l24;



   
  });

  if( g1 < 0 )
  {
    arrow1 = "↓";
  }
  else
  {
    arrow1 = "↑";
  }

  if( g2 < 0 )
  {
    arrow2 = "↓";
  }
  else
  {
    arrow2 = "↑";
  }

  if( g3 < 0 )
  {
    arrow3 = "↓";
  }
  else
  {
    arrow3 = "↑";
  }

  if( g4 < 0 )
  {
    arrow4 = "↓";
  }
  else
  {
    arrow4 = "↑";
  }


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
  labels:["Sage Group" , "Shell" , "HSBC" , "Smith" , "Walls" , "Kapoor Group" , "Tomas Wals" , "Gracia Pvt" , "Oil Rein" , "Indiviual Persona" ],
  datasets:[
    
    {
      label:"Dataset 1",
      data: [ h1 , h2 , h3 , h4 , h5 , h6 , h7 , h8 , h9 , h10],
      backgroundColor:" #EE6002",
      barThickness:11,
      barPercentage:10,
      categoryPercentage:1,
    },

    {
      label:"Dataset 2",
      data:[ h11 , h12 , h13 , h14 , h15 , h16 , h17 , h18 , h19 , h20 ],
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
          size:7,
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


    const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

     const ldata = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [ l1 , l2 , l3 , l4 , l5 , l6 ],
          borderColor: '#EE6002',
          backgroundColor: '#EE6002',
          borderWidth:1,
        },
        {
          label: 'Dataset 2',
          data: [ l13 , l14 , l15 , l16 , l17 , l8 ],
          borderColor: '#26A69A',
          backgroundColor: '#26A69A',
          borderWidth:1,
        },

      ],
    };

    const ldata1 = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [ l7 , l8 , l9 , l10 , l11 , l12 ],
          borderColor: '#EE6002',
          backgroundColor: '#EE6002',
          borderWidth:1,
        },
        {
          label: 'Dataset 2',
          data: [ l19 , l20 , l21 , l22 , l23 , l24 ],
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
              size:7,
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
              size:7,
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

        var gno_sum;
        var gclosed;
        var gno_bind;
        var gquote_rate1;
        var gquote_rate2;
        var greview_rate1;
        var greview_rate2;
        var greview_rateg1;
        var greview_rateg2;
        var greview_rater1;
        var greview_rater2;
        var gg1;
        var gg2;
        var gg3;
        var gg4;

        function green()
        {

          
          filterg.map(data=>{

            gno_sum = data.gno_sum;
            gclosed = data.gclosed;
            gno_bind = data.gno_binds;
            gquote_rate1 = data.gquote_rate1;
            gquote_rate2 = data.gquote_rate2;
            greview_rate1 = data.greview_rate1;
            greview_rate2 = data.greview_rate2;
            greview_rateg1 = data.greview_rateg1;
            greview_rateg2 = data.greview_rateg2;
            greview_rater1 = data.greview_rater1;
            greview_rater2 = data.greview_rater2;
            gg1 = data.gg1;
            gg2 = data.gg2;
            gg3 = data.gg3;
            gg4 = data.gg4;
          })

          setGreen1(true);
          if( green1 == true )
          {
            document.getElementById("green").className = "fa fa-square-o";
            

            document.getElementById("mydiv1").innerHTML = gno_sum;
            document.getElementById("mydiv2").innerHTML = gclosed;
            document.getElementById("mydiv3").innerHTML = gno_bind;
            document.getElementById("mydiv4").innerHTML = gquote_rate1+"%:"+gquote_rate2+"%";
            document.getElementById("mydiv5").innerHTML = greview_rate1+"%:"+greview_rate2+"%";
            document.getElementById("mydiv6").innerHTML = greview_rateg1+"%:"+greview_rateg2+"%";
            document.getElementById("mydiv7").innerHTML = greview_rater1+"%:"+greview_rater2+"%";

            setGreen1(false);
          }
          else
          {
              document.getElementById("green").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = no_sum;
              document.getElementById("mydiv2").innerHTML = closed;
              document.getElementById("mydiv3").innerHTML = no_bind;
              document.getElementById("mydiv4").innerHTML = quote_rate1+"%:"+quote_rate2+"%";
              document.getElementById("mydiv5").innerHTML = review_rate1+"%:"+review_rate2+"%";
              document.getElementById("mydiv6").innerHTML = review_rateg1+"%:"+review_rateg2+"%";
              document.getElementById("mydiv7").innerHTML = review_rater1+"%:"+review_rater2+"%";
          }

          
        }

        function amber()
        {

          filterg.map(data=>{

            gno_sum = data.ano_sum;
            gclosed = data.aclosed;
            gno_bind = data.abind_rate;
            gquote_rate1 = data.aquote_rate1;
            gquote_rate2 = data.aquote_rate2;
            greview_rate1 = data.areview_rate1;
            greview_rate2 = data.areview_rate2;
            greview_rateg1 = data.areview_rateg1;
            greview_rateg2 = data.areview_rateg2;
            greview_rater1 = data.areview_rater1;
            greview_rater2 = data.areview_rater2;
          })

          setAmber1(true);
          if( amber1 == true )
          {
            document.getElementById("amber").className = "fa fa-square-o";

            
            document.getElementById("mydiv1").innerHTML = gno_sum;
            document.getElementById("mydiv2").innerHTML = gclosed;
            document.getElementById("mydiv3").innerHTML = gno_bind;
            document.getElementById("mydiv4").innerHTML = gquote_rate1+"%:"+gquote_rate2+"%";
            document.getElementById("mydiv5").innerHTML = greview_rate1+"%:"+greview_rate2+"%";
            document.getElementById("mydiv6").innerHTML = greview_rateg1+"%:"+greview_rateg2+"%";
            document.getElementById("mydiv7").innerHTML = greview_rater1+"%:"+greview_rater2+"%";

            setAmber1(false);
          }
          else
          {
              document.getElementById("amber").className = "fa fa-square";
              document.getElementById("green").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = no_sum;
              document.getElementById("mydiv2").innerHTML = closed;
              document.getElementById("mydiv3").innerHTML = no_bind;
              document.getElementById("mydiv4").innerHTML = quote_rate1+"%:"+quote_rate2+"%";
              document.getElementById("mydiv5").innerHTML = review_rate1+"%:"+review_rate2+"%";
              document.getElementById("mydiv6").innerHTML = review_rateg1+"%:"+review_rateg2+"%";
              document.getElementById("mydiv7").innerHTML = review_rater1+"%:"+review_rater2+"%"; 
          }

        }

        function red()
        {
          filterg.map(data=>{

            gno_sum = data.rno_sum;
            gclosed = data.rclosed;
            gno_bind = data.rno_bind;
            gquote_rate1 = data.rquote_rate1;
            gquote_rate2 = data.rquote_rate2;
            greview_rate1 = data.rreview_rate1;
            greview_rate2 = data.rreview_rate2;
            greview_rateg1 = data.rreview_rateg1;
            greview_rateg2 = data.rreview_rateg2;
            greview_rater1 = data.rreview_rater1;
            greview_rater2 = data.rreview_rater2;
          })

          setRed1(true);
          if( red1 == true )
          {
            document.getElementById("red").className = "fa fa-square-o";

            
            document.getElementById("mydiv1").innerHTML = gno_sum;
            document.getElementById("mydiv2").innerHTML = gclosed;
            document.getElementById("mydiv3").innerHTML = gno_bind;
            document.getElementById("mydiv4").innerHTML = gquote_rate1+"%:"+gquote_rate2+"%";
            document.getElementById("mydiv5").innerHTML = greview_rate1+"%:"+greview_rate2+"%";
            document.getElementById("mydiv6").innerHTML = greview_rateg1+"%:"+greview_rateg2+"%";
            document.getElementById("mydiv7").innerHTML = greview_rater1+"%:"+greview_rater2+"%";

            setRed1(false);
          }
          else
          {
              document.getElementById("red").className = "fa fa-square";
              document.getElementById("green").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = no_sum;
              document.getElementById("mydiv2").innerHTML = closed;
              document.getElementById("mydiv3").innerHTML = no_bind;
              document.getElementById("mydiv4").innerHTML = quote_rate1+"%:"+quote_rate2+"%";
              document.getElementById("mydiv5").innerHTML = review_rate1+"%:"+review_rate2+"%";
              document.getElementById("mydiv6").innerHTML = review_rateg1+"%:"+review_rateg2+"%";
              document.getElementById("mydiv7").innerHTML = review_rater1+"%:"+review_rater2+"%"; 
          }
        }


        function new11()
        {

          filterg.map(data=>{

            gno_sum = data.nno_sum;
            gclosed = data.nclosed;
            gno_bind = data.nno_bind;
            gquote_rate1 = data.nquote_rate1;
            gquote_rate2 = data.nquote_rate2;
            greview_rate1 = data.nreview_rate1;
            greview_rate2 = data.nreview_rate2;
            greview_rateg1 = data.nreview_rateg1;
            greview_rateg2 = data.nreview_rateg2;
            greview_rater1 = data.nreview_rater1;
            greview_rater2 = data.nreview_rater2;
          })

          setNew1(true);
          if( new1 == true )
          {
            document.getElementById("new").className = "fa fa-square-o";

            
            document.getElementById("mydiv1").innerHTML = gno_sum;
            document.getElementById("mydiv2").innerHTML = gclosed;
            document.getElementById("mydiv3").innerHTML = gno_bind;
            document.getElementById("mydiv4").innerHTML = gquote_rate1+"%:"+gquote_rate2+"%";
            document.getElementById("mydiv5").innerHTML = greview_rate1+"%:"+greview_rate2+"%";
            document.getElementById("mydiv6").innerHTML = greview_rateg1+"%:"+greview_rateg2+"%";
            document.getElementById("mydiv7").innerHTML = greview_rater1+"%:"+greview_rater2+"%";

            setNew1(false);
          }
          else
          {
              document.getElementById("new").className = "fa fa-square";
              document.getElementById("green").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = no_sum;
              document.getElementById("mydiv2").innerHTML = closed;
              document.getElementById("mydiv3").innerHTML = no_bind;
              document.getElementById("mydiv4").innerHTML = quote_rate1+"%:"+quote_rate2+"%";
              document.getElementById("mydiv5").innerHTML = review_rate1+"%:"+review_rate2+"%";
              document.getElementById("mydiv6").innerHTML = review_rateg1+"%:"+review_rateg2+"%";
              document.getElementById("mydiv7").innerHTML = review_rater1+"%:"+review_rater2+"%";
          }
        }


        function renewal11()
        {

          filterg.map(data=>{

            gno_sum = data.reno_sum;
            gclosed = data.reclosed;
            gno_bind = data.reno_bind;
            gquote_rate1 = data.requote_rate1;
            gquote_rate2 = data.requote_rate2;
            greview_rate1 = data.rereview_rate1;
            greview_rate2 = data.rereview_rate2;
            greview_rateg1 = data.rereview_rateg1;
            greview_rateg2 = data.rereview_rateg2;
            greview_rater1 = data.rereview_rater1;
            greview_rater2 = data.rereview_rater2;
          })

          setRenewal1(true);
          if( renewal1 == true )
          {
            document.getElementById("renewal").className = "fa fa-square-o";
            
            document.getElementById("mydiv1").innerHTML = gno_sum;
            document.getElementById("mydiv2").innerHTML = gclosed;
            document.getElementById("mydiv3").innerHTML = gno_bind;
            document.getElementById("mydiv4").innerHTML = gquote_rate1+"%:"+gquote_rate2+"%";
            document.getElementById("mydiv5").innerHTML = greview_rate1+"%:"+greview_rate2+"%";
            document.getElementById("mydiv6").innerHTML = greview_rateg1+"%:"+greview_rateg2+"%";
            document.getElementById("mydiv7").innerHTML = greview_rater1+"%:"+greview_rater2+"%";

            setRenewal1(false);
          }
          else
          {
              document.getElementById("renewal").className = "fa fa-square";
              document.getElementById("green").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = no_sum;
              document.getElementById("mydiv2").innerHTML = closed;
              document.getElementById("mydiv3").innerHTML = no_bind;
              document.getElementById("mydiv4").innerHTML = quote_rate1+"%:"+quote_rate2+"%";
              document.getElementById("mydiv5").innerHTML = review_rate1+"%:"+review_rate2+"%";
              document.getElementById("mydiv6").innerHTML = review_rateg1+"%:"+review_rateg2+"%";
              document.getElementById("mydiv7").innerHTML = review_rater1+"%:"+review_rater2+"%";
          }
        }

        function br11()
        {
          filterg.map(data=>{

            gno_sum = data.br1no_sum;
            gclosed = data.br1closed;
            gno_bind = data.br1no_bind;
            gquote_rate1 = data.br1quote_rate1;
            gquote_rate2 = data.br1quote_rate2;
            greview_rate1 = data.br1review_rate1;
            greview_rate2 = data.br1review_rate2;
            greview_rateg1 = data.br1review_rateg1;
            greview_rateg2 = data.br1review_rateg2;
            greview_rater1 = data.br1review_rater1;
            greview_rater2 = data.br1review_rater2;
          })

          setBr1(true);
          if( br1 == true )
          {
            document.getElementById("br1").className = "fa fa-square-o";

            
            document.getElementById("mydiv1").innerHTML = gno_sum;
            document.getElementById("mydiv2").innerHTML = gclosed;
            document.getElementById("mydiv3").innerHTML = gno_bind;
            document.getElementById("mydiv4").innerHTML = gquote_rate1+"%:"+gquote_rate2+"%";
            document.getElementById("mydiv5").innerHTML = greview_rate1+"%:"+greview_rate2+"%";
            document.getElementById("mydiv6").innerHTML = greview_rateg1+"%:"+greview_rateg2+"%";
            document.getElementById("mydiv7").innerHTML = greview_rater1+"%:"+greview_rater2+"%";

            setBr1(false);
          }
          else
          {
              document.getElementById("br1").className = "fa fa-square";
              document.getElementById("green").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = no_sum;
              document.getElementById("mydiv2").innerHTML = closed;
              document.getElementById("mydiv3").innerHTML = no_bind;
              document.getElementById("mydiv4").innerHTML = quote_rate1+"%:"+quote_rate2+"%";
              document.getElementById("mydiv5").innerHTML = review_rate1+"%:"+review_rate2+"%";
              document.getElementById("mydiv6").innerHTML = review_rateg1+"%:"+review_rateg2+"%";
              document.getElementById("mydiv7").innerHTML = review_rater1+"%:"+review_rater2+"%";
          }
        }

        function br21()
        {

          filterg.map(data=>{

            gno_sum = data.br2no_sum;
            gclosed = data.br2closed;
            gno_bind = data.br2no_bind;
            gquote_rate1 = data.br2quote_rate1;
            gquote_rate2 = data.br2quote_rate2;
            greview_rate1 = data.br2review_rate1;
            greview_rate2 = data.br2review_rate2;
            greview_rateg1 = data.br2review_rateg1;
            greview_rateg2 = data.br2review_rateg2;
            greview_rater1 = data.br2review_rater1;
            greview_rater2 = data.br2review_rater2;
          })
          
          setBr2(true);
          if( br2 == true )
          {
            document.getElementById("br2").className = "fa fa-square-o";

            
            document.getElementById("mydiv1").innerHTML = gno_sum;
            document.getElementById("mydiv2").innerHTML = gclosed;
            document.getElementById("mydiv3").innerHTML = gno_bind;
            document.getElementById("mydiv4").innerHTML = gquote_rate1+"%:"+gquote_rate2+"%";
            document.getElementById("mydiv5").innerHTML = greview_rate1+"%:"+greview_rate2+"%";
            document.getElementById("mydiv6").innerHTML = greview_rateg1+"%:"+greview_rateg2+"%";
            document.getElementById("mydiv7").innerHTML = greview_rater1+"%:"+greview_rater2+"%";

            setBr2(false);
          }
          else
          {
              document.getElementById("br2").className = "fa fa-square";
              document.getElementById("green").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = no_sum;
              document.getElementById("mydiv2").innerHTML = closed;
              document.getElementById("mydiv3").innerHTML = no_bind;
              document.getElementById("mydiv4").innerHTML = quote_rate1+"%:"+quote_rate2+"%";
              document.getElementById("mydiv5").innerHTML = review_rate1+"%:"+review_rate2+"%";
              document.getElementById("mydiv6").innerHTML = review_rateg1+"%:"+review_rateg2+"%";
              document.getElementById("mydiv7").innerHTML = review_rater1+"%:"+review_rater2+"%";
          }
        }


        function uw11()
        {
          filterg.map(data=>{

            gno_sum = data.uw1no_sum;
            gclosed = data.uw1closed;
            gno_bind = data.uw1no_bind;
            gquote_rate1 = data.uw1quote_rate1;
            gquote_rate2 = data.uw1quote_rate2;
            greview_rate1 = data.uw1review_rate1;
            greview_rate2 = data.uw1review_rate2;
            greview_rateg1 = data.uw1review_rateg1;
            greview_rateg2 = data.uw1review_rateg2;
            greview_rater1 = data.uw1review_rater1;
            greview_rater2 = data.uw1review_rater2;
          })
          setUw1(true);
          if( uw1 == true )
          {
            document.getElementById("uw1").className = "fa fa-square-o";

            
            document.getElementById("mydiv1").innerHTML = gno_sum;
            document.getElementById("mydiv2").innerHTML = gclosed;
            document.getElementById("mydiv3").innerHTML = gno_bind;
            document.getElementById("mydiv4").innerHTML = gquote_rate1+"%:"+gquote_rate2+"%";
            document.getElementById("mydiv5").innerHTML = greview_rate1+"%:"+greview_rate2+"%";
            document.getElementById("mydiv6").innerHTML = greview_rateg1+"%:"+greview_rateg2+"%";
            document.getElementById("mydiv7").innerHTML = greview_rater1+"%:"+greview_rater2+"%";

            setUw1(false);
          }
          else
          {
              document.getElementById("uw1").className = "fa fa-square";
              document.getElementById("green").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = no_sum;
              document.getElementById("mydiv2").innerHTML = closed;
              document.getElementById("mydiv3").innerHTML = no_bind;
              document.getElementById("mydiv4").innerHTML = quote_rate1+"%:"+quote_rate2+"%";
              document.getElementById("mydiv5").innerHTML = review_rate1+"%:"+review_rate2+"%";
              document.getElementById("mydiv6").innerHTML = review_rateg1+"%:"+review_rateg2+"%";
              document.getElementById("mydiv7").innerHTML = review_rater1+"%:"+review_rater2+"%";
          }
        }

        function uw21()
        {

          filterg.map(data=>{

            gno_sum = data.uw2no_sum;
            gclosed = data.uw2closed;
            gno_bind = data.uw2no_bind;
            gquote_rate1 = data.uw2quote_rate1;
            gquote_rate2 = data.uw2quote_rate2;
            greview_rate1 = data.uw2review_rate1;
            greview_rate2 = data.uw2review_rate2;
            greview_rateg1 = data.uw2review_rateg1;
            greview_rateg2 = data.uw2review_rateg2;
            greview_rater1 = data.uw2review_rater1;
            greview_rater2 = data.uw2review_rater2;
          })
          
          setUw2(true);
          if( uw2 == true )
          {
            document.getElementById("uw2").className = "fa fa-square-o";

            
            document.getElementById("mydiv1").innerHTML = gno_sum;
            document.getElementById("mydiv2").innerHTML = gclosed;
            document.getElementById("mydiv3").innerHTML = gno_bind;
            document.getElementById("mydiv4").innerHTML = gquote_rate1+"%:"+gquote_rate2+"%";
            document.getElementById("mydiv5").innerHTML = greview_rate1+"%:"+greview_rate2+"%";
            document.getElementById("mydiv6").innerHTML = greview_rateg1+"%:"+greview_rateg2+"%";
            document.getElementById("mydiv7").innerHTML = greview_rater1+"%:"+greview_rater2+"%";

            setUw2(false);
          }
          else
          {
              document.getElementById("uw2").className = "fa fa-square";
              document.getElementById("green").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = no_sum;
              document.getElementById("mydiv2").innerHTML = closed;
              document.getElementById("mydiv3").innerHTML = no_bind;
              document.getElementById("mydiv4").innerHTML = quote_rate1+"%:"+quote_rate2+"%";
              document.getElementById("mydiv5").innerHTML = review_rate1+"%:"+review_rate2+"%";
              document.getElementById("mydiv6").innerHTML = review_rateg1+"%:"+review_rateg2+"%";
              document.getElementById("mydiv7").innerHTML = review_rater1+"%:"+review_rater2+"%";
          }
        }

        function loc()
        {

          filterg.map(data=>{

            gno_sum = data.lno_sum;
            gclosed = data.lclosed;
            gno_bind = data.lno_bind;
            gquote_rate1 = data.lquote_rate1;
            gquote_rate2 = data.lquote_rate2;
            greview_rate1 = data.lreview_rate1;
            greview_rate2 = data.lreview_rate2;
            greview_rateg1 = data.lreview_rateg1;
            greview_rateg2 = data.lreview_rateg2;
            greview_rater1 = data.lreview_rater1;
            greview_rater2 = data.lreview_rater2;
          })

          
          document.getElementById("mydiv1").innerHTML = gno_sum;
          document.getElementById("mydiv2").innerHTML = gclosed;
          document.getElementById("mydiv3").innerHTML = gno_bind;
          document.getElementById("mydiv4").innerHTML = gquote_rate1+"%:"+gquote_rate2+"%";
          document.getElementById("mydiv5").innerHTML = greview_rate1+"%:"+greview_rate2+"%";
          document.getElementById("mydiv6").innerHTML = greview_rateg1+"%:"+greview_rateg2+"%";
          document.getElementById("mydiv7").innerHTML = greview_rater1+"%:"+greview_rater2+"%";

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


        
        function pr()
        {

          filterg.map(data=>{

            gno_sum = data.pno_sum;
            gclosed = data.pclosed;
            gno_bind = data.pno_bind;
            gquote_rate1 = data.pquote_rate1;
            gquote_rate2 = data.pquote_rate2;
            greview_rate1 = data.preview_rate1;
            greview_rate2 = data.preview_rate2;
            greview_rateg1 = data.preview_rateg1;
            greview_rateg2 = data.preview_rateg2;
            greview_rater1 = data.preview_rater1;
            greview_rater2 = data.preview_rater2;
          })

          
          document.getElementById("mydiv1").innerHTML = gno_sum;
          document.getElementById("mydiv2").innerHTML = gclosed;
          document.getElementById("mydiv3").innerHTML = gno_bind;
          document.getElementById("mydiv4").innerHTML = gquote_rate1+"%:"+gquote_rate2+"%";
          document.getElementById("mydiv5").innerHTML = greview_rate1+"%:"+greview_rate2+"%";
          document.getElementById("mydiv6").innerHTML = greview_rateg1+"%:"+greview_rateg2+"%";
          document.getElementById("mydiv7").innerHTML = greview_rater1+"%:"+greview_rater2+"%";
          
        }

        function ocu()
        {

          filterg.map(data=>{

            gno_sum = data.ono_sum;
            gclosed = data.oclosed;
            gno_bind = data.ono_bind;
            gquote_rate1 = data.oquote_rate1;
            gquote_rate2 = data.oquote_rate2;
            greview_rate1 = data.oreview_rate1;
            greview_rate2 = data.oreview_rate2;
            greview_rateg1 = data.oreview_rateg1;
            greview_rateg2 = data.oreview_rateg2;
            greview_rater1 = data.oreview_rater1;
            greview_rater2 = data.oreview_rater2;
          })

          
          document.getElementById("mydiv1").innerHTML = gno_sum;
          document.getElementById("mydiv2").innerHTML = gclosed;
          document.getElementById("mydiv3").innerHTML = gno_bind;
          document.getElementById("mydiv4").innerHTML = gquote_rate1+"%:"+gquote_rate2+"%";
          document.getElementById("mydiv5").innerHTML = greview_rate1+"%:"+greview_rate2+"%";
          document.getElementById("mydiv6").innerHTML = greview_rateg1+"%:"+greview_rateg2+"%";
          document.getElementById("mydiv7").innerHTML = greview_rater1+"%:"+greview_rater2+"%";
          
        }




        

  return (
    <div>
      <Navbar />

      <div style={{display:"flex"}}>
        
        <div style={{border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"14.6vw" , height:"2.7vw" , width:"69vw"}}>

        <p style={{height:"2.5vw",marginLeft:"13vw" , paddingTop:"0.2vw"  , fontStyle: "normal", fontWeight: "bold" ,fontSize: "1.5vw"  , fontStyle: "normal", fontWeight: "bold"  , color: "#FB4E0B" , width:"40vw"}}>Overview of Model Performance</p>

        {/* <div style={{display:"flex" ,border:"1px solid rgba(0,0,0,0.15)" , marginTop:"-1vw" , height:"4vw" }}>
        <p style={{ marginTop:"0.5vw" , marginLeft:"1vw" , height:"1.5vw" , marginTop:"1.2vw" ,color: "#898C81" , fontWeight:"bold"}}>Date Range</p>
        <p style={{ marginTop:"0.5vw" , marginLeft:"1vw" , fontSize:"0.8vw", height:"1.5vw" , fontWeight:"bold"}} id="start" >{startdate}</p>
        <p style={{ marginTop:"0.5vw" , marginLeft:"39vw", fontSize:"0.8vw", height:"1.5vw" , fontWeight:"bold"  }}  id="end">{enddate}</p>
        <p style={{ marginTop:"0.5vw" , marginLeft:"56.7vw", fontSize:"0.8vw", height:"1.5vw" , position:"fixed"}}>Start Date</p>
        <p style={{ marginTop:"0.5vw" , marginLeft:"62.5vw", fontSize:"0.8vw", height:"1.5vw" , position:"fixed"}}>End Date</p>
        </div>

        <div style={{display:"flex"  , marginTop:"-1.8vw" , height:"3vw" }}>  
        <input type="date" id="birthday" name="birthday" style={{height:"1.5vw" , marginLeft:"7.8vw" , width:"23.5vw"}} value={inputValue1} onChange={ evt => setInputValue1(evt.target.value) }></input>
        <input type="date" id="birthday" name="birthday" style={{height:"1.5vw" , marginLeft:"1vw", width:"23.5vw"}}  value={inputValue2} onChange={ evt => setInputValue2(evt.target.value) } ></input>
        <Card style={{border:"1px solid rgba(0,0,0,0.15)" , marginTop:"0.1vw" , marginLeft:"1.5vw", fontSize:"0.8vw", height:"1.5vw" , padding:"0.05vw" , width:"5vw"}}  id="start">{startdate}</Card>
        <Card style={{border:"1px solid rgba(0,0,0,0.15)" , marginTop:"0.1vw" , marginLeft:"0.5vw", fontSize:"0.8vw", height:"1.5vw" , padding:"0.05vw" , width:"5vw" , marginRight:"0.3vw"}}  id="end">{enddate}</Card>
        </div> */}

        <Card style={{ marginTop:"4vw" , backgroundColor:"rgba(0,0,0,0.2)" ,border:"1px solid rgba(0,0,0,0.15)" , marginLeft:'1vw' , width:"66.5vw" , height:"2vw" , fontWeight:"boldest" , paddingTop:"0.2vw"}}>
          Approach 3(Old Dataset Provided): Post Over Pre Performance
        </Card>

        <div style={{display:"flex"}}>

        <Card style={{marginLeft:"0.4vw" , width:"10vw" , height:"5vw" , marginTop:"5vw" }}>
          
          <div style={{display:"flex"}}>
          <p style={{ width:"1.5vw", height:"1.5vw",marginLeft:"0.5vw" , marginTop:"2vw" , borderRadius:"50%" , backgroundColor:"#F2F5F7" , paddingTop:"0vw"}}><i className="fa fa-picture-o" aria-hidden="true" style={{color:"#DADADA" , fontSize:"0.7vw" , marginTop:"-0.9vw"}}></i></p>
            <p style={{marginTop:"2vw" , marginLeft:"1.5vw" , fontSize:"0.9vw" , fontWeight:"bold" , color:"rgba(0, 0, 0, 0.7)"}} id="mydiv1" >{no_sum}</p>
            
          </div>
          <p style={{fontSize:"0.6vw" , marginTop:"-0.5vw" , textAlign:"center" , color:"#A1AEB7"}}>Number of Submissions</p>
        </Card>

        <Card style={{marginLeft:"1vw" , width:"10vw" , height:"5vw" , marginTop:"5vw"}}>
          
          <div style={{display:"flex"}}>
          <p style={{ width:"1.7vw", height:"1.5vw",marginLeft:"0.5vw" , marginTop:"2vw" , borderRadius:"50%" , backgroundColor:"#F2F5F7" , paddingTop:"0vw"}}><i className="fa fa-picture-o" aria-hidden="true" style={{color:"#DADADA" , fontSize:"0.7vw" , marginTop:"-0.9vw"}}></i></p>
            <p style={{marginTop:"2vw" , marginLeft:"1.5vw" , fontSize:"0.9vw" , fontWeight:"bold" , color:"rgba(0, 0, 0, 0.7)"}} id="mydiv2" >{closed}</p>
          </div>
          <p style={{fontSize:"0.6vw" , marginTop:"-0.5vw" , textAlign:"center" , color:"#A1AEB7"}}>Closed Submissions</p>
        </Card>

        <Card style={{marginLeft:"1vw" , width:"10vw" , height:"5vw" , marginTop:"5vw"}}>
          
          <div style={{display:"flex"}}>
          <p style={{ width:"1.7vw", height:"1.5vw",marginLeft:"0.5vw" , marginTop:"2vw" , borderRadius:"50%" , backgroundColor:"#F2F5F7" , paddingTop:"0vw"}}><i className="fa fa-picture-o" aria-hidden="true" style={{color:"#DADADA" , fontSize:"0.7vw" , marginTop:"-0.9vw"}}></i></p>
            <p style={{marginTop:"2vw" , marginLeft:"1.5vw" , fontSize:"0.9vw" , fontWeight:"bold" , color:"rgba(0, 0, 0, 0.7)" }} id="mydiv3">{no_bind}</p>
          </div>
          <p style={{fontSize:"0.6vw" , marginTop:"-0.5vw" , textAlign:"center" , color:"#A1AEB7"}}>Number of Binds</p>
        </Card>

        <Card style={{marginLeft:"1vw" , width:"10vw" , height:"5vw" , marginTop:"5vw" , paddingRight:"2vw"}}>
        <p style={{ fontSize:"0.6vw" , marginTop:"0.1vw" , textAlign:"center" , color:"#A1AEB7" , width:"9vw" }} id="qu">Quote Rate Test Vs Control</p>
          <div style={{display:"flex"}}>
            <p style={{ width:"1.5vw", height:"1.5vw",marginLeft:"0.5vw" , marginTop:"0.1vw" , borderRadius:"50%" , backgroundColor:"#F2F5F7" , paddingTop:"0vw"}}><i className="fa fa-picture-o" aria-hidden="true" style={{color:"#DADADA" , fontSize:"0.7vw" , marginTop:"-0.9vw"}}></i></p>
            <p style={{marginTop:"0.3vw" , marginLeft:"1.5vw" , fontSize:"0.9vw" , fontWeight:"bold" , color:"rgba(0, 0, 0, 0.7)"}} id="mydiv4">{quote_rate1}%:{quote_rate2}%</p>
          </div>
          <p style={{fontSize:"0.7vw" , marginTop:"-0.6vw" , textAlign:"center" , color:"#A1AEB7"}} id="qud"><i  style={{color: g1 < 0 ? "red":"green" , marginRight:"0.5vw" , marginLeft:"2vw"}} id="g1">{arrow1}</i>{g1}</p>
        </Card>

        <Card style={{marginLeft:"1vw" , width:"10vw" , height:"5vw" , marginTop:"5vw"}}>
        <p style={{fontSize:"0.6vw" , marginTop:"0.1vw" , textAlign:"center" , color:"#A1AEB7" , width:"9vw"  }} id="rt">Review Rate Test Vs Control</p>          
          <div style={{display:"flex"}}>
          <p style={{ width:"1.5vw", height:"1.5vw",marginLeft:"0.5vw" , marginTop:"0.1vw" , borderRadius:"50%" , backgroundColor:"#F2F5F7" , paddingTop:"0vw"}}><i className="fa fa-picture-o" aria-hidden="true" style={{color:"#DADADA" , fontSize:"0.7vw" , marginTop:"-0.9vw"}}></i></p>
            <p style={{marginTop:"0.3vw" , marginLeft:"1.5vw" , fontSize:"0.9vw" , fontWeight:"bold" , color:"rgba(0, 0, 0, 0.7)"}} id="mydiv5">{review_rate1}%:{review_rate2}%</p>
          </div>
          <p style={{fontSize:"0.7vw" , marginTop:"-0.6vw" , textAlign:"center" , color:"#A1AEB7"}} id="rtd"><i style={{color: g2 < 0 ? "red":"green" , marginRight:"0.5vw" , marginLeft:"2vw"}} id="g2">{arrow2}</i>{g2}</p>
        </Card>

        <Card style={{marginLeft:"1vw" , width:"10vw" , height:"5vw" , marginTop:"5vw" , paddingRight:"2vw"}}>
        <p style={{fontSize:"0.6vw" , marginTop:"0.1vw" , textAlign:"center" , color:"#A1AEB7" , width:"9vw"  }}id="rtg">Review Rate Test Vs Control(G)</p>          
          <div style={{display:"flex"}}>
          <p style={{ width:"1.5vw", height:"1.5vw",marginLeft:"0.5vw" , marginTop:"0.1vw" , borderRadius:"50%" , backgroundColor:"#F2F5F7" , paddingTop:"0vw"}}><i className="fa fa-picture-o" aria-hidden="true" style={{color:"#DADADA" , fontSize:"0.7vw" , marginTop:"-0.9vw"}}></i></p>
            <p style={{marginTop:"0.3vw" , marginLeft:"1.5vw" , fontSize:"0.9vw" , fontWeight:"bold" , color:"rgba(0, 0, 0, 0.7)"}} id="mydiv6">{review_rateg1}%:{review_rateg2}%</p>
          </div>
          <p style={{fontSize:"0.7vw" , marginTop:"-0.6vw" , textAlign:"center" , color:"#A1AEB7"}} id="rtgd"><i style={{color: g3 < 0 ? "red":"green" , marginRight:"0.5vw" , marginLeft:"2vw"}} id="g3">{arrow3}</i>{g3}</p>
        </Card>

        <Card style={{marginLeft:"1vw" , width:"10vw" , height:"5vw" , marginTop:"5vw" , marginRight:"0.7vw" , paddingRight:"2vw"}}>
        <p style={{fontSize:"0.6vw" , marginTop:"0.1vw" , textAlign:"center" , color:"#A1AEB7" , width:"9vw" }}id="rtr">Review Rate Test Vs Control(R)</p>          
          <div style={{display:"flex"}}>
          <p style={{ width:"1.5vw", height:"1.5vw",marginLeft:"0.5vw" , marginTop:"0.1vw" , borderRadius:"50%" , backgroundColor:"#F2F5F7" , paddingTop:"0vw"}}><i className="fa fa-picture-o" aria-hidden="true" style={{color:"#DADADA" , fontSize:"0.7vw" , marginTop:"-0.9vw"}}></i></p>
            <p style={{marginTop:"0.3vw" , marginLeft:"1.5vw" , fontSize:"0.9vw" , fontWeight:"bold" , color:"rgba(0, 0, 0, 0.7)"}}id="mydiv7">{review_rater1}%:{review_rater2}%</p>
          </div>
          <p style={{fontSize:"0.7vw" , marginTop:"-0.6vw" , textAlign:"center" , color:"#A1AEB7"}} id="rtrd"><i style={{color:  g4 < 0 ? "red":"green" , marginRight:"0.5vw" , marginLeft:"2vw"}} id="g4">{arrow4}</i>{g4}</p>
        </Card>

        
        </div>

        
    <div style={{display:"flex"}}>

      <Card style={{height:"12vw" , width:"67.7vw" , marginLeft:"0.5vw" , marginTop:"1vw" , border:"1px solid rgba(0,0,0,0.15)"}}>
      <p style={{ textAlign:"center" , fontSize:"0.8vw" , marginTop:"0.5vw" , fontStyle:"normal" , fontWeight:"bold"}}> Submission & Quote (Month Wise) </p>
      <div style={{height:"10vw" , width:"67vw" , marginLeft:"0.5vw" , marginTop:"-0.5vw"}}>
      <Bar data={sbdata1} width="1200%" height="150%" options={sboptions} />
      </div>
      <div style={{display:"flex"}}><div style={{backgroundColor:"#EE6002" , borderRadius:"50%" , height:"0.5vw" , width:"0.5vw" , marginLeft:"1vw" , marginTop:"0.5vw"}}></div><div style={{fontSize:"0.5vw" , marginLeft:"0.5vw" , marginTop:"0.5vw"}}># of Submissions</div><div style={{backgroundColor:"#26A69A" , borderRadius:"50%" , height:"0.5vw" , width:"0.5vw", marginTop:"0.5vw" , marginLeft:"1vw"}}></div><div style={{fontSize:"0.5vw" , marginLeft:"0.5vw" , marginTop:"0.5vw"}}># of Quotes</div></div>
      </Card>

      </div>

      <div style={{display:"flex"}}>

      <Card style={{border:"1px solid rgba(0,0,0,0.15)" , height:"10vw" , width:"34.7vw" , marginTop:"1vw" , marginLeft:"0.5vw"}}>
        <p style={{ fontSize:"0.8vw" , marginTop:"0.5vw"}}>Quote , Bind & Retentation Rate</p>
        <Line options={options} data={ldata} height="60%" style={{marginTop:"-1vw"}}/>
        <div style={{display:"flex"}}><div style={{backgroundColor:"#EE6002" , borderRadius:"10%" , height:"0.2vw" , width:"0.8vw" , marginLeft:"1vw" , marginTop:"0.85vw"}}></div><div style={{fontSize:"0.5vw" , marginLeft:"0.5vw" , marginTop:"0.7vw"}}>Retentation</div><div style={{backgroundColor:"#26A69A" , borderRadius:"10%" , height:"0.2vw" , width:"0.8vw", marginTop:"0.9vw" , marginLeft:"1vw"}}></div><div style={{fontSize:"0.5vw" , marginLeft:"0.5vw" , marginTop:"0.7vw"}}>Bind</div></div>
      </Card>

      <Card style={{border:"1px solid rgba(0,0,0,0.15)" , height:"10vw" , width:"32vw" , marginTop:"1vw" , marginLeft:"1vw"}}>
        <p style={{ fontSize:"0.8vw" , marginTop:"0.5vw"}}>Quote , Bind & Retentation Rate</p>
        <Line options={options} data={ldata1} height="60%" style={{marginTop:"-1vw"}}/>
        <div style={{display:"flex"}}><div style={{backgroundColor:"#EE6002" , borderRadius:"10%" , height:"0.2vw" , width:"0.8vw" , marginLeft:"1vw" , marginTop:"0.85vw"}}></div><div style={{fontSize:"0.5vw" , marginLeft:"0.5vw" , marginTop:"0.7vw"}}>Retentation</div><div style={{backgroundColor:"#26A69A" , borderRadius:"10%" , height:"0.2vw" , width:"0.8vw", marginTop:"0.9vw" , marginLeft:"1vw"}}></div><div style={{fontSize:"0.5vw" , marginLeft:"0.5vw" , marginTop:"0.7vw"}}>Bind</div></div>
      </Card>

      </div>




      </div>

        

      <div style={{border:"1px solid rgba(0,0,0,0.15)" , width:"16.5vw"}}>
      <Link to="/" style={{color: "#898C81" , textDecoration:"0px" , fontSize:"13px", marginLeft:"-1vw", marginTop:"11vw" , fontWeight:"lighter" , marginBottom:"0.5vw", paddingTop:"1vw" , fontSize:"1.2vw" }} ><i className="fa fa-power-off" aria-hidden="true" style={{fontWeight:"lighter" , marginTop:"0.5vw"}} onClick={rem}></i></Link>
      <Link to="/overview" style={{color: "#898C81" , textDecoration:"0px" , fontSize:"13px", marginLeft:"3vw", marginTop:"11vw" , fontWeight:"bold" , marginBottom:"0.5vw", paddingTop:"1vw" , fontSize:"1.2vw" }} ><i class="bi bi-house-fill" aria-hidden="true" style={{fontWeight:"bolder" , marginTop:"0.5vw"}}></i></Link>
      <Link  style={{color: "#898C81" , textDecoration:"0px" , fontSize:"13px", marginLeft:"3vw", marginTop:"11vw" , fontWeight:"lighter" , marginBottom:"0.5vw", paddingTop:"1vw" , fontSize:"1.2vw" }} onClick={gob}><i className="bi bi-caret-left-fill" aria-hidden="true" style={{fontWeight:"lighter" , marginTop:"0.5vw"}} ></i></Link>
      </div>

      </div>


      <div style={{border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"83.6vw" , height:"43.6vw" , width:"16.4vw"}}>
      <p style={{marginTop:"2vw" , color:"#FB4E0B" , fontSize:"2vw" , fontWeight:"bold"}} >Filter</p>

      {/* <Card style={{display:"flex" ,marginLeft:"1vw" , width:"14.3vw" , border:"1px solid rgba(0,0,0,0.15)" }}><i style={{color:"#A1AEB7" , marginTop:"0.5vw" , marginLeft:"-12vw"}} class="fa fa-search" aria-hidden="true" ></i>
      <input
        type="search"
        value={name}
        style={{border:"0px solid rgba(0,0,0,0.15)" , width:"11.5vw" , marginLeft:"1vw" , marginTop:"-1.3vw" ,marginLeft:"2vw"}}
        onChange={filter}
        className="input"
        placeholder="  Filter"
        
      /></Card> */}

      <Card style={{border:"1px solid rgba(0,0,0,0.15)" , height:"2vw" , width:"14.3vw" , marginLeft:"1vw" , marginTop:"2vw"}}>
        <div  style={{display:"flex" , fontSize:"0.8vw"}} >
        <Button onClick={green} style={{fontSize:"0.8vw", width:"5vw" , height:"1.5vw" , marginTop:"0.2vw" , marginLeft:"0.2vw" , backgroundColor:"white" , color:"black" , border:"0px"}}><div style={{display:"flex" }}>Green <i class="fa fa-square" aria-hidden="true" style={{ marginTop:"0.1vw" , marginLeft:"0.2vw"}} id="green"></i></div></Button>
        <Button onClick={amber} style={{fontSize:"0.8vw" , width:"5vw", height:"1.5vw" , marginTop:"0.2vw" , marginLeft:"0.2vw", backgroundColor:"white" , color:"black" , border:"0px"}}><div style={{display:"flex" }}>Amber <i class="fa fa-square" aria-hidden="true" style={{ marginTop:"0.1vw" , marginLeft:"0.2vw"}} id="amber"></i></div></Button>
        <Button onClick={red} style={{fontSize:"0.8vw" , width:"5vw", height:"1.5vw" , marginTop:"0.2vw" , marginLeft:"0.2vw", backgroundColor:"white", marginRight:"0.2vw" , color:"black" , border:"0px"}}>Red <i class="fa fa-square" aria-hidden="true" id="red"></i></Button>
        </div>
      </Card>


      <Card style={{border:"1px solid rgba(0,0,0,0.15)" , height:"2vw" , width:"14.3vw" , marginLeft:"1vw" , marginTop:"2vw"}}>
        <div  style={{display:"flex" , fontSize:"0.8vw"}} >
        <Button onClick={new11} style={{ textAlign:"center" , fontSize:"0.8vw", width:"7vw" , height:"1.5vw" , marginTop:"0.2vw" , marginLeft:"0.2vw" , textAlign:"center" ,backgroundColor:"white" , color:"black" , border:"0px"}}><div style={{display:"flex" }}>New <i class="fa fa-square" aria-hidden="true" style={{ marginTop:"0.1vw" , marginLeft:"0.2vw"}} id="new"></i></div></Button>
        <Button onClick={renewal11} style={{textAlign:"center" ,fontSize:"0.8vw" , width:"7vw", height:"1.5vw" , marginTop:"0.2vw" , marginLeft:"0.2vw", textAlign:"center" ,backgroundColor:"white" , color:"black" , border:"0px"}}><div style={{display:"flex" }}>Renewal <i class="fa fa-square" aria-hidden="true" style={{ marginTop:"0.1vw" , marginLeft:"0.2vw"}} id="renewal"></i></div></Button>
        </div>
      </Card>

      <Card style={{border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"1vw" , marginRight:"1vw" , marginTop:"2vw" , paddingBottom:"2vw"}}>

      <Button
            id="btn3"
            onClick={() => setOpen3(!open3)}
            aria-controls="example-collapse-text1"
            aria-expanded={open3}
            style={{ fontWeight:"bold" , paddingBottom:"20px", backgroundColor: "#FFFFFF" , color: "#898C81" , border: "1px solid rgba(0,0,0,0.15)",fontSize:"13px",marginTop:"2vw", height:"2vw"  , marginLeft:"1vw" , width:"12vw"}}
            >
            Broker(All)
            </Button>
            <Collapse in={open3} style={{paddingTop:"0.5vw" , width:"10vw" , marginLeft:"2.9vw" , borderRadius:"0.5vw" , textAlign:"left"}}>
            <div id="example-collapse-text1" style={{color: "#898C81" , fontSize:"13px" }}>
            <Link  onClick={br11} style={{fontWeight:"bold" ,paddingTop:"1vw",color: "#898C81" , fontSize:"13px" , height:"0.5vw"  , textDecoration:"0px" , marginBottom:"1vw" , marginLeft:"2.3vw"}}>Broker 1 <i class="fa fa-square" aria-hidden="true" style={{ marginTop:"0.1vw" , marginLeft:"0.2vw"}} id="br1"></i></Link><br />
            <Link  onClick={br21} style={{fontWeight:"bold" ,color: "#898C81" , fontSize:"13px" , height:"0.5vw" , marginTop:"1vw" , textDecoration:"0px" , marginLeft:"2.3vw"}}>Broker 2 <i class="fa fa-square" aria-hidden="true" style={{ marginTop:"0.1vw" , marginLeft:"0.2vw"}} id="br2"></i></Link>
            </div>
            </Collapse>


            <Button
            id="btn2"
            onClick={() => setOpen2(!open2)}
            aria-controls="example-collapse-text1"
            aria-expanded={open2}
            style={{ fontWeight:"bold" , paddingBottom:"20px", backgroundColor: "#FFFFFF" , color: "#898C81" , border: "1px solid rgba(0,0,0,0.15)",fontSize:"13px",marginTop:"2vw", height:"2vw"  , marginLeft:"1vw" , width:"12vw"}}
            >
            Underwriter(All)
            </Button>
            <Collapse in={open2} style={{paddingTop:"0.5vw" , width:"10vw" , marginLeft:"2.9vw" , borderRadius:"0.5vw" , textAlign:"left"}}>
            <div id="example-collapse-text1" style={{color: "#898C81" , fontSize:"13px" }}>
            <Link  onClick={uw11} style={{fontWeight:"bold" ,paddingTop:"1vw",color: "#898C81" , fontSize:"13px" , height:"0.5vw"  , textDecoration:"0px" , marginBottom:"1vw" , marginLeft:"2.3vw"}}>UW 1 <i class="fa fa-square" aria-hidden="true" style={{ marginTop:"0.1vw" , marginLeft:"0.2vw"}} id="uw1"></i></Link><br />
            <Link  onClick={uw21} style={{fontWeight:"bold" ,color: "#898C81" , fontSize:"13px" , height:"0.5vw" , marginTop:"1vw" , textDecoration:"0px" , marginLeft:"2.3vw"}}>UW 2 <i class="fa fa-square" aria-hidden="true" style={{ marginTop:"0.1vw" , marginLeft:"0.2vw"}} id="uw2"></i></Link>
            </div>
            </Collapse>

            <Button
            id="btn1"
            onClick={ocu}
            aria-controls="example-collapse-text1"
            aria-expanded={open1}
            style={{ fontWeight:"bold" , paddingBottom:"20px", backgroundColor: "#FFFFFF" , color: "#898C81" , border: "1px solid rgba(0,0,0,0.15)",fontSize:"13px",marginTop:"2vw", height:"2vw"  , marginLeft:"1vw" , width:"12vw"}}
            >
            Occupency(All)
            </Button>


            <Button
            id="btn4"
            onClick={loc}
            style={{ fontWeight:"bold" , paddingBottom:"20px", backgroundColor: "#FFFFFF" , color: "#898C81" , border: "1px solid rgba(0,0,0,0.15)",fontSize:"13px",marginTop:"2vw", height:"2vw"  , marginLeft:"1vw" , width:"12vw"}}
            >
            Location(All)
            </Button>



            <Button
            id="btn5"
            onClick={pr}
            aria-controls="example-collapse-text1"
            aria-expanded={open5}
            style={{ fontWeight:"bold" , paddingBottom:"20px", backgroundColor: "#FFFFFF" , color: "#898C81" , border: "1px solid rgba(0,0,0,0.15)",fontSize:"13px",marginTop:"2vw", height:"2vw"  , marginLeft:"1vw" , width:"12vw"}}
            >
            Product(All)
            </Button>


            {/* <Button
            id="btn5"
            onClick={() => setOpen5(!open5)}
            aria-controls="example-collapse-text1"
            aria-expanded={open5}
            style={{ fontWeight:"bold" , paddingBottom:"20px", backgroundColor: "#FFFFFF" , color: "#898C81" , border: "1px solid rgba(0,0,0,0.15)",fontSize:"13px",marginTop:"10px", height:"20px"  , marginLeft:"1vw" , width:"12vw"}}
            >
            Primary or XS(All)
            </Button>

            <Button
            id="btn5"
            onClick={() => setOpen5(!open5)}
            aria-controls="example-collapse-text1"
            aria-expanded={open5}
            style={{ fontWeight:"bold" , paddingBottom:"20px", backgroundColor: "#FFFFFF" , color: "#898C81" , border: "1px solid rgba(0,0,0,0.15)",fontSize:"13px",marginTop:"10px", height:"20px"  , marginLeft:"1vw" , width:"12vw"}}
            >
            Child(All)
            </Button>


            <Button
            id="btn5"
            onClick={() => setOpen5(!open5)}
            aria-controls="example-collapse-text1"
            aria-expanded={open5}
            style={{ fontWeight:"bold" , paddingBottom:"20px", backgroundColor: "#FFFFFF" , color: "#898C81" , border: "1px solid rgba(0,0,0,0.15)",fontSize:"13px",marginTop:"10px", height:"20px"  , marginLeft:"1vw" , width:"12vw"}}
            >
            Complexity(All)
            </Button> */}

      </Card>

      </div>

      

    </div>
  )
}

import React from 'react'
import Navbar from './Navbar.js'

import './Navbar.css'

import { useState  , useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';



import { BrowserRouter, Route , Routes , Link ,  useNavigate } from "react-router-dom";

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

export default function Overview() 
{


const [overdata , setOverData] = useState([]);

const [filterg , setFilterg] = useState([]);

function rem()
{
  localStorage.removeItem("Email");
  localStorage.removeItem("Name");
}

var no_sum;
var closed;
var no_bind;
var no_quote;
var new2;
var renew2;
var primary2;
var xs2;
var quote_rate;
var bind_rate;
var retention_rate;
var tiv;
var gwp;
var avg_time;

var doughnut;
var dou1;
var dou2;
var dou3;
var d1;
var d2;
var d3;
var sqp1;
var sqp2;
var sqp3;
var sqp4;
var sqp5;
var sqp6;
var sqm1;
var sqm2;
var sqm3;
var sqm4;
var sqm5;
var sqm6;
var sqm7;
var sqm8;
var sqm9;
var sqm10;
var qbr1;
var qbr2;
var qbr3;
var qbr4;
var qbr5;
var qbr6;
var qbr7;
var qbr8;
var qbr9;
var qbr10;
var qbr11;
var qbr12;
var qbr13;
var qbr14;
var qbr15;
var qbr16;
var qbr17;
var qbr18;
var qbr19;
var qbr20;
var qbr21;
var qbr22;
var qbr23;
var qbr24;
var qbr25;
var qbr26;
var qbr27;
var qbr28;
var qbr29;
var qbr30;
var qbr31;
var qbr32;
var qbr33;
var qbr34;
var qbr35;
var qbr36;
var pdou1;
var pdou2;
var pdou3;
var ipdou1;
var ipdou2;
var ipdou3;

let history = useNavigate();

function gob()
{
  history(-1);
}


  overdata.map(data=>
  {

    no_sum = data.no_sum;
    closed = data.closed;
    no_bind = data.no_bind;
    no_quote = data.no_quotes;
    new2 = data.new2;
    renew2 = data.renew2;
    primary2 = data.primary2;
    xs2 =  data.xs2;
    quote_rate = data.quote_rate;
    bind_rate =  data.bind_rate;
    retention_rate =  data.retention_rate;
    tiv =  data.tip;
    gwp = data.gwp;
    avg_time =  data.avg_time;

    doughnut = data.doughnut;
    dou1 =  data.dou1;
    dou2 =  data.dou2;
    dou3 =  data.dou3;
    d1 =  data.d1;
    d2 =  data.d2;
    d3 =  data.d3;
    sqp1 = data.sqp1;
    sqp2 = data.sqp2;
    sqp3 = data.sqp3;
    sqp4 = data.sqp4;
    sqp5 = data.sqp5;
    sqp6 = data.sqp6;
    sqm1 =  data.sqm1;
    sqm2 =  data.sqm2;
    sqm3 =  data.sqm3;
    sqm4 =  data.sqm4;
    sqm5 =  data.sqm5;
    sqm6 =  data.sqm6;
    sqm7 =  data.sqm7;
    sqm8 =  data.sqm8;
    sqm9 =  data.sqm9;
    sqm10 =  data.sqm10;
    qbr6 = data.qbr6;
    qbr1 = data.qbr1;
    qbr2 = data.qbr2;
    qbr3 = data.qbr3;
    qbr4 = data.qbr4;
    qbr5 = data.qbr5;

    qbr7 = data.qbr7;
    qbr8 = data.qbr8;
    qbr9 = data.qbr9;
    qbr10 = data.qbr10;
    qbr11 = data.qbr11;
    qbr12 = data.qbr12;
    qbr13 = data.qbr13;
    qbr14 = data.qbr14;
    qbr15 = data.qbr15;
    qbr16 = data.qbr16;
    qbr17 = data.qbr17;
    qbr18 = data.qbr18;
    qbr19 = data.qbr19;
    qbr20 = data.qbr20;
    qbr21 = data.qbr21;
    qbr22 = data.qbr22;
    qbr23 = data.qbr23;
    qbr24 = data.qbr24;
    qbr25 = data.qbr25;
    qbr26 = data.qbr26;
    qbr27 = data.qbr27;
    qbr28 = data.qbr28;
    qbr29 = data.qbr29;
    qbr30 = data.qbr30;
    qbr31 = data.qbr31;
    qbr32 = data.qbr32;
    qbr33 = data.qbr33;
    qbr34 = data.qbr34;
    qbr35 = data.qbr35;
    qbr36 = data.qbr36;

    pdou1 = data.pdou1;
    pdou2 = data.pdou2;
    pdou3 = data.pdou3;
    ipdou1 = data.ipdou1;
    ipdou2 = data.ipdou2;
    ipdou3 = data.ipdou3;
  })

  


const sbdata=
{
  labels:["Sage Group" , "Shell" , "HSBC" ],
  datasets:[
    
    {
      label:"Dataset 1",
      data: [ sqp1 , sqp2 , sqp3 ],
      backgroundColor:" #EE6002",
      barThickness:11,
      barPercentage:10,
      categoryPercentage:1,
    },

    {
      label:"Dataset 2",
      data:[ sqp4 , sqp5 , sqp6 ],
      backgroundColor:"#26A69A",
      barThickness:10,
      barPercentage:10,
    },

  ],

};


const sbdata1=
{
  labels:["Sage Group" , "Shell" , "HSBC" , "Shell" , "HSBC" ],
  datasets:[
    
    {
      label:"Dataset 1",
      data: [ sqm1 , sqm2 ,sqm3 , sqm4, sqm5],
      backgroundColor:" #EE6002",
      barThickness:11,
      barPercentage:10,
      categoryPercentage:1,
    },

    {
      label:"Dataset 2",
      data:[ sqm6 , sqm7 , sqm8 , sqm9 , sqm10],
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
    label:"Dataset",
    data:[dou1 ,dou2 ,dou3],
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
          data: [qbr1, qbr2 , qbr3 , qbr4 , qbr5 , qbr6],
          borderColor: '#EE6002',
          backgroundColor: '#EE6002',
          borderWidth:1,
        },
        {
          label: 'Dataset 2',
          data: [qbr7, qbr8 , qbr9 , qbr10 , qbr11 , qbr12],
          borderColor: '#6200EE',
          backgroundColor: '#6200EE',
          borderWidth:1,
        },
        {
          label: 'Dataset 2',
          data: [qbr13, qbr14 , qbr15 , qbr16 , qbr17 , qbr18],
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
          data: [qbr19, qbr20 , qbr21 , qbr22 , qbr23 , qbr24],
          borderColor: '#EE6002',
          backgroundColor: '#EE6002',
          borderWidth:1,
        },
        {
          label: 'Dataset 2',
          data: [qbr25, qbr26 , qbr27 , qbr28 , qbr29 , qbr30],
          borderColor: '#6200EE',
          backgroundColor: '#6200EE',
          borderWidth:1,
        },
        {
          label: 'Dataset 2',
          data: [qbr31, qbr32 , qbr33 , qbr34 , qbr35 , qbr36],
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



    const options5 = {

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
        data:[ipdou1,ipdou2 ,ipdou3],
        backgroundColor:[ "#007F00" , "#FD956D" , " #F90000" ],
        borderColor:[ "#007F00" , "#FD956D" , " #F90000" ],
      }]
      
      };

      console.log(pdou1);

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

        var submissions;

        useEffect (()=>{

          const getUserData = async() =>{
            const reqData = await fetch(`http://localhost:5001/api/overview`);
            const resData= await reqData.json();
            setOverData(resData);
            console.log(resData);
          }

          const getFilterGData = async() =>{
            const reqData = await fetch(`http://localhost:5001/api/filter`);
            const resData= await reqData.json();
            setFilterg(resData);
            console.log(resData);
          }
      
          getFilterGData(); 
          getUserData();      
      
        } , []);

        if( inputValue1 < "2023-03-31" && inputValue2 > "2023-03-01" )
        {

        }

        var gno_sum;
        var gclosed;
        var gno_bind;
        var gno_quote;
        var gnew2;
        var grenew2;
        var gprimary2;
        var gxs2;
        var gquote_rate;
        var gbind_rate;
        var gretention_rate;
        var gtiv;
        var ggwp;
        var gavg_time;
        function green()
        {


          filterg.map(data=>{

            gno_sum = data.gno_sum;
            gclosed = data.gclosed;
            gno_bind = data.gno_bind;
            gno_quote = data.gno_quote;
            gnew2 = data.gnew2;
            grenew2 = data.grenew2;
            gprimary2 = data.gprimary2;
            gxs2 =  data.gxs2;
            gquote_rate = data.gquote_rate;
            gbind_rate =  data.gbind_rate;
            gretention_rate =  data.gretention_rate;
            gtiv =  data.gtiv;
            ggwp = data.ggwp;
            gavg_time =  data.gavg_time;
          })

          setGreen1(true);
          document.getElementById("green").className = "fa fa-square-o";
          if( green1 == true )
          {
            setGreen1(false);
            document.getElementById("mydiv1").innerHTML = gno_sum;
            document.getElementById("mydiv2").innerHTML = gclosed;
            document.getElementById("mydiv3").innerHTML = gno_bind;
            document.getElementById("mydiv4").innerHTML = gno_quote;
            document.getElementById("mydiv5").innerHTML = gnew2+"%:"+grenew2+"%";
            document.getElementById("mydiv6").innerHTML = gprimary2+"%:"+gxs2+"%";
            document.getElementById("mydiv7").innerHTML = gquote_rate+"%";
            document.getElementById("mydiv8").innerHTML = gbind_rate+"%";
            document.getElementById("mydiv9").innerHTML = gretention_rate+"%";
            document.getElementById("mydiv10").innerHTML = "$"+gtiv+"Bn";
            document.getElementById("mydiv11").innerHTML = "$"+ggwp+"M";
            document.getElementById("mydiv12").innerHTML = gavg_time+"Days";

          }
          else
          {
              document.getElementById("green").className = "fa fa-square";

              document.getElementById("mydiv1").innerHTML = no_sum;
              document.getElementById("mydiv2").innerHTML = closed;
              document.getElementById("mydiv3").innerHTML = no_bind;
              document.getElementById("mydiv4").innerHTML = no_quote;
              document.getElementById("mydiv5").innerHTML = new2+"%:"+renew2+"%";
              document.getElementById("mydiv6").innerHTML = primary2+"%:"+xs2+"%";
              document.getElementById("mydiv7").innerHTML = quote_rate+"%";
              document.getElementById("mydiv8").innerHTML = bind_rate+"%";
              document.getElementById("mydiv9").innerHTML = retention_rate+"%";
              document.getElementById("mydiv10").innerHTML = "$"+tiv+"Bn";
              document.getElementById("mydiv11").innerHTML = "$"+gwp+"M";
              document.getElementById("mydiv12").innerHTML = avg_time+"Days";
          }
          
        }

        function amber()
        {

          filterg.map(data=>{

            gno_sum = data.ano_sum;
            gclosed = data.aclosed;
            gno_bind = data.ano_bind;
            gno_quote = data.ano_quote;
            gnew2 = data.anew2;
            grenew2 = data.arenew2;
            gprimary2 = data.aprimary2;
            gxs2 =  data.axs2;
            gquote_rate = data.aquote_rate;
            gbind_rate =  data.abind_rate;
            gretention_rate =  data.aretention_rate;
            gtiv =  data.ativ;
            ggwp = data.agwp;
            gavg_time =  data.aavg_time;
          })

          setAmber1(true);
          if( amber1 == true )
          {
            document.getElementById("amber").className = "fa fa-square-o";
            document.getElementById("mydiv1").innerHTML = gno_sum;
            document.getElementById("mydiv2").innerHTML = gclosed;
            document.getElementById("mydiv3").innerHTML = gno_bind;
            document.getElementById("mydiv4").innerHTML = gno_quote;
            document.getElementById("mydiv5").innerHTML = gnew2+"%:"+grenew2+"%";
            document.getElementById("mydiv6").innerHTML = gprimary2+"%:"+gxs2+"%";
            document.getElementById("mydiv7").innerHTML = gquote_rate+"%";
            document.getElementById("mydiv8").innerHTML = gbind_rate+"%";
            document.getElementById("mydiv9").innerHTML = gretention_rate+"%";
            document.getElementById("mydiv10").innerHTML = "$"+gtiv+"Bn";
            document.getElementById("mydiv11").innerHTML = "$"+ggwp+"M";
            document.getElementById("mydiv12").innerHTML = gavg_time+"Days";
            setAmber1(false);
          }
          else
          {
              document.getElementById("amber").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = no_sum;
              document.getElementById("mydiv2").innerHTML = closed;
              document.getElementById("mydiv3").innerHTML = no_bind;
              document.getElementById("mydiv4").innerHTML = no_quote;
              document.getElementById("mydiv5").innerHTML = new2+"%:"+grenew2+"%";
              document.getElementById("mydiv6").innerHTML = primary2+"%:"+gxs2+"%";
              document.getElementById("mydiv7").innerHTML = quote_rate+"%";
              document.getElementById("mydiv8").innerHTML = bind_rate+"%";
              document.getElementById("mydiv9").innerHTML = retention_rate+"%";
              document.getElementById("mydiv10").innerHTML = "$"+tiv+"Bn";
              document.getElementById("mydiv11").innerHTML = "$"+gwp+"M";
              document.getElementById("mydiv12").innerHTML = avg_time+"Days";
          }

        }

        function red()
        {

          filterg.map(data=>{

            gno_sum = data.ron_sum;
            gclosed = data.rclosed;
            gno_bind = data.ron_bind;
            gno_quote = data.ron_quote;
            gnew2 = data.rnew2;
            grenew2 = data.renew2;
            gprimary2 = data.rprimary2;
            gxs2 =  data.rexs2;
            gquote_rate = data.rquote_rate;
            gbind_rate =  data.rbind_rate;
            gretention_rate =  data.rretention_rate;
            gtiv =  data.rtiv;
            ggwp = data.rgwp;
            gavg_time =  data.ravg_time;
          })
          
          setRed1(true);
          if( red1 == true )
          {
            document.getElementById("red").className = "fa fa-square-o";
            document.getElementById("mydiv1").innerHTML = gno_sum;
            document.getElementById("mydiv2").innerHTML = gclosed;
            document.getElementById("mydiv3").innerHTML = gno_bind;
            document.getElementById("mydiv4").innerHTML = gno_quote;
            document.getElementById("mydiv5").innerHTML = gnew2+"%:"+grenew2+"%";
            document.getElementById("mydiv6").innerHTML = gprimary2+"%:"+gxs2+"%";
            document.getElementById("mydiv7").innerHTML = gquote_rate+"%";
            document.getElementById("mydiv8").innerHTML = gbind_rate+"%";
            document.getElementById("mydiv9").innerHTML = gretention_rate+"%";
            document.getElementById("mydiv10").innerHTML = "$"+gtiv+"Bn";
            document.getElementById("mydiv11").innerHTML = "$"+ggwp+"M";
            document.getElementById("mydiv12").innerHTML = gavg_time+"Days";

            setRed1(false);
          }
          else
          {
              document.getElementById("red").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = no_sum;
              document.getElementById("mydiv2").innerHTML = closed;
              document.getElementById("mydiv3").innerHTML = no_bind;
              document.getElementById("mydiv4").innerHTML = no_quote;
              document.getElementById("mydiv5").innerHTML = new2+"%:"+grenew2+"%";
              document.getElementById("mydiv6").innerHTML = primary2+"%:"+gxs2+"%";
              document.getElementById("mydiv7").innerHTML = quote_rate+"%";
              document.getElementById("mydiv8").innerHTML = bind_rate+"%";
              document.getElementById("mydiv9").innerHTML = retention_rate+"%";
              document.getElementById("mydiv10").innerHTML = "$"+tiv+"Bn";
              document.getElementById("mydiv11").innerHTML = "$"+gwp+"M";
              document.getElementById("mydiv12").innerHTML = avg_time+"Days";

          }
        }


        function new11()
        {

          filterg.map(data=>{

            gno_sum = data.non_sum;
            gclosed = data.nclosed;
            gno_bind = data.nno_bind;
            gno_quote = data.nquote;
            gnew2 = data.nnew2;
            grenew2 = data.nrenew2;
            gprimary2 = data.nprimary2;
            gxs2 =  data.nxs2;
            gquote_rate = data.nquote_rate;
            gbind_rate =  data.nbind_rate;
            gretention_rate =  data.nretention_rate;
            gtiv =  data.ntiv;
            ggwp = data.ngwp;
            gavg_time =  data.navg_time;
          })

          setNew1(true);
          if( new1 == true )
          {
            document.getElementById("new").className = "fa fa-square-o";
            document.getElementById("mydiv1").innerHTML = gno_sum;
            document.getElementById("mydiv2").innerHTML = gclosed;
            document.getElementById("mydiv3").innerHTML = gno_bind;
            document.getElementById("mydiv4").innerHTML = gno_quote;
            document.getElementById("mydiv5").innerHTML = gnew2+"%:"+grenew2+"%";
            document.getElementById("mydiv6").innerHTML = gprimary2+"%:"+gxs2+"%";
            document.getElementById("mydiv7").innerHTML = gquote_rate+"%";
            document.getElementById("mydiv8").innerHTML = gbind_rate+"%";
            document.getElementById("mydiv9").innerHTML = gretention_rate+"%";
            document.getElementById("mydiv10").innerHTML = "$"+gtiv+"Bn";
            document.getElementById("mydiv11").innerHTML = "$"+ggwp+"M";
            document.getElementById("mydiv12").innerHTML = gavg_time+"Days";
            setNew1(false);
          }
          else
          {
              document.getElementById("new").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = no_sum;
              document.getElementById("mydiv2").innerHTML = closed;
              document.getElementById("mydiv3").innerHTML = no_bind;
              document.getElementById("mydiv4").innerHTML = no_quote;
              document.getElementById("mydiv5").innerHTML = new2+"%:"+grenew2+"%";
              document.getElementById("mydiv6").innerHTML = primary2+"%:"+gxs2+"%";
              document.getElementById("mydiv7").innerHTML = quote_rate+"%";
              document.getElementById("mydiv8").innerHTML = bind_rate+"%";
              document.getElementById("mydiv9").innerHTML = retention_rate+"%";
              document.getElementById("mydiv10").innerHTML = "$"+tiv+"Bn";
              document.getElementById("mydiv11").innerHTML = "$"+gwp+"M";
              document.getElementById("mydiv12").innerHTML = avg_time+"Days";

          }
        }


        function renewal11()
        {
          filterg.map(data=>{

            gno_sum = data.reno_sum;
            gclosed = data.reclosed;
            gno_bind = data.reno_bind;
            gno_quote = data.reno_quote;
            gnew2 = data.renew2;
            grenew2 = data.rerenew2;
            gprimary2 = data.reprimary2;
            gxs2 =  data.rexs2;
            gquote_rate = data.requote_rate;
            gbind_rate =  data.rebind_rate;
            gretention_rate =  data.reretention_rate;
            gtiv =  data.retiv;
            ggwp = data.regwp;
            gavg_time =  data.reavg_time;
          })

          setRenewal1(true);
          if( renewal1 == true )
          {
            document.getElementById("renewal").className = "fa fa-square-o";
            document.getElementById("mydiv1").innerHTML = gno_sum;
            document.getElementById("mydiv2").innerHTML = gclosed;
            document.getElementById("mydiv3").innerHTML = gno_bind;
            document.getElementById("mydiv4").innerHTML = gno_quote;
            document.getElementById("mydiv5").innerHTML = gnew2+"%:"+grenew2+"%";
            document.getElementById("mydiv6").innerHTML = gprimary2+"%:"+gxs2+"%";
            document.getElementById("mydiv7").innerHTML = gquote_rate+"%";
            document.getElementById("mydiv8").innerHTML = gbind_rate+"%";
            document.getElementById("mydiv9").innerHTML = gretention_rate+"%";
            document.getElementById("mydiv10").innerHTML = "$"+gtiv+"Bn";
            document.getElementById("mydiv11").innerHTML = "$"+ggwp+"M";
            document.getElementById("mydiv12").innerHTML = gavg_time+"Days";
            setRenewal1(false);
          }
          else
          {
              document.getElementById("renewal").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = no_sum;
              document.getElementById("mydiv2").innerHTML = closed;
              document.getElementById("mydiv3").innerHTML = no_bind;
              document.getElementById("mydiv4").innerHTML = no_quote;
              document.getElementById("mydiv5").innerHTML = new2+"%:"+grenew2+"%";
              document.getElementById("mydiv6").innerHTML = primary2+"%:"+gxs2+"%";
              document.getElementById("mydiv7").innerHTML = quote_rate+"%";
              document.getElementById("mydiv8").innerHTML = bind_rate+"%";
              document.getElementById("mydiv9").innerHTML = retention_rate+"%";
              document.getElementById("mydiv10").innerHTML = "$"+tiv+"Bn";
              document.getElementById("mydiv11").innerHTML = "$"+gwp+"M";
              document.getElementById("mydiv12").innerHTML = avg_time+"Days";
          }
        }

        function br11()
        {

          filterg.map(data=>{

            gno_sum = data.br1no_sum;
            gclosed = data.br1closed;
            gno_bind = data.br1no_bind;
            gno_quote = data.br1no_quotes;
            gnew2 = data.br1new2;
            grenew2 = data.br1renew2;
            gprimary2 = data.br1primary2;
            gxs2 =  data.br1xs2;
            gquote_rate = data.br1quote_rate;
            gbind_rate =  data.br1bind_rate;
            gretention_rate =  data.br1retention_rate;
            gtiv =  data.br1tip;
            ggwp = data.br1gwp;
            gavg_time =  data.br1avg_time;
          })

          setBr1(true);
          if( br1 == true )
          {
            document.getElementById("br1").className = "fa fa-square-o";
            document.getElementById("mydiv1").innerHTML = gno_sum;
            document.getElementById("mydiv2").innerHTML = gclosed;
            document.getElementById("mydiv3").innerHTML = gno_bind;
            document.getElementById("mydiv4").innerHTML = gno_quote;
            document.getElementById("mydiv5").innerHTML = gnew2+"%:"+grenew2+"%";
            document.getElementById("mydiv6").innerHTML = gprimary2+"%:"+gxs2+"%";
            document.getElementById("mydiv7").innerHTML = gquote_rate+"%";
            document.getElementById("mydiv8").innerHTML = gbind_rate+"%";
            document.getElementById("mydiv9").innerHTML = gretention_rate+"%";
            document.getElementById("mydiv10").innerHTML = "$"+gtiv+"Bn";
            document.getElementById("mydiv11").innerHTML = "$"+ggwp+"M";
            document.getElementById("mydiv12").innerHTML = gavg_time+"Days";
            setBr1(false);
          }
          else
          {
              document.getElementById("br1").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = no_sum;
              document.getElementById("mydiv2").innerHTML = closed;
              document.getElementById("mydiv3").innerHTML = no_bind;
              document.getElementById("mydiv4").innerHTML = no_quote;
              document.getElementById("mydiv5").innerHTML = new2+"%:"+grenew2+"%";
              document.getElementById("mydiv6").innerHTML = primary2+"%:"+gxs2+"%";
              document.getElementById("mydiv7").innerHTML = quote_rate+"%";
              document.getElementById("mydiv8").innerHTML = bind_rate+"%";
              document.getElementById("mydiv9").innerHTML = retention_rate+"%";
              document.getElementById("mydiv10").innerHTML = "$"+tiv+"Bn";
              document.getElementById("mydiv11").innerHTML = "$"+gwp+"M";
              document.getElementById("mydiv12").innerHTML = avg_time+"Days";
          }
        }

        function br21()
        {

          filterg.map(data=>{

            gno_sum = data.br2no_sum;
            gclosed = data.br2closed;
            gno_bind = data.br2no_bind;
            gno_quote = data.br2no_quote;
            gnew2 = data.br2new2;
            grenew2 = data.br2renew2;
            gprimary2 = data.br2primary2;
            gxs2 =  data.br2xs2;
            gquote_rate = data.br2quote_rate;
            gbind_rate =  data.br2bind_rate;
            gretention_rate =  data.br2retention_rate;
            gtiv =  data.br2tiv;
            ggwp = data.br2gwp;
            gavg_time =  data.br2avg_time;
          })

          setBr2(true);
          if( br2 == true )
          {
            document.getElementById("br2").className = "fa fa-square-o";
            document.getElementById("mydiv1").innerHTML = gno_sum;
            document.getElementById("mydiv2").innerHTML = gclosed;
            document.getElementById("mydiv3").innerHTML = gno_bind;
            document.getElementById("mydiv4").innerHTML = gno_quote;
            document.getElementById("mydiv5").innerHTML = gnew2+"%:"+grenew2+"%";
            document.getElementById("mydiv6").innerHTML = gprimary2+"%:"+gxs2+"%";
            document.getElementById("mydiv7").innerHTML = gquote_rate+"%";
            document.getElementById("mydiv8").innerHTML = gbind_rate+"%";
            document.getElementById("mydiv9").innerHTML = gretention_rate+"%";
            document.getElementById("mydiv10").innerHTML = "$"+gtiv+"Bn";
            document.getElementById("mydiv11").innerHTML = "$"+ggwp+"M";
            document.getElementById("mydiv12").innerHTML = gavg_time+"Days";
            setBr2(false);
          }
          else
          {
              document.getElementById("br2").className = "fa fa-square";

              document.getElementById("mydiv1").innerHTML = no_sum;
              document.getElementById("mydiv2").innerHTML = closed;
              document.getElementById("mydiv3").innerHTML = no_bind;
              document.getElementById("mydiv4").innerHTML = no_quote;
              document.getElementById("mydiv5").innerHTML = new2+"%:"+grenew2+"%";
              document.getElementById("mydiv6").innerHTML = primary2+"%:"+gxs2+"%";
              document.getElementById("mydiv7").innerHTML = quote_rate+"%";
              document.getElementById("mydiv8").innerHTML = bind_rate+"%";
              document.getElementById("mydiv9").innerHTML = retention_rate+"%";
              document.getElementById("mydiv10").innerHTML = "$"+tiv+"Bn";
              document.getElementById("mydiv11").innerHTML = "$"+gwp+"M";
              document.getElementById("mydiv12").innerHTML = avg_time+"Days";
          }
        }


        function uw11()
        {

          filterg.map(data=>{

            gno_sum = data.uw1no_sum;
            gclosed = data.uw1closed;
            gno_bind = data.uw1no_bind;
            gno_quote = data.uw1no_quote;
            gnew2 = data.uw1new2;
            grenew2 = data.uw1renew2;
            gprimary2 = data.uw1primary2;
            gxs2 =  data.uw1xs2;
            gquote_rate = data.uw1quote_rate;
            gbind_rate =  data.uw1bind_rate;
            gretention_rate =  data.uw1rentetion_rate;
            gtiv =  data.uw1tiv;
            ggwp = data.uw1gwp;
            gavg_time =  data.uw1avg_time;
          })

          setUw1(true);
          if( uw1 == true )
          {
            document.getElementById("uw1").className = "fa fa-square-o";
            document.getElementById("mydiv1").innerHTML = gno_sum;
            document.getElementById("mydiv2").innerHTML = gclosed;
            document.getElementById("mydiv3").innerHTML = gno_bind;
            document.getElementById("mydiv4").innerHTML = gno_quote;
            document.getElementById("mydiv5").innerHTML = gnew2+"%:"+grenew2+"%";
            document.getElementById("mydiv6").innerHTML = gprimary2+"%:"+gxs2+"%";
            document.getElementById("mydiv7").innerHTML = gquote_rate+"%";
            document.getElementById("mydiv8").innerHTML = gbind_rate+"%";
            document.getElementById("mydiv9").innerHTML = gretention_rate+"%";
            document.getElementById("mydiv10").innerHTML = "$"+gtiv+"Bn";
            document.getElementById("mydiv11").innerHTML = "$"+ggwp+"M";
            document.getElementById("mydiv12").innerHTML = gavg_time+"Days";
            setUw1(false);
          }
          else
          {
              document.getElementById("uw1").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = no_sum;
              document.getElementById("mydiv2").innerHTML = closed;
              document.getElementById("mydiv3").innerHTML = no_bind;
              document.getElementById("mydiv4").innerHTML = no_quote;
              document.getElementById("mydiv5").innerHTML = new2+"%:"+grenew2+"%";
              document.getElementById("mydiv6").innerHTML = primary2+"%:"+gxs2+"%";
              document.getElementById("mydiv7").innerHTML = quote_rate+"%";
              document.getElementById("mydiv8").innerHTML = bind_rate+"%";
              document.getElementById("mydiv9").innerHTML = retention_rate+"%";
              document.getElementById("mydiv10").innerHTML = "$"+tiv+"Bn";
              document.getElementById("mydiv11").innerHTML = "$"+gwp+"M";
              document.getElementById("mydiv12").innerHTML = avg_time+"Days";
          }
        }

        function uw21()
        {

          filterg.map(data=>{

            gno_sum = data.uw2no_sum;
            gclosed = data.uw2closed;
            gno_bind = data.uw2no_bind;
            gno_quote = data.uw2no_quote;
            gnew2 = data.uw2new2;
            grenew2 = data.uw2renew2;
            gprimary2 = data.uw2primary2;
            gxs2 =  data.uw2xs2;
            gquote_rate = data.uw2quote_rate;
            gbind_rate =  data.uw2bind_rate;
            gretention_rate =  data.uw2retention_rate;
            gtiv =  data.uw2tiv;
            ggwp = data.uw2gwp;
            gavg_time =  data.uw2avg_time;
          })

          setUw2(true);
          if( uw2 == true )
          {
            document.getElementById("uw2").className = "fa fa-square-o";
            document.getElementById("mydiv1").innerHTML = gno_sum;
            document.getElementById("mydiv2").innerHTML = gclosed;
            document.getElementById("mydiv3").innerHTML = gno_bind;
            document.getElementById("mydiv4").innerHTML = gno_quote;
            document.getElementById("mydiv5").innerHTML = gnew2+"%:"+grenew2+"%";
            document.getElementById("mydiv6").innerHTML = gprimary2+"%:"+gxs2+"%";
            document.getElementById("mydiv7").innerHTML = gquote_rate+"%";
            document.getElementById("mydiv8").innerHTML = gbind_rate+"%";
            document.getElementById("mydiv9").innerHTML = gretention_rate+"%";
            document.getElementById("mydiv10").innerHTML = "$"+gtiv+"Bn";
            document.getElementById("mydiv11").innerHTML = "$"+ggwp+"M";
            document.getElementById("mydiv12").innerHTML = gavg_time+"Days";
            setUw2(false);
          }
          else
          {
              document.getElementById("uw2").className = "fa fa-square";
              document.getElementById("mydiv1").innerHTML = no_sum;
              document.getElementById("mydiv2").innerHTML = closed;
              document.getElementById("mydiv3").innerHTML = no_bind;
              document.getElementById("mydiv4").innerHTML = no_quote;
              document.getElementById("mydiv5").innerHTML = new2+"%:"+grenew2+"%";
              document.getElementById("mydiv6").innerHTML = primary2+"%:"+gxs2+"%";
              document.getElementById("mydiv7").innerHTML = quote_rate+"%";
              document.getElementById("mydiv8").innerHTML = bind_rate+"%";
              document.getElementById("mydiv9").innerHTML = retention_rate+"%";
              document.getElementById("mydiv10").innerHTML = "$"+tiv+"Bn";
              document.getElementById("mydiv11").innerHTML = "$"+gwp+"M";
              document.getElementById("mydiv12").innerHTML = avg_time+"Days";
          }
        }

        function loc()
        {
          filterg.map(data=>{

            gno_sum = data.lno_sum;
            gclosed = data.lclosed;
            gno_bind = data.lno_bind;
            gno_quote = data.lno_quote;
            gnew2 = data.lnew2;
            grenew2 = data.lrenew2;
            gprimary2 = data.lprimary2;
            gxs2 =  data.lxs2;
            gquote_rate = data.lquote_rate;
            gbind_rate =  data.lbind_rate;
            gretention_rate =  data.lretention_rate;
            gtiv =  data.ltiv;
            ggwp = data.lgwp;
            gavg_time =  data.lavg_time;
          })

          document.getElementById("mydiv1").innerHTML = gno_sum;
          document.getElementById("mydiv2").innerHTML = gclosed;
          document.getElementById("mydiv3").innerHTML = gno_bind;
          document.getElementById("mydiv4").innerHTML = gno_quote;
          document.getElementById("mydiv5").innerHTML = gnew2+"%:"+grenew2+"%";
          document.getElementById("mydiv6").innerHTML = gprimary2+"%:"+gxs2+"%";
          document.getElementById("mydiv7").innerHTML = gquote_rate+"%";
          document.getElementById("mydiv8").innerHTML = gbind_rate+"%";
          document.getElementById("mydiv9").innerHTML = gretention_rate+"%";
          document.getElementById("mydiv10").innerHTML = "$"+gtiv+"Bn";
          document.getElementById("mydiv11").innerHTML = "$"+ggwp+"M";
          document.getElementById("mydiv12").innerHTML = gavg_time+"Days";
        }

        function ocu()
        {
          filterg.map(data=>{

            gno_sum = data.ono_sum;
            gclosed = data.oclosed;
            gno_bind = data.ono_bind;
            gno_quote = data.ono_quote;
            gnew2 = data.onew2;
            grenew2 = data.orenew2;
            gprimary2 = data.oprimary2;
            gxs2 =  data.oxs2;
            gquote_rate = data.obind_rate;
            gbind_rate =  data.obind_rate;
            gretention_rate =  data.oretention_rate;
            gtiv =  data.otiv;
            ggwp = data.ogwp;
            gavg_time =  data.oavg_time;
          })

          document.getElementById("mydiv1").innerHTML = gno_sum;
          document.getElementById("mydiv2").innerHTML = gclosed;
          document.getElementById("mydiv3").innerHTML = gno_bind;
          document.getElementById("mydiv4").innerHTML = gno_quote;
          document.getElementById("mydiv5").innerHTML = gnew2+"%:"+grenew2+"%";
          document.getElementById("mydiv6").innerHTML = gprimary2+"%:"+gxs2+"%";
          document.getElementById("mydiv7").innerHTML = gquote_rate+"%";
          document.getElementById("mydiv8").innerHTML = gbind_rate+"%";
          document.getElementById("mydiv9").innerHTML = gretention_rate+"%";
          document.getElementById("mydiv10").innerHTML = "$"+gtiv+"Bn";
          document.getElementById("mydiv11").innerHTML = "$"+ggwp+"M";
          document.getElementById("mydiv12").innerHTML = gavg_time+"Days";

        }

        function pr()
        {
          filterg.map(data=>{

            gno_sum = data.pno_sum;
            gclosed = data.pclosed;
            gno_bind = data.pno_bind;
            gno_quote = data.pno_quote;
            gnew2 = data.pnew2;
            grenew2 = data.prenew2;
            gprimary2 = data.pprimary2;
            gxs2 =  data.pxs2;
            gquote_rate = data.pquote_rate;
            gbind_rate =  data.pbind_rate;
            gretention_rate =  data.pretention_rate;
            gtiv =  data.ptiv;
            ggwp = data.pgwp;
            gavg_time =  data.pavg_time;
          })

          document.getElementById("mydiv1").innerHTML = gno_sum;
          document.getElementById("mydiv2").innerHTML = gclosed;
          document.getElementById("mydiv3").innerHTML = gno_bind;
          document.getElementById("mydiv4").innerHTML = gno_quote;
          document.getElementById("mydiv5").innerHTML = gnew2+"%:"+grenew2+"%";
          document.getElementById("mydiv6").innerHTML = gprimary2+"%:"+gxs2+"%";
          document.getElementById("mydiv7").innerHTML = gquote_rate+"%";
          document.getElementById("mydiv8").innerHTML = gbind_rate+"%";
          document.getElementById("mydiv9").innerHTML = gretention_rate+"%";
          document.getElementById("mydiv10").innerHTML = "$"+gtiv+"Bn";
          document.getElementById("mydiv11").innerHTML = "$"+ggwp+"M";
          document.getElementById("mydiv12").innerHTML = gavg_time+"Days";
          
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


        const textCenter = { id:'textCenter' , beforeDatasetsDraw( chart , args , pluginOptions)
        {
          var pdou1;
          var pdou2;
          var pdou3;

          overdata.map(data1=>{

            const {ctx , data} = chart;

            pdou1 = data1.pdou1;
            pdou2 = data1.pdou2;
            pdou3 = data1.pdou3;

            ctx.save();
            ctx.font='bolder 10px sans-serif';
            ctx.fillStyle = 'red';
            ctx.textAlign = 'center';
            ctx.fillText(' R:A:G' , chart.getDatasetMeta(0).data[0].x , chart.getDatasetMeta(0).data[0].y-5 );
            ctx.fillText(''+pdou1+':'+pdou2+':'+pdou3 , chart.getDatasetMeta(0).data[0].x , chart.getDatasetMeta(0).data[0].y+10 );

          })
  
          
        }}


        

  return (
    
    <div>
      <Navbar />

      <div style={{display:"flex"}}>
            
        <div style={{border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"14.65vw" , height:"2.7vw" , width:"68.8vw"}}>

        <p style={{height:"2.5vw",marginLeft:"13vw" , paddingTop:"0.2vw"  , fontStyle: "normal", fontWeight: "bold" ,fontSize: "1.5vw"  , fontStyle: "normal", fontWeight: "bold"  , color: "#FB4E0B" , width:"40vw"}}>Overview of Submission-Triage</p>

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


        <div style={{display:"flex" , marginTop:"3vw"}}>
        <Card style={{marginLeft:"1vw" , width:"10.2vw" , height:"5vw" , marginTop:"2vw"}}>
          
          <div style={{display:"flex"}}>
            <p style={{ width:"2vw", height:"2vw",marginLeft:"0.5vw" , marginTop:"1vw" , borderRadius:"50%" , backgroundColor:"#F2F5F7" , paddingTop:"0.3vw"}}><i className="fa fa-picture-o" aria-hidden="true" style={{color:"#DADADA"}}></i></p>
            <p style={{marginTop:"1vw" , marginLeft:"1.5vw" , fontSize:"1.5vw" , fontWeight:"bold" , color:"rgba(0, 0, 0, 0.7)"}} id="mydiv1" >{no_sum}</p>
            
          </div>
          <p style={{fontSize:"0.7vw" , marginTop:"-0.5vw" , textAlign:"center" , color:"#A1AEB7"}}>Number of Submissions</p>
        </Card>

        <Card style={{marginLeft:"1vw" , width:"10.2vw" , height:"5vw" , marginTop:"2vw"}}>
          
          <div style={{display:"flex"}}>
            <p style={{ width:"2vw", height:"2vw",marginLeft:"0.5vw" , marginTop:"1vw" , borderRadius:"50%" , backgroundColor:"#F2F5F7" , paddingTop:"0.3vw"}}><i className="fa fa-picture-o" aria-hidden="true" style={{color:"#DADADA"}}></i></p>
            <p style={{marginTop:"1vw" , marginLeft:"1.5vw" , fontSize:"1.5vw" , fontWeight:"bold" , color:"rgba(0, 0, 0, 0.7)"}} id="mydiv2" >{closed}</p>
          </div>
          <p style={{fontSize:"0.7vw" , marginTop:"-0.5vw" , textAlign:"center" , color:"#A1AEB7"}}>Closed Submissions</p>
        </Card>

        <Card style={{marginLeft:"1vw" , width:"10.2vw" , height:"5vw" , marginTop:"2vw"}}>
          
          <div style={{display:"flex"}}>
            <p style={{ width:"2vw", height:"2vw",marginLeft:"0.5vw" , marginTop:"1vw" , borderRadius:"50%" , backgroundColor:"#F2F5F7" , paddingTop:"0.3vw"}}><i className="fa fa-picture-o" aria-hidden="true" style={{color:"#DADADA"}}></i></p>
            <p style={{marginTop:"1vw" , marginLeft:"1.5vw" , fontSize:"1.5vw" , fontWeight:"bold" , color:"rgba(0, 0, 0, 0.7)"}} id="mydiv3" >{no_bind}</p>
          </div>
          <p style={{fontSize:"0.7vw" , marginTop:"-0.5vw" , textAlign:"center" , color:"#A1AEB7"}}>Number of Binds</p>
        </Card>

        <Card style={{marginLeft:"1vw" , width:"10.2vw" , height:"5vw" , marginTop:"2vw"}}>
          
          <div style={{display:"flex"}}>
            <p style={{ width:"2vw", height:"2vw",marginLeft:"0.5vw" , marginTop:"1vw" , borderRadius:"50%" , backgroundColor:"#F2F5F7" , paddingTop:"0.3vw"}}><i className="fa fa-picture-o" aria-hidden="true" style={{color:"#DADADA"}}></i></p>
            <p style={{marginTop:"1vw" , marginLeft:"1.5vw" , fontSize:"1.5vw" , fontWeight:"bold" , color:"rgba(0, 0, 0, 0.7)"}} id="mydiv4">{no_quote}</p>
          </div>
          <p style={{fontSize:"0.7vw" , marginTop:"-0.5vw" , textAlign:"center" , color:"#A1AEB7"}}>Number of Quotes</p>
        </Card>

        <Card style={{marginLeft:"1vw" , width:"10.2vw" , height:"5vw" , marginTop:"2vw"}}>
          
          <div style={{display:"flex"}}>
            <p style={{ width:"2vw", height:"2vw",marginLeft:"0.3vw" , marginTop:"1vw" , borderRadius:"50%" , backgroundColor:"#F2F5F7" , paddingTop:"0.3vw"}}><i className="fa fa-picture-o" aria-hidden="true" style={{color:"#DADADA"}}></i></p>
            <p style={{marginTop:"1vw" , marginLeft:"1vw" , fontSize:"1.5vw" , fontWeight:"bold" , color:"rgba(0, 0, 0, 0.7)"}} id="mydiv5">{new2}%:{renew2}%</p>
          </div>
          <p style={{fontSize:"0.7vw" , marginTop:"-0.5vw" , textAlign:"center" , color:"#A1AEB7"}}>New : Renewal</p>
        </Card>

        <Card style={{marginLeft:"1vw" , width:"10.2vw" , height:"5vw" , marginTop:"2vw"}}>
          
          <div style={{display:"flex"}}>
            <p style={{ width:"2vw", height:"2vw",marginLeft:"0.3vw" , marginTop:"1vw" , borderRadius:"50%" , backgroundColor:"#F2F5F7" , paddingTop:"0.3vw"}}><i className="fa fa-picture-o" aria-hidden="true" style={{color:"#DADADA"}}></i></p>
            <p style={{marginTop:"1vw" , marginLeft:"1vw" , fontSize:"1.5vw" , fontWeight:"bold" , color:"rgba(0, 0, 0, 0.7)"}} id="mydiv6">{primary2}%:{xs2}%</p>
          </div>
          <p style={{fontSize:"0.7vw" , marginTop:"-0.5vw" , textAlign:"center" , color:"#A1AEB7"}}>Primary : XS</p>
        </Card>

        
        </div>
         


        <div style={{display:"flex"}}>
        <Card style={{marginLeft:"1vw" , width:"10.2vw" , height:"5vw" , marginTop:"2vw"}}>
          
          <div style={{display:"flex"}}>
            <p style={{ width:"2vw", height:"2vw",marginLeft:"0.5vw" , marginTop:"1vw" , borderRadius:"50%" , backgroundColor:"#F2F5F7" , paddingTop:"0.3vw"}}><i className="fa fa-picture-o" aria-hidden="true" style={{color:"#DADADA"}}></i></p>
            <p style={{marginTop:"1vw" , marginLeft:"1.5vw" , fontSize:"1.5vw" , fontWeight:"bold" , color:"rgba(0, 0, 0, 0.7)"}} id="mydiv7">{quote_rate}%</p>
          </div>
          <p style={{fontSize:"0.7vw" , marginTop:"-0.5vw" , textAlign:"center" , color:"#A1AEB7"}}>Quote Rate on Closed</p>
        </Card>

        <Card style={{marginLeft:"1vw" , width:"10.2vw" , height:"5vw" , marginTop:"2vw"}}>
          
          <div style={{display:"flex"}}>
            <p style={{ width:"2vw", height:"2vw",marginLeft:"0.5vw" , marginTop:"1vw" , borderRadius:"50%" , backgroundColor:"#F2F5F7" , paddingTop:"0.3vw"}}><i className="fa fa-picture-o" aria-hidden="true" style={{color:"#DADADA"}}></i></p>
            <p style={{marginTop:"1vw" , marginLeft:"1.5vw" , fontSize:"1.5vw" , fontWeight:"bold" , color:"rgba(0, 0, 0, 0.7)"}} id="mydiv8">{bind_rate}%</p>
          </div>
          <p style={{fontSize:"0.7vw" , marginTop:"-0.5vw" , textAlign:"center" , color:"#A1AEB7"}}>Bind Rate on Closed</p>
        </Card>

        <Card style={{marginLeft:"1vw" , width:"10.2vw" , height:"5vw" , marginTop:"2vw"}}>
          
          <div style={{display:"flex"}}>
            <p style={{ width:"2vw", height:"2vw",marginLeft:"0.5vw" , marginTop:"1vw" , borderRadius:"50%" , backgroundColor:"#F2F5F7" , paddingTop:"0.3vw"}}><i className="fa fa-picture-o" aria-hidden="true" style={{color:"#DADADA"}}></i></p>
            <p style={{marginTop:"1vw" , marginLeft:"1.5vw" , fontSize:"1.5vw" , fontWeight:"bold" , color:"rgba(0, 0, 0, 0.7)"}} id="mydiv9">{retention_rate}%</p>
          </div>
          <p style={{fontSize:"0.7vw" , marginTop:"-0.5vw" , textAlign:"center" , color:"#A1AEB7"}}>Rentation Rate on Renewal</p>
        </Card>

        <Card style={{marginLeft:"1vw" , width:"10.2vw" , height:"5vw" , marginTop:"2vw"}}>
          
          <div style={{display:"flex"}}>
            <p style={{ width:"2vw", height:"2vw",marginLeft:"0.5vw" , marginTop:"1vw" , borderRadius:"50%" , backgroundColor:"#F2F5F7" , paddingTop:"0.3vw"}}><i className="fa fa-picture-o" aria-hidden="true" style={{color:"#DADADA"}}></i></p>
            <p style={{marginTop:"1vw" , marginLeft:"1.5vw" , fontSize:"1.5vw" , fontWeight:"bold" , color:"rgba(0, 0, 0, 0.7)"}} id="mydiv10">${tiv}Bn </p>
          </div>
          <p style={{fontSize:"0.7vw" , marginTop:"-0.5vw" , textAlign:"center" , color:"#A1AEB7"}}>Tiv</p>
        </Card>

        <Card style={{marginLeft:"1vw" , width:"10.2vw" , height:"5vw" , marginTop:"2vw"}}>
          
          <div style={{display:"flex"}}>
            <p style={{ width:"2vw", height:"2vw",marginLeft:"0.5vw" , marginTop:"1vw" , borderRadius:"50%" , backgroundColor:"#F2F5F7" , paddingTop:"0.3vw"}}><i className="fa fa-picture-o" aria-hidden="true" style={{color:"#DADADA"}}></i></p>
            <p style={{marginTop:"1vw" , marginLeft:"1vw" , fontSize:"1.5vw" , fontWeight:"bold" , color:"rgba(0, 0, 0, 0.7)"}} id="mydiv11">${gwp}M </p>
          </div>
          <p style={{fontSize:"0.7vw" , marginTop:"-0.5vw" , textAlign:"center" , color:"#A1AEB7"}}>Total GWP</p>
        </Card>

        <Card style={{marginLeft:"1vw" , width:"10.2vw" , height:"5vw" , marginTop:"2vw"}}>
          
          <div style={{display:"flex"}}>
            <p style={{ width:"2vw", height:"2vw",marginLeft:"0.5vw" , marginTop:"1vw" , borderRadius:"50%" , backgroundColor:"#F2F5F7" , paddingTop:"0.3vw"}}><i className="fa fa-picture-o" aria-hidden="true" style={{color:"#DADADA"}}></i></p>
            <p style={{marginTop:"1vw" , marginLeft:"1vw" , fontSize:"1.5vw" , fontWeight:"bold" , color:"rgba(0, 0, 0, 0.7)"}} id="mydiv12">{avg_time}Days</p>
          </div>
          <p style={{fontSize:"0.7vw" , marginTop:"-0.5vw" , textAlign:"center" , color:"#A1AEB7"}}>Average Time to Closure</p>
        </Card>

        </div>

        
        <div style={{display:"flex"}}>
        <Card  style={{border:"1px solid rgba(0,0,0,0.15)" , height:"12vw" , width:"17vw" , marginLeft:"1vw" , marginTop:"1vw"}}>
        <p style={{color:"black" , fontSize:"1vw" , textAlign:"left" , paddingTop:"0.5vw"  , marginLeft:"1vw"}}>Product Wise Distribution.</p>
        <p style={{marginLeft:"-10vw" , marginTop:"-1vw" , fontSize:"2vw" }}>{doughnut}%</p>
        <div style={{height:"8vw" , width:"8vw" , marginTop:"-5vw" , marginLeft:"8.2vw"}}>
          <Doughnut data={doudata} options={douoptions} />
        </div>  

        <div style={{height:"3.5vw" , width:"7vw" , marginTop:"-2.5vw" , marginLeft:"1vw" }}>
          <div style={{display:"flex" , marginTop:"0.5vw"}}>
            <div style={{backgroundColor:"#7E3EE2" , height:"0.5vw" , width:"0.8vw" , borderRadius:"30%"}}></div>
            <div style={{fontSize:"0.5vw",marginLeft:"0.2vw" , display:"flex"}}><div style={{fontSize:"0.5vw" , fontWeight:"bold"}}>{d1}%</div><div style={{marginleft:"0.2vw"}}> &nbsp; Property</div></div>
          </div>
        </div>

        <div style={{height:"3.5vw" , width:"7vw" , marginTop:"-1vw" , marginLeft:"1vw"}}>
          <div style={{display:"flex" , marginTop:"0.5vw"}}>
            <div style={{backgroundColor:"#0000ff" , height:"0.5vw" , width:"0.8vw" , borderRadius:"30%"}}></div>
            <div style={{fontSize:"0.5vw",marginLeft:"0.2vw" , display:"flex"}}><div style={{fontSize:"0.5vw" , fontWeight:"bold"}}>{d2}%</div><div style={{marginleft:"0.2vw"}}> &nbsp; Marine</div></div>
          </div>
        </div>

        <div style={{height:"3.5vw" , width:"7vw" , marginTop:"-1vw" , marginLeft:"1vw"}}>
          <div style={{display:"flex" , marginTop:"0.5vw"}}>
            <div style={{backgroundColor:"#9A7B4F" , height:"0.5vw" , width:"0.8vw" , borderRadius:"30%"}}></div>
            <div style={{fontSize:"0.5vw",marginLeft:"0.2vw" , display:"flex"}}><div style={{fontSize:"0.5vw" , fontWeight:"bold"}}>{d3}%</div><div style={{marginleft:"0.2vw"}}> &nbsp; Cyber</div></div>
          </div>
        </div>

      </Card>


      <Card style={{height:"12vw" , width:"15.5vw" , marginLeft:"1vw" , marginTop:"1vw" , border:"1px solid rgba(0,0,0,0.15)"}}>
      <p style={{ textAlign:"center" , fontSize:"0.8vw" , marginTop:"0.5vw" , fontStyle:"normal" , fontWeight:"bold"}}> Submission & Quote (Product Wise) </p>
      <div style={{height:"8vw" , width:"15vw" , marginLeft:"0.5vw" , marginTop:"-0.5vw"}}>
      <Bar data={sbdata} width="270%" options={sboptions} />
      </div>
      <div style={{display:"flex"}}><div style={{backgroundColor:"#EE6002" , borderRadius:"50%" , height:"0.5vw" , width:"0.5vw" , marginLeft:"1vw" , marginTop:"0.9vw"}}></div><div style={{fontSize:"0.5vw" , marginLeft:"0.5vw" , marginTop:"0.9vw"}}># of Submissions</div><div style={{backgroundColor:"#26A69A" , borderRadius:"50%" , height:"0.5vw" , width:"0.5vw", marginTop:"0.9vw" , marginLeft:"1vw"}}></div><div style={{fontSize:"0.5vw" , marginLeft:"0.5vw" , marginTop:"0.9vw"}}># of Quotes</div></div>
      </Card>


      <Card style={{height:"12vw" , width:"31.7vw" , marginLeft:"1vw" , marginTop:"1vw" , border:"1px solid rgba(0,0,0,0.15)"}}>
      <p style={{ textAlign:"center" , fontSize:"0.8vw" , marginTop:"0.5vw" , fontStyle:"normal" , fontWeight:"bold"}}> Submission & Quote (Month Wise) </p>
      <div style={{height:"10vw" , width:"30vw" , marginLeft:"0.5vw" , marginTop:"-0.5vw"}}>
      <Bar data={sbdata1} width="700%" height="185%" options={sboptions} />
      </div>
      <div style={{display:"flex"}}><div style={{backgroundColor:"#EE6002" , borderRadius:"50%" , height:"0.5vw" , width:"0.5vw" , marginLeft:"1vw" , marginTop:"0.9vw"}}></div><div style={{fontSize:"0.5vw" , marginLeft:"0.5vw" , marginTop:"0.9vw"}}># of Submissions</div><div style={{backgroundColor:"#26A69A" , borderRadius:"50%" , height:"0.5vw" , width:"0.5vw", marginTop:"0.9vw" , marginLeft:"1vw"}}></div><div style={{fontSize:"0.5vw" , marginLeft:"0.5vw" , marginTop:"0.9vw"}}># of Quotes</div></div>
      </Card>

      </div>

      <div style={{display:"flex"}}>

      <Card style={{border:"1px solid rgba(0,0,0,0.15)" , height:"10vw" , width:"16.2vw" , marginTop:"1vw" , marginLeft:"1vw"}}>
        <p style={{ fontSize:"0.8vw" , marginTop:"0.5vw"}}>Quote , Bind & Retentation Rate</p>
        <Line options={options} data={ldata} height="110%" style={{marginTop:"-1vw"}}/>
        <div style={{display:"flex"}}><div style={{backgroundColor:"#EE6002" , borderRadius:"10%" , height:"0.2vw" , width:"0.8vw" , marginLeft:"1vw" , marginTop:"0.85vw"}}></div><div style={{fontSize:"0.5vw" , marginLeft:"0.5vw" , marginTop:"0.7vw"}}>Retentation</div><div style={{backgroundColor:"#6200EE" , borderRadius:"10%" , height:"0.2vw" , width:"0.8vw", marginTop:"0.9vw" , marginLeft:"1vw"}}></div><div style={{fontSize:"0.5vw" , marginLeft:"0.8vw" , marginTop:"0.7vw"}}>Quotes</div><div style={{backgroundColor:"#26A69A" , borderRadius:"10%" , height:"0.2vw" , width:"0.8vw", marginTop:"0.9vw" , marginLeft:"1vw"}}></div><div style={{fontSize:"0.5vw" , marginLeft:"0.5vw" , marginTop:"0.7vw"}}>Bind</div></div>
      </Card>

      <Card style={{border:"1px solid rgba(0,0,0,0.15)" , height:"10vw" , width:"24vw" , marginTop:"1vw" , marginLeft:"1vw"}}>
        <p style={{ fontSize:"0.8vw" , marginTop:"0.5vw"}}>Quote , Bind & Retentation Rate</p>
        <Line options={options5} data={ldata1} height="75%" style={{marginTop:"-1vw"}}/>
        <div style={{display:"flex"}}><div style={{backgroundColor:"#EE6002" , borderRadius:"10%" , height:"0.2vw" , width:"0.8vw" , marginLeft:"1vw" , marginTop:"0.85vw"}}></div><div style={{fontSize:"0.5vw" , marginLeft:"0.5vw" , marginTop:"0.7vw"}}>Retentation</div><div style={{backgroundColor:"#6200EE" , borderRadius:"10%" , height:"0.2vw" , width:"0.8vw", marginTop:"0.9vw" , marginLeft:"1vw"}}></div><div style={{fontSize:"0.5vw" , marginLeft:"0.8vw" , marginTop:"0.7vw"}}>Quotes</div><div style={{backgroundColor:"#26A69A" , borderRadius:"10%" , height:"0.2vw" , width:"0.8vw", marginTop:"0.9vw" , marginLeft:"1vw"}}></div><div style={{fontSize:"0.5vw" , marginLeft:"0.5vw" , marginTop:"0.7vw"}}>Bind</div></div>
      </Card>

      <Card style={{border:"1px solid rgba(0,0,0,0.15)" , height:"10vw" , width:"24vw" , marginTop:"1vw" , marginLeft:"1vw"}}>
        <p style={{ fontSize:"0.8vw" , marginTop:"0.5vw"}}>RAG Distribution</p>
        <div style={{height:"8vw" , width:"8vw" , marginTop:"-2.5vw" , marginLeft:"8.2vw"}}>
          <Doughnut data={doudata1} options={douoptions1} plugins = {[textCenter]} />
        </div> 
        <div style={{display:"flex"}}><div style={{backgroundColor:"#007F00" , borderRadius:"50%" , height:"0.5vw" , width:"0.5vw" , marginLeft:"1vw" , marginTop:"0.9vw"}}></div><div style={{fontSize:"0.5vw" , marginLeft:"0.5vw" , marginTop:"0.9vw"}}>Low</div><div style={{backgroundColor:"#FB4E0B" , borderRadius:"50%" , height:"0.5vw" , width:"0.5vw", marginTop:"0.9vw" , marginLeft:"7vw"}}></div><div style={{fontSize:"0.5vw" , marginLeft:"0.5vw" , marginTop:"0.9vw"}}>Medium</div><div style={{backgroundColor:"#F90000" , borderRadius:"50%" , height:"0.5vw" , width:"0.5vw", marginTop:"0.9vw" , marginLeft:"8vw"}}></div><div style={{fontSize:"0.5vw" , marginLeft:"0.5vw" , marginTop:"0.9vw"}}>High</div></div>
      </Card>


      </div>




      </div>

        

      <div style={{border:"1px solid rgba(0,0,0,0.15)" , width:"16.5vw"}}>
      <Link to="/" style={{color: "#898C81" , textDecoration:"0px" , fontSize:"13px", marginLeft:"-1vw", marginTop:"11vw" , fontWeight:"lighter" , marginBottom:"0.5vw", paddingTop:"1vw" , fontSize:"1.2vw" }} ><i className="fa fa-power-off" aria-hidden="true" style={{fontWeight:"lighter" , marginTop:"0.5vw"}} onClick={rem}></i></Link>
      <Link to="/overview" style={{color: "#898C81" , textDecoration:"0px" , fontSize:"13px", marginLeft:"3vw", marginTop:"11vw" , fontWeight:"bold" , marginBottom:"0.5vw", paddingTop:"1vw" , fontSize:"1.2vw" }} ><i class="bi bi-house-fill" aria-hidden="true" style={{fontWeight:"bolder" , marginTop:"0.5vw"}}></i></Link>
      <Link  style={{color: "#898C81" , textDecoration:"0px" , fontSize:"13px", marginLeft:"3vw", marginTop:"11vw" , fontWeight:"lighter" , marginBottom:"0.5vw", paddingTop:"1vw" , fontSize:"1.2vw" }} onClick={gob}><i className="bi bi-caret-left-fill" aria-hidden="true" style={{fontWeight:"lighter" , marginTop:"0.5vw"}} ></i></Link>
      </div>



      </div>
      

      <div style={{border:"1px solid rgba(0,0,0,0.15)" , marginLeft:"83.4vw" , height:"43.6vw" , width:"16.5vw"}}>
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

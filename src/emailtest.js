import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState , useEffect } from 'react';

export default function Emailtest() 
{
    const [message , setMessage] = useState('');
    const [email , setEmail] = useState('');

    const validation = (e) =>
    {
        e.preventDefault();
        const reg = /[a-zA-Z0-9]+@[thapar]+\.[edu]/g;
        if( reg.test(email))
        {
            setMessage("Valid");
        }
        else
        {
            setMessage("Not Valid");
        }
    }

    const handleOnChange =(e)=>
    {
        e.preventDefault();
        setEmail(e.target.value);
    }

  return (
    <div>
      <Form>
        <Form.Control required onChange={handleOnChange} value={email} style={{marginLeft:"1vw" , marginTop:"1vw" , width:"10vw"}} type="email" placeholder=" Type Here...">

        </Form.Control>
        <Form.Control onClick={validation} style={{marginLeft:"1vw" , color:"white" , backgroundColor:"black", marginTop:"1vw" , width:"10vw"}} type="submit">

        </Form.Control>
      </Form>

      <div>{message}</div>
    </div>
  )
}

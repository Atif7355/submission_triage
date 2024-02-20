import './signup.css';
import exl from './image.png';
import { useState , useEffect } from "react";
import ReactDOM from "react-dom/client";
import rectangle5 from './Rectangle5.png';
import cr from './cr.png';
import Form from 'react-bootstrap/Button';
import square from './square.png';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function Signup() 
{

  const [users, setUsers] = useState([]);
  const [userdata, setUserData] = useState([]);

  useEffect(() => {
      getUsers();
  }, []);

  function getUsers() {
      axios.get('http://localhost/api/users/').then(function(response) {
          console.log(response.data);
          setUsers(response.data);
      });
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

  const deleteUser = (id) => {
      axios.delete(`http://localhost/api/user/${id}/delete`).then(function(response){
          console.log(response.data);
          getUsers();
      });
  }

  const [username, setUsername] = useState('');
  const [product, setProduct] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    userdata.map(udata => {

    if( udata.email ==  username && udata.password == password )
    {
    
      const getBase64 = (file) => {
        return new Promise((resolve,reject) => {
           const reader = new FileReader();
           reader.onload = () => resolve(reader.result);
           reader.onerror = error => reject(error);
           reader.readAsDataURL(file);
           return reader.readAsDataURL(file);
        });
      }

    localStorage.setItem('Name', udata.name);
    localStorage.setItem('Email', udata.email);
    localStorage.setItem('Password', udata.password);
    localStorage.setItem('Product', udata.product );
    localStorage.setItem('img' , udata.imurl );

    getBase64(udata.img).then(base64 => {
      localStorage.setItem("fileBase64" , base64);
      console.log("file stored",base64);
    })

    console.log(username); 
    console.log(product); 
    console.log(password);
    console.log(udata.name); 
    console.log(udata.email); 
    console.log(udata.password);
    console.log(localStorage.getItem("Email"));
    navigate("/overview");

    toast.success("Logged In !!!!");

    }
    });
    }

  return (
    <div className="bg">
      <ToastContainer/>
             
      <img className="image"  src={exl} style={{marginTop:"0px"}} />
      <p className="title" style={{marginLeft:"10px"}} >Insurance Solutions</p>
      <p className="wlcm">Welcome to the EXL solution suite</p>
      <p className="title1">Products to Suite your Requirements</p>
      
      
      <div className="role_def">
           <div className='mask'>🔘</div>
            <p className="role_u">&nbsp;&nbsp;&nbsp;&nbsp;Cross Sell and Product Recommendation {"\n"}</p><br/>
      </div>
      <p className="role_b">Functionality to support proposal of next best 
            product for your customer.</p>

      <div className="role_def1">
        <div className="mask" ></div>
      <p className="role_u">🔘&nbsp;&nbsp;&nbsp;&nbsp;Bordereau<br/></p>
      </div>
      <p className="role_b">An end-to-end mapping and insights tool for BDX.</p>


      <div className="role_def2" >
      <div className="mask" ></div>
      <p className="role_u">🔘&nbsp;&nbsp;&nbsp;&nbsp;Submission Triage <br/></p>
      </div>
      <p p className="role_b">Functionality to prioritize submissions recieved from
      Brokers with multiple factors working in background to 
      drive<br/>the decision engine</p>



      <div className="log_in">
      <div className="log_tag">Log In ...</div>

      <form onSubmit={handleSubmit}>
      <select className="form-control" value={product}  onChange={(e)=>setProduct(e.target.value)} name="product" style={{width:"25.5vw" , height:"2.5vw" , fontStyle:"normal"}}>
      <option >Select Product</option>
      <option id="option" value="Cross-Sell"><pre>🔲&emsp;</pre>Cross Sell and Recommendations</option>
      <option id="option" value="Bordereau">🔲&emsp;Bodereau Data Management</option>
      <option id="option" value="Submission-Triage">🔲&emsp;Submission Triage</option>
      </select>

      <input id="email" class="form-control" type="email" style={{width:"25.5vw" , height:"2.5vw"}} placeholder="Email" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>

      <input id="password" class="form-control" type="password" style={{width:"25.5vw" , height:"2.5vw"}} placeholder="Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />

      <input id="submit" class="form-control" type="submit"  style={{width:"25.5vw" , height:"2.5vw" , backgroundColor:"#FB4E0B" , color:""}} value="Continue" />

      </form>

      <div className="signup_option">
      </div>

      </div>

</div>
  );
}

export default Signup;

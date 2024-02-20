import './signup1.css';
import exl from './image.png';
import rectangle5 from './Rectangle5.png';
import cr from './cr.png';
function Signup1() 
{
  return (
    <div className="bg">
      <img className="image"  src={exl} />
      <p className="title">Insurance Solutions</p>
      
      <a href="#" className="button1">Super User</a>
      <a href="#" className="button2">Senior Leadership</a>
      <a href="#" className="button3">Team Leader</a>
      <a href="#" className="button4">Underwriter</a>
      <a href="#" className="button5">Admin</a>

    </div>
  );
}

export default Signup1;

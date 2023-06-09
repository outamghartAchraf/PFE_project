import { FetContext } from '../../context/ContextD';
import './Headre.css'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';
import axios from 'axios';
import logo from '../../assets/images/logo.png'

import { RiLogoutCircleRLine } from 'react-icons/ri';
import { IoIosLogIn } from 'react-icons/io';
import { BiRegistered } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';




const Header = () => {
 
  const cookies = new Cookies()
  const token = cookies.get('Bearer');

  const HandleLogout = async () => {
    await axios.post(
      'http://127.0.0.1:8000/api/logout',
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  
    cookies.remove('Bearer');
    window.location.pathname = '/';
  };

  

 
  return (
    <div className='navbar'>
      
        <a href=''>
          <img src={logo} width="125px" />
        </a>
        <nav className='nav'>
            <Link to='/' href='' >Home</Link>
            <Link to='/product'>Product</Link>
            <Link to='/service1'>Service</Link>
        </nav>
        <div className='group-btn'>
        {!token ? (
         
          <div className="gouplogin">
          <Link to='/register' className='btnn'>
            Register<BiRegistered size='30px'/>
            </Link>
            
            <Link to='/login' className='btnn'>Login <IoIosLogIn size='30px'/></Link>
             
          </div>
            ):(
              <div style={{display:'flex'}}>
       
         <Link to='/Dashboard' className='btnn'>Dashboard</Link>
         <Link to='/Dashboard' className='btnn'>Shopping(0) <FaShoppingCart size='30px'/></Link>

          <div  className='btnn' onClick={HandleLogout} > LOGOUT<RiLogoutCircleRLine size='30px' /></div>

           

 




          </div>
            )  
          
          }
        

            
            
        
        </div>
    </div>
  )
}

export default Header
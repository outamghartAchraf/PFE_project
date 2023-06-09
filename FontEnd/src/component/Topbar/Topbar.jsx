import { Link } from 'react-router-dom'
import './Topbar.css'
import logo from '../../assets/images/logo.png'

const Topbar = () => {
  return (
    <div className='topbar container top-bar'>
      <div>
      <h1><img src={logo} width='100px'/> </h1>
      </div>
      <div>
      <Link to='/' className='btn1' >Go To Website</Link>
      </div>
    </div>
  )
}

export default Topbar
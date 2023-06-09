import React from 'react'
import './Footer1.css'
import logo1 from '../../assets/images/l1.png'
import logo2 from '../../assets/images/payment-logo.png'
import logo3 from '../../assets/images/l2.png'
import logo4 from '../../assets/images/l4.png'
 
const Footer = () => {
  return (
 
    <footer>

  <div className="footer">
    <div className="container">
      <div className="box">
        <h3>ACHRAF SHOP</h3>
        <ul className="social">
          <li>
            <a href="/" className="facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="/" className="twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="/" className="youtube">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
        <p className="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur
        </p>
      </div>
     
      <div className="box">
        <div className="line">
          <i className="fas fa-map-marker-alt fa-fw"></i>
          <div className="info">MAROC régien BENI MELLAL</div>
        </div>
        <div className="line">
          <i className="far fa-clock fa-fw"></i>
          <div className="info">Business Hours: From 10:00 To 18:00</div>
        </div>
        <div className="line">
          <i className="fas fa-phone-volume fa-fw"></i>
          <div className="info">
            <span>+2123456789</span>
            <span>+2128765432</span>
          </div>
        </div>
      </div>
      <div class="">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
         
      </div>
    </div>
    <p className="copyright"  > by ACHRAF OUTAMGHART</p>
  </div>

  </footer>
  


  )
}

export default Footer

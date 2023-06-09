import React from 'react'
import './Service.css'
import icon1 from '../../assets/images/icone.png'
import icon2 from '../../assets/images/ser.png'
import icon3 from '../../assets/images/service-promo-4.png'
import icon4 from '../../assets/images/service-promo-2.png'
import Slide from 'react-reveal/Slide';


const Service = () => {
  return (
 
    <section className="cards services"  >
    <h2 className="title">Services</h2>
    <acticle className="content">
        <article className="art1">
            <img src={icon1} className="icon" alt='icon' />
            <h1 className="h0">service promo</h1>
            <p>Get 10% cash back, free shipping, free returns, and more at 1000+ top retailers!   </p>

        </article>
        <article className="art1">
            <img src={icon2} className="icon" alt='icon' />
            <h1 className="h0">service promo</h1>
            <p>Pay with the world’s most popular and secure payment methods.  </p>
        </article>

        <article class="art1">
            <img src={icon3} className="icon" alt='icon'/>
            <h1 className="h0">service promo</h1>
            <p>Card for the other 30% of their purchases at a rate of 1% cash back. </p>
        </article>


        <article className="art1">
            <img src={icon4} className="icon" alt='icon' />
            <h1 className="h0">service promo</h1>
            <p>100% satisfaction guaranteed, or get your money back within 30 days!  </p>
        </article>
        
         
    </acticle>
     
    </section>
 
  )
}

export default Service

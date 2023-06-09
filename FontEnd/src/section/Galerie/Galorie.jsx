import React from 'react'
import  './Galorie.css';
import img1 from '../../assets/images/arr_img3.jpg'
import img2 from '../../assets/images/arr_img5.jpg'
import img3 from '../../assets/images/g_img7.jpg'
import img4 from '../../assets/images/g_img5.jpg'
import img5 from '../../assets/images/g_img9.jpg'
import Slide from 'react-reveal/Slide';


const Galorie = () => {
  return (
 
<div className="gallery">
  
<h1>gallery</h1>
    <div className="main-gallery">
        <div className="inner-gallery">
            <img src={img1}  alt=""/>
            <img  src={img2} alt=""/>
         </div>
        <div className="inner-gallery">
            <div className="girl">
                <img  src={img3} alt=""/>
            </div>
            
        </div>
        <div className="inner-gallery">
            <img  src={img4} alt=""/>
            <img  src={img5} alt=""/>
        </div>
    </div>
    

    </div>
 
 
  )
}

export default Galorie

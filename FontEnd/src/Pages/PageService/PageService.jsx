import React from 'react'
import { Header } from '../../section'
import Service from '../../section/Service/Service'
import Footer from '../../section/Footer1/Footer1'
import './PageService.css'

const PageService = () => {
  return (
   <>
    <Header/>
   
    <div className='cont'>
    <Service/>
    <Footer/>

    </div>
    </>
  )
}

export default PageService
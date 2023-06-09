import { FetContext } from '../../context/ContextD'
 
import Header from '../Header/Header'
import { Footer, Hero } from '..'
import './Home.css'
import Galorie from '../Galerie/Galorie'
import Service from '../Service/Service'
import Banar from '../Banar/Banar'
import ProductList from '../ProductList/ProductList'
import Footer1 from '../Footer1/Footer1'


const Home = () => {
 
  return (
    <div>
      <Header/> 
        
        <Hero/> 

        <Galorie/>

        <Service/>

        <Banar/>
        <ProductList/>
        <Footer1/>
        
          
         
       
    </div>
  )
}

export default Home
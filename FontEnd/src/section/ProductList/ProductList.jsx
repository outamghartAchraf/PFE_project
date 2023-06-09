import React from 'react'
import CardPro from '../../component/CardPro/CardPro'
 import DataPro from './DataPro'
 import { useEffect , useState } from 'react'
 import './ProductList.css'
import { FetContext } from '../../context/ContextD'
import axios from 'axios'

const ProductList = () => {
    const [runUseEffect, setRub] = useState(0);
    const [products , setProducts] = useState([]);
    const authcont = FetContext();
    const token = authcont.auth.token;
  
    useEffect(() => {
      axios
        .get("http://127.0.0.1:8000/api/product/show", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((data) => setProducts(data.data));
    }, [runUseEffect]);

   
    const MapData =   products.length >=1?(products.map((item)=>{

        return <CardPro key={item.id}
        
        item={item}
        
        />
    
     })):(<h1>found</h1>)
    
    
    
      return (
        <div className='container-fluid p-section' >
              <h1 className='titlep'>Products</h1>

              <div className='groupbtn'>
              <button class="buttonProduct">All </button>
              <button class="buttonProduct">Men </button>
              <button class="buttonProduct">Women </button>
              <button class="buttonProduct">Technologie </button>
              </div>
                
         
          
           <div className='container c-section'>
           
         
           
        
          {MapData}
        
         
          
         </div>
         </div>
      )
}

export default ProductList
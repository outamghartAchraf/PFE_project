
import { Col } from 'react-bootstrap'
import './CardPro.css'
import { FaShoppingCart } from 'react-icons/fa';


const CardPro = ({item}) => {
  return (
    <Col className="col-3 mx-6 d-flex my-3 sect-card">
    <div class="card">
    <img src={item.image} alt="Card 1"/>
    <h2>{item.title}</h2>
    <p>{item.description}</p>
    <button className='btn1 btn-primary' ><FaShoppingCart/></button>
  </div>
  </Col>
  )
}

export default CardPro
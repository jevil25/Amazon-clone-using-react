import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {

  console.log("this is checkout.js");

  const [{ basket, user }, dispatch] = useStateValue();
  // console.log(basket);
  // console.log(user)
  // let newuser=JSON.parse(JSON.stringify(user))
  // console.log(newuser.email);
  return (
    <div className='Checkout'>
       <div className="checkout__left">
        <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
        <div>
          {/* <h3>{user.email}</h3> */}
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map(item => (
            <CheckoutProduct 
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
          />
          ))}
        </div>
       </div>
       <div className="checkout__right">
        <Subtotal />
       </div>
    </div>
  )
}

export default Checkout

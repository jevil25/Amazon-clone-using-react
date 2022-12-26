import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';

function order({ order }) {
    console.log(order);
    console.log("1");
  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{ moment.inix(order.data.created).format('MMMM Do YYYY, h:mma') }
        <small>{order.id}</small>
      </p>
      {order.data.basket.map(item => (
        <CheckoutProduct 
        id={item.id}
        title={item.title}
        price={item.price}
        rating={item.rating}
        image={item.image}
        hidebutton
      />
      ))}
    </div>
  )
}

export default order

import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct(id,title,price,rating,image) {
  return (
    <div className='checkoutProduct'>
        <img className="checkoutProduct__image" src={image} alt="" />
        <div className="checkoutProduct__info">
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='chechoutProduct__rating'>
            {Array(rating).fill().map(()=>(
                    <p>⭐</p>
                ))}
            </div>
            <button>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct

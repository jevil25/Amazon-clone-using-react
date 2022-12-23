import React from 'react';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

function Payment() {
    const [{basket,user},dispatch]=useStateValue();

  return (
    <div className='payment'>
        <div className="payment__container">
            <h1>
                Checkout {
                    <Link to='/checkout'>({basket.length} items)</Link>
                }
            </h1>

            <div className="payment__section">
                <div className="payment__title">
                    <h2>Delivery Address</h2>
                </div>
                <div className="payment__address">
                    <p>123 shirva</p>
                    <p>Udupi,karnataka</p>
                    <p>India</p>
                </div>
            </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h2>Review items and delivery</h2>
                </div>
                <div className="payment__items">
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
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">

                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment

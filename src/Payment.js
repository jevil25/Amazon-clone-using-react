import React, { useState } from 'react';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import { CardElement, useElements,useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';


function Payment() {
    const [{basket,user},dispatch]=useStateValue();

    const stripe = useStripe();
    const Elements = useElements();

    const {error, setError} = useState(null);
    const {disabled, setDisabled} = useState(null);

    function handleSubmit(e){

    }


    function handleChange(e){
        //displays error while entering card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment__priceContainer">
                            <CurrencyFormat 
                                renderText={(value) => (
                                    <>
                                        <h3>Order Total: {value}</h3>
                                    </>
                            )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />
                            </div>
                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment

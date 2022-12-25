import React, { useEffect, useState } from 'react';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements,useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import axios from './axios';

function Payment() {
    const navigate = useNavigate();
    const [{basket,user},dispatch]=useStateValue();

    const stripe = useStripe();
    const Elements = useElements();

    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        //used to update amount to stripe when user adds or deletes product
        async function getClientSecret(){
            const response=await axios({
                method: 'post',
                //Stripe expects the total in a currencies subunits
                url: `/payment/create?total=${getBasketTotal(basket)*100}`
            });
            // console.log(response)
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket])

    console.log("the secret is: ",clientSecret)
    async function handleSubmit(e){
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: Elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent is payment confirmation

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            navigate('/orders');
        })

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
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment

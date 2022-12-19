import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';

function Subtotal() {
  const initialvalue=0;
  const [{ basket,total }, dispatch] = useStateValue();
  console.log(total);
  return (
    <div className='subtotal'>
      <CurrencyFormat 
        renderText={(value) => (
            <>
                <p>
                    Subtotal ({ basket.length } items): <strong>${ total.reduce((result,number) => result+number,initialvalue) }</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type="checkbox" />This order contains a gift
                </small>
            </>
     )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        />
        <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal

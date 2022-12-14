import React, { useEffect,useState } from 'react';
import './Orders.css';
import Order from './Order';
import { useStateValue } from './StateProvider';
import { db } from './firebase';


function orders() {
  const [{ basket, user },dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    console.log(JSON.parse(JSON.stringify(user)));
    if(user){
      console.log(user.uid);
      db.collection('users').doc(user.uid).collection('orders').orderBy('created','desc').get().then(snapShot => {
        // console.log(JSON.parse(JSON.stringify(snapShot)));
        setOrders(snapShot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        })))
    }).catch(error => {
      console.error(error); // Log any errors that might occur
    }); 
      
      }else{
        setOrders([])
      }
  },[user])


  return (
    <div className='orders'>
      <h1>Your Orders</h1>

      <div className='orders__order'>
        {/* {console.log(orders)} */}
        {orders.map(order => (
          <Order order={ order } />
        ))}
      </div>
    </div>
  )
}

export default orders

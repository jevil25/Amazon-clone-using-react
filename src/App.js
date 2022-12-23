import './App.css';
import React from 'react';
import {useEffect, useState} from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads

    auth.onAuthStateChanged(authUser => {
      // console.log("THE USER IS >>> ",authUser);

      if(authUser){
        // the user just logged in or user was logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        //the user is logged out or logging out
        dispatch({
          type:`SET_USER`,
          user:null
        })
      }
    })
  },[])

  return (
    <>
      <Router>
        <div className="App">
            <Routes>
            <Route path="/" element={[<Header />,<Home/>]} />
            <Route path="/checkout" element={[<Header />,<Checkout />]} />
            <Route path="/login" element={<Login />} />
            <Route path="/payment" element={[<Header />,<Payment />]} />
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

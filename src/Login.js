import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "./Login.css";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className='Login'>
        <Link to='/'>
            <img className='Login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
        </Link>
        <div className="Login__container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" required/>
                <h5>Password</h5>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" required/>

                <button className='Login__signInButton'>Sign In</button>
            </form>

            <p>
            By signing-in you agree to the AMAZON FAKE
            CLONE Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice
            and our Interest-Based Ads Notice.
            </p>

            <button className='Login__registerButton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login

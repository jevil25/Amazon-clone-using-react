import { Link, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import "./Login.css";
import { auth } from "./firebase";

function Login() {
    console.log("this is login.js");
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const signIn = e => {
    //     e.preventDefault();
        
    //     //firebase login stuff here
    // }

    async function signIn(e){
        e.preventDefault();
        try{
            const newauth = await auth.signInWithEmailAndPassword(email, password);
            if(newauth){
                navigate('/');
            }
        }catch(error){
            alert(error.message);
        }
    }

    async function register(e){
        e.preventDefault();
        try{
            //sucessfully created a user
            let newauth = await auth.createUserWithEmailAndPassword(email,password);
            // console.log(newauth);
            // console.log(auth);
            if(newauth){
                navigate('/');
            }
        }catch(error){
            alert(error.message)
        }
    }

    // const register = e => {
    //     e.preventDefault();

    //     auth.createUserWithEmailAndPassword(email,password).then((auth) => {
    //         //sucessfully created a user
    //         console.log(auth);
    //     }).catch(error => alert(error.message));
    //     //firebase register stuff here
    // }

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

                <button className='Login__signInButton' type='submit' onClick={signIn}>Sign In</button>
            </form>

            <p>
            By signing-in you agree to the AMAZON FAKE
            CLONE Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice
            and our Interest-Based Ads Notice.
            </p>

            <button onClick={register} className='Login__registerButton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login

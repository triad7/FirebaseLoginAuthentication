import React from 'react'
import '../style.css';
import {database} from './firebaseConfig'
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  

  const register = useNavigate()

  const home = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    
    createUserWithEmailAndPassword(database, email, password).then(data=>{
        console.log(data, "authData")
        home('/home') 
    }).catch(err=>{
        alert(err.code)
    })

}

    const handleSignup = () => {
        register('/register')
    }

  return (
    <div className='form-container'>
    <div className='form-wrapper'>
    <span className='logo'>Log In</span>

    <form onSubmit={(e) => handleSubmit(e)} autoComplete='on'> 
    <input name='email' placeholder='enter your email' />
    <input name='password' type='password' placeholder='enter your password' />
    <button type='submit'>SignIn</button>
  </form>
  
  <p >Don't have an account? 
    <br/>
    <br/> 
    <span><button onClick={handleSignup}>Sign Up!</button></span></p>
  </div>
</div>
  )
}

export default SignIn
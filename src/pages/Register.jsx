import React from 'react'
import '../style.css';
 import {database} from './firebaseConfig'
 import { createUserWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const home = useNavigate()
  const register = useNavigate()
  const handleRegister = () => {
    register('/home')
  }

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
  

  return (
    <>
    <div className='form-container'>
    <div className='form-wrapper'>
    <span className='logo'> Register  </span>
        <form onSubmit={(e) => handleSubmit(e)}>
            
            <input type='email' placeholder='enter existing email' />
            <input type='password' placeholder='enter a strong password' />
        </form>
    <button onClick={handleRegister} type='submit'> Register</button>
    </div>    
    </div>
    </>
  )
}

export default Register
import React from 'react'
import '../style.css'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import {database} from './firebaseConfig'

const Home = () => {

    const signup = useNavigate()
    const history = useNavigate()

    const handleSignUp = () => {
        signup('/')
    }

    const handleSignOut = () => {
        signOut(database).then(val=>{
            history('/')
            console.log(database)
        })
    }

  return (
    <React.Fragment>
    <div className='success-form'>
    <h1>You've succesfully signed in!</h1>
    <h3>You Email and Password have been authenticated and updated in Firebase</h3>
    <h5>To Go Back To Login Page Press 
        <br/>
        <button className='home-button' onClick={handleSignUp}>Go Back</button>
    </h5>
    <h5> Or You Can Simply Logout 
        <br/>
        <button className='home-button' onClick={handleSignOut}> Log Out</button>
    </h5>
    </div>
    </React.Fragment>
  )
}

export default Home
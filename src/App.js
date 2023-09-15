import React from 'react'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
 <>
 <BrowserRouter>
 <Routes>
   <Route path='/' element={<SignIn />} />
   <Route path='/register' element={<Register />} />
   <Route path='/home' element={<Home />} />
 </Routes>
 </BrowserRouter>
 </>
  )
}

export default App
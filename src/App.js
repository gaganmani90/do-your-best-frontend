// eslint-disable-next-line no-use-before-define
import React from 'react'
import './App.css'
import DYBNavigation from './DYBNavigation'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import { Container } from 'react-bootstrap'
import Signup from './components/creds/signup'
import Login from './components/creds/login'
import PrivateRoute from './components/privateRoute'
import ForgetPassword from './components/creds/forgetpassword'
import About from './screens/About'
import ContactUs from './screens/ContactUs'

function App () {
  return (
        <Container>
            <div className="App">
                <DYBNavigation/>
                <Routes>
                    <Route path='/' element={<PrivateRoute/>}>
                        <Route path='/' element={<Home/>}/>
                    </Route>
                    <Route exact path="/About" element={<About/>}/>
                    <Route exact path="/ContactUs" element={<ContactUs/>}/>
                    <Route exact path="/Signup" element={<Signup/>}/>
                    <Route exact path="/Login" element={<Login/>}/>
                    <Route exact path="/forget-password" element={<ForgetPassword/>}/>
                </Routes>
            </div>
        </Container>
  )
}

export default App

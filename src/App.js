// eslint-disable-next-line no-use-before-define
import React from 'react'
import './App.css'
import DYBNavigation from './DYBNavigation'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import { Container } from 'react-bootstrap'
import Signup from './components/signup'
import Login from './components/login'
import PrivateRoute from './components/privateRoute'
import ForgetPassword from './components/forgetpassword'

function App () {
  return (
        <Container>
            <div className="App">
                <DYBNavigation/>
                <Routes>
                    <Route path='/' element={<PrivateRoute/>}>
                        <Route path='/' element={<Home/>}/>
                    </Route>
                    <Route exact path="/Signup" element={<Signup/>}/>
                    <Route exact path="/Login" element={<Login/>}/>
                    <Route exact path="/forget-password" element={<ForgetPassword/>}/>
                </Routes>
            </div>
        </Container>
  )
}

export default App

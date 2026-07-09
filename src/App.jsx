import { useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
function App() {


  return (
    <>
    <Navbar/>
     <Login/>
     <Dashboard/>
    </>
  )
}

export default App

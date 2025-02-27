import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import "./index.css"
import Signup from './pages/Signup';
import Error from './pages/Error';
import Home from './pages/home';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>
  )
}

export default App

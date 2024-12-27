import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import React from 'react'
import Footer from './Footer/Footer.jsx'
import Header from './Header/Header.jsx'
import Home from './Home/Home.jsx'
import Desmoldeo from './Desmoldeo/Desmoldeo.jsx'
import Encajonado from './Encajonado/Encajonado.jsx'
import Paletizado from './Paletizado/Paletizado.jsx'
import Login from './Login/Login.jsx'
import RecuperarContra from './Login/RecuperarContra/RecuperarContra.jsx'
import SubNav from './Header/SubNav/SubNav.jsx'
import ExeSubNav from './Header/SubNav/ExeSubNav.jsx'
import './App.css'

function App() {
  return (
    <>
        <Header />
        <ExeSubNav />
    </>
  );
}

export default App
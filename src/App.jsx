import { useState } from 'react'
import Footer from './Footer/Footer.jsx'
import Header from './Header/Header.jsx'
import Login from './Login/login.jsx'
import Home from './Home/Home.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
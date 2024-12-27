import { useState } from 'react'
import Footer from './Footer/Footer.jsx'
import Header from './Header/Header.jsx'
import Home from './Home/Home.jsx'
import Login from './Login/Login.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App;
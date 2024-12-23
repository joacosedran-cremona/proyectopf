import { useState } from 'react'
import Footer from './Footer/Footer.jsx'
import Header from './Header/Header.jsx'
//import Body from './Body/Body.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default App
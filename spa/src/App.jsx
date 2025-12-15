import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import StatCard  from './components/StatCard.jsx';    
import Dashboard from "./components/Dashboard.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
       <Dashboard/>
      <StatCard/>
      
     
     
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
    </div>
  )
}

export default App

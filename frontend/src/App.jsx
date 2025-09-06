import { useState } from 'react'
import './App.css'
import Menubar from './components/Menubar/Menubar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menubar />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Menubar from './components/Menubar/Menubar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/dashboard'
import Explore from './pages/Explore/explore'
import ManageItems from './pages/ManageItems/manageItems'
import ManageCategories from './pages/ManageCategories/manageCategories'
import ManageUsers from './pages/ManageUsers/manageUsers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menubar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/items' element={<ManageItems />} />
        <Route path='/categories' element={<ManageCategories />} />
        <Route path='/users' element={<ManageUsers />} />
      </Routes>
    </>
  )
}

export default App

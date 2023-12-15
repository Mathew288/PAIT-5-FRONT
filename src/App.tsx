import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Login from './components/pages/Login'
import Register from './components/pages/Register'

function App() {

  return (
    <>
      <NavBar loggedIn={true} />
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />

        
      </Routes>
    </>
  )
}

export default App

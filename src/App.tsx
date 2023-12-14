import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Login from './components/pages/Login'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/login' element={<Login/>} />

        
      </Routes>
    </>
  )
}

export default App

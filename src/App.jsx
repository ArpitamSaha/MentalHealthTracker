import './App.css'
import Register from './Component/Register/Register'
import Login from './Component/Login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './Component/Admin/Admin'
import Employee from './Component/Employee/Employee'
import LandingPage from './Component/LandingPage/LandingPage'
import AllPrograms from './Component/AllPrograms/AllPrograms'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/allprograms' element={<AllPrograms/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin-dashboard" element={<Admin/>}/>
        <Route path="/user-dashboard" element={<Employee/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

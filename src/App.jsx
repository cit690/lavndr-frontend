import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// components
import NavBar from './components/NavBar/NavBar'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'

// services
import * as authService from './services/authService'
import * as profileService from './services/authService'
import * as messageService from './services/messageService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  console.log("user is", user)

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const [messages, setMessages] = useState([])
  console.log("messages are", messages);
  
  const addMessage = async (messageData) => {
    const message = await messageService.create(messageData)
    setMessages([...message, message])
  }


  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/profiles/:id"
          element={user ? <ProfileDetails /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App

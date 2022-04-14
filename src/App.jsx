import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// components
import NavBar from './components/NavBar/NavBar'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'
import UpdateProfile from './pages/UpdateProfile/UpdateProfile'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import SendMessage from './pages/SendMessage/SendMessage'
import DeleteProfile from './pages/DeleteProfile/DeleteProfile'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as messageService from './services/messageService'
// import MessageForm from './components/MessageForm/MessageForm.jsx'


const App = () => {
  const navigate = useNavigate()
  // usestates
  const [user, setUser] = useState(authService.getUser())
  const [profiles, setProfiles] = useState([])
  const [messages, setMessages] = useState([])

  // * logs
  // console.log("user is", user)
  // console.log("profiles are", profiles);
  // console.log( "app.jsx", messages.length ? messages : "no msgs yet");

  // useEffects
  useEffect(() => {
    const fetchData = async () => {
      const data = await profileService.getAllProfiles()
      setProfiles(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const data = await messageService.getAll()
      setMessages(data)
    }
    fetchData()
  }, [])

  // functions 
  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
    navigate('/profiles')
  }

  const updateProfile = async (profileData) => {
    const updatedProfile = await profileService.update(profileData)
    setProfiles(profiles.map((profile) => (
      profile.id === updatedProfile.id ? updatedProfile : profile
    )))
  }

  const deleteProfile = async (id) => {
    await profileService.deleteOne(id)
    setProfiles(profiles.filter(profile => profile.id !== parseInt(id)))
    setUser(null)
    navigate('/')
  }

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
          element={
            <ProtectedRoute user={user}>
              <Profiles messages={messages} />
            </ProtectedRoute>}
        />
        <Route
          path="/profiles/:id"
          element={
            <ProtectedRoute user={user}>
              <ProfileDetails />
            </ProtectedRoute>}
        />
        <Route
          path="/profiles/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <UpdateProfile updateProfile={updateProfile} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles/:id/delete"
          element={
            <ProtectedRoute user={user}>
            <DeleteProfile deleteProfile={deleteProfile} handleLogout={handleLogout}/> 
            </ProtectedRoute>
            }
        />
        <Route
          path="/messages"
          element={
            <ProtectedRoute user={user}>
              <SendMessage addMessage={addMessage} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App

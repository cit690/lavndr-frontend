import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import UpdateProfile from './pages/UpdateProfile/UpdateProfile'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [profiles, setProfiles] = useState([])
  console.log(user)

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
    navigate('/profiles/:id')
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await profileService.getAllProfiles()
      setProfiles(data)
    }
    fetchData()
  }, [])

  const updateProfile = async (profileData) => {
    const updatedProfile = await profileService.update(profileData)
    setProfiles(profiles.map((profile) => (
      profile.id === updatedProfile.id ? updatedProfile : profile
    )))
  }

  const deleteProfile = async (id) => {
    await profileService.deleteOne(id)
    setProfiles(profiles.filter(profile => profile.id !== parseInt(id)))
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
      </Routes>
    </>
  )
}

export default App

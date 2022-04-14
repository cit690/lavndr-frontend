import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import './Profiles.css'
import ProfileCard from '../../components/ProfileCards/ProfileCards'

const Profiles = ({ messages }) => {
  // console.log("profile.jsx", messages.length ? messages : "no msgs yet");
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <div className='profiles'>
      {profiles.map((profile)=>(
        <ProfileCard 
        messages={messages}
        profile={profile}
        key={profile.id}
        /> 
      ))}

  </div>
  )
}

export default Profiles
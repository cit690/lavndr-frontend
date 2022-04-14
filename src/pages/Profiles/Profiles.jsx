import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import './Profiles.css'
import ProfileCard from '../../components/ProfileCards/ProfileCards'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <div className='profiles'>
      {profiles.map((profile)=>(
        <ProfileCard
        profile={profile}
        key={profile.id}
        /> 
      ))}

  </div>
  )
}

export default Profiles
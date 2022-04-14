import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import ProfileCard from '../../components/ProfileCards/ProfileCards'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>

      {profiles.map((profile)=>(
        <ProfileCard
        profile={profile}
        key={profile.id}
        /> 
      ))}

 
    
    </>
  )
}
 
export default Profiles
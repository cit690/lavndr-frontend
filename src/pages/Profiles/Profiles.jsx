import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import './Profiles.css'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
      <h1 className='profiles-h1'>Hello. This is a list of all the profiles.</h1>
      {profiles.length ? 
        <div className='profiles'>
          {profiles.map(profile=>
            <p key={profile._id}>{profile.name} 
            <button 
            type='submit'
            className="dm-button"
            >Send DM</button></p>
            )}
        </div>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles
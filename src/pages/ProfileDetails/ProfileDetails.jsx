import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOne }from '../../services/profileService'
import * as authService from '../../services/authService'

const ProfileDetails = (props) => {
  const [profileDetails, setProfileDetails] = useState({})
  const params = useParams()
  const [user, setUser] = useState(authService.getUser())

  useEffect(()=>{
    getOne(params.id)
    .then(profileDetails => setProfileDetails(profileDetails))
  },[])
  console.log(profileDetails)

  return ( <>
    <h2>{profileDetails.profile?.name}</h2>
    <ul>
      <li>{profileDetails.profile?.location}</li>
      <li>{profileDetails.profile?.gender_identity}</li>
      <li>{profileDetails.profile?.orientation}</li>
      <li>{profileDetails.profile?.sun_sign}</li>
      <li>{profileDetails.profile?.moon_sign}</li>
      <li>{profileDetails.profile?.rising_sign}</li>
    </ul>
    <p>
    {profileDetails.profile?.bio}
    </p>
    
  </> );
}
 


export default ProfileDetails;
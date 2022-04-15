import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOne }from '../../services/profileService'
import * as authService from '../../services/authService'
import './ProfileDetails.css'

const ProfileDetails = (props) => {
  const [profileDetails, setProfileDetails] = useState({})
  const params = useParams()
  const [user] = useState(authService.getUser())

  useEffect(()=>{
    getOne(params.id)
    .then(profileDetails => setProfileDetails(profileDetails))
  })


  return ( <>

    {user.id === profileDetails.profile?.id ?

    <header className='profile-header'>
    <Link to={`/profiles/${profileDetails.profile?.id}/edit`}>
      <button>Edit Profile</button>
    </Link>
    <Link to={`/profiles/${profileDetails.profile?.id}/delete`}>
      <button>Delete Profile</button>
    </Link>
    </header>
    :
    <></>
    }
    <div className='profile-container'>
    <h2>{profileDetails.profile?.name}</h2>
    <div>
      <img src="public/default_user.png" alt="" />
    </div>
    
    <ul className='details-list'>
      {profileDetails.profile?.location ?
        <li>{profileDetails.profile?.location}</li>
        :
        <></>
      }
      {profileDetails.profile?.gender_identity ? 
        <li>{profileDetails.profile?.gender_identity}</li>
          :
          <></>
      }
      {profileDetails.profile?.orientation ? 
        <li>{profileDetails.profile?.orientation}</li>
        :
        <></>
      }
      {profileDetails.profile?.sun_sign ?
        <li>{profileDetails.profile?.sun_sign}</li>
        :
        <></>
      }
      {profileDetails.profile?.moon_sign ? 
        <li>{profileDetails.profile?.moon_sign}</li>
      :
        <></>
      }
      {profileDetails.profile?.rising_sign ?
        <li>{profileDetails.profile?.rising_sign}</li>
        :
        <></>
      }
    </ul>
    <p>
    {profileDetails.profile?.bio}
    </p>
    </div>
  </> );
}
 


export default ProfileDetails;
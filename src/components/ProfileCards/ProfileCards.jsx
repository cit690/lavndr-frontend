import { useState, useRef, useEffect } from 'react'
import React from 'react';
import { Link } from 'react-router-dom'

const ProfileCard = (profile) => {
  return ( <>
    <div className='content-container'>
      <div className='img-container'><img src="" alt="" /></div>
      <Link to={`/profiles/${profile.profile?.id}`} >
      <h2>{profile.profile?.name}</h2>
      </Link>
      <p>{profile.profile?.vibe_check}</p>
    </div>
    
    
  </> );
}
 
export default ProfileCard;
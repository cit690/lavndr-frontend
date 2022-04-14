import { useState, useRef, useEffect } from 'react'
import React from 'react';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ProfileCard = (profile, messages) => {
  const { recipient_id } = useParams()
  // console.log(message.recipient_id);
  // console.log("prof id", profile.profile?.id);
  // console.log("messages:", messages.messages);
  // console.log("message recipiants:", messages.messages.recipient_id);

  return ( <>
    <div className='content-container'>
      <div className='img-container'><img src="" alt="" /></div>
      <Link to={`/profiles/${profile.profile?.id}`} >
      <h2>{profile.profile?.name}</h2>
      </Link>
      <p>{profile.profile?.vibe_check}</p>
      <Link to={`/messages/${recipient_id}`}>
        {/* above code links logged in user to a msg form for a spcfc recipient */}
        <button
        className='dm-button'
        >Send {profile.profile?.name} a message!</button>
      </Link>
    </div> 
  </> );
}

export default ProfileCard;
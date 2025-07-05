import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileSide.css'
import SocialnetLogo from '../SocialnetLogo/SocialnetLogo'

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <SocialnetLogo/>
        <ProfileCard location = 'homepage'/>
        <FollowersCard/>
    </div>
    )
}

export default ProfileSide
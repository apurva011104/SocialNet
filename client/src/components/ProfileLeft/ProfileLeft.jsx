import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
import SocialnetLogo from '../SocialnetLogo/SocialnetLogo'

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <SocialnetLogo/>
      <InfoCard/>
      <FollowersCard/>
    </div>
  )
}

export default ProfileLeft
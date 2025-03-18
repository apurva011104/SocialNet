import React from 'react';
import './profile.css';
import ProfileCard from './ProfileCard/ProfileCard';

const Profile = () => {
    return (
        <div className="Profile">
            <h1 id="brand-logo">SocialNet</h1>
            <ProfileCard/>
        </div>
        
    )
};

export default Profile;

import React from 'react';
import ProfileImage from '../../../img/aya.jpeg';
import './ProfileCard.css';

const ProfileCard = () => {
    return (
        <div className="Profile-Card">
            <div className="Profile-Image">
                <div id="cover-page"></div>
                <img src={ProfileImage} alt=""/>
            </div>
            <div className="user-information">
                <h3 className="Name">Ava</h3>
                <h5 className="username">@socialnetproject</h5>
                <h5 className="about">Social Site</h5>
                <div className='follow'>
                    <div className='followers'>
                        <h4>548</h4>
                        <h5>Followers</h5>
                    </div>
                    <div className='following'>
                        <h4>548</h4>
                        <h5>Following</h5>
                    </div>
                </div>
                <button className='profile-link'>View full profile</button>
            </div>
        </div>
    )
}

export default ProfileCard

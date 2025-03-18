import React from 'react';
import './Home.css'
import Profile from '../../components/profile/profile';
import RightSide from '../../components/RightSide/RightSide';
import Explore from '../../components/Explore/Explore';

const Home = () => {
    return (
        <div className="Home">
            <Profile/>
            <Explore/>
            <RightSide/>
        </div>
    )
}

export default Home

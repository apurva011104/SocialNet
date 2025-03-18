import React from 'react';
import './Explore.css';
import SharePost from './SharePost/SharePost';
import Posts from './Posts/Posts';

const Explore = () => {
    return (
        <div className='Explore'>
            <SharePost/>
            <Posts/>
            
        </div>
    )
}

export default Explore

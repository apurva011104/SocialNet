import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import MenuBar from './menuBar/MenuBar';
import TrendCard from './TrendCard/TrendCard';
import './RightSide.css'

const RightSide = () => {
    return (
        <div className='RightSide'>
            <MenuBar/>
            <SearchBar/>
            <TrendCard/>
        </div>
    )
}

export default RightSide

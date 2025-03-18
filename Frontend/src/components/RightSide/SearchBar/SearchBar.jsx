import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
    return (
            <div className="SearchBar">
                <a className='search-icon' href="#search"><i className="fa-solid fa-magnifying-glass"></i></a>
                <input className="search-bar" type="text" placeholder="Explore"/>
            </div>  
    )
}

export default SearchBar

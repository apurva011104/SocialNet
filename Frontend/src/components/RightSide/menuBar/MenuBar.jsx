import React from 'react'
import './menuBar.css';

const MenuBar = () => {
  return (
    <div className="menu">
      <a href="#home"><i class="fa-solid fa-house"></i></a>
      <a href="#fh"><i class="fa-regular fa-bell"></i></a>
      <a href='#jbb'><i class="fa-regular fa-envelope"></i></a>
      <a href='#xjsn'><i class="fa-solid fa-gear"></i></a>
    </div>
  )
}

export default MenuBar

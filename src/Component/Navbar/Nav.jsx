import React from 'react'
import "./nav.css"
import { Link } from 'react-router-dom';

export default function nav() {
  return (
    <div className='nav-bar'>
      <div className="nav-left">
        <div className="logo"></div>
        <div className='logo-text'>Mackenzie Child</div>
      </div>
      <div className="nav-right">
        <ul className="nav-list">
            <li><Link style={{textDecoration: 'none', color: "#222222"}}>Blog</Link></li>
            <li><Link style={{textDecoration: 'none', color: "#222222"}}>Shop</Link></li>
            <li><Link style={{textDecoration: 'none', color: "#222222"}}>Social</Link></li>
        </ul>
      </div>
    </div>
  )
}

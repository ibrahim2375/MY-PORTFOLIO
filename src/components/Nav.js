// import React, { useState } from 'react'
import '../css/nav.css'
// using MUi icons
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import BallotIcon from '@mui/icons-material/Ballot';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
//call links 
import { Link } from "react-router-dom";

function Nav() {
  // const [Class, setClass] = useState('active');

  return (

    <div className="nav">
      <div className="logo">
        <span>Ibrahim</span>
      </div>
      <div className="nav-toggle">
        <FormatListBulletedIcon sx={{ color: 'white' }} />
      </div>
      <ul className="links">
        <li><HomeIcon sx={{ color: 'white' }} /> <Link to="/" className="link">Home</Link> </li>
        <li><PersonIcon sx={{ color: 'white' }} /> <Link to="/about" className="link">About</Link></li>
        <li><BallotIcon sx={{ color: 'white' }} /><Link to="/services" className="link">Services</Link></li>
        <li><HomeRepairServiceIcon sx={{ color: 'white' }} />Portfolio</li>
        <li><EmailIcon sx={{ color: 'white' }} /> Contact</li>
      </ul>

    </div>

  )
}

export default Nav;
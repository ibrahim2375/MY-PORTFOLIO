import React from 'react'
import '../css/nav.css'
// using MUi icons
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import BallotIcon from '@mui/icons-material/Ballot';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
//call links 
import { Link } from "react-router-dom";

function Nav() {


  return (

    <div className="nav">
      <div className="logo">
        <span>Ibrahim</span>
      </div>
      {/* <div className="nav-toggle">
        <FormatListBulletedIcon sx={{ color: 'white' }}  />
      </div> */}
      <ul className="links">
        <li><HomeIcon sx={{ color: 'white' }} /> <Link to="/" className="link">Home</Link> </li>
        <li><PersonIcon sx={{ color: 'white' }} /> <Link to="/about" className="link">About</Link></li>
        <li><BallotIcon sx={{ color: 'white' }} /><Link to="/services" className="link">Services</Link></li>
        <li><HomeRepairServiceIcon sx={{ color: 'white' }} /><Link to="/portfolio" className="link">Portfolio</Link></li>
        <li><EmailIcon sx={{ color: 'white' }} /> <Link to="/contact" className="link">Contact</Link></li>
      </ul>

    </div>

  )
}

export default Nav;
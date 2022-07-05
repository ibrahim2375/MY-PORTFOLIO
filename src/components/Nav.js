import React, { useContext } from 'react'
import { MainContext } from "../App";
import '../css/nav.css'
// using MUi icons
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import BallotIcon from '@mui/icons-material/Ballot';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
//call links 
import { Link } from "react-router-dom";

function Nav() {
  const { txtcolor, } = useContext(MainContext);

  return (
    <div className="nav" >
      <div className="logo">
        <span style={{ color: txtcolor }}>Ibrahim</span>
      </div>
      <ul className="links">
        <li ><HomeIcon sx={{ color: '#f7740c' }} /> <Link to="/" className="link"  >Home</Link> </li>
        <li><PersonIcon sx={{ color: '#f7740c' }} /> <Link to="/about" className="link"  >About</Link></li>
        <li><BallotIcon sx={{ color: '#f7740c' }} /><Link to="/services" className="link" >Services</Link></li>
        <li><HomeRepairServiceIcon sx={{ color: '#f7740c' }} /><Link to="/portfolio" className="link" >Portfolio</Link></li>
        <li><EmailIcon sx={{ color: '#f7740c' }} /> <Link to="/contact" className="link" >Contact</Link></li>
      </ul>
    </div>

  )
}

export default Nav;
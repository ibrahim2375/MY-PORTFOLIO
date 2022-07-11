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
        <li > <Link to="/" className="link"  ><HomeIcon sx={{ color: '#f7740c' }} /> Home </Link> </li>
        <li> <Link to="/about" className="link"  > <PersonIcon sx={{ color: '#f7740c' }} /> About </Link></li>
        <li><Link to="/services" className="link" ><BallotIcon sx={{ color: '#f7740c' }} /> Services </Link></li>
        <li><Link to="/portfolio" className="link" ><HomeRepairServiceIcon sx={{ color: '#f7740c' }} /> Portfolio</Link></li>
        <li> <Link to="/contact" className="link" ><EmailIcon sx={{ color: '#f7740c' }} /> Contact</Link></li>
      </ul>
    </div>

  )
}

export default Nav;
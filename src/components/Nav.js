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
  const { txtcolor,  } = useContext(MainContext);
  return (
    <div className="nav" >
      <div className="logo">
        <span style={{ color: txtcolor }}>Ibrahim</span>
      </div>

      <ul className="links">
        <li><HomeIcon sx={{ color: txtcolor }} /> <Link to="/" className="link" style={{ color: txtcolor }}>Home</Link> </li>
        <li><PersonIcon sx={{ color: txtcolor }} /> <Link to="/about" className="link" style={{ color: txtcolor }}>About</Link></li>
        <li><BallotIcon sx={{ color: txtcolor }} /><Link to="/services" className="link" style={{ color: txtcolor }}>Services</Link></li>
        <li><HomeRepairServiceIcon sx={{ color: txtcolor }} /><Link to="/portfolio" className="link" style={{ color: txtcolor }}>Portfolio</Link></li>
        <li><EmailIcon sx={{ color: txtcolor }} /> <Link to="/contact" className="link" style={{ color: txtcolor }}>Contact</Link></li>
      </ul>

    </div>

  )
}

export default Nav;
import React, { useState, useEffect } from 'react'
// components
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Services from '././components/Services'
import Portfolio from './components/Portfolios'
import Contact from './components/Contact'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

// components
import './css/App.css'
// Call Router 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [show, setshow] = useState('aside');

  const toggle = () => {
    if (show === 'aside') {
      setshow('show');

    } else {
      setshow('aside');

    }
  }
  useEffect(() => {
    //resize
    window.addEventListener("resize", (e) => {
      if (window.innerWidth > 750) {
        setshow('aside');
      }
    })
    //
  }, [])
  return (
    <Router>
      <div className="App">
        <aside className={show}>
          <Nav />
        </aside>
        <div className="nav-toggle">
          <FormatListBulletedIcon sx={{ color: 'white' }} onClick={toggle} />
        </div>
        <main>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/portfolio' element={<Portfolio />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

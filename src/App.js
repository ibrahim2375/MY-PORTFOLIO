import React, { useState, useEffect } from 'react'
// components
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Services from '././components/Services'
import Portfolio from './components/Portfolios'
import Contact from './components/Contact'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Theme from './components/Theme'

// components
import './css/App.css'
// Call Router 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export const MainContext = React.createContext();

function App() {
  const [show, setshow] = useState('aside');
  const [changeColor, setchangeColor] = useState('darkTheme');
  const [txtcolor, settxtcolor] = useState('white');
  const [elcolor, setelcolor] = useState('');
  const [darkThemeNav, setdarkThemeNav] = useState('darkThemeNav');

  const changeTheme = () => {
    if (changeColor === 'darkTheme') {
      setchangeColor('lightTheme');
      settxtcolor('black');
      setdarkThemeNav('lightThemeNav');
      setelcolor('#e8dfec');

    } else {
      setchangeColor('darkTheme');
      settxtcolor('white');
      setdarkThemeNav('darkThemeNav');
      setelcolor('');

    }
  }
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
    <MainContext.Provider value={{ txtcolor, elcolor }}>
      <Router>
        <div className="App">
          <aside className={`${show} ${darkThemeNav}`}>
            <Nav />
          </aside>
          <div className="nav-toggle">
            <FormatListBulletedIcon sx={{ color: '#f7740c' }} onClick={toggle} />
          </div>
          <main className={`main ${changeColor}`}>
            <div className="them-icon" onClick={changeTheme}>
              <Theme />
            </div>
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
    </MainContext.Provider>
  );
}

export default App;

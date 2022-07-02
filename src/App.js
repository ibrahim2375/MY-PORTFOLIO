import React from 'react'
// components
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Services from '././components/Services'
// components
import './css/App.css'
// Call Router 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <aside>
          <Nav />
        </aside>
        <main>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/services' element={<Services />}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

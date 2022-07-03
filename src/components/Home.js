import React, { useContext } from 'react'
import { MainContext } from "../App";
// css styles 
import '../css/home.css'
// get data 
import data from '../data/myinfo.json'
import img from '../image/profile2.jpg'

// import { Typewriter } from 'react-simple-typewriter';
function Home() {
  const { txtcolor,  } = useContext(MainContext);
  return (
    <div className="home">

      {/* <Typewriter loop cursor cursorStyle='_' typeSpeed={200} delaySpeed={300} words={['Web Developer', 'Frontend and Backend']} />                     */}
      <div className="info" style={{ color: txtcolor }}>
        <h3>Hello There , My name is <span className="headline">{data.personal.name}</span></h3>
        <p>I`m  a  <span className="headline">{data.personal.job} , {data.personal.job2} </span></p>
        <p>{data.personal.description}</p>
        <a href="/contact" className="btn">Contact</a>
      </div>
      <div className="img">
        <img src={img} alt="Profile Img" />
      </div>
    </div>
  )
}

export default Home
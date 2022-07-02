import React from 'react'
// css styles 
import '../css/home.css'
// get data 
import data from '../data/myinfo.json'
import img from '../image/profile2.jpg'
function Home() {
  return (
    <div className="home">
      <div className="info">
        <h3>Hello There , My name is <span className="headline">{data.personal.name}</span></h3>
        <h3>I`m  a <span className="headline">{data.personal.job}</span></h3>
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
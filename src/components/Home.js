import React, { useContext } from 'react'
import { MainContext } from "../App";
// css styles 
import '../css/home.css'
// get data 
import data from '../data/myinfo.json'
import { Link } from 'react-router-dom'

function Home() {
  const { txtcolor, } = useContext(MainContext);
  return (
    <div className="home">

      <div className="info" style={{ color: txtcolor }}>
        <h3>Hello There , My name is <span className="headline">{data.personal.name}</span></h3>
        <p>I`m  a  <span className="headline">{data.personal.job} , {data.personal.job2} </span></p>
        <p>{data.personal.description}</p>
        <Link to="/contact" className="btn"  >Contact</Link>
      </div>
      <div className="img">
        <img src={data.personal.img} alt="Profile Img" />
      </div>
    </div>
  )
}

export default Home
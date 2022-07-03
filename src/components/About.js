import React, { useContext } from 'react'
import { MainContext } from "../App";
import data from '../data/myinfo.json'
import '../css/about.css'
import CV from '../data/cv.pdf'

function About() {
    const {txtcolor , elcolor} = useContext(MainContext);

    return (
        <div className="about" style={{ color: txtcolor }}>
            <div className="header">
                <h1>About</h1>

            </div>
            <div className="about-info">
                <h3> My name is <span className="headline">{data.personal.name}</span> and I`m a <span className="headline">{data.personal.job}</span></h3>
                <p>
                    {data.personal.description2}
                </p>
            </div>
            <div className="main-content">
                <div className="information">
                    <div className="specific-data">
                        <ul>
                            <li>Email: {data.general.email}</li>
                            <li>Phone: {data.general.phone}</li>
                            <li>Degree: {data.general.degree}</li>
                            <li>College: {data.general.college}</li>
                            <li>University: {data.general.university}</li>
                            <li>Age: {data.general.age}</li>
                            <li>City: {data.general.city}</li>
                        </ul>
                    </div>
                    <div className="btns">
                        <a href={CV} download={CV} className="btn" >Download CV</a>
                        <a href="/contact" className="btn">Hire Me</a>
                    </div>
                </div>
                <Skills />
            </div>


        </div>
    )
}

const Skills = () => {
    return (
        <div className="skills">
            <div className="skill">
                <label htmlFor="file">Html5  </label>
                <div className="prog">
                    <progress className="progress-bar" id="file" value={data.skills.html5} max="100"> </progress>
                    <span>{data.skills.html5}%</span>
                </div>
            </div>
            <div className="skill">
                <label htmlFor="file">Css3   </label>
                <div className="prog">
                    <progress id="file" value={data.skills.css3} max="100">  </progress>
                    <span>{data.skills.css3}%</span>
                </div>
            </div>
            <div className="skill">
                <label htmlFor="file">JS</label>
                <div className="prog">
                    <progress id="file" value={data.skills.js} max="100">  </progress>
                    <span>{data.skills.js}%</span>
                </div>
            </div>
            <div className="skill">
                <label htmlFor="file">PHP</label>
                <div className="prog">
                    <progress id="file" value={data.skills.php} max="100">  </progress>
                    <span>{data.skills.php}%</span>
                </div>
            </div>
            <div className="skill">
                <label htmlFor="file">Node js</label>
                <div className="prog">
                    <progress id="file" value={data.skills.nodejs} max="100">  </progress>
                    <span>{data.skills.nodejs}%</span>
                </div>
            </div>
            <div className="skill">
                <label htmlFor="file">React js</label>
                <div className="prog">
                    <progress id="file" value={data.skills.reactjs} max="100">  </progress>
                    <span>{data.skills.reactjs}%</span>
                </div>

            </div>
            <div className="skill">
                <label htmlFor="file">SQL</label>
                <div className="prog">
                    <progress id="file" value={data.skills.sql} max="100">  </progress>
                    <span>{data.skills.sql}%</span>
                </div>
            </div>
            <div className="skill">
                <label htmlFor="file">Bootstrap</label>
                <div className="prog">
                    <progress id="file" value={data.skills.bootstrap} max="100">  </progress>
                    <span>{data.skills.bootstrap}%</span>
                </div>

            </div>

        </div>
    )
}
export default About
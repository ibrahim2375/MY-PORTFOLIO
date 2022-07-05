import React, { useContext } from 'react'
import { MainContext } from "../App";
import '../css/portfolios.css'
import typingImg from '../image/typing screen.png'
import portfolioImg from '../image/portfolio screen.png'
function Portfolios() {
    const { txtcolor,  } = useContext(MainContext);
    const portfolioData = [
        { id: 1, img: typingImg, title: 'Typing Test', link: 'http://scanwebsite.000webhostapp.com/' },
        { id: 2, img: portfolioImg, title: 'Simple Portfolio', link: 'https://ibrahamcsis.tk/' },
        // { id: 4, img: typingImg, title: 'typing test', link: '' },
        // { id: 5, img: typingImg, title: 'typing test', link: '' },
        // { id: 6, img: typingImg, title: 'typing test', link: '' },
    ]
    return (
        <div className="portfolio" style={{ color: txtcolor }}>
            <div className="portfolio-header">
                <h1>Portfolio</h1>
            </div>
            <h2>My Last Projects : </h2>
            <div className="portfolio-sections">
                {
                    portfolioData.map(port => {
                        return (
                            <a href={port.link} target="_blank" rel="noreferrer" key={port.id}>
                                <section >
                                    <div className="portfolio-title">
                                        <h3 >{port.title}</h3>
                                    </div>
                                    <img src={port.img} alt="not support" />
                                </section>
                            </a>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default Portfolios
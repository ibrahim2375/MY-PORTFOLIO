import React, { useContext } from 'react'
import { MainContext } from "../App";
import '../css/portfolios.css'
import portfolioData from '../data/portfolio.json'
function Portfolios() {
    const { txtcolor, } = useContext(MainContext);
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
                                    <div className="portfolio-data">
                                        <h3 >{port.title}</h3>
                                        <p className="description">{port.description}</p>
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
import React, { useContext } from 'react'
import { MainContext } from "../App";
import '../css/services.css'
import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ComputerIcon from '@mui/icons-material/Computer';
import CodeIcon from '@mui/icons-material/Code';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ColorLensIcon from '@mui/icons-material/ColorLens';
function Services() {
    const { txtcolor, elcolor } = useContext(MainContext);
    const services = [
        {
            id: 1, icon: <SearchIcon sx={{ color: '#f7740c', fontSize: 40 }} />, title: 'Web Development', color: elcolor, description: 'I can design a website as fronten  and manage data as back also from Api'
        },
        { id: 2, icon: <CircleNotificationsIcon sx={{ color: '#f7740c', fontSize: 40 }} />, title: 'Responsive Design', color: elcolor, description: '  make  website more active and responsive' },
        {
            id: 3, icon: <ComputerIcon sx={{ color: '#f7740c', fontSize: 40 }} />, title: 'Web Design', color: elcolor, description: ' manage all your tools  and make user can manage it and make it more easy'
        },
        { id: 4, icon: <CodeIcon sx={{ color: '#f7740c', fontSize: 40 }} />, title: 'Frontend Developer', color: elcolor, description: 'use appropriate tools to be effecient as front end ' },
        { id: 5, icon: <PhoneAndroidIcon sx={{ color: '#f7740c', fontSize: 40 }} />, title: 'Web Design', color: elcolor, description: 'make profissional design ui/ux and apply sheet as same as possible ' },
        { id: 6, icon: <ColorLensIcon sx={{ color: '#f7740c', fontSize: 40 }} />, title: 'Backend Developer', color: elcolor, description: 'by using SQL and  modern packages as Sequelize to manage data ' }]

    return (
        <div className="services" style={{ color: txtcolor }}>
            <div className="header">
                <h1>Services</h1>
            </div>
            <div className="services-sections">
                {


                    services.map((data, index) => {
                        return (
                            <div className="service" key={data.id} style={{ backgroundColor: data.color }}>
                                <div className="icon">
                                    {data.icon}
                                </div>
                                <h3>{data.title}</h3>
                                <p style={{ textAlign: "center" }}>{data.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Services
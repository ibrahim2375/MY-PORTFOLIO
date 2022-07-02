import React from 'react'
import '../css/services.css'
import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ComputerIcon from '@mui/icons-material/Computer';
import CodeIcon from '@mui/icons-material/Code';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ColorLensIcon from '@mui/icons-material/ColorLens';
function Services() {
    return (
        <div className="services">
            <div className="header">
                <h1>Services</h1>
            </div>
            <div className="services-sections">
                <Service />

            </div>
        </div>
    )
}

const Service = () => {
    const services = [
        {
            id: 1, icon: <SearchIcon sx={{ color: '#f7740c', fontSize: 40 }} />, title: 'Web Development', description: 'I can design a website as fronten  and manage data as back also from Api'
        },
        { id: 2, icon: <CircleNotificationsIcon sx={{ color: '#f7740c', fontSize: 40 }} />, title: 'Responsive Design', description: '  make  website more active and responsive' },
        {
            id: 3, icon: <ComputerIcon sx={{ color: '#f7740c', fontSize: 40 }} />, title: 'Web Design', description: ' manage all your tools  and make user can manage it and make it more easy'
        },
        { id: 4, icon: <CodeIcon sx={{ color: '#f7740c', fontSize: 40 }} />, title: 'Frontend Developer', description: 'use appropriate tools to be effecient as front end ' },
        { id: 5, icon: <PhoneAndroidIcon sx={{ color: '#f7740c', fontSize: 40 }} />, title: 'Web Design', description: 'make profissional design ui/ux and apply sheet as same as possible ' },
        { id: 6, icon: <ColorLensIcon sx={{ color: '#f7740c', fontSize: 40 }} />, title: 'Backend Developer', description: 'by using SQL and  modern packages as Sequelize to manage data ' }]
    return (
        <>
            {
                services.map((data, index) => {
                    return (
                        <div className="service" key={data.id}>
                            <div className="icon">
                                {data.icon}
                            </div>
                            <h3>{data.title}</h3>
                            <p style={{textAlign: "center"}}>{data.description}</p>
                        </div>
                    )
                })
            }

        </>
    )
}
export default Services
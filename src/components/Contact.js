import React from 'react'
import '../css/contact.css'
//icons 
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// get json data 
import data from '../data/myinfo.json'
function Contact() {
    const contactInfo = [
        { id: 1, icon: <EmailIcon sx={{ color: '#f7740c', fontSize: 30 }} />, method: 'Email', content: data.general.email },
        { id: 2, icon: <PhoneIcon sx={{ color: '#f7740c', fontSize: 30 }} />, method: 'Call Me On', content: data.general.phone },
        { id: 3, icon: <LanguageIcon sx={{ color: '#f7740c', fontSize: 30 }} />, method: 'Website', content: data.general.website },
        { id: 4, icon: <LocationOnIcon sx={{ color: '#f7740c', fontSize: 30 }} />, method: 'City', content: data.general.city }]
    return (
        <div className="contact">
            <div className="contact-header">
                <h1>Contact</h1>
            </div>
            <div className="some-info">
                <div className="header-info">
                    <h1>Have you any questions?</h1>
                    <p>I`m at your services</p>
                </div>
                <div className="basic-info">
                    {
                        contactInfo.map((contentInfo) => {
                            return (
                                <div className="info-content" key={contentInfo.id}>
                                    <h4>{contentInfo.icon}</h4>
                                    <h4>{contentInfo.method}</h4>
                                    <p>{contentInfo.content}</p>
                                </div>

                            )
                        })
                    }

                </div>
                <ContentInputs />
            </div>
        </div>
    )
}

const ContentInputs = () => {
    return (
        <div className="inputs-info">
            <h1>Text Me An Email</h1>
            <form action="">
                <input className="input" type="text" placeholder="name" name="name" />
                <input className="input" type="email" placeholder="email" name="email" />
                <input className="input" type="text" placeholder="subject" name="subject" />
                <textarea name="message"  placeholder="message" ></textarea>
                <input className="btn" type="submit" value="Send Message" />
            </form>
        </div>
    )
}

export default Contact
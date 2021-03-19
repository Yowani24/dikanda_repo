import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Home_footer/Footer'
import './About_Estilos.css'
import onwork_icon from '../images/onwork_icon.gif'

export default function About() {
    return (
        <div className="About_sec">
           <div className="about_header">
                <div className="container">
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                <h2>ABOUT US</h2>
                </div>
           </div>
           <div className="about_content">
                <img src={onwork_icon} alt=""/>
                <h6>We are working on here</h6>
                <h6>WE ARE COMMITTED TO ALWAYS IMPROVING YOUR EXPERIENCE</h6>
           </div>
            <Footer/>
        </div>
    )
}

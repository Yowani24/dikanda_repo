import React from 'react'
import { Link } from 'react-router-dom'
import './Footer_Estilos.css'
import {AiOutlineClose} from 'react-icons/ai'
import ReactDOM from "react-dom"
import {FaBars, FaGithub, FaLinkedin, FaWhatsapp, FaYoutube} from 'react-icons/fa'


export default function Footer() {
    
    return (
        <div className="Footer_sec">
            <div className="container footer_boxes">
                <div className="footer_right_box">
                    <h6>Copyright &copy; 2021</h6>
                </div>
                <div className="footer_left_box">
                    <h5><FaWhatsapp/> +55 21 969 712 168</h5>
                    <div className="social_icons_box">
                    <h5>SOCIAL</h5>
                        <div className="social_icons">
                            <a href="https://github.com/Yowani24" target="balank"><FaGithub className="social git_icon"/></a>
                            <a href="https://www.linkedin.com/in/jo%C3%A3o-augusto-da-costa-535b30196/" target="blank"><FaLinkedin className="social linkedin_icon"/></a>
                            <a href="https://yowaniblog.netlify.app/" target="blank"><FaYoutube className="social youtube_icon"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
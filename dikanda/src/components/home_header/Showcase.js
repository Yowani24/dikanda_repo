import React from 'react'
import './Showcase_Estilos.css'
import logo_foto from '../images/Dikanada_logo.png'
import Upadates from '../homeupdates/Upadates';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import Footer from '../Home_footer/Footer';
import Get_in_touch from '../home_get_in_touch/Get_in_touch';


export default function Showcase() {
    const linkHide = () => {
        document.getElementById('Sidebar_box').style.transform = "translateX(-100%)"
    }
    const linkShow = () => {
        document.getElementById('Sidebar_box').style.transform = "translateX(0%)"
    }
    const scrollToForm = () => window.scrollTo({top: 1460, behavior:"smooth"});

    return (
        <div className="Showcase_sec" id="Showcase_sec">
           <div className="showcase">
          
               <div className="Sidebar_box" id="Sidebar_box">
               <button  onClick={linkHide}><AiOutlineClose className="sidebar_x_icon"/></button>

                    <Link className="link" to="/about">
                        <button>
                            <a id="root">ABOUT</a>
                        </button>
                    </Link>  
               </div>
           
               <div className="container backg_image">
                <div className="sidebar_area">
                   <FaBars className="sidebar_icon" onClick={linkShow}/>
                   <div className="top_header">
                       <div className="logo"><img src={logo_foto} alt=""/></div>
                       <ul>
                           <li>
                               <Link to="/about"><a>About</a></Link>
                           </li>
                           <li><a onClick={scrollToForm}>Contact</a></li>
                       </ul>
                   </div>
                </div>
                   <div className="showcase_box">
                     <h3>BE THE FIRST OR BE THE BEST</h3>
                     <h1>REMARKABLE PERFORMANCE</h1>
                     <h4>Make your awesome business idea a reality with °DIKANDA</h4>
                   </div>
               </div>
           </div>

           <Upadates/>
           <Get_in_touch/>
           <Footer/>
        </div>
    )
}

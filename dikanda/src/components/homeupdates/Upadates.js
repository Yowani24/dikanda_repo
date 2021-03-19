import React from 'react'
import './Updates_Estilos.css'
import onwork_icon from '../images/onwork_icon.gif'


export default function Upadates() {
    return (
        <div className="updates_sec">
            <div className="container">
                <div className="top_updates">
                    <h4>Feel the power in just one click</h4>
                    <h3>THE LATEST FROM °DIKANDA </h3>
                </div>

                <div className="updates_box">
                    <div className="grid_box grid_1"></div>
                    <div className="grid_box grid_2">
                        <h3>BROADEN YOUR HORIZONS</h3>
                        <h3>Create paths to guide opportunities at your doorstep</h3>
                    </div>
                    <div className="grid_box grid_3">
                        <img src={onwork_icon} alt=""/>
                        <h6>We are working here...</h6>
                        <h6>WE ARE COMMITTED TO ALWAYS IMPROVING YOUR EXPERIENCE</h6>
                    </div>
                    <div className="grid_box grid_4">
                    <h3>TRANSFORM YOUR FINANCIAL</h3>
                    <h3>Make money work for you with qualified financial management</h3>
                    </div>
                    <div className="grid_box grid_5"></div>
                </div>
            </div>
        </div>
    )
}

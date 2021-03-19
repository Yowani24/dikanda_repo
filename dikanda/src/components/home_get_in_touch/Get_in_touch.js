import React, {useState} from 'react'
import './Get_in_touch_Estilos.css'
import Axios from 'axios'

export default function Get_in_touch() {
    const [name, setName] = useState();
    const [companyname, setCompanyame] = useState();
    const [email, setEmail] = useState();

    const RegisterUser = () => {
        Axios.post('http://localhost:3002/register',{name: name, companyname: companyname, email: email}).then(() => {
            console.log("USER INSERTED");
        });
    }
    
    return (
        <div className="Get_in_touch_sec">
            <div className="container get_in_touch_sides">
                <div className="get_in_touch_left_side get_in_touch">
                    <h2>GET IN TOUCH</h2>
                    <h4>Schedule an appointment with one of our consultants by filling out the form.</h4>
                </div>
                <div className="get_in_touch_right_side get_in_touch">
                    <form className="input_box">
                        <input type="text" placeholder="Name" onChange={(e) => {setName(e.target.value)}} required/>
                        <input type="text" placeholder="Company name" onChange={(e) => {setCompanyame(e.target.value)}} required/>
                        <input type="text" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} required/>
                        <button onClick={RegisterUser}>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

import React, { useState } from "react";
import './Login.css';
import image from '../assests/images/logo.png'
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input'

const Login = () => {

    const [value, setValue] = useState('') 

   

    const [name, setClassName] = useState('')

    const handleGetOTP = () => {
        const number = {
            id : Math.floor(Math.random()*100),
            number : value
        }

        if(value){
        setClassName('flip-card-inner-rotate')
        console.log("details",number)
        localStorage.setItem("phoneDetails",JSON.stringify(number))
        }
    }

    return (
        <div class="container flip-card">
            <div className={name ? 'flip-card-inner-rotate flip-card-inner' : 'flip-card-inner'}>
                <div class="flip-card-front">
                    <span>Login</span>
                    <img src={image} title="poc" className="logo" />
                    <PhoneInput
                        defaultCountry="IN"
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}/>
                    <button type="button" className="getOtp" onClick={handleGetOTP}>
                        Get OTP
                    </button>
                </div>
                <div className="flip-card-back">
                    <h3 className="title">OTP Verification</h3>
                    <p className="sub-title">
                        Enter the OTP you received to
                        <span className="phone-number">{value}</span>
                    </p>

                    <div className="wrapper">
                        <input type="text" className="field 1" maxlength="1" />
                        <input type="text" className="field 2" maxlength="1" />
                        <input type="text" className="field 3" maxlength="1" />
                        <input type="text" className="field 4" maxlength="1" />
                    </div>
                    <button className="resend">
                        Resend OTP
                        <i class="fa fa-caret-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
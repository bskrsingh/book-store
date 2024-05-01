import React, { useState } from "react";
import './Login.css';
import image from '../assests/images/logo.png'
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input'
import LoadingIcons from 'react-loading-icons'

const Login = () => {

    const [value, setValue] = useState('')



    const [name, setClassName] = useState('')

    const [otp1,setOtp1] = useState('')
    const [otp2,setOtp2] = useState('')
    const [otp3,setOtp3] = useState('')
    const [otp4,setOtp4] = useState('')

    const handleGetOTP = () => {
        const number = {
            otp: Math.floor(1000 + Math.random() * 9000),
            number: value
        }
        
        if (value) {
            setTimeout(() => {
                setClassName('flip-card-inner-rotate')
                console.log("details", number)
                localStorage.setItem("phoneDetails", JSON.stringify(number))
            }, 1000);

            const otpSplit = number.otp.toString().split('');
            setOtp1(otpSplit[0])
            setOtp2(otpSplit[1])
            setOtp3(otpSplit[2])
            setOtp4(otpSplit[3])
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
                        onChange={setValue} />
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
                        <input type="text" value={otp1} className="field 1" maxlength="1" />
                        <input type="text" value={otp2} className="field 2" maxlength="1" />
                        <input type="text" value={otp3} className="field 3" maxlength="1" />
                        <input type="text" value={otp4} className="field 4" maxlength="1" />
                    </div>
                    <button type="button" className="getOtp">
                        Login
                    </button>
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
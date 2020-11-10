import React, {useState} from 'react';
import {connect} from 'react-redux';
import './otp.css';
import loginImg from '../../assets/mobile-sms.png';

const Otp = (props) => {
const [enteredOtp, setEnteredOtp] = useState('');

const onOTPVerify = (event) => {
    event.preventDefault();
    // let url = 'https://jsonplaceholder.typicode.com/posts&' + props.phone + '&' + enteredOtp;
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        return res.json();
    }).then(responseData => {
        props.history.push('rateList');
    });

}

return (<div className="app-verification-box">
        <img className="login-img" alt="Login Verification" src={loginImg}/>
        <p className="login-label">You will get an OTP via SMS.</p>
        <form onSubmit={onOTPVerify}>
            <div className="otp-input-box">
                <input id="otp-value" type="password" 
                value={enteredOtp}
                onChange={event => {
                    setEnteredOtp(event.target.value);
                }}></input>
                <div className="action-buttons">
                    <button className="action-button" type="submit">VERIFY</button>
                    <button className="action-button">RESEND</button>
                </div>
            </div>
        </form>
    </div>);
}
const mapStateToProps = state => {
    return {
        phone: state.phoneNo
    };
};

export default connect(mapStateToProps)(Otp);
import React, {useState} from 'react';
import './Login.css';
import {connect} from 'react-redux';
import loginImg from '../../assets/mobile-sms.png';
import * as actionTypes from '../../store/actions';

const Login = (props) => {
    const [enteredPhoneNo, setEnteredPhoneNo] = useState('');

    return (
        <div className="app-login-box">
        <div className="login-welcome-box">
            <img className="login-img" alt="Login Verification" src={loginImg}/>
            <div className="hello-msg">Hello there!</div>
            <div className="welcome-box">
                <div className="welcome-msg">Welcome</div>
                <div className="signin-msg">Sign in to continue with your mobile number</div>
            </div>
        <form onSubmit={(event) => props.onEnterPhoneNo(event, enteredPhoneNo, props)}>
            <div className="tel-input">
                <input required type="tel"
                    id="phone_no" placeholder="Enter your mobile number"
                    pattern="[0-9]{10}"
                    value={enteredPhoneNo}
                    onChange={event => {
                        setEnteredPhoneNo(event.target.value);
                    }}
                />
                <div className="login-label">We will send you a <b>OTP</b> on your number.</div>
                <button className="login-btn" type="submit">Sign in</button>
            </div>
        </form>
        </div>
    </div>);
}

const mapStateToProps = state => {
    return {
        phone: state.phoneNo
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onEnterPhoneNo: (event, enteredPhoneNo, props) => {
            event.preventDefault();
            dispatch(actionTypes.saveNumber(enteredPhoneNo));
            props.history.push('/otp');
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
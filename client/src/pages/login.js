import React from 'react'
import LoginForm from '../components/loginForms/LoginForm'
import loginImg from '../images/login.png'
import logo from '../images/logoSocialSync.png'
import "./login.css"
import { Link } from 'react-router-dom'


const login = () => {
    return (
        <div className='main-component'>
            <div className="login--div">
                <div className='login--form'>
                    <h4>WELCOME BACK !</h4>
                    <LoginForm />
                    <p>Don't have an account? <span className='bold-style login'> <Link to="/register"> Create an account</Link> </span></p>
                </div>
                <div className='login--image'>
                    <div className="logo" style={{ height: '10px', width: '10px' }}>
                        <img src={logo} />
                    </div>
                    <div className="image-r">
                        <img src={loginImg} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default login;

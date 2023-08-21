import React from 'react'
import './register.css'
import registerImg from '../images/register.png'
import logo from '../images/logoSocialSync.png'
import RegisterForm from '../components/registerForms/registerForm.js'


const register = () => {
    return (
        <div className='main-component'>
            <div className="register--div">
                <div className='register--image'>
                    <div className="logo" style={{ height: '10px', width: '10px' }}>
                        <img src={logo} />
                    </div>
                    <div className="image-r">
                        <img src={registerImg} />
                    </div>
                </div>
                <div className='register--form'>
                    <h4>JOIN OUR NETWORK</h4>
                    <RegisterForm />
                    <p>Already a user ? <span className='bold-style'> Sign In</span></p>
                </div>
            </div>
        </div>
    )
}

export default register

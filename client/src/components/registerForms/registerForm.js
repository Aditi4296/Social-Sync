import React from 'react';
import './registerForm.css'

const RegisterForm = () => {
    return (
        <div className="form-container">
            <form>
                <div className="mb-3">
                    <input type="text" name="fullname" className='form-control' placeholder="Full Name" id="fullname" /><br />
                </div>
                <div className="mb-3">
                    <input type="email" name="email" id="email" className='form-control' placeholder='Email' /><br />
                </div>
                <div className="mb-3">
                    <input type="password" name="password" id="password" className='form-control' placeholder='Password' /><br />
                </div>
                <button type="submit" className="btn btn-primary">Create Account</button>
            </form>
        </div>
    )
}

export default RegisterForm

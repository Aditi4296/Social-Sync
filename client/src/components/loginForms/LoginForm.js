import React from 'react';
import './loginForm.css'

const LoginForm = () => {
    return (
        <div className="form-container">
            <form>
                <div className="mb-1">
                    <input type="email" name="email" id="email" className='form-control' placeholder='Email Address' required /><br />
                </div>
                <div className="mb-1">
                    <input type="password" name="password" id="password" className='form-control' placeholder='Password' required /><br />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default LoginForm

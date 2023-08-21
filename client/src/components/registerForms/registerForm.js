import React from 'react';
import './registerForm.css'

const RegisterForm = () => {
    return (
        <div className="form-container">
            <form>
                <div className="mb-1">
                    <input type="text" name="fullname" className='form-control' placeholder="Full Name" id="fullname" required /><br />
                </div>
                <div className="mb-1">
                    <input type="text" name="username" className='form-control' placeholder="User Name" id="username" required /><br />
                </div>
                <div className="mb-1">
                    <input type="email" name="email" id="email" className='form-control' placeholder='Email Address' required /><br />
                </div>
                <div className="mb-1">
                    <input type="password" name="password" id="password" className='form-control' placeholder='Password' required /><br />
                </div>
                <div className="mb-1">
                    <input type="password" name="confirmpassword" id="confirmpassword" className='form-control' placeholder='Confirm Password' required /><br />
                </div>
                <div className="mb-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    Male: <input type="radio" name="gender" id="gender" />
                    Female: <input type="radio" name="gender" id="gender" />
                    Others: <input type="radio" name="gender" id="gender" />
                </div>
                <button type="submit" className="btn btn-primary">Create Account</button>
            </form>
        </div>
    )
}

export default RegisterForm

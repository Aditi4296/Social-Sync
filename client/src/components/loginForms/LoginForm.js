import React, { useState } from 'react';
import './loginForm.css'
import { login } from '../../redux/actions/authAction';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData

    const dispatch = useDispatch()

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(userData))
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="mb-1">
                    <input type="email" name="email" id="email" onChange={handleChangeInput} className='form-control' value={email} placeholder='Email Address' required /><br />
                </div>
                <div className="mb-1">
                    <input type="password" name="password" onChange={handleChangeInput} id="password" className='form-control' value={password} placeholder='Password' required /><br />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default LoginForm

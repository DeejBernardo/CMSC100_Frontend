import React from 'react'
import useForm from './useForm'
import validate from './validateInfo';
import './Form.css'

const Login = ({submitForm}) => {
    const { handleChange, values, handleSubmit, handleClick, errors } = useForm(submitForm,validate);
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>See what you've missed while you were gone!</h1>
                <div className="form-inputs">
                    <label htmlFor='email' className='form-label'>Username</label>
                    <input 
                        type="email" 
                        name="email" 
                        className='form-input'
                        placeholder="Enter your E-mail Address"
                        value={values.email}
                        onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor='password' className='form-label'>Password</label>
                        <input 
                        id="password"
                        type="password" 
                        name="password" 
                        className='form-input'
                        placeholder="Enter your Password"
                        value={values.password}
                        onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                </div>
                <button className='form-input-btn' type="submit">Log in</button>
                <span className='form-input-login'>
                Don't have an account? Sign Up 
                    <a href='/signup'> here</a>
                </span>
            </form>
        </div>
    )
}

export default Login

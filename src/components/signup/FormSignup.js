import React from 'react'
import useForm from './useForm'
import validate from './validateInfo';
import './Form.css'

const FormSignup = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm,validate);

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get Started with us Today! Create your account by filling out the information below.</h1>
                <div className="form-inputs">
                    <label htmlFor='username' className='form-label'>Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        className='form-input'
                        placeholder="Enter your Username"
                        value={values.username}
                        onChange={handleChange}
                        />
                        {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor='email' className='form-label'>Email Address</label>
                        <input 
                        id="email"
                        type="email" 
                        name="email" 
                        className='form-input'
                        placeholder="Enter your Email"
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
                <div className="form-inputs">
                    <label htmlFor='firstName' className='form-label'>First Name</label>
                        <input 
                        id="firstName"
                        type="text" 
                        name="firstName" 
                        className='form-input'
                        placeholder="Enter your firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        />
                </div>
                <div className="form-inputs">
                    <label htmlFor='lastName' className='form-label'>Last Name</label>
                        <input 
                        id="lastName"
                        type="text" 
                        name="lastName" 
                        className='form-input'
                        placeholder="Enter your Last Name"
                        value={values.lastName}
                        onChange={handleChange}
                        />
                </div>
                <div className="form-inputs">
                    <label htmlFor='hobbies' className='form-label'>Hobbies</label>
                        <input 
                        id="hobbies"
                        type="text" 
                        name="hobbies" 
                        className='form-input'
                        placeholder="Enter your hobbies"
                        value={values.hobbies}
                        onChange={handleChange}
                        />
                </div>
                <button className='form-input-btn' type="submit">Sign Up</button>
                <span className='form-input-login'>
                Already have an account? Login 
                    <a href='/login'> here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignup

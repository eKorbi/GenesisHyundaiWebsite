// ekorbi
import React from 'react';
import logo from '../Images/g-logo.png'
import { Link } from 'react-router-dom';
import { useState } from 'react'

const Form = () => {
  
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmailError('');
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPasswordError('');
    setPassword(e.target.value);
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email !== '') {
      const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (emailReg.test(email)) {
        setEmailError('');
        if (email === 'ekorbi.admin@gmail.com') {
          setEmailError('');
          if (password === 'admin') {
            window.location.href = "http://localhost:3000/admin";
          } else {
            setPasswordError("Password does not match to the email address");
          }
        }
        else {
          setEmailError("Email does not match with the database");
        }
      }
      else {
        setEmailError("Invalid email!");
      }
      
    } else {
      setEmailError('Email required');
    }
    if (password !== '') {
      
    }else {
      setPasswordError("Password required");
    }
  }
  return (
     <div className="modal">
        <div className='modal-content'>
            <Link to="/" className='close'>X</Link>
        </div>
        <h2 className='logo-content'>Genesis Login</h2>
            <img className='login-logo' src={logo} alt="genesis-logo"></img>
      <form autoComplete='off' onSubmit={handleFormSubmit}>
        <br></br>
        <label>Email</label>
        <input type="text" placeholder="Enter email address" onChange={handleEmailChange} value={email}></input>
        {emailError && <div className='error-msg'>{emailError}</div>}
        <br></br>
        <label>Password</label>
        <input type="password" placeholder="Enter the password" onChange={handlePasswordChange} value={password}></input>
        {passwordError && <div className='error-msg'>{passwordError}
        </div>}
        <br></br>
        <button type='submit' className='login-button'>Login
        </button>
        </form>
        </div> 
  )
}
export default Form;
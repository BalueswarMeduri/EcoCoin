import React, { useState } from 'react';
import './Loginsign.css';

const Loginsign = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Sign Up forms
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    gender: ''
  }); // State to hold form data

  // Function to toggle between Login and Sign Up forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Function to handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    console.log('Form Data Submitted:', formData);
    // Add your form submission logic here (e.g., send data to server)
  };

  return (
    <div className={`form-container ${isLogin ? 'login' : 'signup'}`}>
      <p className="title">{isLogin ? 'Login' : 'Sign Up'}</p>
      <form className="form" onSubmit={handleSubmit}>
        {/* Sign Up form includes Name and Gender fields */}
        {!isLogin && (
          <>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange} // Update state on name change
              />
            </div>
            <div className="input-group">
              <label htmlFor="gender">Gender</label>
              <div className="gender-group">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleChange} // Update state on gender change
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleChange} // Update state on gender change
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={formData.gender === 'other'}
                    onChange={handleChange} // Update state on gender change
                  />
                  Other
                </label>
              </div>
            </div>
          </>
        )}
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter the username"
            value={formData.username}
            onChange={handleChange} // Update state on username change
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">{isLogin ? 'Password' : 'Create Password'}</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter the Password"
            value={formData.password}
            onChange={handleChange} // Update state on password change
          />
          {/* Additional options for the Login form */}
          {isLogin && (
            <div className="login-options">
              <div className="forgot">
                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
              </div>
              <div className="remember-me">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
            </div>
          )}
        </div>
        <button type="submit" className="sign">{isLogin ? 'Sign In' : 'Sign Up'}</button>
      </form>
      <p className="signup">
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <a onClick={toggleForm} rel="noopener noreferrer" href="#" className="singuplogin">
          {isLogin ? 'Sign up' : 'Sign in'}
        </a>
      </p>
    </div>
  );
};

export default Loginsign;

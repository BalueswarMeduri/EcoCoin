import React, { useState } from 'react';
import './Loginsign.css';

const Loginsign = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={`form-container ${isLogin ? 'login' : 'signup'}`}>
      <p className="title">{isLogin ? 'Login' : 'Sign Up'}</p>
      <form className="form">
        {!isLogin && (
          <>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder="Enter your name" />
            </div>
            <div className="input-group">
              <label htmlFor="gender">Gender</label>
              <div className="gender-group">
                <label>
                  <input type="radio" name="gender" value="male" />
                  Male
                </label>
                <label>
                  <input type="radio" name="gender" value="female" />
                  Female
                </label>
                <label>
                  <input type="radio" name="gender" value="other" />
                  Other
                </label>
              </div>
            </div>
          </>
        )}
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder="Enter the username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">{isLogin ? 'Password' : 'Create Password'}</label>
          <input type="password" name="password" id="password" placeholder="Enter the Password" />
          {isLogin && (
            <div className="login-options">
              <div className="forgot">
                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
              </div>
              <div className="remember-me">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">RememberMe</label>
              </div>
            </div>
          )}
        </div>
        <button type="submit" className="sign">{isLogin ? 'Sign In' : 'Sign Up'}</button>
      </form>
      <p className="signup">
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <a onClick={toggleForm} rel="noopener noreferrer" href="#" className='singuplogin'>
          {isLogin ? 'Sign up' : 'Sign in'}
        </a>
      </p>
    </div>
  );
};

export default Loginsign;

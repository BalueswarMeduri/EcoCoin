import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Loginsign.css";
import { login, register as signUpRequest } from "../../connecting";
import { login as stateLogin } from "../../store/userData";
import { useDispatch } from "react-redux";

const Loginsign = () => {
  const example = "Chosen code";

<<<<<<< HEAD
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
=======
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Sign Up forms
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    gender: ''
  }); // State to hold form data
>>>>>>> fedbef2d093faa2250b64ed77847425b5756fac9

  // Function to toggle between Login and Sign Up forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrorMessage("");
  };

  const onLoginSubmit = async (data) => {
    try {
      const res = await login(data); // Await the login function and capture the response
      console.log(res.message);

      toast.success("Login successful!", {
        style: { backgroundColor: "green", color: "white" }, // Set background color to green and text color to white
      });
      Dispatch(stateLogin(res.message.user));
      reset();
      navigate("/Home"); // Navigate after displaying the toast message
    } catch (err) {
      console.error("Login failed:", err);
      setErrorMessage("Incorrect username or password.");
      toast.error("Incorrect username or password.", {
        style: { backgroundColor: "#9c0e03", color: "white" }, // Set background color to red and text color to white
      });
    }
  };

  const onSignUpSubmit = async (data) => {
    try {
      const res = await signUpRequest(data);
      console.log("Sign-up successful:", res);
      reset();
      toast.success("Sign-up successful!", {
        style: { backgroundColor: "green", color: "white" }, // Set background color to green and text color to white
      });
      navigate("/Home");
    } catch (err) {
      console.error("Sign-up failed:", err);
      setErrorMessage("Failed to create account. Please try again.");
      toast.error("Failed to create account. Please try again.", {
        style: { backgroundColor: "#9c0e03", color: "white" }, // Set background color to red and text color to white
      });
    }
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
<<<<<<< HEAD
    <div className="form-container">
      <p className="title">{isLogin ? "Login" : "Sign Up"}</p>
      {isLogin ? (
        <form className="form" onSubmit={handleSubmit(onLoginSubmit)}>
          <div className="input-group">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your Email"
              {...register("email", { required: true })}
            />
            {errors.username && (
              <span className="error">Username is required</span>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="error">Password is required</span>
            )}
          </div>
          <div className="login-options">
            <div className="forgot">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
            <div className="remember-me">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
          </div>
          <button type="submit" className="sign">
            Sign In
          </button>
        </form>
      ) : (
        <form className="form" onSubmit={handleSubmit(onSignUpSubmit)}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              {...register("fullName", { required: true })}
            />
            {errors.name && <span className="error">Name is required</span>}
          </div>
          <div className="input-group">
            <label htmlFor="gender">Gender</label>
            <div className="gender-group">
              <label>
                <input
                  type="radio"
                  value="male"
                  {...register("gender", { required: true })}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  value="female"
                  {...register("gender", { required: true })}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  value="other"
                  {...register("gender", { required: true })}
                />
                Other
              </label>
=======
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
>>>>>>> fedbef2d093faa2250b64ed77847425b5756fac9
            </div>
            {errors.gender && <span className="error">Gender is required</span>}
          </div>
          <div className="input-group">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              id="userName"
              placeholder="Enter your username"
              {...register("userName", { required: true })}
            />
            {errors.username && (
              <span className="error">Username is required</span>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.userName && (
              <span className="error">Email is required</span>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="password">Create Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="error">Password is required</span>
            )}
          </div>
          <button type="submit" className="sign">
            Sign Up
          </button>
        </form>
      )}
      <p className="signup">
<<<<<<< HEAD
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <a
          onClick={toggleForm}
          rel="noopener noreferrer"
          href="#"
          className="singuplogin"
        >
          {isLogin ? "Sign up" : "Sign in"}
=======
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <a onClick={toggleForm} rel="noopener noreferrer" href="#" className="singuplogin">
          {isLogin ? 'Sign up' : 'Sign in'}
>>>>>>> fedbef2d093faa2250b64ed77847425b5756fac9
        </a>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Loginsign;

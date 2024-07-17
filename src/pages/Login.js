import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/13678513_5190435.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    const validateForm = () => {
      const isEmailValid = validateEmail(email);
      if (isEmailTouched && !isEmailValid) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
      if (isPasswordTouched && password.length < 8) {
        setPasswordError("Password must be at least 8 characters long");
      } else {
        setPasswordError("");
      }

      if (isEmailValid && password.length >= 8) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    };

    validateForm();
  }, [email, password, isEmailTouched, isPasswordTouched]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailTouched(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordTouched(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex justify-start items-center h-screen bg-gray-100">
      <div className="hidden md:flex w-1/2 bg-[#afafaf] items-center justify-center h-screen">
        <img src={image} alt="Login" className="w-1/2 h-1/2" />
      </div>
      <form
        className="flex items-center flex-col h-screen justify-center bg-white-400 p-6 rounded shadow-xl w-full md:w-1/2"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">LOGIN</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="user@example.com"
            className={`w-full p-2 border ${
              emailError ? "border-red-500" : "border-gray-300"
            } rounded mt-1`}
            value={email}
            onChange={handleEmailChange}
            required
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className={`w-full p-2 border ${
              passwordError ? "border-red-500" : "border-gray-300 "
            } rounded mt-1`}
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
        </div>
        <button
          type="submit"
          className={`w-1/3 mt-4 p-2 bg-[#424242] text-white rounded ${
            !isFormValid && "opacity-50 cursor-not-allowed"
          }`}
          disabled={!isFormValid}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

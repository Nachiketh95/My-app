import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider} from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css"; // Updated CSS path

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Handle Email/Password Login
  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };



  return (
    <div className="login-container">
      <h2>Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
          className="input-field"
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
          className="input-field"
        />
        {errors.password && <p className="error-message">{errors.password.message}</p>}

        <button type="submit" className="btn login-btn">Login</button>
      </form>
      <button onClick={handleGoogleLogin} className="btn google-btn">Login with Google</button>

      <p className="link-text">
        Forgot your password? <a href="/forgot-password">Reset it here</a>
      </p>
      <p className="link-text">
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default LoginPage;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Register</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit" className="login-btn">Register</button>
      </form>

      <p>
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
};

export default RegisterPage;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (username && email && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          await axios.post("http://localhost:5001/api/auth/register", {
            username,
            email,
            password,
          });
          setSuccess("Registration successful! Redirecting to the homepage...");
          setError("");
          setUsername("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");

          setTimeout(() => {
            navigate("/");
          }, 1000);
        } catch (err) {
          setError("Error registering user.");
        }
      } else {
        setError("Passwords do not match.");
      }
    } else {
      setError("Please fill out all fields.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-6 text-center">
          Register
        </h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        {success && (
          <p className="text-green-500 mb-4 text-center">{success}</p>
        )}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary text-sm sm:text-base"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary text-sm sm:text-base"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary text-sm sm:text-base"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary text-sm sm:text-base"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium hover:bg-[#3B3A8B] transition w-full text-sm sm:text-base"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-primary font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;

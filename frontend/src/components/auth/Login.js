import React, { useState } from "react";
import { Link, Navigate , useNavigate } from "react-router-dom"; // Ensure React Router is installed and set up

import Header from "../layout/header";
import Footer from "../layout/footer";
import { localStorageService } from "../../Services/localStorage.service";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password); 

    const payload = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:8000/user/login", {
        // Ensure the URL is correct
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      localStorageService.storeAccessToken(data.token);
      console.log("Response:", data);
      setError("");

      // Handle success
      console.log("Login successful!");
      navigate("/dashboard")
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <Header />
      <main className="">
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Login Page</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Login
              </button>
              {error && (
                <div className="text-red-500 text-center mt-4">{error}</div>
              )}
             <div className="mt-5"> <Link
                to="/register"
                className=""
              >
                <button className="w-full bg-blue-500 text-center text-white py-2 mt-4 px-4 rounded-md hover:bg-blue-600">Register</button>
                
              </Link></div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;

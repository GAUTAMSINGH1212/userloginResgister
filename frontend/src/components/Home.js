import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./layout/header";
import Footer from "./layout/footer";
import { localStorageService } from "../Services/localStorage.service";

const Home = () => {
  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
    phone: "",
  }); // Define state to store userProfile

  useEffect(() => {
    getUserProfile();
  }, []);

  const getUserProfile = async () => {
    const accessToken = localStorageService.getAccessToken();
    console.log("acces token from forntend", accessToken);
    const response = await axios.get("http://localhost:8000/user/profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`, // Pass token with 'Bearer' format
      },
    });
    console.log('response.data',response.data)
    setUserProfile(response.data.user);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Home Page</h2>
        <p>Welcome to the home page!</p>
        {/* Card for displaying the API data */}
        <div className="max-w-sm mx-auto mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">API Data</h3>
            {/* Display userProfile or loading state */}
            <p>
              {userProfile
                ? "user profile fetched"
                : "Loading data from API..."}
            </p>
            <p>name: {userProfile.name}</p>
            <p>email: {userProfile.email}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

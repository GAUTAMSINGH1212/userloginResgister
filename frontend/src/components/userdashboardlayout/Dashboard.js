import React, { useEffect, useState } from "react";
import axios from "axios";
import { localStorageService } from "../../Services/localStorage.service.js";

function UserDashboard() {
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
    console.log("response.data", response.data);
    setUserProfile(response.data.user);
  };

  const handleLogout = () => {
    localStorageService.clearStorage();
    window.location.href = "/login";
  };
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white p-6">
        <h2 className="text-2xl font-bold">User Dashboard</h2>
        <ul className="mt-8 space-y-4">
          <li>
            <a href="#" className="hover:bg-blue-700 p-2 rounded">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-blue-700 p-2 rounded">
              Profile
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-blue-700 p-2 rounded">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-blue-700 p-2 rounded">
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-blue-700 p-2 rounded">
              Support
            </a>
          </li>
          <li onClick={handleLogout}>
            <a href="#" className="hover:bg-blue-700 p-2 rounded">
              Logout
            </a>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold">
            Welcome, {userProfile.name}
          </h1>
          <button
            className="bg-blue-600 text-white p-2 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>


        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Total Orders</h3>
            <p className="text-2xl text-blue-600">120</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Active Subscriptions</h3>
            <p className="text-2xl text-green-600">3</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Points Earned</h3>
            <p className="text-2xl text-yellow-600">1,250</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Messages</h3>
            <p className="text-2xl text-red-600">5</p>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 mt-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="font-medium">Order #12345</span>
              <span className="text-gray-500">Completed</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="font-medium">Subscription Renewed</span>
              <span className="text-green-500">Success</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="font-medium">Message from Support</span>
              <span className="text-blue-500">Unread</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;

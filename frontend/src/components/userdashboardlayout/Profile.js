import React, { useEffect, useState } from "react";

import axios from "axios";
import { localStorageService } from "../../Services/localStorage.service.js";
const ProfilePage = () => {
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

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
              <div className="bg-white p-6 rounded-lg w-1/2 shadow-md mb-6 flex items-center">
          <div>
            <img
              src="https://via.placeholder.com/100"
              alt="User Avatar"
              className="rounded-full mr-6"
            />
          </div>{" "}
          <div>
            {userProfile ? (
              <>
                <h2 className="text-xl font-semibold"> {userProfile.name}</h2>
                <p className="text-gray-500">{userProfile.email}</p>
              </>
            ) : (
              ""
            )}

            <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded">
              Edit Profile
            </button>
          </div>
        </div>
    </div>
  );
};

export default ProfilePage;

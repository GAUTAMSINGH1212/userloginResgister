import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../layout/header.js";
import Footer from "../layout/footer.js";
import { localStorageService } from "../../Services/localStorage.service.js";
import productlogo from "../../image/productinmage.jpg";

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
    console.log("response.data", response.data);
    setUserProfile(response.data.user);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Home Page</h2>
        <p>Welcome to the home page!</p>
        <div className="max-w-sm mx-auto mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">API Data</h3>
            <p>
              {userProfile
                ? "user profile fetched"
                : "Loading data from API..."}
            </p>
            <p>name: {userProfile.name}</p>
            <p>email: {userProfile.email}</p>
          </div>
        </div>
      </main> */}
      <div class="bg-yellow-50 min-h-screen flex flex-col">
        <section class="bg-black text-yellow-200 py-20 text-center">
          <h2 class="text-5xl font-bold mb-4">Welcome to Try One</h2>
          <p class="text-xl mb-6">
            Discover the best products at unbeatable prices.
          </p>
          <button class="bg-yellow-500 text-black px-8 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition">
            Start Shopping
          </button>
        </section>

        <section class="py-12">
          <div class="container mx-auto px-4">
            <h3 class="text-3xl font-bold text-blue-900 mb-8">
              Featured Products
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
                <img
                  src={productlogo}
                  alt="Product 1"
                  class="w-full h-56 object-cover"
                />
                <div class="p-4">
                  <h4 class="font-bold text-lg text-gray-800 mb-2">
                    Product 1
                  </h4>
                  <p class="text-gray-600 mb-4">
                    Top-notch quality product for all your needs.
                  </p>
                  <div class="flex justify-between items-center mb-4">
                    <span class="text-blue-900 font-bold text-xl">$99.99</span>
                    <div class="flex items-center gap-1 text-yellow-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 4.263l1.77 5.451h5.744l-4.647 3.375 1.77 5.452L12 15.166l-4.647 3.375 1.77-5.452L5.476 9.714h5.744z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 4.263l1.77 5.451h5.744l-4.647 3.375 1.77 5.452L12 15.166l-4.647 3.375 1.77-5.452L5.476 9.714h5.744z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 4.263l1.77 5.451h5.744l-4.647 3.375 1.77 5.452L12 15.166l-4.647 3.375 1.77-5.452L5.476 9.714h5.744z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 4.263l1.77 5.451h5.744l-4.647 3.375 1.77 5.452L12 15.166l-4.647 3.375 1.77-5.452L5.476 9.714h5.744z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 4.263l1.77 5.451h5.744l-4.647 3.375 1.77 5.452L12 15.166l-4.647 3.375 1.77-5.452L5.476 9.714h5.744z" />
                      </svg>
                    </div>
                  </div>
                  <button class="w-full bg-blue-900 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-800 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

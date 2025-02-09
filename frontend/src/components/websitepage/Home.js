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
  
    if (!accessToken) {
      console.error("No access token found. Redirecting to login...");
      return; // Stop execution if no token
    }
  
    try {
      const response = await axios.get("http://localhost:8000/user/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`, // Ensure 'Bearer ' is used correctly
        },
      });
  
      console.log("User profile response:", response.data);
      setUserProfile(response.data.user);
    } catch (error) {
      console.error("Error fetching user profile:", error.response);
      
      if (error.response?.status === 401) {
        alert("Session expired. Please log in again.");
        // Redirect user to login page (if using React Router)
        // window.location.href = "/login";
      }
    }
  };
  
  const products = [
    {
      id: 1,
      name: "Book: The Great Adventure",
      price: 15.99,
      image: "https://picsum.photos/200/300?random=1", // Example image for books
      description: "A thrilling journey through time and space. This book will captivate your imagination with its deep storyline and unforgettable characters.",
    },
    {
      id: 2,
      name: "Beauty Product: Facial Serum",
      price: 29.99,
      image: "https://picsum.photos/200/301?random=2", // Example image for beauty products
      description: "A rejuvenating serum designed to hydrate and refresh your skin. Packed with antioxidants, it helps reduce wrinkles and promotes a healthy glow.",
    },
    {
      id: 3,
      name: "Book: The Silent Sea",
      price: 12.99,
      image: "https://picsum.photos/200/302?random=3", // Example image for books
      description: "Set in a distant future, this sci-fi thriller explores the mystery of the Silent Sea. A must-read for fans of space exploration and adventure.",
    },
    {
      id: 4,
      name: "Beauty Product: Lipstick Set",
      price: 19.99,
      image: "https://picsum.photos/200/303?random=4", // Example image for beauty products
      description: "A collection of 5 vibrant shades to match every occasion. This long-lasting lipstick set provides a smooth, silky finish and keeps your lips moisturized.",
    },
    {
      id: 5,
      name: "Book: The Mystery of Shadows",
      price: 9.99,
      image: "https://picsum.photos/200/304?random=5", // Example image for books
      description: "A gripping mystery novel that will keep you on the edge of your seat. The perfect read for fans of detective stories and suspenseful plots.",
    },
    {
      id: 6,
      name: "Beauty Product: Anti-Aging Cream",
      price: 35.99,
      image: "https://picsum.photos/200/305?random=6", // Example image for beauty products
      description: "A rich anti-aging cream that hydrates and rejuvenates the skin. It works to reduce fine lines and wrinkles, leaving your skin feeling youthful and smooth.",
    },
    {
      id: 7,
      name: "Book: The Art of War",
      price: 8.99,
      image: "https://picsum.photos/200/306?random=7", // Example image for books
      description: "An ancient military strategy text that is still widely read for its wisdom in leadership, strategy, and decision-making.",
    },
    {
      id: 8,
      name: "Beauty Product: Nail Care Kit",
      price: 14.99,
      image: "https://picsum.photos/200/307?random=8", // Example image for beauty products
      description: "A complete nail care set that includes everything you need for perfectly manicured nails. Includes nail clippers, polish, and a nourishing oil.",
    },
  ];
  

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
          <h2 class="text-5xl font-bold mb-4">Welcome to Try One Shop</h2>
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
              {products.map((product) => (
                <div class="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
                  <img
                    src={product.image}
                    alt="Product 1"
                    class="w-full h-56 object-cover"
                  />
                  <div class="p-4">
                    <h4 class="font-bold text-lg text-gray-800 mb-2">
                      {product.name}{" "}
                    </h4>
                    <p class="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    <div class="flex justify-between items-center mb-4">
                      <span class="text-blue-900 font-bold text-xl">
                    {product.price}
                      </span>
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
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

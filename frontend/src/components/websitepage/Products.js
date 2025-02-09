import react ,{useEffect,useState}from "react";

import Navbar from "../layout/header";
import Footer from "../layout/footer";
const Product = () => {
  const apiUrl = "http://localhost:8000/";
  
  const getproduct = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve token from localStorage
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }
  
      const response = await fetch(`${apiUrl}product`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Add the Authorization header
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Products:", data);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };
  
  useEffect(() => {
    getproduct();
  }, []);
  
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Product 2",
      price: 9.99,
      image: "https://picsum.photos/200/301",
    },
    {
      id: 3,
      name: "Product 3",
      price: 12.99,
      image: "https://picsum.photos/200/302",
    },
  ];

  return (
    <>
      <div>
        <div className="bg-yellow-50 min-h-screen flex flex-col">
          <Navbar />

          {/* Product Page Content */}
          <div className="container mx-auto my-10 px-4">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
              Our Products
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-300 rounded-lg shadow-md bg-white p-4"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-40 w-full object-cover rounded-md mb-4"
                  />
                  <h2 className="text-lg font-bold text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    {product.description}
                  </p>
                  <p className="text-blue-500 font-bold mt-4">
                    ${product.price}
                  </p>
                  <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};
export default Product;

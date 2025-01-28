import Product from "../models/ProductSchema.js"
const addcreateProduct  = async (req, res) => {
    const { name, description, price, category, brand, stock } = req.body;
  
    try {
      if (!name || !description || !price || !category || !brand || !stock) {
        return res.status(400).json({ success: false, message: "All fields are required" });
      }
  
      let uploadedImageUrl = null;
      if (req.file) {
        uploadedImageUrl = `/uploads/${req.file.filename}`; // Local file path
      }
  
      const product = new Product({
        name,
        description,
        price: parseFloat(price),
        category,
        brand,
        stock: parseInt(stock, 10),
        image: uploadedImageUrl,
      });
  
      await product.save();
  
      return res.status(201).json({
        success: true,
        message: "Product added successfully",
        product,
      });
    } catch (error) {
      console.error("Error while adding product:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  };

  const getAllProducts = (req, res) => {
    Product.find()
      .then((products) => {
        res.status(200).json(products);  // Send products as JSON response
      })
      .catch((err) => {
        res.status(500).json({ message: "Server error", error: err.message });
      });
  }
  


const getProductById = ()=>{}

const updateProduct = ()=>{}

const deleteProduct =()=>{}

export { addcreateProduct ,getAllProducts,getProductById,updateProduct,deleteProduct };

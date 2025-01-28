const addcreateProduct = async (req, res) => {
  const { name, description, price, category, brand, stock, image } = req.body;
  console.log("name", {
    name,
    description,
    price,
    category,
    brand,
    stock,
    image,
  });
  try {
    // check fields validation
    // then image ko upload multer cloudinary
    // create an object
    // then db query create save()
    // then return

    return res
      .status(200)
      .json({ message: "product added successfully", success: true });
  } catch (error) {
    console.log("error while adding product");
  }
};

const getAllProducts = ()=>{}

const getProductById = ()=>{}

const updateProduct = ()=>{}

const deleteProduct =()=>{}

export { addcreateProduct ,getAllProducts,getProductById,updateProduct,deleteProduct };

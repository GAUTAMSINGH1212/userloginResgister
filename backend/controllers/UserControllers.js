import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/UserSchema.js";

const JWT_SECRET =
  process.env.JWT_SECRET ||
  "";

const register = async (req, res) => {
  const { firstname, email, password } = req.body;

  console.log("req", firstname);

  // Validate name
  if (!firstname || firstname.trim().length < 3) {
    return res.status(400).json({
      message: "Name is required and must be at least 3 characters long.",
    });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const createdUser = await User.create({
      name: firstname.trim(), // Trim leading/trailing whitespace
      email,
      password: hashedPassword,
    });

    if (!createdUser) {
      return res.status(400).json({ message: "Failed to create user" });
    }

    res.status(201).json({
      success: true,
      data: {
        user: createdUser,
      },
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const login = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, email, firstname, lastname },
      JWT_SECRET,
      {
        expiresIn: "1day",
      }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const dashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json({ message: "User Dashboard", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const userProfile = async (req, res) => {
  const accessToken = req.headers.authorization.split(" ")[1];

  console.log('accessToken',req.headers.authorization.split(" ")[1])

  if (!accessToken) {
    return res.status(401).json({ message: "Access token is required" });
  }

  try {
    // Verify the access token
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);

    // Find the user by ID from the token payload
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Respond with the user's profile
    res.status(200).json({
      success: true,
      message: "User profile retrieved successfully",
      user,
    });
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid access token" });
    }

    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export { dashboard, register, login,userProfile };
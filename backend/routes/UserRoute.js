import express from "express";

const router = express.Router();

import {userProfile, register, login, dashboard } from "../controllers/UserControllers.js";

router.post("/register", register);
router.post("/login", login);
router.get("/dashboard", dashboard);
router.get('/profile',userProfile)

export default router;

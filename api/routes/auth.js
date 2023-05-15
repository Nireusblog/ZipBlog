import express from "express";
import { register, login, logout } from "../controllers/auth.js";

const router = express.Router(); // Create a new instance of the express.Router

router.post("/register", register); // Handle POST requests to /register endpoint using the register controller
router.post("/login", login); // Handle POST requests to /login endpoint using the login controller
router.post("/logout", logout); // Handle POST requests to /logout endpoint using the logout controller

export default router; // Export the router as the default export

import express from "express";
import { addPost, deletePost, getPost, getPosts, updatePost } from "../controllers/post.js";

const router = express.Router(); // Create a new instance of the express.Router

router.get("/", getPosts); // Handle GET requests to / endpoint using the getPosts controller
router.get("/:id", getPost); // Handle GET requests to /:id endpoint using the getPost controller
router.post("/", addPost); // Handle POST requests to / endpoint using the addPost controller
router.delete("/:id", deletePost); // Handle DELETE requests to /:id endpoint using the deletePost controller
router.put("/:id", updatePost); // Handle PUT requests to /:id endpoint using the updatePost controller

export default router; // Export the router as the default export

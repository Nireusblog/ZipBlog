import express, { response } from "express"; // Import the express module
import authRoutes from "./routes/auth.js"; // Import the authRoutes module from ./routes/auth.js
import userRoutes from "./routes/users.js"; // Import the userRoutes module from ./routes/users.js
import postRoutes from "./routes/posts.js"; // Import the postRoutes module from ./routes/posts.js
import cookieParser from "cookie-parser"; // Import the cookie-parser module
import multer from "multer"; // Import the multer module

const app = express(); // Create an express application

app.use(express.json()); // Parse JSON request bodies
app.use(cookieParser()); // Parse cookie headers

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../public/upload"); // Set the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname); // Set the filename for uploaded files
    },
});

const upload = multer({ storage }); // Create a multer instance for file uploads

app.post("/api/upload", upload.single("file"), function (req, res) {
    // Handle POST request to /api/upload for file upload
    const file = req.file; // Access the uploaded file
    res.status(200).json(file.filename); // Return the filename in the response
});

app.use("/api/auth", authRoutes); // Mount the authRoutes middleware at /api/auth
app.use("/api/users", userRoutes); // Mount the userRoutes middleware at /api/users
app.use("/api/posts", postRoutes); // Mount the postRoutes middleware at /api/posts

app.listen(8800, () => {
    console.log("Connected!"); // Start the server and display "Connected!" in the console when it starts successfully
});

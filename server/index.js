const express = require("express");

const app = express();
const port = 9000

app.use("/",(req,res) => {
    res.json({message:"hello from server"})
})
app.listen(9000, ()=>{
    console.log("connected to server")
})


// import express from "express";
// import dotenv from "dotenv";
// import path from "path";
// import connectDB from "./config/db";
// import cors from "cors";
// import { 
//   errorResponserHandler,
//   invalidPathHandler,
// } from "./middleware/errorHandler";
    
// // Routes
// import userRoutes from "./routes/userRoutes";
// import postRoutes from "./routes/postRoutes";
// import commentRoutes from "./routes/commentRoutes";
// import postCategoriesRoutes from "./routes/postCategoriesRoutes";

// dotenv.config();
// connectDB();
// // const app = express();
// // app.use(express.json()); 
// // app.use(cors());    

// app.get("/", (req, res) => {     
//   res.send("Server is running...");
// });

// // app.use("/api/users", userRoutes);      
// // app.use("/api/posts", postRoutes);
// // app.use("/api/comments", commentRoutes);
// // app.use("/api/post-categories", postCategoriesRoutes);

// // // static assets
// // app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// // app.use(invalidPathHandler);
// // app.use(errorResponserHandler);

// const PORT = process.env.PORT || 5000;  

// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));












// // import express from 'express'
// // import dotenv from 'dotenv'
// // import connectDB from './config/db.js';

// // //Routes
// // import userRoutes from './routes/userRoutes.js'

// // dotenv.config();
// // connectDB();
// // const app = express();
// // app.use(express.json());

// // app.get("/" ,( req , res) =>{
// //     res.send("Server is running....")
// // });

// // app.use("/api/user" , userRoutes)

// // const PORT = process.env.port || 5000
// // app.listen(PORT, () => console.log(`server is running on port ${PORT}`))

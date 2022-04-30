import express from "express";
import mongoose from "mongoose";
import cors from "cors";

//routes
import postRoutes from "./routes/posts.js";

const app = express();
// const cors = require('cors'); HATES IT

//middleware
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors({origin: true, credentials: true}));
app.use("/posts", postRoutes);

//mongodb
const CONNECTION_URL = "mongodb+srv://jace:jace123@volley.iaahf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen((PORT, () => console.log(`Port: ${PORT} has risen`))))
  .catch((error) => console.log(error));

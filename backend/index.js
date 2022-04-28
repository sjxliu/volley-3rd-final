import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

//routes
import postRoutes from './routes/posts.js'


const app = express();


//middleware
app.use('/posts', postRoutes)
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors())


//mongodb
const CONNECTION_URL = 'mongodb+srv://jace:jace123@volley.iaahf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, )
// set to true to avoid annoying warnings
    .then (()=> app.listen((PORT, ()=> console.log(`Port: ${PORT} has risen`))))
    .catch((error) => console.log(error.message))

// mongoose.set('useFindAndModify', false)
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const colors = require('colors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//database connection function
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Server running on ${mongoose.connection.host}`.bgCyan.white);
    } catch (error) {
        console.log(`${error}`.bgRed)
    }
}

//routes
app.use('/api', require('./routes/authRouter.js'))

connectDb();

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server is running on port ", port);
})
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log(err);
})


app.listen(4000, ()=>{
    console.log('Server is running on port 4000');
})

app.use(express.json());
app.use(cors())
app.use(cookieParser())

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/listing', listingRouter)


app.use( (err,req ,res , next) =>{
    const statusCode = err.statusCode || 500 ;
    const message = err.message || "Internal Server Error"
    res.status(statusCode).json({
        success : false ,
        statusCode : statusCode ,
        message : message ,
    })
})
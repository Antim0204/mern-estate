import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js';
dotenv.config();



mongoose.connect(process.env.MONGO).
then(()=>console.log('MongoDB connected'))
.catch(error=>console.log(error));
const app=express();

app.get('/',(req,res)=>{
    res.json({
        message:'Hello World'});
})




app.listen(3000,()=>{
console.log(`Server running on port 3000`);
}
);  

app.use('/api/user',userRouter);
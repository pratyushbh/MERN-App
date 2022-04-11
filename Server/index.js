import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemon from 'nodemon';
import mongoose from "mongoose";

const app = express();
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
const CONNECTION_URL='mongodb+srv://Pratyush:pass120303@cluster0.hmbiu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT=process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>{console.log(`Server is running on ${PORT}`)}))
    .catch((error)=>{console.log(error.message)});
// mongoose.set('useFindAndModify',false)

const express = require('express')
const mongoose = require("mongoose")
const app = express();
const dotenv = require('dotenv')
const userRouter = require("./routes/userRoute")
dotenv.config();

//middleware
app.use(express.json())

mongoose.connect(process.env.URL)
.then(()=>{ console.log("connected successfully")})
.catch((err) =>{console.log("error",err)
})

//route
app.use("/",userRouter)


app.listen(process.env.PORT || 8000,(err)=>{
   if(err) console.log(err);
   console.log("Server started on",process.env.PORT)
})
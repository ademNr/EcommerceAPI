const express = require("express");
const mongoose = require("mongoose");
const app = express() ;
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config() ;


//Middlewares : 
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//importing routes
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');



//routes Middlewares
app.use('/api/auth' , authRoute);
app.use('/api/user', userRoute);










// DB connection 
mongoose.connect(process.env.DB, 
    
  {  useNewUrlParser : true } , 
  ()=>{
    console.log("connected to DB ");
  }

);


//-----------------
 app.get('/', (req,res)=>{
    res.send("jawek behy ");
 });



// server connection 
app.listen(process.env.PORT,()=>{
    console.log("lintening on port ", process.env.PORT);
    
} );
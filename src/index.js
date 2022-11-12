const express = require("express");
const cors = require("cors"); 
const mongoose = require("mongoose");
const helmet = require('helmet');
const app = express() ;


const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config() ;


//Middlewares : 
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

//importing routes
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");



//routes Middlewares
app.use('/api/auth' , authRoute);
app.use('/api/user', userRoute);
app.use("/api/product", productRoute);
app.use("api/cart", cartRoute); 
app.use("api/order", orderRoute); 









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
const express = require("express");
const cors = require("cors"); 
const helmet = require('helmet');
const morgan = require('morgan');
const app = express() ;


const bodyParser = require("body-parser");



//Middlewares : 
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

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



//-----------------
 app.get('/', (req,res)=>{
    res.send("jawek behy ");
 });



module.exports = app ;
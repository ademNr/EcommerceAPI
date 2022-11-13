const express = require("express");
const cors = require("cors"); 
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const app = express() ;


const bodyParser = require("body-parser");



// Global Middlewares : 

   // http headers security
   app.use(helmet());
 // limit requests from same api : prevents dos and bruteforce attacks
 const limiter = rateLimit({
   max: 100 ,
   windowMs: 60*60*1000,
   message: 'too many requests for this ip try again in an our'
 });
 app.use("/api",limiter);

 //body-parser
 app.use(express.json());
 app.use(bodyParser.urlencoded({ extended: true }));

 //data sanitization against noSQL injection 
 app.use(mongoSanitize()); 
 // Data sanitization againt XSS 
 app.use(xss());

 //preventing http parameter pollution 
 app.use(hpp());

 // cors 
 app.use(cors());

 //only for production
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
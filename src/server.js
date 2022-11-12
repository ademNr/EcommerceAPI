const app = require('./app');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config() ;

// DB connection 
mongoose.connect(process.env.DB, 
    
    {  useNewUrlParser : true } , 
    ()=>{
      console.log("connected to DB ");
    }
  
  );
  
// server connection 
app.listen(process.env.PORT,()=>{
    console.log("lintening on port ", process.env.PORT);
    
} );
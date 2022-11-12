
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const {registerValidation, loginValidation} = require("../middlewares/validation");


const registerUser = async (req, res)=>{

    // data validation 
     const {error}=  registerValidation(req.body);
     console.log(error);
     if(error) return res.status(400).json(error.details[0].message);

     //checking for existing email 
     const emailExist = await User.findOne({email: req.body.email});
     if(emailExist){
        return  res.status(400).json("email already exists");
     } 
     // creating password hash
     const salt = await bcrypt.genSalt(10);
     const hashedPassword= await bcrypt.hash(req.body.password,salt);
     // user creation 
    const user = new User ({
      email : req.body.email , 
       username : req.body.username,
        password : hashedPassword ,
      });


    try{
        const savedUser = await user.save(); 
        res.status(200).json(savedUser); 
        

  }catch(err){
       res.status(400).json(err);
        console.log(err);
    }

}


const loginUser = async (req,res)=>{

    // DATA validation
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).json(error.details[0].message); 
  
     // checking for email existence
     const user = await User.findOne({email: req.body.email});
       if(!user) return  res.status(400).send("email doesn't exist");
       
  
       // checking for correct password
       const validPass = await bcrypt.compare(req.body.password, user.password)
       if(!validPass) return res.status(400).send('wrong password');
  
       // create and assign token 
       const token  = jwt.sign({_id:user._id, isAdmin:user.isAdmin}, process.env.TOKEN_SECRET);
      
       res.header('auth-token', token).json(token); 
       
  
  
      
  
  
  
  }
module.exports = {registerUser, loginUser};
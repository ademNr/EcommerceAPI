const jwt = require('jsonwebtoken'); 
const User= require('../models/User');


//
const verifyToken = (req,res, next)=>{
    
    const token = req.header('auth-token'); 
    if(!token) return res.status(401).json('access denied'); 

    try{

        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified ; 
        next();


    }catch(err){
        res.status(400).json('invalid token');
    }
}


//
const verifyTokenAndAuth = (req,res, next)=>{
    verifyToken(req,res,()=>{
        if( req.params.id == req.user.id || req.user.isAdmin){
            next(); 
        }else{
            return res.status(403).json("you're not authorized ");
        }

    });

}



module.exports = {verifyToken,verifyTokenAndAuth }



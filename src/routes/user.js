const router = require("express").Router(); 

const {verifyToken, verifyTokenAndAuth} = require("../middlewares/verifyToken");
const bcrypt = require('bcryptjs');
const User = require("../models/User");

// updating user info 
router.put("/:id",verifyTokenAndAuth, async (req,res)=>{
    const salt = await bcrypt.genSalt(10);
    if(req.body.password){
        req.body.password = await bcrypt.hash(req.body.password,salt);
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set : req.body}, {new: true});
        res.status(200).json(updatedUser); 

    }catch(err){
        res.status(400).json(err); 

    }

} )





module.exports = router ; 
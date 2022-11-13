
const bcrypt = require('bcryptjs');
const User = require("../models/User");


// update user by id 
const updateUser = async (req,res)=>{
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

}

// delete user by id 
const deleteUser = async (req, res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user has been deleted"); 

    }catch(err){
        res.status(400).json(err);
    }
}

// get user by id 
const getUsers = async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
      res.status(200).json(user);


    }catch(err){
        res.status(400).json(err);

    }
    

}


//get all users
const getAllUsers = async (req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);


    }catch(err){
        res.status(400).json(err);

    }
    

}






module.exports = {updateUser, deleteUser, getUsers, getAllUsers, }
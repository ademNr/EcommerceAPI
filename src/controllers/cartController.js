
const Cart = require("../models/Cart");


// create cart 
const createProduct = async (req,res)=>{
    const newCart = new Cart(req.body); 


    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);

    }catch(err){
        res.status(400).json(err);

    }
}


// update cart 
const updateCart = async(req,res)=>{
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {$set : req.body}, {new: true});
        res.status(200).json(updatedCart); 

    }catch(err){
        res.status(400).json(err); 

    }
}

// delete cart 

const deleteCart = async (req, res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("cart has been deleted"); 

    }catch(err){
        res.status(400).json(err);
    }
}


//get cart 
const getUserCart = async(req,res)=>{

    try{
        const userCart = await Cart.findOne({userId : req.params.userId}); 
        res.status(200).json(userCart);
    }catch(err){
        res.status(400).json(err); 
    }

}

// get all carts : for admin only 

const getAllCarts = async (req,res)=>{
    try{
        const carts = await Cart.find(); 
        res.status(200).json(carts);

    }catch(err){
        res.status(400).json(err);
    }
}

module.exports = {createProduct, updateCart, deleteCart, getUserCart, getAllCarts}

const router = require("express").Router(); 
const cartController = require("../controllers/cartController"); 
const {verifyTokenAndAuth,verifyTokenAndAdmin,verifyToken} = require("../middlewares/verifyToken");


// create cart 
router.post("/", verifyToken, cartController.createProduct); 

// update cart 

router.put("/:id", verifyTokenAndAuth, cartController.updateCart); 

// delete Cart 
router.delete("/:id", verifyTokenAndAuth, cartController.deleteCart);

//get cart  for user

router.get("/find/:userId", verifyTokenAndAuth, cartController.getUserCart);

// get all carts for admin 

router.get("/", verifyTokenAndAdmin, cartController.getAllCarts);



module.exports= router ;
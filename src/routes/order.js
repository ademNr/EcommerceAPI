const router  = require("express").Router(); 
const orderController = require("../controllers/orderController"); 
const {verifyTokenAndAuth,verifyTokenAndAdmin,verifyToken} = require("../middlewares/verifyToken");

// create order
router.post("/", verifyTokenAndAuth, orderController.createOrder);

// update order : only by admin 
router.put("/", verifyTokenAndAdmin, orderController.updateOrder); 

// get order by id 
router.get("/find/:userId", verifyTokenAndAuth, orderController.getUserOrders);

//get all orders 
router.get("/", verifyTokenAndAdmin, orderController.getAllOrders);


//get monthly income stats 
router.get("/income", verifyTokenAndAdmin , orderController.getMonthlyIncome);



module.exports = router; 
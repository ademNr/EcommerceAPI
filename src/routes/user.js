const router = require("express").Router(); 
const { verifyTokenAndAuth,verifyTokenAndAdmin, verifyToken} = require("../middlewares/verifyToken");
const userController = require("../controllers/userController"); 



// updating user info : works
router.put("/:id",verifyTokenAndAuth, userController.updateUser )


//deleting a user by id : works
router.delete("/:id", verifyTokenAndAuth, userController.deleteUser);

//get user by id  : works
router.get("/:id", verifyTokenAndAdmin, userController.getUsers);


//get all users  : works
router.get("/", verifyTokenAndAdmin, userController.getAllUsers);






module.exports = router ; 
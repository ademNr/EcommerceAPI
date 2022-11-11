const router = require('express').Router() ; 

const authController = require("../controllers/authController");



// --------------------------------------- REGISTER --------------------------------------------------- //
router.post ('/register',authController.registerUser );


// --------------------------------------- LOGIN --------------------------------------------------- //
router.post('/login',authController.loginUser);






module.exports = router ; 
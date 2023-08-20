const express = require('express');
const router = express.Router();
const {createUser,getAllUsers}=require("../controllers/userController")

router.post("/addOne",createUser);
router.get("/getAll",getAllUsers)
module.exports=router

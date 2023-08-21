const express = require('express');
const router = express.Router();
const {createUser,getAllUsers, getOneUser}=require("../controllers/userController")

router.post("/addOne",createUser);
router.get("/getAll",getAllUsers);
router.post("/getOne",getOneUser);
module.exports=router

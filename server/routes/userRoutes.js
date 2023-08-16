const express = require('express');
const router = express.Router();
const {createUser,login}=require("../controllers/userController")

router.post("/addOne",createUser);
router.post("/login",login);

module.exports=router

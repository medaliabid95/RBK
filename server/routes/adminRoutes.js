const express = require('express');
const router = express.Router();
const {createAdmin,login}=require("../controllers/adminController")

router.post("/add",createAdmin)
router.get("/login",login)


module.exports=router
const express = require('express');
const router = express.Router();
const {getAllProjects,getOneProject,updateProject,deleteProject,createProject}=require("../controllers/rProjectController")


router.get("/getAll",getAllProjects);
router.get("/getOne/:id",getOneProject);
router.post("/addOne",createProject);
router.put("/updateOne/:id",updateProject);
router.delete("/deleteOne/:id",deleteProject)

module.exports=router
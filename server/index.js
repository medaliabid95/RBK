const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const sequelize = require("./database/configdb");
const { Sequelize } = require("sequelize");
const studentRoutes = require("./routes/studentRoutes"); 
const eventsRoutes=require("./routes/eventsRoutes.js");
const projectsRoutes=require("./routes/rProjectRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));



app.use("/students", studentRoutes);
app.use("/events",eventsRoutes);
app.use("/projects",projectsRoutes)

sequelize.sync()
.then(()=>{
  app.listen(PORT, function () {
  console.log("Listening on port " + PORT);
});})
.catch((error)=>console.log(error))






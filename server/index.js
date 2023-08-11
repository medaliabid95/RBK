const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const sequelize = require("./database/configdb");
const { Sequelize } = require("sequelize");
const studentRoutes = require("./routes/studentRoutes"); 


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));



app.use("/students", studentRoutes);


app.listen(PORT, function () {
  console.log("Listening on port " + PORT);
});

sequelize.authenticate().then(() => {
  console.log("Connection has been established successfully");
}).catch((err) => {
  console.error("Unable to connect to the database:", err);
});




const {User} = require("../database/models/usersModel")
const {Sequelize}=require("sequelize")
module.exports={
    createUser: async(req,res)=>{
        try{
            const newUser=await User.create(req.body)
            res.status(201).json(newUser)
        }
        catch(err){
            res.status(400).json({ message: 'Error creating user', error: err.message });
        }
    },
    getAllUsers:async(req,res)=>{
        try{ 
            const users=await User.findAll()
            res.status(200).json(users)
        }
        catch(err){
            res.status(400).json({ message: 'Error fetching users', error: err.message })
        }
    }

}
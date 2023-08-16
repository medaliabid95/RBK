const User = require("../database/models/usersModel")
const {Sequelize}=require("sequelize")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports={
    createUser: async(req,res)=>{
        try{
            const { password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser=await User.create({...req.body,password: hashedPassword} )
            res.status(201).json(newUser)
        }
        catch(err){
            res.status(400).json({ message: 'Error creating user', error: err.message });
        }
    },

    login:async(req,res)=>{
        try{
            const { email, password } = req.body;
            const foundUser = await User.findOne({ where: { email } });
            if (!foundUser) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            const passwordMatch = await bcrypt.compare(password, foundUser.password);
        if (!passwordMatch) {
            res.status(401).json({ message: 'Incorrect password' });
            return;
        }
        const token = jwt.sign({email:foundUser.email, username:foundUser.username, name : foundUser.firstName + " " + foundUser.lastName  , profilepic :foundUser.profilepic},
        'user', { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
        }
        catch(err){
            res.status(500).json({ message: 'Error during login', error: err.message });
        }
    }
}
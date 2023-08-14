const admin = require("../database/models/adminModel.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const createAdmin = async (req, res) => {
    try {
        const { password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

        const newAdmin = await admin.create({ ...req.body, password: hashedPassword });
        res.status(201).json(newAdmin);
    } catch (error) {
        res.status(400).json({ message: 'Error creating admin', error: error.message });
    }
};




const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const foundAdmin = await admin.findOne({ where: { email } });

        if (!foundAdmin) {
            res.status(404).json({ message: 'Admin not found' });
            return;
        }

        const passwordMatch = await bcrypt.compare(password, foundAdmin.password);
        if (!passwordMatch) {
            res.status(401).json({ message: 'Incorrect password' });
            return;
        }

        const token = jwt.sign({ compus: foundAdmin.compus , name : foundAdmin.firstName + " " + foundAdmin.lastName  , image :foundAdmin.image},
         'admin', { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Error during login', error: error.message });
    }
};


module.exports = {
    createAdmin,
    login
};

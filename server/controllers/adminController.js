const admin = require("../database/models/adminModel.js");

const createAdmin = async (req, res) => {
    try {
        const newAdmin = await admin.create(req.body);
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

        if (foundAdmin.password !== password) {
            res.status(401).json({ message: 'Incorrect password' });
            return;
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Error during login', error: error.message });
    }
};

module.exports = {
    createAdmin,
    login
};
